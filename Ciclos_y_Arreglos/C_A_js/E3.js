function mostrar(){
    debugger
    let num = document.getElementById("lista").value;
    let resultado = document.getElementById("resultado");
    let numeros = num.split(";").map(Number);
    numeros[numeros.length] = 10;
    numeros[numeros.length] = 20;

    resultado.innerHTML = `<strong>Resultado:</strong><br>[${numeros}]`;
}
function limpiarTodo() {
  document.getElementById("resultado").innerHTML = "<strong>Mostrar:</strong> Aqui se muestran los elementos...";
}