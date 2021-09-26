let titulo = "El rey leon";
let genero = "Accion";
let duracion = "2 horas";

const peliculas = {
    titulo,
    genero,
    duracion,
    [titulo]: 'La mejor pélicula',
    mostrar(){
        return this.titulo + ' ' + this.genero
    }
}

// let peliculas = [
//     {title: 'Batman', genero: 'Super Heroes'},
//     {title: 'Super Man', genero: 'Super Heroes'},
//     {title: 'Spiring', genero: 'animada'}
// ];

console.log(Object.values(peliculas));

Object.entries(peliculas).forEach(([clave, valor]) => {
    console.log(clave,valor)
});
