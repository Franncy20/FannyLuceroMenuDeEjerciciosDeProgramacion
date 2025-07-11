function mostrar(){
    debugger
    let palabra = document.getElementById("vocal").value;
    let resultado = document.getElementById("resultado");
    let vocales = 0;
    let letra = "";

    for (let i = 0; i < palabra.length; i++) {
     letra = palabra[i];
    if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
      vocales++;
      }
    }
    
    resultado.innerHTML = `<strong>Palabra:</strong> ${palabra}<br>
                           <strong>Numero total de vocales:</strong> ${vocales}`;
}
function limpiarTodo() {
  document.getElementById("resultado").innerHTML = "<strong>Mostrar:</strong> Aqui se muestra el resultado...";
} 