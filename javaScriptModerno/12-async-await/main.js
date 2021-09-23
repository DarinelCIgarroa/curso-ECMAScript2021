let productos = [
    {
        name: 'Jabon',
        marca: 'Zote',
        precio: 50

    },
    {
        name: 'Shampoo',
        marca: 'Savile',
        precio: 30
    },
    {
        name: 'Sepillo',
        marca: 'Colgate',
        precio: 12
    },
    {
        name: 'Huevos',
        marca: 'Castillo',
        precio: 89
    }
];


const getProductos = () => {
    return new Promise((resolve, reject) => {
        console.log('cargando...');
        setTimeout(() => {
            // resolve(productos);
            reject(Error("A ocurrido un error al cargar los productos"));
        }, 3000);
    });
};

async function getMisProductos(){
    try {
        let misProductos = await getProductos();
        console.log(misProductos)
    } catch (error) {
        console.log(error.message)
    }
}

async function getPosts()  {
    try{
        let response = await fetch("https://jsonplaceholder.typicode.com/posts");
        let data = response.json();
        console.log(data)
    }catch(error){
        console.log(error.message)
    }
}

// getMisProductos();
getPosts();

