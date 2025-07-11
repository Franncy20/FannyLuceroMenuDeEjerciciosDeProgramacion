function mostrarnumero() {
  debugger
  let num= parseInt(document.getElementById("num").value);
  let inicio= parseInt(document.getElementById("in").value);
  let fin= parseInt(document.getElementById("fin").value);
  let resultado= "";
  let c = inicio;
  while (c <= fin) {
    resultado += c + " * " + num + " = " + (c * num) + "<br>";
    c++;
  }
  document.getElementById("resultado").innerHTML = "<strong>resultado:</strong><br>" + resultado;
}
function limpiarTodo() {
  document.getElementById("resultado").innerHTML = "<strong>Resultado:</strong> Complete el formulario";
}