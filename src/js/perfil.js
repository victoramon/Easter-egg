var pic = document.getElementById("seguir").src;
function seguir(w) {
  if (w == 0) {
    pic.textContent = "src/img/corazon.png"
  } else {
    pic == "src/img/seguido.png"
  }
}

/* Esperar hasta que cargue la pagina para mostrar todo */
document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    verDatos();
    requestUsuarios();
  }
};
/**-----popup 
var btnpublicar = document.getElementById('btnpublicar'),
    overlay = document.getElementById('overlay'),
    popup = document.getElementById('pop-up'),
    botoncerrarpopup = document.getElementById('boton-cerrar-pop-up');

/**evento boton publicar 
btnpublicar.addEventListener('click', function(){
overlay.classList.add('active');
popup.classList.add('active');
});

/**evento boton cerrar pop-up 
botoncerrarpopup.addEventListener('click', function(){
overlay.classList.remove('active');
popup.classList.remove('active');
});*/

import { mostrarPublicacion } from './mostrarPublicacion.js';

const $gamerTag = document.querySelector('#gamerTag');
const $sexo = document.querySelector('#sexo');
const $nacimiento = document.querySelector('#nacimiento');
const $nombre = document.querySelector('#nombre');
const $miembroDesde = document.querySelector('#miembroDesde');
const $image_perfil = document.querySelector('#img_perfil');
const url = `http://localhost:8080/user/${localStorage.getItem('id')}`;
const $boton_foto = document.querySelector('#changePerfilPhoto');
let url_image;

/* Traera los datos del usuario */
const verDatos = async () => {
  const getIdJson = await fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem("token")
    },
  });

  const getId = await getIdJson.json();
  $gamerTag.textContent = getId.usuarioDatos.gamerTag;
  $sexo.textContent = "Sexo: " + getId.usuarioDatos.sexo;
  $nacimiento.textContent = "Fecha de nacimiento:" + getId.usuarioDatos.nacimiento;
  $nombre.textContent = "Nombre: " + getId.usuarioDatos.nombre;
  $miembroDesde.textContent = "Miembro desde: " + getId.usuarioDatos.miembroDesde;

  if (getId.usuarioDatos.imgPerfil == null) {
    $image_perfil.src = "src/img/fotodeperfil.png"
  } else {
    $image_perfil.src = getId.usuarioDatos.imgPerfil;
  }
}

verDatos();



$boton_foto.addEventListener('click', async (e) => {
  await widget_cloudinary.open();
});

let widget_cloudinary = cloudinary.createUploadWidget({
  cloudName: 'dfk9ayr1h',
  uploadPreset: 'img_perfil',
  sources: ['local', 'url', 'camera'],
  defaultSource: 'local',
  multiple: false,
  cropping: false
}, (error, result) => {
  if (!error && result && result.event === "success") {
    console.log('Done! Here is the image info: ', result.info);
    url_image = result.info.url;
    addImage();
  }
});



const addImage = async () => {
  let datos = {};
  datos.idUsuarios = localStorage.getItem('id');
  datos.usuarioDatos = {
    "imgPerfil": url_image,
  }

  const postImage = await fetch('http://localhost:8080/user/postImgPerfil', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem("token")
    },
    body: JSON.stringify(datos)
  });

  if (postImage.status == 200) {
    $image_perfil.src = url_image;
  }
}

/* Traer todas las publicaciones */

const requestUsuarios = async () => {
  const respuesta = await fetch(`http://localhost:8080/post/all/${localStorage.getItem("id")}`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem("token")
    }
  });
  const publicacion = await respuesta.json();
  if(publicacion.length == 0){
    document.getElementById('bloque__publicaciones').innerHTML = `<div class="alert alert-warning" role="alert">
    El usuario todavia no tiene publicaciones
  </div>`;
  }

  publicacion.forEach(post => {
    mostrarPublicacion(
      {
        'id': `{post.id_usuarios}`,
        'usuario': `${$gamerTag.innerText}`,
        'src': `${post.imagen}`,
        'alternativo': `${post.titulo}`,
        'titulo': `${post.titulo}`,
        'descripcion': `${post.descripcion}`
      });

  });
}