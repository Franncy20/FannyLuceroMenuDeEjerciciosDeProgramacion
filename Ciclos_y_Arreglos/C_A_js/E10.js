function mostrar(){
    debugger
    let frutas = document.getElementById("frutas").value;
    let resultado = document.getElementById("resultado");
    let listafrutas = frutas.split(";");
    let recorrido = "";
    let i = 0
    
    while (i < listafrutas.length) {
      recorrido += listafrutas [i] + "<br>"
      i++
    }
    
    resultado.innerHTML = `<strong>Arreglo:</strong> [${listafrutas}]<br>
                           <strong>Recorrido con for:</strong><br>
                           ${recorrido}`;
}
function limpiarTodo() {
  document.getElementById("resultado").innerHTML = "<strong>Mostrar:</strong> Aqui se muestra el resultado...";
} 