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

let url_image;
uploadButton.onclick = async () => {

    await widget_cloudinary.open();

   /*  console.log(uploadButton.files[0]);

    let reader = new FileReader();
    reader.readAsDataURL(uploadButton.files[0]);
    reader.onload = () => {
        chosenImage.setAttribute("src",reader.url_image);
    }
    fileName.textContent = uploadButton.files[0].name;

    */

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
      /* addPost(); */ 
    }
  });

  const $formPost = document.getElementById('post');
  const $descripcionPost = document.getElementById('descripcionPost');
  const $tituloPost = document.getElementById('tituloPost');

  
  $formPost.addEventListener('submit', async (e) => {
    e.preventDefault();
    console.log("hola");
    if($descripcionPost.value.length > 0 && $tituloPost.value.length > 0 && url_image){
      let datos = {};
      datos.usuario = { 
          "idUsuarios" : localStorage.getItem('id'), 
      }
      datos.imagen = url_image;
      datos.descripcion = $descripcionPost.value;
      datos.titulo = $tituloPost.value;
  
      const postImage = await fetch('https://eastereggbackend.herokuapp.com/post', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem("token")
        },
        body: JSON.stringify(datos)
      });
    
      if (postImage.status == 200) {
        window.location.href = "./publicaciones.html";
      }
  } 
});
