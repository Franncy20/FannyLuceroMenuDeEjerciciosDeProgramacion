function mostrar(){
    debugger
    let resultado = document.getElementById("resultado");
    const frutas = ["manzana", "banana", "uva"];
    let i = 0;
    let listaFrutas = "";
    while (i < frutas.length) {
      let fruta = frutas [i];
      console.log (fruta);
      listaFrutas += fruta + "<br>";
      i++;
    }
    
    resultado.innerHTML = `<strong>Arreglo:</strong> ${frutas.join(", ")}<br>
                           <strong>Recorrido con while:</strong><br>
                           ${listaFrutas}`;
}
function limpiarTodo() {
  document.getElementById("resultado").innerHTML = "<strong>Mostrar:</strong> Aqui se muestra el resultado...";
} 