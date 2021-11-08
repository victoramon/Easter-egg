import Swal from '../../node_modules/sweetalert2/src/sweetalert2.js';



const $formulario_login = document.getElementById("formulario_login");

const $inputs = document.querySelectorAll("#formulario_login input");

const campos = {
    correo:/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    password: /^.{4,12}$/
}

//Objeto para validar que todos los cmapos esten llenos
const llenado_campos={
    correo: false,
    password: false
}

const validar_formulario=(e)=>{
    switch(e.target.name){
        case "correo":
            validar_campo(campos.correo, e.target, "correo");
        break;
        case "password":
            validar_campo(campos.password, e.target, "password");
        break;
    }
}

const validar_campo =(campos, input, label ) =>{
    if(campos.test(input.value)){//accedemos al valor de los inputs, y con la funcion test(), comprobamos que cumpla con los requisitos preescritos en cosnt camps
        document.getElementById(`recuadro_${label}`).classList.remove(`recuadro_${label}-incorrecto`);
        document.getElementById(`recuadro_${label}`).classList.add(`recuadro_${label}-correcto`);
        document.querySelector(`#recuadro_${label} .formulario_input_error`).classList.remove("formulario_input_error_activo");
        llenado_campos[label]=true;//En caso de que todo este correcto, el campo estara lleno
    }else{
        document.getElementById(`recuadro_${label}`).classList.add(`recuadro_${label}-incorrecto`);
        document.getElementById(`recuadro_${label}`).classList.remove(`recuadro_${label}-correcto`);
        document.querySelector(`#recuadro_${label} .formulario_input_error`).classList.add("formulario_input_error_activo");
        llenado_campos[label]= false;//En caso de que no este correcto, el campos aparece como no llenado
    }
}


$inputs.forEach(($inputs) => {//Se agrega un evento a cada uno de los inputs del formulario
    $inputs.addEventListener("keyup", validar_formulario);//para cuando levante una tecla
    $inputs.addEventListener("blur", validar_formulario);//Para cuando den click fuera del input
})

$formulario_login.addEventListener("submit", (e)=>{
    if(llenado_campos.correo && llenado_campos.password){
        console.log("Fomulario completo")
        document.location.href = "../publicaciones.html"
    }else{
        e.preventDefault();
        console.log("Entra en el else")
        Swal.fire({
            title: 'Error!',
            text: 'Por favor rellena todos los campos',
            icon: 'error',
            confirmButtonText: 'Okay'
          })
    }
});