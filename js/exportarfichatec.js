const campos = [ 
  { nombre: "Descripción General", celdaEtiqueta: "A1:G1", rangoValor: "B1:H1" },
  { nombre: "Nombre del producto", celdaEtiqueta: "A2", rangoValor: "B2:H2" },
  { nombre: "Nombre Comercial", celdaEtiqueta: "A3", rangoValor: "B3:H3" },
  { nombre: "EAN", celdaEtiqueta: "C4", rangoValor: "D4:H4" },
  { nombre: "Registro Sanitario", celdaEtiqueta: "C5", rangoValor: "D5:H5" }
];

const container = document.getElementById('campos-container');

// Generar campos del formulario con Bootstrap
campos.forEach(campo => {
  const id = campo.nombre.replace(/\s+/g, "_");
  const div = document.createElement('div');
  div.className = "col-md-6 mb-3";
  div.innerHTML = `
    <label for="${id}" class="form-label">${campo.nombre}</label>
    <input type="text" class="form-control" name="${campo.nombre}" id="${id}">
  `;
  container.appendChild(div);
});

document.getElementById('fichaForm').addEventListener('submit', async function (e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  const valores = Object.fromEntries(formData.entries());

  try {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Ficha Técnica');

    campos.forEach(campo => {
      worksheet.getCell(campo.celdaEtiqueta).value = campo.nombre;

      const valor = valores[campo.nombre] || '';
      const [inicio, fin] = campo.rangoValor.split(":");

      if (fin && inicio !== fin) {
        worksheet.mergeCells(`${inicio}:${fin}`);
      }

      worksheet.getCell(inicio).value = valor;
      worksheet.getCell(inicio).alignment = { vertical: 'middle', horizontal: 'left' };
    });

    const buffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    });
    saveAs(blob, "Ficha_Tecnica.xlsx");

  } catch (error) {
    console.error("Error al generar el Excel:", error);
    alert("Ocurrió un error al generar la ficha técnica.");
  }
});
