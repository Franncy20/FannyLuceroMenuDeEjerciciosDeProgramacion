function mostrar(){
    debugger
    let nombre = document.getElementById("letra").value;
    let resultado = document.getElementById("resultado");
    let letra = nombre.split("")
    resultado.innerHTML = `<strong>Palabra:</strong> ${nombre}<br>
                           <strong>Letras:</strong><br>
                           ${letra.join("<br>")}`;
}
function limpiarTodo() {
  document.getElementById("resultado").innerHTML = "<strong>Mostrar:</strong> Aqui se muestra el resultado...";
} 