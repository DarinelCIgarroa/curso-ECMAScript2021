let persona = {
    nombre: 'Darinel',
    apellidos: 'Cigarroa',
    domicilio:{
        pais: 'México',
        ciudad: {
        nombre: 'Palenque',
        estado: 'Chiapas'
        }
    }
}

let comprobar_estado = persona && persona.domicilio && persona.domicilio.ciudad && persona.domicilio.ciudad.estado;
console.log(comprobar_estado);

let encademientos = (persona?.domicilio?.ciudad?.estado === undefined ? false : true);
console.log(encademientos);

