async function exportarExcel() {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet('Trazabilidad');

  // Definir los encabezados
  const headers = ['Antes del proceso', 'Durante el proceso', 'Después del proceso'];
  const headerRow = worksheet.addRow(headers);

  // Aplicar negrita a los encabezados
  headerRow.eachCell((cell) => {
    cell.font = { bold: true };
  });

  // Obtener los valores de los campos de texto
  const antes = document.getElementById('antes').value;
  const durante = document.getElementById('durante').value;
  const despues = document.getElementById('despues').value;

  // Agregar los datos ingresados por el usuario
  const dataRow = worksheet.addRow([antes, durante, despues]);

  // Definir el estilo de borde
  const borderStyles = {
    top: { style: 'thin' },
    left: { style: 'thin' },
    bottom: { style: 'thin' },
    right: { style: 'thin' }
  };

  // Aplicar bordes a cada celda de la fila de encabezado
  headerRow.eachCell((cell) => {
    cell.border = borderStyles;
  });

  // Aplicar bordes a cada celda de la fila de datos
  dataRow.eachCell((cell) => {
    cell.border = borderStyles;
  });

  // Generar el archivo Excel y desencadenar la descarga
  const buffer = await workbook.xlsx.writeBuffer();
  const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
  const url = URL.createObjectURL(blob);

  // Crear un enlace temporal para la descarga
  const link = document.createElement('a');
  link.href = url;
  link.download = 'cuadro_trazabilidad.xlsx';
  document.body.appendChild(link);
  link.click();

  // Limpiar
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
