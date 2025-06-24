function mostrar(){
    debugger
    let resultado = document.getElementById("resultado");
    const datos = [];
    datos [0] = 10;
    datos [1] = 20;
    console.log(datos);
    resultado.innerHTML = `<strong>Resultado:</strong><br>${datos.join("<br>")}`;
}
function limpiarTodo() {
  document.getElementById("resultado").innerHTML = "<strong>Mostrar:</strong> Aqui se muestran los elementos...";
}