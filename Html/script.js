aler("js cargado");
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

function abrirFormulario(){

document.getElementById("formularioCompra").style.display = "block";

}

function calcularDomicilio(){

let domicilio = document.getElementById("zona").value;

document.getElementById("precioDomicilio").innerText = domicilio;

let total = 90000 + Number(domicilio);

document.getElementById("precioTotal").innerText = total;

}

function mostrarQR(){

document.getElementById("pagoQR").style.display = "block";

}

document.addEventListener("DOMContentLoaded", function(){
});


const productos = {

1:{
nombre:"Zapatos Azules Oscuros",
precio:90000,
imagen:"imagenes/Zapatosazuloscuro.jfif"
},

2:{
nombre:"Zapatos Blancos",
precio:90000,
imagen:"imagenes/Zapatosblancos.jfif"
},

3:{
nombre:"Zapatos Negros",
precio:90000,
imagen:"imagenes/Zapatosnegros.jfif"
},

4:{
nombre:"Zapatos Rojos",
precio:90000,
imagen:"imagenes/Zapatosrojos.jfif"
},

5:{
nombre:"Zapatos Verdes",
precio:90000,
imagen:"imagenes/Zapatosverdes.jfif"
}

};

const params = new URLSearchParams(window.location.search);
const id = params.get("producto");

const producto = productos[id];

if(producto){

const nombre = document.getElementById("nombreProducto");
const imagen = document.getElementById("imagenProducto");
const precio = document.getElementById("precioProducto");

if(nombre && imagen && precio){

nombre.textContent = producto.nombre;
imagen.src = producto.imagen;
precio.textContent = "Precio: $" + producto.precio.toLocaleString();

}

}







