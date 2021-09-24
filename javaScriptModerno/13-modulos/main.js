import  imprimirArray, {saludo} from "./mi-modulo.js";

console.log("*** Archivo main de mi proyecto ***");

let nombres = ["Darinel","Darwin","Vera","Derky"];

let [darinel, darwin, vera, derky] = nombres;

imprimirArray(nombres);
saludo(...nombres);


