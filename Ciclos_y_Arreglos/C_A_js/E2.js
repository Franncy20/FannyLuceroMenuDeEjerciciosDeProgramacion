function mostrar(){
    debugger
    let num = document.getElementById("lista").value;
    let resultado = document.getElementById("resultado");
    let numeros = num.split(";").map(Number);
    numeros.push(4); 
    resultado.innerHTML = `<strong>Resultado:</strong><br>${numeros}`;
}
function limpiarTodo() {
  document.getElementById("resultado").innerHTML = "<strong>Resultado:</strong> Aqui se muestra el resultado...";
}