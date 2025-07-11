function mostrar(){
    debugger
    let caracter = document.getElementById("caracter").value;
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<strong>Palabra:</strong> ${caracter}<br>
                          <strong>Cantidad de caracteres:</strong> ${caracter.length}`;
}
function limpiarTodo() {
  document.getElementById("resultado").innerHTML = "<strong>Mostrar:</strong> Aqui se muestra la cantidad...";
} 