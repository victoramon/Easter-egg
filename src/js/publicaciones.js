
import {mostrarPublicacion} from './mostrarPublicacion.js';
import {agregarComentario} from './mostrarPublicacion.js';

let pagina = 0;

//creamos el observador para que se cargen indefinidamente las publicaciones
let observador = new IntersectionObserver((entradas, observador)=>{
  entradas.forEach(entrada => {
    if(entrada.isIntersecting){
      pagina++;
      requestUsuarios();
    }
  })

}, {
  rootMargin: '0px 0px 200px 0px',
  threshold: 1.0
});

/* if(document.readyState === 'complete'){
        
        
}
 */
document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    requestUsuarios();
  }
};



const requestUsuarios = async () => {

   const respuesta = await fetch(`http://localhost:8080/posts/all?page=${pagina}&size=5`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem("token")
    }
  });
  const publicacion = await respuesta.json();

  if(publicacion.length === 0){
    document.querySelector('#bloque__publicaciones').innerHTML += `<div class="alert alert-warning" role="alert">
    Ya no hay mas publicaciones, intenta seguir mas gente
  </div>`;
    return;
  };

  publicacion.forEach(post => {
      mostrarPublicacion(
        {'id':`${post.idUsuario}`,
        'idPublicaciones':`${post.idPublicaciones}`,
        'usuario':`${post.nameUsuario}`,
        'src':`${post.imagen}`,
        'alternativo':`${post.titulo}`,
        'titulo':`${post.titulo}`,
        'descripcion':`${post.descripcion}`
        }); 
  });

  const publicacionesEnPantalla = document.querySelectorAll('.feed-publicaciones .card');
  let ultimaPublicacion = publicacionesEnPantalla[publicacionesEnPantalla.length - 1];
  observador.observe(ultimaPublicacion);

}
