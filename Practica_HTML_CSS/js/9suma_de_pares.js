function mostrarnumero() {
  debugger
  let num1= parseInt(document.getElementById("num1").value);
  let num2= parseInt(document.getElementById("num2").value);
  let resultado= "";
  let suma=0;
  let fin= Math.max(num1,num2);
  let c = Math.min(num1,num2);
  while (c <= fin) {
    if (c % 2 === 0){
      suma += c;
      resultado += c + "<br>"
    }
    c++;
  }
  resultado += "<strong>suma total: " + suma + "</strong>";
  document.getElementById("resultado").innerHTML = "<strong>Numeros pares:</strong><br>" + resultado;
}
function limpiarTodo() {
  document.getElementById("resultado").innerHTML = "<strong>Resultado:</strong> Complete el formulario";
}