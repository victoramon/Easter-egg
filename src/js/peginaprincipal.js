const token = localStorage.getItem('token');

function cargarPagina() {
    if(token) {
        window.location.href = "./publicaciones.html";
    }  
}

const $formulario_login = document.getElementById("formulario_login");

const $inputs = document.querySelectorAll("#formulario_login input");

const campos = {
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    password: /^.{4,12}$/
}

//Objeto para validar que todos los cmapos esten llenos
const llenado_campos = {
    correo: false,
    password: false
}

const validar_formulario = (e) => {
    switch (e.target.name) {
        case "correo":
            validar_campo(campos.correo, e.target, "correo");
            break;
        case "password":
            validar_campo(campos.password, e.target, "password");
            break;
    }
}

const validar_campo = (campos, input, label) => {
    if (campos.test(input.value)) {//accedemos al valor de los inputs, y con la funcion test(), comprobamos que cumpla con los requisitos preescritos en cosnt camps
        document.getElementById(`recuadro_${label}`).classList.remove(`recuadro_${label}-incorrecto`);
        document.getElementById(`recuadro_${label}`).classList.add(`recuadro_${label}-correcto`);
        document.querySelector(`#recuadro_${label} .formulario_input_error`).classList.remove("formulario_input_error_activo");
        llenado_campos[label] = true;//En caso de que todo este correcto, el campo estara lleno
    } else {
        document.getElementById(`recuadro_${label}`).classList.add(`recuadro_${label}-incorrecto`);
        document.getElementById(`recuadro_${label}`).classList.remove(`recuadro_${label}-correcto`);
        document.querySelector(`#recuadro_${label} .formulario_input_error`).classList.add("formulario_input_error_activo");
        llenado_campos[label] = false;//En caso de que no este correcto, el campos aparece como no llenado
    }
}


$inputs.forEach(($inputs) => {//Se agrega un evento a cada uno de los inputs del formulario
    $inputs.addEventListener("keyup", validar_formulario);//para cuando levante una tecla
    $inputs.addEventListener("blur", validar_formulario);//Para cuando den click fuera del input
})

$formulario_login.addEventListener("submit", async (e) => {
    e.preventDefault();
    //var $redirecciona_log_in = document.getElementById("btn_log_in");
    if (llenado_campos.correo && llenado_campos.password) {
        console.log("Fomulario completo")

        //Revisar en la base de datos si existe el usuario y contraseña
        let datos = {};
        datos.username = document.querySelector("#InputEmail").value;
        datos.password = document.querySelector("#InputPassword1").value;;

        try{
        const rawResponse = await fetch('http://localhost:8080/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datos)
        });

        const token = await rawResponse.headers.get('Authorization');

        if (token && token.includes("Bearer") && rawResponse.status === 200) {
            localStorage.setItem("token", token);

            const getIdJson = await fetch('http://localhost:8080/user/getId', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': localStorage.getItem("token")
                },
                body: JSON.stringify(datos)
            });

            const getId = await getIdJson.json();
            localStorage.setItem("id", getId.idUsuarios);

            await Swal.fire({
                title: 'Has iniciado sesion!',
                text: 'En un momento te redireccionaran',
                icon: 'success',
                showConfirmButton: false,
                timer: 2500
            })
            await Swal.getConfirmButton(window.location.href = "./publicaciones.html"); 
        }  else{
            localStorage.removeItem("token");
            Swal.fire({
                title: 'Error al ingresar!',
                text: 'Revisa que tu contraseña y correo sean correctos',
                icon: 'question',
                confirmButtonText: 'Ok'
            });
        }
    } catch (error) {
        Swal.fire({
            title: '¡Error en el servidor!',
            text: 'Nuestros monos amaestrados estan haciendo lo posible por arreglarlo ',
            icon: 'error',
            confirmButtonText: 'Entendido'
        });        

    } 

        // const respuesta = await rawResponse.text();

    } else {
        e.preventDefault();
        console.log("Entra en el else")
        Swal.fire({
            title: 'Campos vacios',
            text: 'Por favor rellena todos los campos',
            icon: 'warning',
            confirmButtonText: 'Ok'
        })
    }
});
