const campos = [ 
  { nombre: "Descripción General", rangoEtiqueta: "A2:G2", rangoValor: "H2:Q2" },
  { nombre: "NOMBRE DEL PRODUCTO", rangoEtiqueta: "A3:G3", rangoValor: "H3:Q3" },
  { nombre: "NOMBRE COMERCIAL", rangoEtiqueta: "A4:G4", rangoValor: "H4:Q4" },
  { nombre: "EAN", rangoEtiqueta: "D5:G5", rangoValor: "H5:Q5" },
  { nombre: "REGISTRO SANITARIO", rangoEtiqueta: "D6:G6", rangoValor: "H6:Q6"},
  { nombre: "DESCRIPCIÓN", rangoEtiqueta: "D7:G7", rangoValor: "H7:Q7"},
  { nombre: "INGREDIENTES", rangoEtiqueta: "A8:G8", rangoValor: "H8:Q8"},
  { nombre: "TIPO DE EMPAQUE", rangoEtiqueta: "A9:G9", rangoValor: "H9:Q9"},
  { nombre: "TEMPERATURA DE CONSERVACIÓN", rangoEtiqueta: "A10:C10", rangoValor: "D10:G10"},
  { nombre: "PESO", rangoEtiqueta: "H10:L10", rangoValor: "M10:Q10"},
  { nombre: "MARCA", rangoEtiqueta: "A11:C11", rangoValor: "D11:G11"},
  { nombre: "VIDA ÚTIL", rangoEtiqueta: "H11:L11", rangoValor: "M11:Q11"},
  { nombre: "COMPROMISO DE CALIDAD/ NORMATIVIDAD", rangoEtiqueta: "A12:C12", rangoValor: "D12:Q12"},
  { nombre: "PRESENTACIÓN", rangoEtiqueta: "A13:C13", rangoValor: "D13:G13"},
  { nombre: "UBICACIÓN Y EXHIBICIÓN", rangoEtiqueta: "H13:L13", rangoValor: "M13:Q13"},
  /*Ingrediente 1 */
  { nombre: "INGREDIENTE 1", rangoEtiqueta: "A16:A16", rangoValor: "B16:B16"},
  { nombre: "EAN INGREDIENTE 1", rangoEtiqueta: "C16:C16", rangoValor: "D16:E16"},
  { nombre: "MARCA INGREDIENTE 1", rangoEtiqueta: "F16:F16", rangoValor: "G16:I16"},
  { nombre: "CANTIDAD INGREIDENTE 1", rangoEtiqueta: "J16:J16", rangoValor: "K16:L16"},
  { nombre: "UNIDAD INGREDIENTE 1", rangoEtiqueta: "M16:M16", rangoValor: "N16:O16"},
  { nombre: "COMPOSICIÓN % INGREDIENTE 1", rangoEtiqueta: "P16:P16", rangoValor: "Q16:Q16"},
  /*Ingrediente 2 */
  { nombre: "INGREDIENTE 2", rangoEtiqueta: "A17:A17", rangoValor: "B17:B17"},
  { nombre: "EAN INGREDIENTE 2", rangoEtiqueta: "C17:C17", rangoValor: "D17:E17"},
  { nombre: "MARCA INGREDIENTE 2", rangoEtiqueta: "F17:F17", rangoValor: "G17:I17"},
  { nombre: "CANTIDAD INGREIDENTE 2", rangoEtiqueta: "J17:J17", rangoValor: "K17:L17"},
  { nombre: "UNIDAD INGREDIENTE 2", rangoEtiqueta: "M17:M17", rangoValor: "N17:O17"},
  { nombre: "COMPOSICIÓN % INGREDIENTE 2", rangoEtiqueta: "P17:P17", rangoValor: "Q17:Q17"},
  /*Ingrediente 3 */
  { nombre: "INGREDIENTE 3", rangoEtiqueta: "A18:A18", rangoValor: "B18:B18"},
  { nombre: "EAN INGREDIENTE 3", rangoEtiqueta: "C18:C18", rangoValor: "D18:E18"},
  { nombre: "MARCA INGREDIENTE 3", rangoEtiqueta: "F18:F18", rangoValor: "G18:I18"},
  { nombre: "CANTIDAD INGREIDENTE 3", rangoEtiqueta: "J18:J18", rangoValor: "K18:L18"},
  { nombre: "UNIDAD INGREDIENTE 3", rangoEtiqueta: "M18:M18", rangoValor: "N18:O18"},
  { nombre: "COMPOSICIÓN % INGREDIENTE 3", rangoEtiqueta: "P18:P18", rangoValor: "Q18:Q18"},
    /*Ingrediente 4 */
  { nombre: "INGREDIENTE 4", rangoEtiqueta: "A19:A19", rangoValor: "B19:B19"},
  { nombre: "EAN INGREDIENTE 4", rangoEtiqueta: "C19:C19", rangoValor: "D19:E19"},
  { nombre: "MARCA INGREDIENTE 4", rangoEtiqueta: "F19:F19", rangoValor: "G19:I19"},
  { nombre: "CANTIDAD INGREIDENTE 4", rangoEtiqueta: "J19:J19", rangoValor: "K19:L19"},
  { nombre: "UNIDAD INGREDIENTE 4", rangoEtiqueta: "M19:M19", rangoValor: "N19:O19"},
  { nombre: "COMPOSICIÓN % INGREDIENTE 4", rangoEtiqueta: "P19:P19", rangoValor: "Q19:Q19"},
    /*Ingrediente 5 */
  { nombre: "INGREDIENTE 5", rangoEtiqueta: "A20:A20", rangoValor: "B20:B20"},
  { nombre: "EAN INGREDIENTE 5", rangoEtiqueta: "C20:C20", rangoValor: "D20:E20"},
  { nombre: "MARCA INGREDIENTE 5", rangoEtiqueta: "F20:F20", rangoValor: "G20:I20"},
  { nombre: "CANTIDAD INGREIDENTE 5", rangoEtiqueta: "J20:J20", rangoValor: "K20:L20"},
  { nombre: "UNIDAD INGREDIENTE 5", rangoEtiqueta: "M20:M20", rangoValor: "N20:O20"},
  { nombre: "COMPOSICIÓN % INGREDIENTE 5", rangoEtiqueta: "P20:P20", rangoValor: "Q20:Q20"},
    /*Ingrediente 6 */
  { nombre: "INGREDIENTE 6", rangoEtiqueta: "A21:A21", rangoValor: "B21:B21"},
  { nombre: "EAN INGREDIENTE 6", rangoEtiqueta: "C21:C21", rangoValor: "D21:E21"},
  { nombre: "MARCA INGREDIENTE 6", rangoEtiqueta: "F21:F21", rangoValor: "G21:I21"},
  { nombre: "CANTIDAD INGREIDENTE 6", rangoEtiqueta: "J21:J21", rangoValor: "K21:L21"},
  { nombre: "UNIDAD INGREDIENTE 6", rangoEtiqueta: "M21:M21", rangoValor: "N21:O21"},
  { nombre: "COMPOSICIÓN % INGREDIENTE 6", rangoEtiqueta: "P21:P21", rangoValor: "Q21:Q21"}
];

