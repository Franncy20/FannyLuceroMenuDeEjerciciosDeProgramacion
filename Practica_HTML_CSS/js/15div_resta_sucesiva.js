function mostrarnumero() {
  debugger
  let num1= parseInt(document.getElementById("num1").value);
  let num2= parseInt(document.getElementById("num2").value);
  let resultado= "";
  let residuo= num1;
  let c = 0;
  
  if (num2 === 0) {
    resultado= "No se puee dividir por cero";
    document.getElementById("resultado").innerHTML = resultado;
    return;
  }

  resultado += `Dividendo inicial: ${residuo}<br>`;
  
  while (residuo >= num2) {
    c++;
    resultado += `resta ${c}: ${residuo} - ${num2} = ${residuo - num2}<br>`;
    residuo -= num2;
  }
  resultado += `<strong>Resultado: ${num1} ÷ ${num2} = ${c} (Residuo: ${residuo})</strong>`;
  document.getElementById("resultado").innerHTML = "<strong>División por restas sucesivas:</strong><br>" + resultado;
}
function limpiarTodo() {
  document.getElementById("resultado").innerHTML = "<strong>Resultado:</strong> Complete el formulario";
}