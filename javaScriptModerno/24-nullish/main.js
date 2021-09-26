// Nullish coalescing operator

function multiplicacion (numero1,numero2){
    // numero1 = (numero1 == null ? 1 : numero1)
    // numero2 = (numero2 == null ? 1 : numero2)

    numero1 = numero1 ?? 1
    numero2 = numero2 ?? 1

    return numero1 * numero2;
}

function mostrarUsuario(id,nombre){
    id = id ?? 0
    nombre = nombre ?? 'Usuario desconocido'

    return id + ' ' + nombre;
}

console.log(mostrarUsuario());
console.log(multiplicacion());