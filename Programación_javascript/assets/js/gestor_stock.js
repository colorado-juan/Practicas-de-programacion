//Gestor de inventario

function crearGestorStock (stockInicial){

    return function (cantidadComprada){

        if (cantidadComprada <= stockInicial){
            stockInicial = stockInicial - cantidadComprada;
            return "Venta exitosa. Stock restante: " + stockInicial;
        }
        else {
            return "Error: stock insufiente"
        }
    };
}

    let unidades = crearGestorStock (100);

    console.log (unidades(40));
    console.log (unidades(70));