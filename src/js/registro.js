let $nombre = document.querySelector("#nombre");
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
        "nacimiento":$nacimiento.value

    }

    const rawResponse = await fetch('/user', {
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