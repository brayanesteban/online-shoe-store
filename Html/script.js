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
  const modal = document.getElementById("modal-qr-nequi");
  if (modal) {
    modal.classList.add("activo");
  }
}

function cerrarModalQR() {
  const modal = document.getElementById("modal-qr-nequi");
  if (modal) {
    modal.classList.remove("activo");
  }
}

window.addEventListener("click", function(event) {
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
  const pagoQR = document.getElementById("pagoQR");
  const mensajeError = document.getElementById("mensajeError");

  if (formulario) formulario.style.display = "block";
  if (pagoQR) pagoQR.style.display = "none";
  if (mensajeError) mensajeError.textContent = "";
}
function obtenerPrecioBase() {
  return productoActual ? productoActual.precio : 90000;
}

function calcularDomicilio() {
  const domicilio = Number(document.getElementById("zona")?.value || 0);
  const precioDomicilio = document.getElementById("precioDomicilio");
  const precioTotal = document.getElementById("precioTotal");

  if (precioDomicilio) precioDomicilio.innerText = domicilio.toLocaleString("es-CO");
  if (precioTotal) precioTotal.innerText = (obtenerPrecioBase() + domicilio).toLocaleString("es-CO");

}

function validarFormularioCompra() {
  const nombre = document.getElementById("nombreCliente")?.value.trim() || "";
  const direccion = document.getElementById("direccionCliente")?.value.trim() || "";
  const zona = document.getElementById("zona")?.value || "";

  if (!nombre) {
    return "Por favor escribe tu nombre.";
  }

  if (!direccion) {
    return "Por favor escribe tu dirección exacta.";
  }

    if (!zona) {
    return "Selecciona tu zona de Medellín para calcular domicilio.";
  }

    return "";
}
function mostrarQR() {
  const mensajeError = document.getElementById("mensajeError");
  const pagoQR = document.getElementById("pagoQR");

    const error = validarFormularioCompra();
  if (error) {
    if (mensajeError) mensajeError.textContent = error;
    if (pagoQR) pagoQR.style.display = "none";
    return;
  }

    if (mensajeError) mensajeError.textContent = "";
  calcularDomicilio();
  if (pagoQR) pagoQR.style.display = "block";
}
function renderCatalogo() {
  const titulo = document.getElementById("titulo-catalogo");
  if (titulo) titulo.textContent = "Catálogo";
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
  const precioTotal = document.getElementById("precioTotal");

  if (nombre) nombre.textContent = producto.nombre;
  if (imagen) {
    imagen.src = producto.imagen;
    imagen.alt = producto.nombre;
  }
  if (precio) precio.textContent = "Precio: $" + producto.precio.toLocaleString("es-CO");
  if (descripcion) descripcion.textContent = producto.obtenerDescripcion();
  if (precioTotal) precioTotal.textContent = producto.precio.toLocaleString("es-CO");

}

document.addEventListener("DOMContentLoaded", function () {
  renderCatalogo();
  renderDetalleProducto();
  calcularDomicilio();
});

window.abrirFormulario = abrirFormulario;
window.calcularDomicilio = calcularDomicilio;
window.mostrarQR = mostrarQR;
window.mostrarQRNequi = mostrarQRNequi;
window.cerrarModalQR = cerrarModalQR;







