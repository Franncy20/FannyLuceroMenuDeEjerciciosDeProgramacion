function mostrarnumero() {
  debugger
  let num1= parseInt(document.getElementById("num1").value);
  let num2= parseInt(document.getElementById("num2").value);
  let resultado= "";
  let suma= 0;
  let i = 1;
  while (i <= num2) {
    resultado += `${suma} + ${num1} = ${suma + num1}<br>`;
    suma += num1;
    i++
    }
  resultado += `<strong>Resultado final: ${num1} × ${num2} = ${suma}</strong>`;
  document.getElementById("resultado").innerHTML = "<strong>Multiplicacion por sumas sucesivas:</strong><br>" + resultado;
}
function limpiarTodo() {
  document.getElementById("resultado").innerHTML = "<strong>Resultado:</strong> Complete el formulario";
}