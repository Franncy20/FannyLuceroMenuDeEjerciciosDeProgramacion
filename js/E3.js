function mostrarnumero() {
  debugger
  let num= parseInt(document.getElementById("numero").value);
  let resultado = document.getElementById("resultado");
  let Mostrar= "";
  let c = 1;
  while (c <= num) {
    if (c % 2 === 0) {
      Mostrar += c + "<br>";
    }
    c++;
  }
  resultado.innerHTML = `<strong>Mostrar:</strong><br> ${Mostrar}`;
}
function limpiarTodo() {
  document.getElementById("resultado").innerHTML = "<strong>Mostrar:</strong> Complete el formulario";
}