function mostrarQRNequi() {
  var modal = document.getElementById("modal-qr-nequi");
  if (modal) {
    modal.classList.add("activo");
  }
}

function cerrarModalQR() {
  var modal = document.getElementById("modal-qr-nequi");
  if (modal) {
    modal.classList.remove("activo");
  }
}

// Cerrar modal al hacer clic fuera del contenido
window.addEventListener('click', function(event) {
  var modal = document.getElementById("modal-qr-nequi");
  if (modal && modal.classList.contains("activo")) {
    var contenido = document.querySelector('.modal-qr-contenido');
    if (event.target === modal) {
      cerrarModalQR();
    }
  }
});

const catalogo = document.getElementById("catalogoBtn");

if (catalogo) {
  catalogo.addEventListener("mouseover", function(){
    for(let i=0;i<2;i++){
      let burbuja = document.createElement("span");
      burbuja.classList.add("burbuja");
      burbuja.style.left = Math.random()*100 + "%";
      burbuja.style.top = Math.random()*40 + "px";
      catalogo.appendChild(burbuja);
      setTimeout(()=>{
        burbuja.remove();
      },1000);
    }
  });
}

const titulo = document.getElementById('titulo-catalogo');
titulo.textContent = 'Catálogo';