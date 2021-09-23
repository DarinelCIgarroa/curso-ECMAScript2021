// parametros por defecto
function saludo (persona = 'Invitado', year = 0)
{
    let resta = 80 - 5; 
    return 'Hola te envio un saludo ' + persona + ' Tines ' + year + ' años.';
}

console.log(saludo('Darinel', 24));

// Funciones de flechas
let saludo2 = function (nombre = 'Darinel'){
    return 'Hola te mando un saludo ' + nombre;
}

console.log(saludo2());

let saludo3 = (nombre = 'Darwin', years = 23) => 'Hola bienvenido ' + nombre + ' Tienes ' + years + ' años';

console.log(saludo3());

let multiplicacion = (n1,n2) => console.log(n1*n2);

multiplicacion(2,5);

let tienda = {
 name: 'Cubox',
 games: ['Gears 2','Cod mobile','Fifa', 'War zone'],
 direccion: 'Fracc. Las flores M-9 L-8',
 mostrar: function(){
    return this.name
 },
 mostrar2(){
    this.games.forEach(game => {
        if(game == "Gears 2"){
            console.log('El mejor juego jamas creado antes'); 
        }
        console.log(game);
    });
 },
 mostrar3: () =>{
     // this no puede ser creada en funciones arrow function
    return tienda.name
 }
};
console.log(tienda.mostrar2());





