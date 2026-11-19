const ventas = require("./datos")

function quitarEspacios(ciudad){
    return ciudad.trim();
}

function convertirAMinuscula(ciudad){
    return ciudad.toLowerCase();
}

function convertirAMayuscula(ciudad){
    return ciudad.toUpperCase();
}


function valorVenta (venta) {

    return venta.cantidad * venta.precio;
}

function totalVendido (ventas) {

    let total= 0

    for(const venta of ventas){
        total += valorVenta(venta);
    }

    return total;
}

function unidadesVendidas (venta) {

    let unidades= 0

    for (const venta of ventas){
        unidades += venta.cantidad;
    }

    return unidades;
}

function unidadVendida (venta) {
    return venta.cantidad
}


function ventaMayor (ventas){

    if (ventas.length === 0){
        return null;
    }

    let mayor = ventas [0];

    for (const venta of ventas){

        if (valorVenta(venta) > valorVenta(mayor)) {
            mayor= venta;
        }
    }

    return mayor;
}

function ticketPromedio(ventas){

     const total= totalVendido(ventas)
     let cantidad = 0;

     for (const venta of ventas){
        if (venta.cantidad > 0){
            cantidad ++
        }
     }

     return total / cantidad;
}

function ventasPorCiudad(ventas, ciudad){

    let total= 0;
    const ciudadBuscada = convertirAMinuscula(quitarEspacios(ciudad));

    for (const venta of ventas){

        const ciudadVenta = convertirAMinuscula(
            quitarEspacios(venta.ciudad)
        );

        if (ciudadVenta === ciudadBuscada){

            total += valorVenta(venta);
        }
    }

    return total;
}

console.log(quitarEspacios(ventas[11].ciudad));
console.log(convertirAMinuscula(ventas[11].ciudad));
console.log(convertirAMayuscula(ventas[11].ciudad));
console.log("Total vendido: ", totalVendido(ventas));
console.log("Id de venta ",(ventas[0].id),"Valor vendido: " , valorVenta(ventas[0]));
console.log("Unidades vendidas: ", unidadesVendidas(ventas));
console.log("Id de venta: ",(ventas[0].id), "Unidades vendidas: ", unidadVendida(ventas[0]));
console.log("Venta mayor: ", ventaMayor(ventas));
console.log("Promedio: ", ticketPromedio(ventas));
console.log("Ventas ciudad medellin: " , ventasPorCiudad(ventas, " Medellín "));

const ventasVacias = [];
console.log("Total vendido con arreglo vacio :", totalVendido(ventasVacias));



