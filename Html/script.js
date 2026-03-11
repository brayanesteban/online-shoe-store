function mostrarQRNequi(){

let qr = document.getElementById("qr-nequi");

if(qr.style.display === "block"){
qr.style.display = "none";
}else{
qr.style.display = "block";
}

}

const catalogo = document.getElementById("catalogoBtn");

catalogo.addEventListener("mouseover", function(){

for(let i=0;i<3;i++){

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