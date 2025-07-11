function mostrarnumero() {
  debugger
  let num= parseInt(document.getElementById("num").value);
  let suma= 0;
  let resultado= "";
  let esperfecto= "";
  let i = 1;
  while (i < num) {
    if (num % i === 0){
      suma += i;
      resultado += i + "<br>";
    }
    i++;
    if (suma === num && num > 0) {
      esperfecto = "<br><strong> " + num + " Es un numero perfecto</strong>"; 
    } else {
      esperfecto = "<br><strong> " + num + " No es un numero perfecto</strong>";
    }
  }
  resultado += "<strong>suma total: " + suma + "</strong>" + esperfecto;
  document.getElementById("resultado").innerHTML = "<strong>Divisores propios:</strong><br>" + resultado;
}
function limpiarTodo() {
  document.getElementById("resultado").innerHTML = "<strong>Resultado:</strong> Complete el formulario";
}