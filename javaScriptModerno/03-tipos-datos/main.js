document.addEventListener('DOMContentLoaded', () => {
    // String
    let nombre = "Darinel Cigarroa De Los Santos"
    // Number
    let number = 120;
    // Boolean 1 -> true | 0 -> false
    let boolean = true;
    // Null
    let vacio = null;
    // Undefined
    let indefinido = undefined;
    // Array
    let array = ['Daro', 'Darwin', 'Derky'];
    // JSON JavaScript Object Notation | Objetos literales
    let json =
        [{
            id: 1, name: 'Nemo', anio: 2002, director: 'Felix', mostrar: () => {
                return ` **** LA PELÍCULA DE LA SEMANA **** 
                    <br>    nombre: ${this.name} 
                    <br>    anio: ${this.anio} 
                    <br>    director: ${this.director}`
            }
        },
        {
            id: 2, name: 'El rey león', anio: 2000, director: 'Martin', mostrar: () => {
                return ` **** LA PELÍCULA DE LA SEMANA **** 
                    <br>    nombre: ${this.name} 
                    <br>    anio: ${this.anio} 
                    <br>    director: ${this.director}`
            }
        }];

    // console.log(typeof nombre, typeof number, typeof boolean, typeof array, typeof json, typeof vacio, typeof indefinido, array, json);
    // document.write(json[1].mostrar())
    
    // Agregar una nueva propiedad y un atributo
    json[0].pais = 'México';
    json[0]['categoria'] = 'Infantil';
    // Eliminar una propiedad
    delete json[0].director;
    // Igualar a null
    json[0].pais = null;
    // Ver atributos disponibles
    for(var valor in json[0]) {
        let datos = json[0][valor];
        if(datos !== null && typeof datos !== 'function'){
            console.log(datos)
        }
    }

    // Symblos | Los symbols son tipos de datos primitivos puede ser cualquier tipo de datos es un identificador ú nico
    let animal = 'Tigre';
    let animal2 = Symbol('tigre');

    console.log('comparacion:', animal2 === animal);

    let escuela = { id: 1, nombre: 'Sec. Palenque', capacidad: 1540, estudiantes: 1150, anio: 1960 };
    
    let id = Symbol ('ojito');
    escuela[id] = 2;

    console.log(escuela, escuela[id]);

}, false);