const etiquetasEstaticas = [
  { texto: "FICHA TÉCNICA", rango: "A1:Q1", estilo: { font: { bold: true, size: 14 }, alignment: { horizontal: "center", vertical: "middle" } } },
  { texto: "INGREDIENTES DEL PRODUCTO", rango: "A14:Q14", estilo: { font: { bold: true }, alignment: { horizontal: "center" } } },
  { texto: "INGREDIENTE", rango: "A15:B15", estilo: { font: { bold: true }, alignment: { horizontal: "center" } } },
  { texto: "EAN", rango: "C15:E15", estilo: { font: { bold: true }, alignment: { horizontal: "center" } } },
  { texto: "MARCA", rango: "F15:I15", estilo: { font: { bold: true }, alignment: { horizontal: "center" } } },
  { texto: "CANTIDADES", rango: "J15:L15", estilo: { font: { bold: true }, alignment: { horizontal: "center" } } },
  { texto: "UNIDADES", rango: "M15:O15", estilo: { font: { bold: true }, alignment: { horizontal: "center" } } },
  { texto: "COMPOSICIÓN %", rango: "P15:Q15", estilo: { font: { bold: true }, alignment: { horizontal: "center" } } },
  { texto: "Inserta aqui la foto de tu producto", rango: "A5:C7", estilo: { font: { bold: false }, alignment: { horizontal: "center" } } }
];

