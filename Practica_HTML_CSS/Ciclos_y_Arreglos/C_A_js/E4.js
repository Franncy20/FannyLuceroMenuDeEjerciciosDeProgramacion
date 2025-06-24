function mostrar(){
    debugger
    let resultado = document.getElementById("resultado");
    const saludo = "Hola clase";
    console.log (saludo);
    resultado.innerHTML = `<strong>Resultado:</strong><br>${saludo}`;
}
function limpiarTodo() {
  document.getElementById("resultado").innerHTML = "<strong>Mostrar:</strong> Aqui se muestra el saludo...";
} 