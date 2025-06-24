function RepetirNombre() {
  debugger
  let nombre= document.getElementById("nombre").value;
  let resultado= "";
  let n = parseInt(document.getElementById("n").value);
  let c = 1;
  while (c <= n) {
    resultado += nombre + "<br>";
    c++;
  }
  document.getElementById("resultado").innerHTML = "<strong>Resultado:</strong><br>" + resultado;
}
function limpiarTodo() {
  document.getElementById("resultado").innerHTML = "<strong>Resultado:</strong> Complete el formulario";
}