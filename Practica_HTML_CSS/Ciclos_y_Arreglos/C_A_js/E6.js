function mostrar(){
    debugger
    let resultado = document.getElementById("resultado");
    const nombre = "Luis";
    let letra0 = nombre [0];
    console.log (letra0);
    let letra1 = nombre [1]
    console.log (letra1);
    let letra2 = nombre [2]
    console.log (letra2);
    let letra3 = nombre [3]
    console.log (letra3);
    resultado.innerHTML = `<strong>Palabra:</strong> ${nombre}<br>
                           <strong>Letras:</strong><br>
                           ${letra0}<br>
                           ${letra1}<br>
                           ${letra2}<br>
                           ${letra3}`;
}
function limpiarTodo() {
  document.getElementById("resultado").innerHTML = "<strong>Mostrar:</strong> Aqui se muestra el resultado...";
} 