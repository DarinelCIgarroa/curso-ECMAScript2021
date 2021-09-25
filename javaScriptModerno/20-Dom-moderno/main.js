// Forma clasica de seleccionar elmentos del DOM
let contenedor = document.getElementById("contenedor")
// console.log(contenedor);
// contenedor.style.backgroundColor="#ccc";
// contenedor.style.width = "400px";
// contenedor.style.textAlign = "center";
// contenedor.border ="1px solid #000";
// contenedor.className="ficha";

let contenedores = document.querySelectorAll('#contenedor');

console.log(contenedores)

contenedores.forEach(contenedor =>{
    contenedor.className ="ficha"
});