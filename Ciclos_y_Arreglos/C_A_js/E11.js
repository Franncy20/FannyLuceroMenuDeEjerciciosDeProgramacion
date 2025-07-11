function mostrar(){
    debugger
    let letra = document.getElementById("letra").value;
    let resultado = document.getElementById("resultado");
    let letras = "";
    for (let i = 0; i < letra.length; i++) {
      letras += letra[i] + "<br>";
    } 
    
    resultado.innerHTML = `<strong>Palabra:</strong> ${letra}<br>
                           <strong>Separacion letra por letra:</strong><br>
                           ${letras}`;
}
function limpiarTodo() {
  document.getElementById("resultado").innerHTML = "<strong>Mostrar:</strong> Aqui se muestra el resultado...";
} 