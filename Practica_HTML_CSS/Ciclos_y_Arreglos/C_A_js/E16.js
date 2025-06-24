function mostrar(){
    debugger;
    let resultado = document.getElementById("resultado");
    const numeros = [6, 10];
    let resultados = "";
    
    for (let i = 0; i < numeros.length; i++) {
        let numero = numeros[i];
        let suma = 0;
        let d = 1;
        
        while (d < numero) { 
            if (numero % d === 0) {
                suma += d;
            }
            d++;
        }
    console.log("Suma de divisores de", numero, ":", suma);
        resultados += `Suma de divisores de ${numero}: ${suma}<br>`;
    }
    
    resultado.innerHTML = `<strong>Números:</strong> [${numeros.join(", ")}]<br><br>
                           ${resultados}`;
}
function limpiarTodo() {
  document.getElementById("resultado").innerHTML = "<strong>Mostrar:</strong> Aqui se muestra el resultado...";
} 