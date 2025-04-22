function exportarExcel() {
  const nombre = document.getElementById("nombre").value;
  const correo = document.getElementById("correo").value;
  const mensaje = document.getElementById("mensaje").value;

  const datos = [
    ["Nombre", "Correo", "Mensaje"],
    [nombre, correo, mensaje]
  ];

  const wb = XLSX.utils.book_new();
  const ws = XLSX.utils.aoa_to_sheet(datos);
  XLSX.utils.book_append_sheet(wb, ws, "Formulario");

  XLSX.writeFile(wb, "formulario.xlsx");
}
