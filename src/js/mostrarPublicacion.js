
export function mostrarPublicacion(datosPublicacion){
    const publicacionHTML = `<div class="card">
    <h5 class="card-header">${datosPublicacion.titulo}</h5>
    <img src="${datosPublicacion.src}" class="p-2 card-img-top"
    alt="${datosPublicacion.alternativo}" title="${datosPublicacion.titulo}">
    <div class="card-body">
        <a href="./perfil.html?${datosPublicacion.id}">
            <p class="card-text"><small class="text-dark">Ver usuario</small></p>
        </a>
        <p class="card-text">${datosPublicacion.descripcion}
        </p>

        <div class="row opcionesPublicaciones">
        <a href="#" class="btn like">
        <i class='bx bxs-like'></i> Me gusta</a>
        <a href="#" class="btn share">
        <i class='bx bxs-share-alt' ></i> Compartir
        </a>

        <div class="btn-group" role="group" style="margin-left:auto; padding-right:12px" id="opcionesPublicacion">
        <button id="btnGroupDrop1" type="button" class="btn dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
        Opciones
        </button>
        <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
        <a class="dropdown-item" href="./editarPublicacion.html?${datosPublicacion.idPublicaciones}">Editar</a>
        <button class="dropdown-item" onclick="eliminarPub(${datosPublicacion.idPublicaciones})")>Eliminar</button>
        </div>
        </div>
        
        
        </div>
        </div>
        <div class="card-footer">
        <div id="comentarios"></div>
            <small class="">Comentarios</small>
            <div class="form__message">
			    <label for="textMessage">Ingresa tu comentario</label>
			    <textarea class="form-control" id="textMessage"
			    rows="3"></textarea>
		    </div>
        <a href="#" class="btn add-coment">
        <i class='bx bxs-message-alt-add' ></i> Comentar
        </a>
        </div>
    </div>`

    var bloquePublicaciones = document.querySelector('#bloque__publicaciones');

    bloquePublicaciones.innerHTML += publicacionHTML;
};

export function agregarComentario(datosComentario){
    const comentario = `<p>${datosComentario.gamerTag}</p><p> ${datosComentario.comentario} </p>`
    var bloqueComentario = document.querySelector("#comentarios");
    bloqueComentario.innerHTML += comentario;
}




/* codigo para mostrar en otro JS
import {mostrar} from 'Aqui va la direccion a este JS'
mostrarPublicacion(
{'src':'',
'alternativo':'',
'titulo':'',
'descripcion':''
}); */