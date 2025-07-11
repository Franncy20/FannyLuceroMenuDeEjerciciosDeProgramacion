function mostrar(){
    debugger;
    let num = document.getElementById("numero").value;
    let resultado = document.getElementById("resultado");
    let numeros = num.split(";").map(Number);
    let resultados = "";
    
    for (let i = 0; i < numeros.length; i++) {
        let numero = numeros[i];
        let divisores = [];
        let suma = 0;
        for (let d = 1; d < numero;d++) { 
            if (numero % d === 0) {
                divisores.push(d);
                suma += d;
            }
        }
        resultados += `Divisores de ${numero}: [${divisores}]<br>
                       Suma de divisores de ${numero}: ${suma}<br>`;
    }
    
    resultado.innerHTML = `<strong>Números:</strong> [${numeros}]<br><br>
                           ${resultados}`;
}
function limpiarTodo() {
  document.getElementById("resultado").innerHTML = "<strong>Mostrar:</strong> Aqui se muestra el resultado...";
} 