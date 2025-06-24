function mostrar(){
    debugger
    let resultado = document.getElementById("resultado");
    const numeros = [1, 2];
    numeros.push(3);
    console.log(numeros); 
    resultado.innerHTML = `<strong>Resultado:</strong><br>${numeros.join("<br>")}`;
}
function limpiarTodo() {
  document.getElementById("resultado").innerHTML = "<strong>Resultado:</strong> Aqui se muestra el resultado...";
}