function mostrar(){
    debugger
    let numeros = document.getElementById("numeros").value;
    let resultado = document.getElementById("resultado");
    let arreglo = numeros.split(";").map(Number);
    
    resultado.innerHTML = `<strong>Cadena original:</strong> ${numeros}<br>
                           <strong>Arreglo de números:</strong> [${arreglo}]<br>`;
}
function limpiarTodo() {
  document.getElementById("resultado").innerHTML = "<strong>Mostrar:</strong> Aqui se muestra el resultado...";
} 