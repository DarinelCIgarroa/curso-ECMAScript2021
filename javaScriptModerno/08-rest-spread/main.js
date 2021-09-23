 // Spread se puede usar para recorrer  un array  también se le puede pasar de esta manera  a una función
 let heroes = ['Spiderman','Batman','Superman','Mujer Maaravilla','Aquaman'];

 console.log(...heroes);

 function mostrarHeroes(heroe1,heroe2)
 {
    console.log(`
        ******* MIS DOS SUPER HEROES FAVORITOS ********
        - ${heroe1}
        - ${heroe2}
        fin.
    `);
 }

mostrarHeroes(...heroes);
console.log('Pantera','Thor',...heroes);

// REST
function peliculas(pelicula1,pelicula2, ...restoDePeliculas){
    console.log('**** PELICULAS *****')
    console.log(pelicula1);
    console.log(pelicula2);
    for(pelicula of restoDePeliculas){
        console.log(pelicula);
    }
}

peliculas('rey leon', 'nemo', 'king kong','batman','spiderman','hulk','halo');

