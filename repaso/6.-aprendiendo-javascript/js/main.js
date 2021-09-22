// var nombre = 'Darinel Cigarroa De Los Santos';
// var altura = 172;

// var completo = nombre + ' ' + altura;

// var datos = document.querySelector('#datos');

// if(altura > 190){
//     datos.innerHTML += '<p>Eres una persona alta</p>';
// }else{
//     datos.innerHTML += '<p>Eres una persona bajita</p>';
// }

// for(var i = 2018; i<=2020; i++)
// {
//     datos.innerHTML += `<p>Estamos en el año ${i}</p>`;
// }

function MuestraMiNombre(nombre, altura){
    
    var misDatos = `<h1>Soy la caja de datos</h1>
                    <h4>El nommbre es: ${nombre}</h4>
                    <h4>La altura es: ${altura}</h4>
                    `;
    return misDatos;
}

function imprimir(){
    var datos = document.querySelector('#datos');
    datos.innerHTML = MuestraMiNombre('Darinel Cigarroa De Los Santos', 170);
}

// imprimir();

var nombres = ['Darinel', 'Darani', 'Brenda', 'Darito', 'Sandy'];
var datos = document.querySelector('#datos');

nombres.forEach(item => {
    var nombres = `<ul>
    <li>${item}</li>
    </ul>`;
    datos.innerHTML += nombres;
});

for(i = 0; i < nombres.length; i++){
    document.write(nombres[i] + '<br/>');
}