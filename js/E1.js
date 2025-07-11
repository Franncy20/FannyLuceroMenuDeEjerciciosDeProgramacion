function RepetirNombre() {
  debugger
  let nombre= document.getElementById("nombre").value;
  let n = parseInt(document.getElementById("n").value);
  let resultado= document.getElementById("resultado");
  let res = "";
  let c = 1;
  while (c <= n) {
    res += nombre + "<br>";
    c++;
  }
  resultado.innerHTML = `<strong>Resultado:</strong><br>
                        ${res}`;
}
function limpiarTodo() {
  document.getElementById("resultado").innerHTML = "<strong>Resultado:</strong> Complete el formulario";
}