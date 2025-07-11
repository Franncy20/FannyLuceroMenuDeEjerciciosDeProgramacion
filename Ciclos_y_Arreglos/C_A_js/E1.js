function mostrarfrutas(){
    debugger
    let lista = document.getElementById("lista").value;
    let resultado = document.getElementById("resultado");
    let frutas = lista.split(";");
    resultado.innerHTML = `<strong>Arreglo creado:</strong><br>
        ${frutas}`;
}
function limpiarTodo() {
  document.getElementById("resultado").innerHTML = "<strong>Lista:</strong> Aqui se muestra la lista de frutas...";
}