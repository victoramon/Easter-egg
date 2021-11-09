
import {mostrarPublicacion} from './mostrarPublicacion.js';
import {agregarComentario} from './mostrarPublicacion.js';

/* if(document.readyState === 'complete'){
        
        
}
 */
document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    requestUsuarios();
    console.log("hola");
  }
};



mostrarPublicacion(
        {'id':'1',
        'usuario':'Pedro',
        'src':'https://www.muycomputer.com/wp-content/uploads/2020/12/Cyberpunk-2077-12.jpg',
        'alternativo':'¿Que tal esta cyberpunk?',
        'titulo':'¿Que tal esta cyberpunk?',
        'descripcion':'¿Quieres saber como esta el juego mas esperado de los ultimos años? ¡Sigueme en mi Stream para conocerlo!'
        });;

mostrarPublicacion(
{'id':'2',
'usuario':'Naruto',
'src':'https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_Minecraft.jpg',
'alternativo':'Minecraft',
'titulo':'Minecraft',
'descripcion':'Es un videojuego de construcción, de tipo «mundo abierto» o sandbox creado originalmente por el sueco Markus Persson. Acompáñame en mi Stream el día Sábado 23 de Octubre en Twitch '
});

mostrarPublicacion(
{'id':'5',
'usuario':'Juancho',
'src':'https://www.eluniversal.com.mx/sites/default/files/2019/10/16/league_of_legends_img_1_crop1563204378627.jpg_254431194_0.jpg',
'alternativo':'League of Legends',
'titulo':'League of Legends',
'descripcion':'Juega League of Legends en un mundo épico y escribe tu propia leyenda. Forja tu destino. Vive grandes batallas en el juego online más popular del mundo  Acompáñame en mi Stream el día Viernes 22 de Octubre en Twitch'
});

mostrarPublicacion(
{'id':'8',
'usuario':'MaquinaDeFuego',
'src':'https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_Minecraft.jpg',
'alternativo':'Minecraft',
'titulo':'Minecraft',
'descripcion':'Es un videojuego de construcción, de tipo «mundo abierto» o sandbox creado originalmente por el sueco Markus Persson. Acompáñame en mi Stream el día Sábado 23 de Octubre en Twitch '
});

mostrarPublicacion(
{'id':'12',
'usuario':'BxbxitoEmoxo',
'src':'https://www.muycomputer.com/wp-content/uploads/2020/12/Doom-Eternal-1.jpg',
'alternativo':'Doom',
'titulo':'Jugando capitulo 3 de Doom',
'descripcion':'Primera partida de Doom Eternal, sigueme en mi Stream, link en mi bio.'
});



const requestUsuarios = async () => {
   const respuesta = await fetch('post/all1', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  });
  const publicacion = await respuesta.json();

  publicacion.forEach(post => {
    mostrarPublicacion(
      {'id':`{post.id_usuarios}`,
      'usuario':'BxbxitoEmoxo',
      'src':'https://www.muycomputer.com/wp-content/uploads/2020/12/Doom-Eternal-1.jpg',
      'alternativo':`${post.titulo}`,
      'titulo':`${post.titulo}`,
      'descripcion':`${post.descripcion}`
      });

  });
/* 
  

  console.log(publicacion);
  console.log(`El nombre es ${usuarios.titulo} e id ${usuarios.id_publicaciones}`); */

}