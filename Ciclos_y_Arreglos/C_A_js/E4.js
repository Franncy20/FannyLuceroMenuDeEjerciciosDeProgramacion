function mostrar(){
    debugger
    let saludo= document.getElementById("saludo").value;
    let resultado = document.getElementById("resultado");
    
    resultado.innerHTML = `<strong>Resultado:</strong><br>${saludo}`;
}
function limpiarTodo() {
  document.getElementById("resultado").innerHTML = "<strong>Mostrar:</strong> Aqui se muestra el saludo...";
} 