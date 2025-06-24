function mostrarnumero() {
  debugger
  let num= parseInt(document.getElementById("numero").value);
  let Mostrar= "";
  let c = 1;
  while (c <= num) {
    if (c % 2 === 0){Mostrar += c + "<br>";}
    c++;
  }
  document.getElementById("Mostrar").innerHTML = "<strong>Mostrar:</strong><br>" + Mostrar;
}
function limpiarTodo() {
  document.getElementById("Mostrar").innerHTML = "<strong>Mostrar:</strong> Complete el formulario";
}