const container = document.getElementById('campos-container');

// Generar campos del formulario con Bootstrap
campos.forEach(campo => {
  const id = campo.nombre.replace(/\s+/g, "_");
  const div = document.createElement('div');
  div.className = "col-md-6 mb-3";
  div.innerHTML = `
    <label for="${id}" class="form-label">${campo.nombre}</label>
    <textarea class="form-control" name="${campo.nombre}" id="${id}">
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

    // Procesar etiquetas estáticas decorativas
    etiquetasEstaticas.forEach(etiqueta => {
      const [inicio, fin] = etiqueta.rango.split(":");
      if (fin && inicio !== fin) {
        worksheet.mergeCells(`${inicio}:${fin}`);
      }

      const celda = worksheet.getCell(inicio);
      celda.value = etiqueta.texto;

      if (etiqueta.estilo) {
        if (etiqueta.estilo.font) celda.font = etiqueta.estilo.font;
        if (etiqueta.estilo.alignment) celda.alignment = etiqueta.estilo.alignment;
      }

      // Aplicar bordes si deseas, opcional:
      aplicarBordes(worksheet, inicio, fin);
    });

    campos.forEach(campo => {
      // Fusionar celdas para la etiqueta
      const [etiqInicio, etiqFin] = campo.rangoEtiqueta.split(":");
      if (etiqFin && etiqInicio !== etiqFin) {
        worksheet.mergeCells(`${etiqInicio}:${etiqFin}`);
      }

      const etiqCell = worksheet.getCell(etiqInicio);
      etiqCell.value = campo.nombre;
      etiqCell.alignment = { vertical: 'middle', horizontal: 'left' };
      etiqCell.font = { bold: true };

      // Aplicar bordes a todas las celdas del rangoEtiqueta
      aplicarBordes(worksheet, etiqInicio, etiqFin);

      // Fusionar celdas para el valor
      const [valInicio, valFin] = campo.rangoValor.split(":");
      if (valFin && valInicio !== valFin) {
        worksheet.mergeCells(`${valInicio}:${valFin}`);
      }

      const valor = valores[campo.nombre] || '';
      const valCell = worksheet.getCell(valInicio);
      valCell.value = valor;
      valCell.alignment = { vertical: 'middle', horizontal: 'left' };

      // Aplicar bordes a todas las celdas del rangoValor
      aplicarBordes(worksheet, valInicio, valFin);
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

// Función para aplicar bordes a un rango
function aplicarBordes(worksheet, inicio, fin) {
  const startCell = worksheet.getCell(inicio);
  const endCell = worksheet.getCell(fin);

  const startCol = ExcelJS.utils.colToInt(inicio.match(/[A-Z]+/)[0]);
  const startRow = parseInt(inicio.match(/\d+/)[0]);
  const endCol = ExcelJS.utils.colToInt(fin.match(/[A-Z]+/)[0]);
  const endRow = parseInt(fin.match(/\d+/)[0]);

  for (let row = startRow; row <= endRow; row++) {
    for (let col = startCol; col <= endCol; col++) {
      const cell = worksheet.getCell(row, col);
      cell.border = {
        top:    { style: 'thin' },
        left:   { style: 'thin' },
        bottom: { style: 'thin' },
        right:  { style: 'thin' }
      };
    }
  }
}

// Convertir letras de columna a número (e.g., A -> 1, B -> 2, AA -> 27)
ExcelJS.utils = {
  colToInt: (letters) => {
    return letters.split('').reduce((prev, curr) => prev * 26 + curr.charCodeAt(0) - 64, 0);
  }
};
