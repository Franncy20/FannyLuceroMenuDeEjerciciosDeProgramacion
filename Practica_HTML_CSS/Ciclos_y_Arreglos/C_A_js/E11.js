function mostrar(){
    debugger
    let resultado = document.getElementById("resultado");
    const palabra = "sol";
    let letras = []
    for (let i = 0; i < palabra.length; i++) {
      let letra = palabra[i];
      letras.push(letra);
      console.log(letra);
    } 
    
    resultado.innerHTML = `<strong>Palabra:</strong> ${palabra}<br>
                           <strong>Separacion letra por letra:</strong><br>
                           ${letras.join("<br>")}`;
}
function limpiarTodo() {
  document.getElementById("resultado").innerHTML = "<strong>Mostrar:</strong> Aqui se muestra el resultado...";
} 