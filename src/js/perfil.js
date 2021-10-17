import Swal from 'sweetalert2'

function alerta(){
    Swal.fire({
        title: 'Error!',
        text: 'Deseas agregar a esta persona',
        icon: 'error',
        confirmButtonText: 'Cool'
      })    
}
