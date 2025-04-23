// Lista de campos con sus respectivas celdas en Excel
const campos = [
  { nombre: "Descripción General", celda: "A56" },
  { nombre: "Nombre del producto", celda: "A1" },
  { nombre: "Nombre Comercial", celda: "A2" },
  { nombre: "EAN", celda: "A3" },
  { nombre: "Registro Sanitario", celda: "A4" },
  { nombre: "Descripción", celda: "B5" },
  { nombre: "Ingredientes", celda: "A6" },
  { nombre: "Tipo de empaque", celda: "A7" },
  { nombre: "Temperatura de conservación", celda: "A8" },
  { nombre: "Peso", celda: "C9" },
  { nombre: "Marca", celda: "C10" },
  { nombre: "Vida Útil", celda: "A11" },
  { nombre: "Normatividad", celda: "D12" },
  { nombre: "Presentación", celda: "D13" },

  { nombre: "Ingrediente 1", celda: "D13" },
  { nombre: "EAN del ingrediente 1", celda: "D14" },
  { nombre: "Marca o proveedor del ingrediente 1", celda: "D15" },
  { nombre: "Cantidad del ingrediente 1", celda: "D16" },
  { nombre: "Unidad del ingrediente 1", celda: "D17" },
  { nombre: "Composición del ingrediente 1", celda: "D18" },

  { nombre: "Ingrediente 2", celda: "D19" },
  { nombre: "EAN del ingrediente 2", celda: "D20" },
  { nombre: "Marca o proveedor del ingrediente 2", celda: "D21" },
  { nombre: "Cantidad del ingrediente 2", celda: "D22" },
  { nombre: "Unidad del ingrediente 2", celda: "D23" },
  { nombre: "Composición del ingrediente 2", celda: "D24" },

  { nombre: "Ingrediente 3", celda: "D19" },
  { nombre: "EAN del ingrediente 3", celda: "D20" },
  { nombre: "Marca o proveedor del ingrediente 3", celda: "D21" },
  { nombre: "Cantidad del ingrediente 3", celda: "D22" },
  { nombre: "Unidad del ingrediente 3", celda: "D23" },
  { nombre: "Composición del ingrediente 3", celda: "D24" },

  { nombre: "Ingrediente 4", celda: "D19" },
  { nombre: "EAN del ingrediente 4", celda: "D20" },
  { nombre: "Marca o proveedor del ingrediente 4", celda: "D21" },
  { nombre: "Cantidad del ingrediente 4", celda: "D22" },
  { nombre: "Unidad del ingrediente 4", celda: "D23" },
  { nombre: "Composición del ingrediente 4", celda: "D24" },

  { nombre: "Ingrediente 5", celda: "D19" },
  { nombre: "EAN del ingrediente 5", celda: "D20" },
  { nombre: "Marca o proveedor del ingrediente 5", celda: "D21" },
  { nombre: "Cantidad del ingrediente 5", celda: "D22" },
  { nombre: "Unidad del ingrediente 5", celda: "D23" },
  { nombre: "Composición del ingrediente 5", celda: "D24" },
];

const container = document.getElementById('campos-container');

// Generar dinámicamente los campos del formulario
campos.forEach(campo => {
  const id = campo.nombre.replace(/\s+/g, "_");
  const div = document.createElement('div');
  div.className = "col-md-6";
  div.innerHTML = `
    <label class="form-label">${campo.nombre}</label>
    <input type="text" class="form-control" name="${campo.nombre}" id="${id}">
  `;
  container.appendChild(div);
});

document.getElementById('fichaForm').addEventListener('submit', async function (e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  const valores = Object.fromEntries(formData.entries());

  try {
    // Crear un nuevo libro de Excel
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Ficha Técnica');

    // Asignar los valores a las celdas especificadas
    campos.forEach(campo => {
      worksheet.getCell(campo.celda).value = valores[campo.nombre] || '';
    });

    // Generar el archivo Excel y descargarlo
    const buffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    });
    saveAs(blob, "Ficha_Tecnica.xlsx");
  } catch (error) {
    console.error("Error al generar el archivo Excel:", error);
    alert("Ocurrió un error al generar la ficha técnica. Por favor, intenta nuevamente.");
  }
});
