function mostrar(){
    debugger
    let resultado = document.getElementById("resultado");
    const palabra = "sol";
    let vocales = 0;
    for (let i = 0; i < palabra.length; i++) {
    let letra = palabra[i];
    if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
      vocales++;
      }
    }
    console.log("Vocales:", vocales);
    
    resultado.innerHTML = `<strong>Palabra:</strong> ${palabra}<br>
                           <strong>Numero total de vocales:</strong> ${vocales}`;
}
function limpiarTodo() {
  document.getElementById("resultado").innerHTML = "<strong>Mostrar:</strong> Aqui se muestra el resultado...";
} 