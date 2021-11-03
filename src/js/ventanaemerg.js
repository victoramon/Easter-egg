var btnpublicar = document.getElementById('btnpublicar'),
    overlay = document.getElementById('overlay'),
    popup = document.getElementById('pop-up'),
    botoncerrarpopup = document.getElementById('boton-cerrar-pop-up');


/**evento boton publicar */
 btnpublicar.addEventListener('click', function(){
overlay.classList.add('active');
popup.classList.add('active');
}); 

/**evento boton cerrar pop-up */
 botoncerrarpopup.addEventListener('click', function(){
overlay.classList.remove('active');
popup.classList.remove('active');
}); 