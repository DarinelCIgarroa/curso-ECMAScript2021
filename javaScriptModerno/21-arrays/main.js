let personas = ['Darinel', 'Darwin', 'Vera', 'Juan', 'Derky', 'Zincri', 'Angel', 'Leo'];

// Buscar en elemento en el array y devolverlo - find
let busqueda = personas.find(persona => persona === "Darinel");

// Buscar un elemento en el array y devolver el indice - findIndex
let busqueda2 = personas.findIndex(persona => persona === 'Juan');
console.log(busqueda2);

// Crear un objeto basansodome en un objeto
let array_letras = Array.from("Darinel");
console.log(array_letras);

let array_numeros_cuadrados = Array.from([1,2,3,4,5,6,7,8], numero => Math.pow(numero, 2));
console.log(array_numeros_cuadrados)

// Comprobar si existe un elemento dentro de un array - includes devuelve true o false
console.log(personas.includes('Darinel'));

// Crear un nuevo array de acuerdo a los elementos que cumplen una condición
personas = personas.filter(persona => persona != 'Leo');
console.log(personas);