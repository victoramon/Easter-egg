
import {mostrarPublicacion} from './mostrarPublicacion.js';
import {agregarComentario} from './mostrarPublicacion.js';

/* if(document.readyState === 'complete'){
        
        
}
 */
document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    requestUsuarios();
  }
};



const requestUsuarios = async () => {
   const respuesta = await fetch('http://localhost:8080/user/posts/all', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem("token")
    }
  });
  const publicacion = await respuesta.json();

  publicacion.forEach(post => {
    post.publicaciones.forEach(pub => {
      mostrarPublicacion(
        {'id':`${post.idUsuarios}`,
        'usuario':`${post.usuarioDatos.gamerTag}`,
        'src':`${pub.imagen}`,
        'alternativo':`${pub.titulo}`,
        'titulo':`${pub.titulo}`,
        'descripcion':`${pub.descripcion}`
        });
    })

  });
}