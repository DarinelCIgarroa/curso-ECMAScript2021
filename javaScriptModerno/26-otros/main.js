// Separadores númericos
let numero = 1_000_000_000;

console.log(typeof numero, numero);

// Replace y ReplaceAll
let frase = "Voy a ir a cinepolis con mi novia y despues ire con mi novia a mi cuarto :3";
let replace = frase.replace('novia', 'amiga');
console.log(replace);
let replaceAll = frase.replaceAll('novia', 'amiga');
console.log(replaceAll);

// Asignadores lógicos

let nombre = 'Darinel';
let id = 1;

nombre &&= id;

console.log(nombre)