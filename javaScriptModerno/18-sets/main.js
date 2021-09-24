// cuando utilizamos el set nos brinda ciertas acciones ya definidas para modificar el set y los valores dentro del set no se repiten aunque estos se asignen
let videojuegos = new Set(['Resident Evil','God Of War','Gears Of War','Call Of Duty','Jack']);

// Longitud del set
console.log(videojuegos.size);

// Añadir nluevo elemento en el set
videojuegos.add('Fornite')
videojuegos.add('Fornite')

// Eliminar un elemento del set
videojuegos.delete('Jack')

// verificaar sin un elemento existe dentro del set
console.log(videojuegos.has('Resident Evil'), videojuegos.has('Jack'));

// recorrer un set
videojuegos.forEach(element =>{
    console.log(element)
})

for(let videojuego of videojuegos){
    console.log('of', videojuego)
}


console.log(videojuegos);