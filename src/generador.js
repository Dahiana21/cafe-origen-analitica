const analitica = require ("./analitica");

const productos = [
    "Origen Huila 500 g",
    "Origen Nariño 250 g",
    "Prensa francesa",
    "Origen Sierra 500 g",
    "Molino manual"
];

const precios = [42000,26000,95000,45000,120000];
const ciudades = ["Medellín", "Bogotá", "Cali", "Pereira"];

function generarVentas(n){
    const ventas = [];

    if (n <= 0){
        return ventas;
    }

    const maximoClientes = Math.max (1, Math.floor(n/3));
    const cantidadClientes = Math.floor(Math.random() * maximoClientes) + 1;
    const clientes = [];

    for (let i=1; i <= cantidadClientes; i++){
        let cliente = "C";

        if (i<10){
            cliente += "0";
        }

        cliente += i;
        clientes.push(cliente);
    }

    for (let i = 0; i < n; i++){
        const indiceProducto =  Math.floor(Math.random() * productos.length);
        const indiceCiudad = Math.floor(Math.random() * ciudades.length);
        const indiceCliente = Math.floor(Math.random() * clientes.length);
        const cantidad = Math.floor(Math.random()*5) + 1;
        const venta = {
            id: i + 1,
            fecha: "2026-09-01",
            cliente: clientes[indiceCliente],
            producto: productos[indiceProducto],
            ciudad: ciudades[indiceCiudad],
            cantidad: cantidad,
            precio: precios[indiceProducto]
        };

        ventas.push(venta);
    }

    return ventas;
}



function totalVendidoInstrumentado(ventas, contador){
    let total = 0;

    for (const venta of ventas){
        contador.operaciones++;
        total += analitica.valorVenta(venta);
    }

    return total;
}

function ventaMayorInstrumentado (ventas, contador){
    contador.operaciones++;
    if(ventas.length === 0){
        return null;
    }

    contador.operaciones++;
    let mayor = ventas[0];

    for(let i=1; i < ventas.length; i++){
        const venta = ventas[i];

        contador.operaciones++;
        contador.operaciones++;

        if (analitica.valorVenta(venta)>analitica.valorVenta(mayor)){
            mayor = venta;
        }
    }

    return mayor;
}

function totalPorCiudadInstrumentado(ventas, contador){
    const totales = {};

    for (const venta of ventas){
        contador.operaciones++;
        const ciudad = venta.ciudad.trim().toLowerCase();

        contador.operaciones++;
        if(totales[ciudad] === undefined){
            totales[ciudad]=0;
        }

        totales[ciudad] += analitica.valorVenta(venta);
    }

    const totalesFormato = Object.entries(totales).map(([ciudad, total]) => {
        contador.operaciones++;
        return [ciudad, analitica.formatoPesos(total)];
    });

    return Object.fromEntries(totalesFormato);
}

function primeraVenta (ventas, contador){
    contador.operaciones++;

    if (ventas.length === 0) {
        return null;
    }

    return ventas [0];
}

module.exports = {
    generarVentas,
    totalVendidoInstrumentado,
    ventaMayorInstrumentado,
    totalPorCiudadInstrumentado,
    primeraVenta
};

const ventasPrueba = generarVentas(10);

console.log("Ventas generadas: ");
console.log(ventasPrueba);
console.log ("Cantidad de ventas: ", ventasPrueba.length);

const contadorTotal = {operaciones: 0};
const total = totalVendidoInstrumentado(ventasPrueba, contadorTotal);

console.log("Total vendido: ", total);
console.log("Operaciones de total vendido: ", contadorTotal.operaciones );

const contadorMayor = {operaciones: 0};
const mayor = ventaMayorInstrumentado(ventasPrueba, contadorMayor);

console.log("Venta mayor: ", mayor);
console.log("Operaciones de venta mayor: ", contadorMayor.operaciones);

const contadorCiudades = {operaciones:0};
const totalesPorCiudad = totalPorCiudadInstrumentado(ventasPrueba, contadorCiudades);

console.log("Toral por ciudad: ", totalesPorCiudad);
console.log("Operaciones: ", contadorCiudades.operaciones);

const pruebas = generarVentas(10000);
const resultadoCadena = analitica.totalCiudadCadena(pruebas, "Bogotá");
const resultadoUnaPasada = analitica.totalCiudadUnaPasada(pruebas , "Bogotá");
console.log ("\n");
console.log("Diferencia entre dos funciones en totalPorCiudad usando dos funciones diferentes")
console.log("Resultado con cadena: ", resultadoCadena);
console.log("Resultado una pasada: ", resultadoUnaPasada);
console.log("Son iguales?: ", resultadoCadena === resultadoUnaPasada);


