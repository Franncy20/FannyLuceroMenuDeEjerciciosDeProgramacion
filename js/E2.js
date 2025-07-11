function mostrarnumero() {
  debugger
  let num= parseInt(document.getElementById("numero").value);
  let resultado = document.getElementById("resultado");
  let Mostrar= "";
  let c = 1;
  while (c <= num) {
    Mostrar += c + "<br>";
    c++;
  }
  resultado.innerHTML = `<strong>Mostrar:</strong><br> ${Mostrar}`;
}
function limpiarTodo() {
  document.getElementById("Resultado").innerHTML = "<strong>Mostrar:</strong> Complete el formulario";
}