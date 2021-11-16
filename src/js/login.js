const $boton_foto = document.querySelector('#boton_foto');
        const $image_perfil = document.querySelector('#image_perfil');
        let widget_cloudinary = cloudinary.createUploadWidget({
            cloudName: 'dfk9ayr1h',
            uploadPreset: 'img_perfil',
            sources: ['local', 'url', 'camera'],
            defaultSource: 'local',
            multiple: false,
            cropping: true,
     
        }, (error, result) => {
            if (!error && result && result.event === "success") {
                console.log('Done! Here is the image info: ', result.info);
                $image_perfil.src = result.info.url;
            }
        }); 

$boton_foto.addEventListener('click', function (e) {
    widget_cloudinary.open();
});