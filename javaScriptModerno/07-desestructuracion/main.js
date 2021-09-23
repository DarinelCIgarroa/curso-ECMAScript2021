
// Desestructurar Array
let frutas = ['Manzana','Pera','Naranja','Toronja','Sandia'];
let [manzana,pera,naranja,toronja,sandia] = frutas;

// Desestructurar String
let usuario = "Darinel Cigarroa google 29/03/1997 México";
let [nombre, apellido, web, fecha, ciudad] = usuario.split(" ");

// Crear varias variables
let lenguajes = "JS", framework = "Angular", editor = "VSC";

// Utilidad parametros funcionales
function mostrarUsuario( { nombre="", apellido="", ciudad="México" } ) {
    console.log(nombre + ' ' + apellido + ' ' + ciudad)
};

mostrarUsuario({nombre:'Daro', apellido:'Cigarroa', ciudad:'Palenque'});