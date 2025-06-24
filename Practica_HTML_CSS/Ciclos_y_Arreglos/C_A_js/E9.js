function mostrar(){
    debugger
    let resultado = document.getElementById("resultado");
    const frutas = ["manzana", "banana", "uva"];
    let listaFrutas = "";
    for (let i = 0; i < frutas.length; i++) {
      let fruta = frutas [i];
      console.log (fruta);
      listaFrutas += fruta + "<br>";
    }
    
    resultado.innerHTML = `<strong>Arreglo:</strong> ${frutas.join(", ")}<br>
                           <strong>Recorrido con for:</strong><br>
                           ${listaFrutas}`;
}
function limpiarTodo() {
  document.getElementById("resultado").innerHTML = "<strong>Mostrar:</strong> Aqui se muestra el resultado...";
} 