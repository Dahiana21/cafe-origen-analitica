const ventas = require("./datos");
const analitica = require("./analitica");

const totalCiclo = analitica.totalVendido(ventas);
const totalMetodo = analitica.totalVendidoM(ventas);

if (totalCiclo === totalMetodo){
    console.log("OK");
} else {
    console.log ("Diferente");
}

const unidadesCiclo = analitica.unidadesVendidas(ventas);
const unidadesMetodo = analitica.unidadesVendidasM(ventas);

if(unidadesCiclo === unidadesMetodo){
    console.log("OK");
} else {
    console.log("Diferente");
}

const ventaciudadCiclo = analitica.ventasPorCiudad(ventas, "medellín");
const ventaciudadMetodo = analitica.ventasPorCiudadM(ventas, "Medellín");

if(ventaciudadCiclo === ventaciudadMetodo){
    console.log("OK");
} else {
    console.log("Diferente");
}