function mostrar(){
    debugger
    let letra = document.getElementById("letra").value;
    let resultado = document.getElementById("resultado");
    let letras = "";
    let i = 0
    while (i < letra.length) {
      letras += letra[i] + "<br>";
      i++
    } 
    
    resultado.innerHTML = `<strong>Palabra:</strong> ${letra}<br>
                           <strong>Separacion letra por letra:</strong><br>
                           ${letras}`;
}
function limpiarTodo() {
  document.getElementById("resultado").innerHTML = "<strong>Mostrar:</strong> Aqui se muestra el resultado...";
} 