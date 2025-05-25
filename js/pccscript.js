/**document.addEventListener('DOMContentLoaded', () => {
      const container = document.getElementById('etapasContainer');
      const template = document.getElementById('templateEtapa');
      const btnAdd = document.getElementById('btnAddEtapa');
      let count = 0;

      // Agregar primera etapa al cargar
      addEtapa();

      btnAdd.addEventListener('click', () => addEtapa());

      function addEtapa() {
        const clone = template.content.cloneNode(true);
        const card = clone.querySelector('.etapa-card');
        card.dataset.index = count;

        // Ajustar nombres para agrupar por etapa
        card.querySelectorAll('[name]').forEach(el => {
          const field = el.getAttribute('name');
          el.setAttribute('name', `etapas[${count}][${field}]`);
        });

        // Agregar funcionalidad al botón de eliminar
        const btnRemove = clone.querySelector('.btnRemoveEtapa');
        btnRemove.addEventListener('click', () => {
          card.remove();
        });

        container.appendChild(clone);
        count++;
      }

      // Ejemplo de cómo extraer datos
      window.getFormData = () => {
        const data = [];
        container.querySelectorAll('.etapa-card').forEach(card => {
          const idx = card.dataset.index;
          const inputs = card.querySelectorAll('input, textarea');
          const etapaObj = {};
          inputs.forEach(inp => {
            const name = inp.getAttribute('name').match(/\[([^\]]+)\]$/)[1];
            etapaObj[name] = inp.value.trim();
          });
          data.push(etapaObj);
        });
        return data;
      };
    });

    
    document.addEventListener('DOMContentLoaded', () => {
      const container = document.getElementById('etapasContainer');
      const template = document.getElementById('templateEtapa');
      const btnAdd = document.getElementById('btnAddEtapa');
      const btnExportar = document.getElementById('btnExportarExcel');
      let count = 0;

      addEtapa();
      btnAdd.addEventListener('click', () => addEtapa());
      btnExportar.addEventListener('click', exportarExcel);

      function addEtapa() {
        const clone = template.content.cloneNode(true);
        const card = clone.querySelector('.etapa-card');
        card.dataset.index = count;

        card.querySelectorAll('[name]').forEach(el => {
          const field = el.getAttribute('name');
          el.setAttribute('name', `etapas[${count}][${field}]`);
        });

        const btnRemove = clone.querySelector('.btnRemoveEtapa');
        btnRemove.addEventListener('click', () => {
          card.remove();
        });

        container.appendChild(clone);
        count++;
      }

      function getFormData() {
        const data = [];
        container.querySelectorAll('.etapa-card').forEach(card => {
          const inputs = card.querySelectorAll('input, textarea');
          const etapaObj = {};
          inputs.forEach(inp => {
            const name = inp.getAttribute('name').match(/\[([^\]]+)\]$/)[1];
            etapaObj[name] = inp.value.trim();
          });
          data.push(etapaObj);
        });
        return data;
      }

      async function exportarExcel() {
        const data = getFormData();

        const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet('Etapas');

        worksheet.columns = [
          { header: 'Etapa', key: 'etapa', width: 20 },
          { header: 'Descripción', key: 'descripcion', width: 30 },
          { header: 'Físicos', key: 'fisicos', width: 20 },
          { header: 'Químicos', key: 'quimicos', width: 20 },
          { header: 'Biológicos', key: 'biologicos', width: 20 },
          { header: 'Prevención', key: 'prevencion', width: 30 },
        ];

        data.forEach(row => {
          worksheet.addRow(row);
        });

        const buffer = await workbook.xlsx.writeBuffer();
        saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'etapas.xlsx');
      }
    });
*/

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('etapasContainer');
  const template = document.getElementById('templateEtapa');
  const btnAdd = document.getElementById('btnAddEtapa');
  const btnExportar = document.getElementById('btnExportarExcel');
  let count = 0;

  addEtapa();

  btnAdd.addEventListener('click', () => addEtapa());
  btnExportar.addEventListener('click', exportarExcel);

  function addEtapa() {
    const clone = template.content.cloneNode(true);
    const card = clone.querySelector('.etapa-card');
    card.dataset.index = count;

    card.querySelectorAll('[name]').forEach(el => {
      const field = el.getAttribute('name');
      el.setAttribute('name', `etapas[${count}][${field}]`);
    });

    const btnRemove = clone.querySelector('.btnRemoveEtapa');
    btnRemove.addEventListener('click', () => {
      card.remove();
    });

    container.appendChild(clone);
    count++;
  }

  function getFormData() {
    const data = [];
    container.querySelectorAll('.etapa-card').forEach(card => {
      const inputs = card.querySelectorAll('input, textarea');
      const etapaObj = {
        etapa: '',
        descripcion: '',
        fisicos: '',
        quimicos: '',
        biologicos: '',
        prevencion: ''
      };
      inputs.forEach(inp => {
        const nameMatch = inp.getAttribute('name').match(/\[([^\]]+)\]$/);
        if (nameMatch) {
          const name = nameMatch[1];
          etapaObj[name] = inp.value.trim();
        }
      });
      data.push(etapaObj);
    });
    return data;
  }

async function exportarExcel() {
  const data = getFormData();

  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet('Etapas');

  worksheet.columns = [
    { header: 'Etapa', key: 'etapa', width: 20 },
    { header: 'Descripción', key: 'descripcion', width: 30 },
    { header: 'Riesgos Físicos', key: 'fisicos', width: 20 },
    { header: 'Riesgos Químicos', key: 'quimicos', width: 20 },
    { header: 'Riesgos Biológicos', key: 'biologicos', width: 20 },
    { header: 'Prevención de Riesgos', key: 'prevencion', width: 30 },
  ];

  // Agregar encabezado con estilo
  worksheet.getRow(1).eachCell((cell) => {
    cell.font = { bold: true };
    cell.border = {
      top: { style: 'thin' },
      left: { style: 'thin' },
      bottom: { style: 'thin' },
      right: { style: 'thin' }
    };
    cell.alignment = { vertical: 'middle', horizontal: 'center' };
    cell.fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: 'FFEEEEEE' }
    };
  });

  // Agregar filas y aplicar bordes
  data.forEach((rowData, rowIndex) => {
    const row = worksheet.addRow(rowData);
    row.eachCell((cell) => {
      cell.border = {
        top: { style: 'thin' },
        left: { style: 'thin' },
        bottom: { style: 'thin' },
        right: { style: 'thin' }
      };
      cell.alignment = { vertical: 'middle', wrapText: true };
    });
  });

  const buffer = await workbook.xlsx.writeBuffer();
  saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'etapas.xlsx');
}

});
