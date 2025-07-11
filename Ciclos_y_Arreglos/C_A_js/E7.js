function mostrar(){
    debugger
    let palabra = document.getElementById("letras").value;
    let resultado = document.getElementById("resultado");
    let letras = palabra.split("")
    
    resultado.innerHTML = `<strong>Palabra:</strong> ${palabra}<br>
                           <strong>Letras separadas:</strong><br>
                           ${letras.join(" ")}`;
}
function limpiarTodo() {
  document.getElementById("resultado").innerHTML = "<strong>Mostrar:</strong> Aqui se muestra el resultado...";
} 