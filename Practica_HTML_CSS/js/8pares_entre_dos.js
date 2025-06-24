function mostrarnumero() {
  debugger
  let num1= parseInt(document.getElementById("num1").value);
  let num2= parseInt(document.getElementById("num2").value);
  let resultado= "";
  let fin= Math.max(num1,num2);
  let c = Math.min(num1,num2);
  while (c <= fin) {
    if (c % 2 === 0){resultado += c + "<br>"};
    c++;
  }
  document.getElementById("resultado").innerHTML = "<strong>resultado:</strong><br>" + resultado;
}
function limpiarTodo() {
  document.getElementById("resultado").innerHTML = "<strong>Resultado:</strong> Complete el formulario";
}