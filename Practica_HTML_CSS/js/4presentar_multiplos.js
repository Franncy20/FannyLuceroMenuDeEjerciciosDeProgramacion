function mostrarnumero() {
  debugger
  let num= parseInt(document.getElementById("numero").value);
  let multiplo= parseInt(document.getElementById("multiplo").value);
  let Mostrar= "";
  let c = 1;
  while (c <= num) {
    if (c % multiplo === 0){Mostrar += c + "<br>";}
    c++;
  }
  document.getElementById("Mostrar").innerHTML = "<strong>Mostrar:</strong><br>" + Mostrar;
}
function limpiarTodo() {
  document.getElementById("Mostrar").innerHTML = "<strong>Mostrar:</strong> Complete el formulario";
}