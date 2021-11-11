const token = localStorage.getItem('token');

function cargarPagina() {
    if(!token) {
        window.location.href = "./index.html";
        
    }else{
        document.querySelector("#navbarSupportedContent").innerHTML +=`<li class="nav-item">
        <a class="nav-link opcion1" href="#" onclick="logout()">Cerrar sesion</a>
      </li>`;
        showPage();
        
    }
  
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.querySelector("#content").style.display = "block";
}

function logout() {
  localStorage.removeItem('token');
  localStorage.removeItem('id');
  window.location.href = "./index.html";
}