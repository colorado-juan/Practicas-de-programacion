//-----------------------------------------------------------\\
function espacioTexto(){

    const texto = "Hola";
    let resultado = "";

    for (let i=0;i < texto.length; i++){

        resultado += texto[i] + " ";
    }

    return resultado;
};

//------------------//Calculadora de descuento----------------\\

function calculadoraDescuento (precio,porcentaje){
    const descuento = (precio * porcentaje) / 100;
    const total = precio- descuento;

    return {
        precioOriginal: precio,
        descuento : descuento,
        total: total,
    }

};


console.log(espacioTexto())
console.log(calculadoraDescuento(200,20));
