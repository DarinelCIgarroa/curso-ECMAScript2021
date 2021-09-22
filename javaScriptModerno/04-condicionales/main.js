// Operdor ternario
let persona = ['Darinel Cigarroa', 24]

// Forma clasica
if(persona[1] >= 18){
    console.log('Es mayor de edad');
}else{
    console.log('Es menor de edad');
}

// Operdor ternario
let edad = (persona[1] >= 18) ? 'Es mayor de edad' : 'Es menor de edad';
let existe = persona ? 'Existe' : 'No existe';
console.log(existe);
console.log(edad);

// diferencia entre == y === y != y !==

// El gual == no toma en cuenta el tipo de dato a diferencía del ===
// El gual != no toma en cuenta el tipo de dato a diferencía del !==

let anio = 2021;
let anio2 = "2021";

let test = (anio === anio2) ? 'edades iguales' : 'no son iguales';
let test2 = (anio !== anio2) ? 'edades diferentes' : 'edades iguales';
console.log(test);
console.log(test2);


