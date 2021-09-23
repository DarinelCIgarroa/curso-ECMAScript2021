let productos = [
    {
        name: 'Jabón',
        precio: 50
    },
    {
        name: 'Shampoo',
        precio: 30
    },
    {
        name: 'Sepillo',
        precio: 12
    },
    {
        name: 'Huevos',
        precio: 89
    }
];


const getProductos = () => {
    return new Promise((resolve, reject) => {
        console.log('cargando...');
        setTimeout(() => {
            resolve(productos);
            reject(Error("A ocurrido un error al cargar los productos"));
        }, 1000);
    });
};

getProductos().then(response => console.log(response))
    .catch(error => console.error(error.message))
    .finally(() => console.log("PROMESA FINALIZADA.."));
