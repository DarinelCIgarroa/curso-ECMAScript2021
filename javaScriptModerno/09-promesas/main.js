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
        setTimeout( () => {
            resolve(productos)
        }, 200);
    });
};

getProductos().then(response => console.log(response));
