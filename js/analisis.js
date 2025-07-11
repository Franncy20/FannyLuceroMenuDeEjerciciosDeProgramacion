function validarEdad(){
    debugger
    let nom = "",eda=0
    nom = document.getElementById("nombre") 
    nom = nom.value
    eda = document.getElementById("edad").value
    eda = parseInt(eda)
    if(eda >= 18){
        document.getElementById("resultado").innerHTML = `<strong>Resultado:</strong> ${nom} eres mayor de edad`;
        //alert(`${nom} eres mayor de edad`)
    }else{
        document.getElementById("resultado").innerHTML = `<strong>Resultado:</strong> ${nom} eres menor de edad`;
        //alert(`${nom} eres menor de edad`)
    }
    // console.log(nom)
    // console.log(nom.id," " + nom.value)
}
function limpiarTodo() {
  document.getElementById("resultado").innerHTML = "<strong>Resultado:</strong> Complete el formulario para validar la edad";
}