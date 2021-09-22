document.addEventListener('DOMContentLoaded', function () {
    var nombre = 'Darinel';
    var apellidos = 'Cigarrroa De Los Santos';
    var pais = 'Mexico';

    // concatenar de la manera tradicional
    var texto = nombre + ' ' + apellidos + '\n' + pais;
    console.log(texto);

    //template strings
    function datos(nombre, apellidos, pais){
        // Creamos nuestra ficha    
        var fichaTecnica = `<div class="ficha">Mi nombre es ${nombre} ${apellidos} y vivo en el país de ${pais}.</div>`;

        return fichaTecnica;
    }
    
    // Creamos una etiqueta section para añadir nuestra ficha técnica
    const section = document.createElement('section');
    // Añadimos la ficha tecnica al section
    section.innerHTML = datos('Darani','Cigarroa','México');
    section.innerHTML += datos('Danny','Worsnop','EUA');
    section.innerHTML += datos('Victor','Robles','España');
    section.innerHTML += datos('Angelika','Seleznova','Rusia');
    // cargamos un evento en el que esperamos que se cargue el doom para añadir la section al body

    document.getElementById('container').appendChild(section);
});

