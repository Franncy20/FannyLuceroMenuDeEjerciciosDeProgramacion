function mostrar(){
    debugger
    let resultado = document.getElementById("resultado");
    const numeros = "10;30;40;50";
    const arreglo = numeros.split(";").map(Number);

    console.log("Cadena original:", numeros);
    console.log("Arreglo de números:", arreglo);
    
    resultado.innerHTML = `<strong>Cadena original:</strong> ${numeros}<br>
                           <strong>Arreglo de números:</strong> [${arreglo.join(", ")}]<br>`;
}
function limpiarTodo() {
  document.getElementById("resultado").innerHTML = "<strong>Mostrar:</strong> Aqui se muestra el resultado...";
} 