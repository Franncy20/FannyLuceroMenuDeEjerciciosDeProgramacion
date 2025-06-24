function mostrar(){
    debugger
    let resultado = document.getElementById("resultado");
    const palabra = "Programación";
    console.log (palabra.length);
    resultado.innerHTML = `<strong>Palabra:</strong> ${palabra}<br>
                          <strong>Cantidad de caracteres:</strong> ${palabra.length}`;
}
function limpiarTodo() {
  document.getElementById("resultado").innerHTML = "<strong>Mostrar:</strong> Aqui se muestra la cantidad...";
} 