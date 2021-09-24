const coche = (function () {
    let _marca, _acelerar;

    function setMarca(marca){
        _marca = marca;

        return marca;
    }

    function getMarca(){
        return _marca;
    }

    function setAcelerar(){
        _acelerar++;

        return _acelerar;
    }

    function getAcelerar(){
        return _acelerar;
    }

    function frenar(){
        _acelerar--;

        return _acelerar;
    }

    return {
        setMarca,
        getMarca,
        setAcelerar,
        getAcelerar,
        frenar
    }

})();

coche.setMarca('Ferrari');
console.log(coche.getMarca());

coche.setAcelerar();
coche.setAcelerar();
coche.setAcelerar();
console.log(coche.getAcelerar());
