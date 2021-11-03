var pic = document.getElementById("seguir").src;
function seguir(w){
  if(w==0){
    pic.textContent="src/img/corazon.png"
  }else{
    pic=="src/img/seguido.png"
  }
}
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

import {mostrarPublicacion} from './mostrarPublicacion.js';

mostrarPublicacion(
{'id':'1',
'usuario':'Meta',
'src':'https://www.muycomputer.com/wp-content/uploads/2020/12/Cyberpunk-2077-12.jpg',
'alternativo':'¿Que tal esta cyberpunk?',
'titulo':'¿Que tal esta cyberpunk?',
'descripcion':'¿Quieres saber como esta el juego mas esperado de los ultimos años? ¡Sigueme en mi Stream para conocerlo!'
});

mostrarPublicacion(
{'id':'2',
'usuario':'Snowman',
'src':'http://www.bogartmagazine.mx/wp-content/uploads/2020/09/Super-Mario-Bros-1.jpg',
'alternativo':'Mario Bros',
'titulo':'Mario Bros',
'descripcion':'Super Mario Bros. tiene lugar en el pacífico Reino Champiñón donde viven hongos antropomorfos, que fue invadido por los Koopa. Acompáñame en mi Stram el día Sábado 23 de Octubre en Twitch '
});

mostrarPublicacion(
{'id':'1',
'usuario':'Kto Tbi',
'src':'https://cdn.alfabetajuega.com/wp-content/uploads/2020/08/553036-jugador-ciego-completa-zelda-ocarina-time-despues-5-anos.jpg',
'alternativo':'The Legend of Zelda: Ocarina of Time',
'titulo':'The Legend of Zelda: Ocarina of Time',
'descripcion':'La historia del juego se enfoca en el joven héroe Link, que emprende una aventura en el reino de Hyrule para detener a Ganondorf, rey de la tribu Gerudo, antes de que encuentre la Trifuerza, una reliquia sagrada capaz de concederle cualquier deseo a su poseedor.  Acompáñame en mi Stram el día Viernes 22 de Octubre en Twitch'
});

mostrarPublicacion(
{'id':'1',
'usuario':'Alan Mejia',
'src':'https://cloudfront-us-east-1.images.arcpublishing.com/elcomercio/7BGFFYG655ELXLNSCFP44XPYZI.jpg',
'alternativo':'Free Fire',
'titulo':'Free Fire',
'descripcion':'Free Fire es un videojuego battle royale, desarrollado por 111dots studio​ y publicado por Garena para Android e IOS. Acompáñame en mi Stream el día  Sábado 30 de Octubre en Twitch'
});

mostrarPublicacion(
{'id':'1',
'usuario':'DaniVentur',
'src':'https://www.muycomputer.com/wp-content/uploads/2020/12/Doom-Eternal-1.jpg',
'alternativo':'Doom',
'titulo':'Jugando capitulo 3 de Doom',
'descripcion':'Primera partida de Doom Eternal, sigueme en mi Stream, link en mi bio.'
});

