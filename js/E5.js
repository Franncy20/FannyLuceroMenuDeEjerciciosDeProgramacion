function mostrarnumero() {
  debugger
  let numtabla= parseInt(document.getElementById("numtabla").value);
  let resultado= document.getElementById("resultado");
  let res= "";
  let c = 1;
  while (c <= 12) {
    res += c + " + " + numtabla + " = " + (c + numtabla) + "<br>";
    c++;
  }
  resultado.innerHTML = `<strong>resultado:</strong><br> ${res}`;
}
function limpiarTodo() {
  document.getElementById("resultado").innerHTML = "<strong>Resultado:</strong> Complete el formulario";
}