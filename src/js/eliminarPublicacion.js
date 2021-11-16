const eliminarPub = async(id) => {
    await Swal.fire({
        title: '¡¿Seguro que desea eliminar la publicacion?!',
        text: 'Este es una accion irreversible ',
        icon: 'error',
        showCancelButton: true,
        confirmButtonText: 'Entendido'
    }).then((result) => {
        if(result.isConfirmed){
            revisarUsuario(id);
        } else if(result.isDenied){
            Swal.fire('Cancelado', '', 'success')
        }
    }); 
}

const revisarUsuario = async (id) => {

    try{
      const getPostJson = await fetch(`https://eastereggbackend.herokuapp.com/post/${id}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem("token")
        },
      });
    
      const getPost = await getPostJson.json();
  
      if(getPost.idUsuario != localStorage.getItem("id")){
        await Swal.fire({
          title: '¡No eres el titular de este post!',
          text: 'No puedes eliminarlo si no es tuyo',
          icon: 'alert',
          showConfirmButton: true
        })
        await Swal.getConfirmButton(window.location.reload());
      } else{
         
          eliminandoPub(id);
      }
    } catch(error){
      console.log(error);
    }
    
    
  }

const eliminandoPub = async (id) =>{
    const getPostJson = await fetch(`https://eastereggbackend.herokuapp.com/post/delete/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': localStorage.getItem("token")
      },
    });
    if(getPostJson.status === 200){
        Swal.fire('Eliminada!', '', 'success');
        window.location.reload();
    }else{
        Swal.fire('Error!', '', 'success')
    }
}