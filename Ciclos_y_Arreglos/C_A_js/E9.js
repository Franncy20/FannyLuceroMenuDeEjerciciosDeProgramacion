function mostrar(){
    debugger
    let frutas = document.getElementById("frutas").value;
    let resultado = document.getElementById("resultado");
    let listafrutas = frutas.split(";");
    let recorrido = "";
    
    for (let i = 0; i < listafrutas.length; i++) {
      recorrido += listafrutas [i] + "<br>"
    }
    
    resultado.innerHTML = `<strong>Arreglo:</strong> [${listafrutas}]<br>
                           <strong>Recorrido con for:</strong><br>
                           ${recorrido}`;
}
function limpiarTodo() {
  document.getElementById("resultado").innerHTML = "<strong>Mostrar:</strong> Aqui se muestra el resultado...";
} 