function mostrar(){
    debugger
    let resultado = document.getElementById("resultado");
    const palabra = "sol";
    let letras = []
    let i = 0;
    while (i < palabra.length) {
      let letra = palabra[i];
      letras.push(letra);
      console.log(letra);
      i++;
    } 
    
    resultado.innerHTML = `<strong>Palabra:</strong> ${palabra}<br>
                           <strong>Separacion letra por letra:</strong><br>
                           ${letras.join("<br>")}`;
}
function limpiarTodo() {
  document.getElementById("resultado").innerHTML = "<strong>Mostrar:</strong> Aqui se muestra el resultado...";
} 