function mostrarfrutas(){
    debugger
    let resultado = document.getElementById("resultado");
    const frutas = ["manzana", "banana", "uva"];
    console.log(frutas[0]);
    console.log(frutas[1]);
    console.log(frutas[2]);
    resultado.innerHTML = `<strong>Resultado:</strong><br>${frutas.join("<br>")}`;
}
function limpiarTodo() {
  document.getElementById("resultado").innerHTML = "<strong>Lista:</strong> Aqui se muestra la lista de frutas...";
}