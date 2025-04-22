// js/sellos.js

function descargarSellos() {
    const zip = new JSZip();
    const carpeta = zip.folder("sellos");
  
    const sellos = document.querySelectorAll('input[name="sello"]:checked');
  
    const promesas = [];
  
    sellos.forEach(sello => {
      const id = sello.value;
      const img = document.querySelector(`#${id}`).closest('.d-flex').querySelector('img');
      const nombreArchivo = img.alt.replace(/\s+/g, '_') + '.png';
  
      // Cargar la imagen como blob
      const promesa = fetch(img.src)
        .then(res => res.blob())
        .then(blob => {
          carpeta.file(nombreArchivo, blob);
        });
  
      promesas.push(promesa);
    });
  
    Promise.all(promesas).then(() => {
      zip.generateAsync({ type: "blob" }).then(function (contenido) {
        saveAs(contenido, "sellos_seleccionados.zip");
      });
    });
  }
  