function mostrarnumero() {
  debugger
  let num= parseInt(document.getElementById("num").value);
  let resultado= "";
  let i = 1;
  while (i <= num) {
    if (num % i === 0){
      resultado += i + "<br>"
    }
    i++;
  }
  document.getElementById("resultado").innerHTML = "<strong>Divisores:</strong><br>" + resultado;
}
function limpiarTodo() {
  document.getElementById("resultado").innerHTML = "<strong>Resultado:</strong> Complete el formulario";
}