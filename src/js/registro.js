/*let $nombre = document.querySelector("#nombre");
let $apellido = document.querySelector("#apellido");
let $gamertagg = document.querySelector("#gamertagg");
let $correo = document.querySelector("#correo");
let $contrasenia = document.querySelector("#contrasenia");
let $contrasenia2 = document.querySelector("#contrasenia2");
let $sexo = document.querySelector("#form-register select");
let $nacimiento = document.querySelector("#start");

let $formRegisters = document.querySelector("#form-register");


$formRegisters.addEventListener("submit", async e =>{
    e.preventDefault();

    let datos = {};
    datos.correo = $correo.value;
    datos.password = $contrasenia.value;
    datos.usuarioDatos = {
        "nombre":$nombre.value,
        "apellido":$apellido.value,
        "sexo":$sexo.value,
        "nacimiento":$nacimiento.value,
        "gamerTag":$gamertagg.value

    }

    const rawResponse = await fetch('http://localhost:8080/user', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(datos)
  });
  const respuesta = await rawResponse.text();

  if (respuesta == "ERROR") {
    Swal.fire({
        title: 'Error al registrar',
        text: 'Ya existe el correo o escribiste algun dato mal.',
        icon: 'question',
        confirmButtonText: 'Ok'
    });

} else if (respuesta == "REGISTRADO") {
    await Swal.fire({
        title: '¡Usuario registrado!',
        text: 'En un momento te redireccionaran para iniciar sesion',
        icon: 'success',
        showConfirmButton: false,
        timer: 2500
    })
    await Swal.getConfirmButton(window.location.href = "./index.html");
}

  console.log(content);

    console.log(e);
    //window.location.href="./publicaciones.html";
})
*/









const $formulario_registro = document.getElementById("formulario_registro");
const $inputs = document.querySelectorAll("#formulario_registro input");

const datos = {
  nombre: /^[a-zA-ZÀ-ÿ\s]{4,40}$/, // Letras y espacios, pueden llevar acentos.
  apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
	gamertagg: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	password: /^.{4,12}$/, // 4 a 12 digitos.
	//fecha_nacimiento: /^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/
}

const campos = {
  nombre: false,
  apellido: false,
	gamertagg: false,
	password: false,
	correo: false,
  //fecha_nacimiento: false
}


const validar_formulario = (e)=>{
    switch(e.target.name){
        case "nombre":
          validar_campo(datos.nombre, e.target, "nombre");
        break;
        case "apellido":
          validar_campo(datos.apellido, e.target, "apellido");
        break;
        case "password":
          validar_campo(datos.password, e.target, "password");
        break;
        case "password2":
          validar_campo(datos.password, e.target, "password2");
        break;
        case "gamertagg":
          validar_campo(datos.gamertagg, e.target, "gamertagg");
        break;
        case "correo"://dwdadwawa
          validar_campo(datos.correo, e.target, "correo");
        break;
    }
}

const validar_campo = (datos, $inputs, label) =>{
  if(datos.test($inputs.value)){
    document.getElementById(`recuadro_${label}`).classList.remove(`recuadro_${label}-incorrecto`);
    document.getElementById(`recuadro_${label}`).classList.add(`recuadro_${label}-correcto`);
    document.querySelector(`#recuadro_${label} .formulario_input_error`).classList.remove("formulario_input_error_activo");
    campos[label] = true;//En caso de que todo este correcto, el campo estara lleno
  }else{
    document.getElementById(`recuadro_${label}`).classList.add(`recuadro_${label}-incorrecto`);
    document.getElementById(`recuadro_${label}`).classList.remove(`recuadro_${label}-correcto`);
    document.querySelector(`#recuadro_${label} .formulario_input_error`).classList.add('formulario_input_error_activo');
    campos[label] = false;//En caso de que todo este correcto, el campo estara lleno
  }
}


const validarPassword2 = ()=>{
  const inputPassword1 = document.getElementById('password');
	const inputPassword2 = document.getElementById('password2');

	if(inputPassword1.value !== inputPassword2.value){
		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-correcto');
    document.querySelector(`#grupo__password2 .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos['password'] = false;
  }else {
		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-correcto');
    document.querySelector(`#grupo__password2 .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos['password'] = true;
  }
}

$inputs.forEach(($inputs)=>{
  $inputs.addEventListener("keyup", validar_formulario);
  $inputs.addEventListener("blur", validar_formulario);
})


$formulario_registro.addEventListener("submit",async (e)=>{
  e.preventDefault();
  if(campos.nombre && campos.apellido && campos.gamertagg && campos.password && campos.correo /*&& campos.fecha_nacimiento*/){
    let datos = {};
        datos.nombre = document.querySelector("#InputName").value;
        datos.apellido = document.querySelector("#InputApellido").value;
        datos.gamertagg = document.querySelector('#InputGamertagg').value;
        datos.password = document.querySelector('#InputPassword1').value;
        datos.correo = document.querySelector('#InputCorreo').value;
        //datos.fecha_nacimiento = document.querySelector('#Inputfechanacimiento');
        console.log("Campos llenos")
        const rawResponse = await fetch('/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datos)
        });
        const respuesta = await rawResponse.text();
                //Si regreso un NO significa que no existe el usuario
                if (respuesta == "ERROR") {
                  Swal.fire({
                      title: 'Error al ingresar!',
                      text: 'Revisa que tu contraseña y correo sean correctos',
                      icon: 'question',
                      confirmButtonText: 'Ok'
                  });
      
              } else if (respuesta == "OK") {
                  await Swal.fire({
                      title: 'Has iniciado sesion!',
                      text: 'En un momento te redireccionaran',
                      icon: 'success',
                      showConfirmButton: false,
                      timer: 2500
                  })
                  await Swal.getConfirmButton(window.location.href = "./publicaciones.html");
              }
      
              console.log(respuesta);
      
              //DEBE DE REDIRECCIONAR CUANDO SEA VERDADERA
        
            }else {
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