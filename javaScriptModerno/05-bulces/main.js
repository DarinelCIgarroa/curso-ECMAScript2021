let nombres = ['Darinel', 'Arcos', 'Chumi', 'Darwin', 'Derky'];

// Bucle clasico
for(let i = 0; i < nombres.length; i++)
{ 
    console.log(nombres[i]);
}

// For of -> El of recorre el contenido de mis indices
for(let nombre of nombres){
    console.log('for of', nombre)
}

// For in -> va direncto al indice también se usa para recorrer los json
for(let indice in nombres){
    console.log('for in', indice, nombres[indice])
}

// foreEach
nombres.forEach((nombre_actual,indice,array) => console.log('foreach',indice,nombre_actual,array));

// Iterables
let frutas = [{nombre: 'Manzana', color:'Roja'},{nombre: 'Pera', color: 'Verde'}];
console.log('IN')
for(item in frutas)
{
    console.log(frutas[item])
}
console.log('OF')
for(item of frutas)
{
    console.log(item)
}