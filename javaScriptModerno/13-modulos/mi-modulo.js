// export default {imprimirArray, saludo}

export default function imprimirArray(datos){
   datos.forEach(element => { 
       console.log(element)
   });

    return datos;
}

export function saludo(nombre){
    console.log('Hola te mando un saludo ', nombre);

    return nombre;
}