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
let uploadButton = document.getElementById("upload-button");
let chosenImage = document.getElementById("chosen-image");
let fileName = document.getElementById("file-name");

uploadButton.onchange = () => {
    let reader = new FileReader();
    reader.readAsDataURL(uploadButton.files[0]);
    reader.onload = () => {
        chosenImage.setAttribute("src",reader.result);
    }
    fileName.textContent = uploadButton.files[0].name;
}