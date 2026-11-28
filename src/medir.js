const analitica = require("./analitica");
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

console.log("Operaciones de los indicadores: ")
console.table(resultados);

const variables2 = [1000,2000,4000,8000,16000,100000];
for (const n of variables2){
    const ventasGeneradas = generador.generarVentas(n);
    const nombre = `clientesRecurrentes con ${n} ventas`;
    
    console.time(nombre);
    analitica.clientesRecurrentes(ventasGeneradas);
    console.timeEnd(nombre);
}

const cantidades = [1000,10000,100000];
for (let i=0; i < cantidades.length; i++){
    const cantidad = cantidades[i];
    const ventas = generador.generarVentas(cantidad);

    console.log("Prueba con ", cantidad, "ventas");

    if(cantidad <= 10000){
        console.time("Original");
        analitica.clientesRecurrentes(ventas);
        console.timeEnd("Original");
    }

    console.time("Set");
    analitica.clientesRecurrentesSet(ventas);
    console.timeEnd("Set");

    console.time("Map");
    analitica.clientesRecurrentesMap(ventas);
    console.timeEnd("Map");
}