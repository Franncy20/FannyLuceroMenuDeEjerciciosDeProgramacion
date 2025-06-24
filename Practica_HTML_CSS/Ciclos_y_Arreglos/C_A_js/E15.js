function mostrar(){
    debugger
    let resultado = document.getElementById("resultado");
    const numeros = [6, 10];
    let todosLosDivisores = "";
    for (let i = 0; i < numeros.length; i++) {
      let numero = numeros[i];
      let divisores = [];
      console.log("Divisores de", numero + ":");
      let d = 1; 
      while (d <= numero) { 
        if (numero % d === 0) {
          console.log(d); 
          divisores.push(d);
        }
        d++;
      }
      todosLosDivisores += `<strong>Divisores de ${numero}:</strong> ${divisores.join(", ")}<br>`;
    }
    resultado.innerHTML = `<strong>Números del arreglo:</strong> [${numeros.join(", ")}]<br><br>
                           ${todosLosDivisores}`; 
}
function limpiarTodo() {
  document.getElementById("resultado").innerHTML = "<strong>Mostrar:</strong> Aqui se muestra el resultado...";
} 