const { totalVendido, ventaMayor, totalPorCiudad } = require("./analitica");
const generador = require("./generador");

const variables = [100,1000,10000,100000];
const resultados =[];

for (const n of variables){
    const ventas = generador.generarVentas(n);
    const contadorTotal = {operaciones: 0};
    const contadorMayor = {operaciones: 0};
    const contadorCiudad = {operaciones: 0};
    const contadorPrimeraVenta = {operaciones: 0};

    generador.totalVendidoInstrumentado(ventas, contadorTotal);
    generador.ventaMayorInstrumentado(ventas, contadorMayor);
    generador.totalPorCiudadInstrumentado(ventas, contadorCiudad);
    generador.primeraVenta(ventas, contadorPrimeraVenta);

    resultados.push({
        n: n,
        totalVendido: contadorTotal.operaciones,
        ventaMayor: contadorMayor.operaciones,
        totalPorCiudad: contadorCiudad.operaciones,
        primeraVenta: contadorPrimeraVenta.operaciones
    });
}

console.table(resultados);