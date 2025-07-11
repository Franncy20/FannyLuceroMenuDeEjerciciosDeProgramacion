function mostrar(){
    debugger
    let vocal1 = document.getElementById("vocal1").value;
    let vocal2 = document.getElementById("vocal2").value;
    let resultado = document.getElementById("resultado");
    let letra1 = "";
    let letra2 = "";
    let sonIguales = "";
    let resultadoComparacion = "";
  
    for (let i = 0; i < vocal1.length; i++) {
      letra1 = vocal1[i];
      letra2 = vocal2[i];
      sonIguales = letra1 === letra2;
      resultadoComparacion += `¿Son iguales en posicion ${i}? ${sonIguales ? "sí" : "no"} <br>`;
    }
    resultado.innerHTML = `<strong>Palabra 1:</strong> ${vocal1}<br>
                           <strong>Palabra 2:</strong> ${vocal2}<br>
                           <strong>Comparación letra por letra:</strong><br>
                           ${resultadoComparacion}`;
}
function limpiarTodo() {
  document.getElementById("resultado").innerHTML = "<strong>Mostrar:</strong> Aqui se muestra el resultado...";
} 