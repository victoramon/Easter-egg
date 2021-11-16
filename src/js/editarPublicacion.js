document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
       verDatos();
    }
};

import { mostrarPublicacion } from './mostrarPublicacion.js';

let urlFetch;

if(window.location.search != ''){
  urlFetch = window.location.search.slice(1,3);
} else {
  window.location.href = "./publicaciones.html"; 
}


/* Ver si es post del usuario */
const verDatos = async () => {

  try{
    const getPostJson = await fetch(`https://eastereggbackend.herokuapp.com/post/${urlFetch}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem("token")
      },
    });
  
    const getPost = await getPostJson.json();

    if(getPost.idUsuario != localStorage.getItem("id")){
      await Swal.fire({
        title: '¡No eres el titular de este post!',
        text: 'No puedes editarlo si no es tuyo',
        icon: 'alert',
        showConfirmButton: true
      })
      await Swal.getConfirmButton(window.location.href = "./publicaciones.html");
    } else{
       
        mostrarPublicacion(
          {        
            'id': `${getPost.idUsuario}`,
            'idPublicaciones':`${getPost.idPublicaciones}`,
            'usuario': `${getPost.innerText}`,
            'src': `${getPost.imagen}`,
            'alternativo': `${getPost.titulo}`,
            'titulo': `${getPost.titulo}`,
            'descripcion': `${getPost.descripcion}`
          });
    }
  } catch(error){
    console.log(error);
  }
  
  
}

let uploadButton = document.getElementById("upload-button");
let chosenImage = document.getElementById("chosen-image");

let url_image;
uploadButton.onclick = async () => {

    await widget_cloudinary.open();
}

let widget_cloudinary = cloudinary.createUploadWidget({
    cloudName: 'dfk9ayr1h',
    uploadPreset: 'img_post',
    sources: ['local', 'url', 'camera'],
    defaultSource: 'local',
    multiple: false,
  }, (error, result) => {
    if (!error && result && result.event === "success") {
      console.log('Done! Here is the image info: ', result.info);
      url_image = result.info.url;
      chosenImage.setAttribute("src",url_image);
    }
});

const $postForm = document.getElementById('post');
const $descripcionPost = document.getElementById('descripcionPost');
const $tituloPost = document.getElementById('tituloPost');



$postForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  if($descripcionPost.value.length > 0 && $tituloPost.value.length > 0 && url_image){
    let datos = {};
    datos.imagen = url_image;
    datos.descripcion = $descripcionPost.value;
    datos.titulo = $tituloPost.value;

    const postImage = await fetch(`https://eastereggbackend.herokuapp.com/post/edit?id=${urlFetch}`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem("token")
      },
      body: JSON.stringify(datos)
    });
  
    if (postImage.status == 200) {
      window.location.location = "./publicaciones.html"; ;
    }
  }  
});
 
