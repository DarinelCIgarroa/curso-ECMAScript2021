// Creando la clase coche
class Coche {
    // Propiedad privada
    #nPuertas = 4;
    //Propiedad protegida
    _nPlazas = 2;
    // Un constructor es el primer metodo que se ejecuta al invocar una clase
    constructor(marca = "Jetta",modelo = "Aire",color = "Negro",velocidad = 0){
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.velocidad = velocidad;
    }
    // Metodos get y set
    get numeroPuertas(){
        return this.#nPuertas;
    }
    get numeroPlazas(){
        return this._nPlazas;
    }
    set numeroPlazas(plazas){
        this._nPlazas = plazas;
        
        return this._nPlazas;
    }
    getMarca() {
        return this.marca;
    }
    
    setMarca(marca){
        this.marca = marca
        
        return this.marca;
    }
    
    getModelo(){

        return this.modelo;
    }

    setModelo(modelo){
        this.modelo = modelo;

        return this.modelo;
    }
    
    getColor(){
        
        return this.color;
    }

    setColor(color){
        this.color = color;

        return this.color;
    }

    getVelocidad(){

        return this.velocidad
    }

    setVelocidad(velocidad){
        this.velocidad = velocidad;

        return this.velocidad;
    }
    
    // Métodos / acciones o las funcionalidades del objeto

    aumentarVelocidad(){
        this.velocidad += 1;

        return this.velocidad;
    }

    bajarVelocidad(){
        this.velocidad -= 1;

        return this.velocidad;
    }
    // Metados estaticos / los metodos estaticos se pueden llamar sin necesidad de instanciar a la clase
    // normal mente los metodos estaticos se utilizan para crear funciones utiles o funciones rapidas
    // Metodos estaticos
    static saludar(nombre)
    {
        return "Hola " + nombre;
    }


}

class Moto extends Coche {
    constructor(marca,modelo,color,velocidad,cilindrada){
        super(marca,modelo,color,velocidad,cilindrada);
        this.cilindros = cilindrada
    }

    saltar(){
        return 'Has saltado una rampa'
    }
}

let moto = new Moto('suzuki','gt-4','azul',100,2);
moto.numeroPlazas = 10;
console.log(moto.getMarca())
console.log(moto.saltar())
// Crear un objeto
const coche1 = new Coche('Ferrari','As-20','Rojo', 320);
coche1.bajarVelocidad();
console.log('Marca:', coche1.marca, 'Modelo:', coche1.modelo, 'Color del coche:', coche1.color, 'velocidad', coche1.velocidad);
console.log(coche1.getMarca());
coche1.numeroPlazas = 10;
console.log(coche1)
const coche2 = new Coche();
coche2.setMarca('Audi');
coche2.setModelo('R8');
coche2.setColor('Cromado');
coche2.setVelocidad(350);
console.log(coche2)
// Acceder a una clase estatica
console.log(Coche.saludar('Darinel'));
// Visibilidad de las clases
// Publica nPuertas = 4 / se puede acceder desde cualquier parte del proyecto
// console.log(coche2.nPuertas);
// Privada #nPuertas / solo puede ser accesible a traves de un metodo que solo este dentro de esta misma clase y no desde clases que la hereden o desde fuera de esta misma clase
console.log(coche2.nPuertas); // undefined
console.log(coche2.numeroPuertas);
// propiedades protegidas / se pueden accder a elllas dentro de la misma clase y clases que la hereden
console.log(coche2.numeroPlazas);