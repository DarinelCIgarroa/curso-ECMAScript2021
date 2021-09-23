let productos = [
    {
        name: 'Jabon',
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
        }, 3000);
    });
};


function comprarProducto (name)  {
    return new Promise((resolve, reject) => {
        console.log('Haciendo la compra...')
        setTimeout(() => {
            resolve({
                name: name,
            });
            reject(Error("A ocurrido un error"))
        }, 3000);
    })
};

function procesarCompra(name){
    console.log('producto comprado', name);
    productos = productos.filter(element => element.name != name);

    return productos;
}

getProductos().then(response => {
        console.log('Productos disponibles: ', response);
        return comprarProducto('Jabon');
    })
    .then(response => {
        procesarCompra(response.name)
        return comprarProducto('Shampoo')
    })
    .then(response => {
        procesarCompra(response.name)
    })
    .catch(error => console.error(error.message))
    .finally( () => {
        console.log('productos disponibles: ', productos);
        console.log('PROMESA FINALIZADA...');
    });
