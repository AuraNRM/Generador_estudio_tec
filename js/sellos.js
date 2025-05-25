async function descargarSellos() {
  const seleccionados = document.querySelectorAll('#sellos-form input[type="checkbox"]:checked');

  if (seleccionados.length === 0) {
    alert("Por favor selecciona al menos un sello para descargar.");
    return;
  }

  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet("Sellos");

  let row = 1;

  for (const checkbox of seleccionados) {
    const valor = checkbox.value;
    let ruta = '';
    let titulo = '';

    switch (valor) {
      case 'azucares':
        ruta = 'images/azucares.png';
        titulo = 'Alto en Azúcares';
        break;
      case 'sodio':
        ruta = 'images/sodio.png';
        titulo = 'Alto en Sodio';
        break;
      case 'grasas':
        if (checkbox.id === 'grasas') {
          ruta = 'images/grasas_sat.png';
          titulo = 'Alto en Grasas Saturadas';
        }
        break;
      case 'edulcorantes':
        ruta = 'images/edulco.png';
        titulo = 'Contiene Edulcorantes';
        break;
    }

    if (ruta) {
      const response = await fetch(ruta);
      const blob = await response.blob();
      const arrayBuffer = await blob.arrayBuffer();

      const imageId = workbook.addImage({
        buffer: arrayBuffer,
        extension: 'png',
      });

      worksheet.addRow([titulo]);
      worksheet.mergeCells(`A${row}:C${row}`);
      worksheet.getRow(row).font = { bold: true };
      row++;

      worksheet.addImage(imageId, {
        tl: { col: 0, row: row },
        ext: { width: 150, height: 150 },
      });

      row += 8; // Espaciado entre imágenes
    }
  }

  const buffer = await workbook.xlsx.writeBuffer();
  saveAs(new Blob([buffer]), 'sellos.xlsx');
}
