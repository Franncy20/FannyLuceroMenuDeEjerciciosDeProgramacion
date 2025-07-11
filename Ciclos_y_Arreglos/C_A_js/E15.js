function mostrar(){
    debugger
    let numero = document.getElementById("numero").value;
    let resultado = document.getElementById("resultado");
    let numeros = numero.split(";").map(Number);
    let num = "";
    let todosLosDivisores = "";

    for (let i = 0; i < numeros.length; i++) {
      num = numeros[i];
      let divisores = [];
      for (let d = 1; d <= num; d++) { 
        if (num % d === 0) {
          divisores.push(d);          
        }
      }
      todosLosDivisores += `<strong>Divisores de ${num}:</strong> [${divisores}]<br>`;
    }

    resultado.innerHTML = `<strong>Números ingresados:</strong> [${numeros}]<br><br>
                           ${todosLosDivisores}`; 
}
function limpiarTodo() {
  document.getElementById("resultado").innerHTML = "<strong>Mostrar:</strong> Aqui se muestra el resultado...";
} 