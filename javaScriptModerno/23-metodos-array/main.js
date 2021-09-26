let personas = [
    {id: 1, name:'Darinel', edad: 24, lastName:'Cigarroa', ciudad: 'CDMX'},
    {id: 2, name:'Darwin', edad: 12, lastName:'De jesus', ciudad: 'CDMX'},
    {id: 3, name:'Vera', edad: 19, lastName:'Dominguez', ciudad: 'CDMX'},
    {id: 4, name:'Emiliano', edad: 20, lastName:'Silva', ciudad: 'CDMX'},
    {id: 5, name:'Derky', edad: 22, lastName:'Wilner', ciudad: 'CDMX'},
    {id: 6, name:'Juan', edad: 26, lastName:'De La Cruz', ciudad: 'CDMX'},
];

// Reduce ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor.
console.log('*** Reduce ***');

let reduce = personas.reduce((acumulador, actual) => acumulador + actual.edad, 0);
console.log(reduce)

// Some El método omprueba si al menos un elemento del array cumple con la condición implementada por la función proporcionada.
console.log('*** SOME ***');
let some = personas.some(personas => personas.name === 'Juan');
console.log('some', some)

// Every determina si todos los elementos en el array satisfacen una condición.
console.log('*** EVERY ***');
let every = personas.every(persona => persona.ciudad === 'CDMX' );
console.log('Every',every)

// Map crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.
console.log('*** Map ***');
let map = personas.map(persona => persona.edad + 10);
console.log(map)

// Filter -> el metodo filter crea un nuevo array con todos los elementos que cumplan la condición implementada.
console.log('**** filter ****');
let filter = personas.filter(persona => persona.ciudad == 'Tuxtla');
console.log(filter);

// find ->  el metodo devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada.
console.log('**** FIND ****');
const find = personas.find(persona => persona.id === 6);
console.log(find);

// findIndex -> el metodo devuelve el índice del primer elemento de un array que cumpla con la función de prueba proporcionada.
let findIndex = personas.findIndex(persona => persona.ciudad === 'Tuxtla');
console.log('El indice es: ',findIndex)