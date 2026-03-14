console.log("js cargado");

class Producto {
  constructor(id, nombre, precio, imagen) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.imagen = imagen;
  }

  obtenerDescripcion() {
    return "Calzado de alta calidad, disponible en tallas 35-42.";
  }
}

class ZapatoElegante extends Producto {
  obtenerDescripcion() {
    return "Estilo elegante para ocasiones formales. Disponibles en tallas 35-42.";
  }
}

class ZapatoCasual extends Producto {
  obtenerDescripcion() {
    return "Diseño cómodo para uso diario. Disponibles en tallas 35-42.";
  }
}

class ZapatoDeportivo extends Producto {
  obtenerDescripcion() {
    return "Excelente ajuste y comodidad para caminar o entrenar. Disponibles en tallas 35-42.";
  }
}

function crearProducto(data) {
  switch (data.tipo) {
    case "elegante":
      return new ZapatoElegante(data.id, data.nombre, data.precio, data.imagen);
    case "casual":
      return new ZapatoCasual(data.id, data.nombre, data.precio, data.imagen);
    case "deportivo":
      return new ZapatoDeportivo(data.id, data.nombre, data.precio, data.imagen);
    default:
      return new Producto(data.id, data.nombre, data.precio, data.imagen);
  }
}

const productosData = [
  { id: 1, nombre: "Zapatos Azules Oscuros", precio: 90000, imagen: "imagenes/Zapatosazuloscuro.jfif", tipo: "elegante" },
  { id: 2, nombre: "Zapatos Blancos", precio: 90000, imagen: "imagenes/Zapatosblancos.jfif", tipo: "casual" },
  { id: 3, nombre: "Zapatos Negros", precio: 90000, imagen: "imagenes/Zapatosnegros.jfif", tipo: "elegante" },
  { id: 4, nombre: "Zapatos Rojos", precio: 90000, imagen: "imagenes/Zapatosrojos.jfif", tipo: "deportivo" },
  { id: 5, nombre: "Zapatos Verdes", precio: 90000, imagen: "imagenes/Zapatosverdes.jfif", tipo: "casual" }
];

const productos = Object.fromEntries(productosData.map((item) => {
  const producto = crearProducto(item);
  return [String(item.id), producto];
}));

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

window.addEventListener("click", function (event) {
  var modal = document.getElementById("modal-qr-nequi");
  if (modal && modal.classList.contains("activo") && event.target === modal) {
    cerrarModalQR();
  }
});

const catalogoBtn = document.getElementById("catalogoBtn");
if (catalogoBtn) {
  catalogoBtn.addEventListener("mouseover", function () {
    for (let i = 0; i < 2; i++) {
      let burbuja = document.createElement("span");
      burbuja.classList.add("burbuja");
      burbuja.style.left = Math.random() * 100 + "%";
      burbuja.style.top = Math.random() * 40 + "px";
      catalogoBtn.appendChild(burbuja);
      setTimeout(() => burbuja.remove(), 1000);
    }
  });
}

function abrirFormulario() {
  const formulario = document.getElementById("formularioCompra");
  if (formulario) formulario.style.display = "block";
}

function calcularDomicilio() {
  let domicilio = Number(document.getElementById("zona")?.value || 0);
  const precioDomicilio = document.getElementById("precioDomicilio");
  const precioTotal = document.getElementById("precioTotal");

  if (precioDomicilio) precioDomicilio.innerText = domicilio;
  if (precioTotal) precioTotal.innerText = 90000 + domicilio;
}

function mostrarQR() {
  const pagoQR = document.getElementById("pagoQR");
  if (pagoQR) pagoQR.style.display = "block";
}

function renderCatalogo() {
  const titulo = document.getElementById("titulo-catalogo");
  if (titulo) titulo.textContent = "Catálogo";

  const contenedor = document.getElementById("catalogo-grid");
  if (!contenedor) return;

  contenedor.innerHTML = "";

  Object.values(productos).forEach((producto) => {
    const card = document.createElement("div");
    card.className = "producto";
    card.innerHTML = `
      <img src="${producto.imagen}" alt="${producto.nombre}">
      <p>Precio $${producto.precio.toLocaleString("es-CO")}</p>
      <a href="producto.html?producto=${producto.id}" class="boton-comprar">Comprar</a>
    `;
    contenedor.appendChild(card);
  });
}

function renderDetalleProducto() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("producto");
  const producto = productos[id];
  if (!producto) return;

  const nombre = document.getElementById("nombreProducto");
  const imagen = document.getElementById("imagenProducto");
  const precio = document.getElementById("precioProducto");
  const descripcion = document.getElementById("descripcionProducto");

  if (nombre) nombre.textContent = producto.nombre;
  if (imagen) {
    imagen.src = producto.imagen;
    imagen.alt = producto.nombre;
  }
  if (precio) precio.textContent = "Precio: $" + producto.precio.toLocaleString("es-CO");
  if (descripcion) descripcion.textContent = producto.obtenerDescripcion();
}

document.addEventListener("DOMContentLoaded", function () {
  renderCatalogo();
  renderDetalleProducto();
});

window.abrirFormulario = abrirFormulario;
window.calcularDomicilio = calcularDomicilio;
window.mostrarQR = mostrarQR;
window.mostrarQRNequi = mostrarQRNequi;
window.cerrarModalQR = cerrarModalQR;
