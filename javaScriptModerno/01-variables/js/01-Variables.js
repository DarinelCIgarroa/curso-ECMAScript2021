// EcmaScript 2021 // ES12 // ES.NEXT

// Variables: var, let, const

// Var tiene un ambito global o funcional

var nombre = "Darinel Cigarroa De Los Santos";

function mostrarNombre()
{
    nombre = 'Darwin';
    var apellidos = 'Wilner';
    console.log('dentro', nombre);
    console.log('dentro', apellidos)
}

mostrarNombre();

console.log('afuera', nombre)

// console.log('afuera', apellidos);

// LET: ambito de bloque    
let pais = 'España';

function mostrarPais(){
    console.log(pais)
}
mostrarPais();

if(pais == 'España')
{
    let continente = 'Europeo';
    console.log('Estas en el continente: ' + continente);
}
// console.log('afuera', continente); Las variables let no funcionan fuera de su entorno a menos de que hayan sido como globales

for(let contador = 0; contador<10; contador++){
    console.log(contador)
}

// Esto no funcionara por que contador ha sido declarado como una varibale de tipo LET
/* console.log('fuera', contador) */

// CONST: Crear constantes o variables que su contenido no es variable
// Las variables constantes no pueden ser modificables
const edad = 18;
console.log(edad);
edad = 12; 
console.log(edad)
