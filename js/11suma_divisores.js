function mostrarnumero() {
  debugger
  let num= parseInt(document.getElementById("num").value);
  let suma= 0;
  let resultado= "";
  let i = 1;
  while (i <= num) {
    if (num % i === 0){
      suma += i;
      resultado += i + "<br>";
    }
    i++;
  }
  resultado += "<strong>suma total: " + suma + "</strong>";
  document.getElementById("resultado").innerHTML = "<strong>Divisores del numero ingresado:</strong><br>" + resultado;
}
function limpiarTodo() {
  document.getElementById("resultado").innerHTML = "<strong>Resultado:</strong> Complete el formulario";
}