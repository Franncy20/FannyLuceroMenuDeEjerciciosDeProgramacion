function mostrarnumero() {
  debugger
  let numtabla= parseInt(document.getElementById("numtabla").value);
  let resultado= "";
  let c = 1;
  while (c <= 12) {
    resultado += c + " + " + numtabla + " = " + (c + numtabla) + "<br>";
    c++;
  }
  document.getElementById("resultado").innerHTML = "<strong>resultado:</strong><br>" + resultado;
}
function limpiarTodo() {
  document.getElementById("resultado").innerHTML = "<strong>Resultado:</strong> Complete el formulario";
}