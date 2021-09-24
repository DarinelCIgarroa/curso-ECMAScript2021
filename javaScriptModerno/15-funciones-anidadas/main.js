let nombre = "Darinel";

function mostrarNombre(){

    let apellido = "Cigarroa";
    function mostrarApellido(){
        let profesion = "Desarrollador web";
        function mostrarProfesion(){
            return nombre + ' ' + apellido + ' ' + profesion;
        }
        return mostrarProfesion;
    }

    return mostrarApellido;
}

console.log(mostrarNombre()()())