function mostrar(){
    debugger
    let resultado = document.getElementById("resultado");
    const numeros = [6, 10, 28];
    let resultados = "";
    for (let i = 0; i < numeros.length; i++) {
      let numero = numeros[i];
      let suma = 0;
      let d= 1;
      while (d < numero) {
        if (numero % d === 0) {
          suma += d;
        }
        d++;
      }
      if (suma === numero) {
        console.log(numero, "es un número perfecto");
        resultados += `${numero} es un número perfecto <br>`;
      } else {
        console.log(numero, "NO es un número perfecto");
        resultados += `${numero} NO es un número perfecto <br>`;
      }
    }
    resultado.innerHTML = `<strong>Verificación de números perfectos:</strong><br><br>${resultados}`;

}
function limpiarTodo() {
  document.getElementById("resultado").innerHTML = "<strong>Mostrar:</strong> Aqui se muestra el resultado...";
} 