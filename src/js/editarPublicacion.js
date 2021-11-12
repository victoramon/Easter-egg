document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
       
    }
};

import { mostrarPublicacion } from './mostrarPublicacion.js';

  
const requestPost = async () => {

    let datosPost = {};
    datosPost.imagen = "https://res.cloudinary.com/dfk9ayr1h/image/upload/v1636607892/pexels-photo-7360387_liquss.jpg";
    datosPost.titulo = "Aqui jugando, pasen sus gamertagsx2";
    datosPost.descripcion = "Les dejo este codigo para que me agregen a Steam 1237461234123"
    

    const respuesta = await fetch(`http://localhost:8080/post/edit?id=${urlFetch}`, {
      method: 'POST',
      headers: {
        'Accept': '*/*',
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem("token")
      }, 
      body: JSON.stringify(datosPost)
    });
    const publicacion = await respuesta.json();
   
    /* if(publicacion.length == 0){
      document.getElementById('bloque__publicaciones').innerHTML = `<div class="alert alert-warning" role="alert">
      El usuario todavia no tiene publicaciones
    </div>`;
    }
  
    publicacion.forEach(post => {
      mostrarPublicacion(
        {
          'id': `${urlFetch}`,
          'usuario': `${$gamerTag.innerText}`,
          'src': `${post.imagen}`,
          'alternativo': `${post.titulo}`,
          'titulo': `${post.titulo}`,
          'descripcion': `${post.descripcion}`
        });
  
    }); */
  }

 
 let urlFetch;
if(window.location.search.slice(1,3) == ''){
    console.log("ggg")
} else{
    urlFetch = window.location.search.slice(1,3);
    requestPost();
}