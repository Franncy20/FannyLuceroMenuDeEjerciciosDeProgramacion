function mostrarnumero() {
  debugger
  let num= parseInt(document.getElementById("num").value);
  let cont= 0;
  let resultado= "";
  let esprimo= "";
  let i = 1;
  if (num <= 1) {
    resultado= "los numeros menores o iguales a 1 no son primos";
    document.getElementById("resultado").innerHTML = "<strong>Resultado:</strong><br>" + resultado;
    return;    
  }
  while (i <= num) {
    if (num % i === 0){
      cont++;
      resultado += i + "<br>";
    }
    i++;
  }
  if (cont === 2) {
      esprimo = "<br><strong> " + num + " Es un numero primo</strong>"; 
  } else {
      esprimo = "<br><strong> " + num + " No es un numero primo</strong>";
  }
  resultado += "<strong>Total divisores: " + cont + "</strong>" + esprimo;
  document.getElementById("resultado").innerHTML = "<strong>Divisores:</strong><br>" + resultado;
}
function limpiarTodo() {
  document.getElementById("resultado").innerHTML = "<strong>Resultado:</strong> Complete el formulario";
}