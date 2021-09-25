// cuando utilizamos el MAps nos brinda ciertas acciones ya definidas para modificar el map y los valores dentro del map no se repiten aunque estos se asignen además los maps trabajan directamente con las keys


let videojuegos_antiguos = {
    1: 'Contra',
    2: 'Circle Cirlce',
    3: 'Mario',
    4: 'Galaxy'
};

let videojuegos = new Map (Object.entries(videojuegos_antiguos));

// Obtener un registro del map
console.log(videojuegos.get('1'));
// Añadir elementos a un map
videojuegos.set(5, "Gears Of War")
            .set(6,'Call Of Duty Mobile');
// Tamaño del map
console.log(videojuegos.size)
// Buscar elemento -> map busca por su indice si lo encuentra devuelve true
console.log(videojuegos.has('3')); 

console.log(videojuegos);