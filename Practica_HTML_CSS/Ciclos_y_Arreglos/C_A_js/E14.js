function mostrar(){
    debugger
    let resultado = document.getElementById("resultado");
    let resultadoComparacion = "";
    const palabra1 = "casa";
    const palabra2 = "cosa";
    for (let i = 0; i < palabra1.length; i++) {
      let letra1 = palabra1[i];
      let letra2 = palabra2[i];
      let sonIguales = letra1 === letra2;
      console.log("¿Son iguales en posición", i, "?", letra1 === letra2);
      resultadoComparacion += `Posición ${i}: "${letra1}" vs "${letra2}" = ${sonIguales ? "Sí" : "No"}<br>`;
    }
    resultado.innerHTML = `<strong>Palabra 1:</strong> ${palabra1}<br>
                           <strong>Palabra 2:</strong> ${palabra2}<br>
                           <strong>Comparación letra por letra:</strong><br>
                           ${resultadoComparacion}`;
}
function limpiarTodo() {
  document.getElementById("resultado").innerHTML = "<strong>Mostrar:</strong> Aqui se muestra el resultado...";
} 