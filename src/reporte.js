const ventas = require ("./datos");
const analitica = require ("./analitica");

console.log("*****************************");
console.log(" SECCION 1 - Resumen general ");
console.log("*****************************");
console.log("Se tienen 12 ventas, creamos los indicadores con ciclos, normalizamos ciudades y productos.");
console.log("agergamos versiones con métodos y funciones para agrupar y ordenar, ahora veamos los resultados.");
console.log("\n")
console.log("RESULTADOS ");
console.log("Cantidad de ventas: ",ventas.length);
console.log("Total vendido: ",analitica.formatoPesos(analitica.totalVendido(ventas)));
console.log("Total de unidades vendidas: ", analitica.unidadesVendidas(ventas));
console.log("La venta mayor fue: ",analitica.ventaMayor(ventas));
console.log("El promedio de ventas fue: ", analitica.ticketPromedio(ventas).toFixed(2));
console.log("La cantidad de ventas validas (Mayor a 0) son: ", analitica.ventaValida(ventas));
console.log("La venta que no tiene cantidades vendidas es: ", analitica.ventaInvalida(ventas));
console.log("\n")
console.log("*******************************");
console.log(" SECCION 2 - Ventas por ciudad ");
console.log("*******************************");
console.log("El total por cada ciudad es: ",analitica.totalPorCiudad(ventas));
console.log("\n")
console.log("***********************************");
console.log(" SECCION 3 - Unidades por producto ");
console.log("***********************************");
console.log("El total por cada producto es: ", analitica.unidadesPorProducto(ventas));
console.log("\n")
console.log("*******************");
console.log(" SECCION 4 - TOP 3 ");
console.log("*******************");
console.log ("El top de productos es: ", analitica.topProductosPorValor(ventas, 3));
console.log("\n")
console.log("*****************************");
console.log(" SECCION 5 - Dias con ventas ");
console.log("*****************************");
const fecha ="2026-09-01";
const ventasDelDia = analitica.ventasDelDia(ventas, fecha);

if (ventasDelDia.length === 0){
    console.log("No hubo ventas ese día", fecha);
} else {
    console.log("Ventas de la fecha", fecha, ":", ventasDelDia);
}
console.log("\n")
console.log("*********************");
console.log(" SECCION 6 - Pruebas ");
console.log("*********************");
const pruebaCiudadRepetida = [
    {ciudad: "Bogota", cantidad: 1, precio: 100},
    {ciudad: "Bogota", cantidad: 1, precio:200}
];

console.log(analitica.totalPorCiudad(pruebaCiudadRepetida));

const ventasSinVentas = analitica.ventasDelDia(ventas,"2026-09-07");
console.log("Promedio del día sin ventas:", analitica.ticketPromedio(ventasSinVentas));

