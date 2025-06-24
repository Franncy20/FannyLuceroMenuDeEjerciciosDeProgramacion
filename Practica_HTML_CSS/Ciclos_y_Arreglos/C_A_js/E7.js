function mostrar(){
    debugger
    let resultado = document.getElementById("resultado");
    const palabra = "Hola";
    const letras = palabra.split("");
    
    console.log = (letras) 
    console.log = (letras[0])
    console.log = (letras[1])
    console.log = (letras[2])
    console.log = (letras[3]) 
    
    resultado.innerHTML = `<strong>Palabra:</strong> ${palabra}<br>
                           <strong>Letras separadas:</strong><br>
                           ${letras.join(" ")}`;
}
function limpiarTodo() {
  document.getElementById("resultado").innerHTML = "<strong>Mostrar:</strong> Aqui se muestra el resultado...";
} 