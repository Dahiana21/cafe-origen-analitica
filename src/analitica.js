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

function unidadesVendidas (ventas) {

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

     if(cantidad === 0){
        return 0;
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

//console.log(quitarEspacios(ventas[11].ciudad));
//console.log(convertirAMinuscula(ventas[11].ciudad));
//console.log(convertirAMayuscula(ventas[11].ciudad));
//console.log("Total vendido: ", totalVendido(ventas));
//console.log("Id de venta ",(ventas[0].id),"Valor vendido: " , valorVenta(ventas[0]));
//console.log("Unidades vendidas: ", unidadesVendidas(ventas));
//console.log("Id de venta: ",(ventas[0].id), "Unidades vendidas: ", unidadVendida(ventas[0]));
//console.log("Venta mayor: ", ventaMayor(ventas));
//console.log("Promedio: ", ticketPromedio(ventas));
//console.log("Ventas ciudad medellin: " , ventasPorCiudad(ventas, " Medellín "));

//const ventasVacias = [];
//console.log("Total vendido con arreglo vacio :", totalVendido(ventasVacias));


function totalVendidoM (ventas){

    return ventas.reduce((total, venta) => { //reduce recorre el arreglo uno a la vez
        return total + valorVenta(venta);
    }, 0);
}

//console.log("Total vendido con metodo: ", totalVendidoM(ventas));

function unidadesVendidasM (ventas){

    return ventas.reduce((total,venta) => {
        return total + venta.cantidad;
    }, 0);
}

//console.log("Unidades vendidas con metodo: ", unidadesVendidasM(ventas));

function ventasPorCiudadM (ventas, ciudad){

    const ciudadBuscada = convertirAMinuscula(quitarEspacios(ciudad));

    const nuevoArreglo = ventas.filter((venta) => {
        const ciudadVenta = convertirAMinuscula(quitarEspacios(venta.ciudad));

        return ciudadVenta === ciudadBuscada;
    });

    return nuevoArreglo.reduce((total,venta) => {
        return total + valorVenta(venta);
    }, 0);
}

//console.log("Ventas ciudad medellin con metodo: " , ventasPorCiudadM(ventas, " Medellín "));

function totalPorCiudad (ventas){

    const totales = {};

    for (const venta of ventas){
        const ciudad = convertirAMinuscula(quitarEspacios(venta.ciudad));

        totales[ciudad] = (totales[ciudad] || 0) + valorVenta(venta);
    }

    const totalesFormato = Object.entries(totales).map(([ciudad, total]) => {
        return [ciudad, formatoPesos(total)];
    })

    return Object.fromEntries(totalesFormato);

}

//console.log("El total por cada ciudad es: ",totalPorCiudad(ventas));

function unidadesPorProducto (ventas){
    const totales = {};

    for (const venta of ventas){
        const producto = convertirAMinuscula(quitarEspacios(venta.producto));

        totales [producto] = (totales[producto] || 0) + venta.cantidad;
    }

    return totales;
}

//console.log("El total por cada producto es: ", unidadesPorProducto(ventas));

function topProductosPorValor (ventas, k){ //La k representa la cantidad de productos que quiero ver

    const totales ={}; //Objeto vacio donde se guardara cada producto como propiedad

    for (const venta of ventas){
        const producto = venta.producto.trim().toLowerCase(); //se normaliza el nombre del producto 

        if (totales[producto] === undefined){ //Inicia en cero si es la primera vez que encuentra el producto 
            totales[producto] = 0;
        }

        totales[producto] += valorVenta(venta);
    }

    const listaVacia = []; //crea una lista vacia

    for (const producto in totales){ // recorre cada producto guardado en totales
        listaVacia.push({
            producto: producto,
            total: totales[producto]
        }); //agrega a la lista un objeto con estos dos datos el nombre y el total acumulado
    }

    listaVacia.sort((a,b) => b.total - a.total);

    const productosSeleccionados = listaVacia.slice(0, k);

    const productoFormato = productosSeleccionados.map((producto) => {
        return {
            producto: producto.producto,
            total: formatoPesos(producto.total)
        };
    });

    return productoFormato;
}

//console.log ("El top de productos es: ", topProductosPorValor(ventas, 3));

function ventaValida(ventas) {
    let validas = 0;
    for (const venta of ventas) {
        if (venta.cantidad > 0) {
            validas++;
        }
    } return validas;
}

function ventaInvalida (ventas){
    
    for(const venta of ventas){
        if (venta.cantidad === 0){
            return venta;
        }
    }
}

function formatoPesos(precio){
    return "$ "+ precio.toLocaleString("es-CO", {
         maximumFractionDigits: 2
    });
}

function ventasDelDia (ventas, fecha){
   const ventasDia = ventas.filter((venta) => {
    return venta.fecha === fecha;
   });

   if (ventasDia.length === 0){
    return [];
   }

   return ventasDia;
}

function clientesRecurrentes (ventas){
    const recurrentes = [];

    for (let i=0; i<ventas.length; i++){
        for (let j = i + 1; j < ventas.length; j++){
            if(
                ventas[i].cliente === ventas[j].cliente &&
                !recurrentes.includes(ventas[i].cliente)
            ){
                recurrentes.push(ventas[i].cliente)
            }
        }
    }

    return recurrentes;
}

function totalCiudadCadena (ventas, ciudad){
    const ciudadBuscada = convertirAMinuscula(quitarEspacios(ciudad));

    return ventas.map((venta) => {
        return {
            venta: venta,
            ciudad: convertirAMinuscula(quitarEspacios(venta.ciudad))
        };
    })

    .filter((dato) => dato.ciudad === ciudadBuscada)
    .map ((dato) => valorVenta(dato.venta))
    .reduce((total, valor) => total + valor, 0)
}

function totalCiudadUnaPasada (ventas, ciudad){
    const ciudadBuscada = convertirAMinuscula(quitarEspacios(ciudad));
    let total = 0;

    for (const venta of ventas){
        const ciudadVenta = convertirAMinuscula(quitarEspacios(venta.ciudad));

        if (ciudadVenta === ciudadBuscada){
            total += valorVenta(venta);
        }
    }

    return total;
}

function clientesRecurrentesSet(ventas){
    const vistos = new Set();
    const recurrentes = new Set();

    for (const venta of ventas){
        if(vistos.has(venta.cliente)){
            recurrentes.add(venta.cliente);
        } else {
            vistos.add(venta.cliente);
        }
    }

    return [...recurrentes];
}

function comprasPorCliente(ventas){
    const compras = new Map();

    for (const venta of ventas){
        const cliente = venta.cliente;

        if(compras.has(cliente)){
            compras.set(cliente, compras.get(cliente) + 1);
        } else {
            compras.set(cliente, 1);
        }
    }

    return compras;
}

function clientesRecurrentesMap (ventas){
    const compras = comprasPorCliente(ventas);
    const recurrentes = [];

    for (const [cliente, cantidad] of compras){
        if (cantidad > 1){
            recurrentes.push(cliente);
        }
    }

    return recurrentes;
}

function productoEstrellaPorCiudad (ventas){
    const ciudades = new Map();

    for (const venta of ventas){
        const ciudad = venta.ciudad.trim().toLowerCase();
        const producto = venta.producto.trim().toLowerCase();

        if (!ciudades.has(ciudad)){
            ciudades.set(ciudad, new Map());
        }

        const productos = ciudades.get(ciudad);

        if (productos.has(producto)){
            productos.set(producto, productos.get(producto) + 1);
        } else {
            productos.set(producto, 1);
        }
    }

    const estrellas = new Map();
    
    for (const [ciudad, productos] of ciudades){
        let mayor = 0;
        let estrella = "";
        
        for (const [producto, cantidad] of productos){
            if (cantidad > mayor){
                mayor = cantidad;
                estrella = producto;
            }
        }

        estrellas.set(ciudad, estrella);
    }

    return estrellas;
}

function primerCliente (ventas){
    const clientes = new Map();

    for (const venta of ventas){
        const cliente = venta.cliente;

        if (clientes.has(cliente)){
            clientes.set(cliente, clientes.get(cliente) + 1);
        } else {
            clientes.set(cliente, 1 );
        }
    }

    for (const venta of ventas){
        if (clientes.get(venta.cliente) === 1){
            return venta.cliente;
        }
    }

    return null;
}

module.exports={
    valorVenta,
    totalVendido,
    unidadesVendidas,
    ventasPorCiudad,
    totalVendidoM,
    unidadesVendidasM,
    ventasPorCiudadM,
    ventaMayor,
    totalPorCiudad,
    unidadesPorProducto,
    topProductosPorValor,
    ticketPromedio,
    ventaValida,
    ventaInvalida,
    formatoPesos,
    ventasDelDia,
    clientesRecurrentes,
    totalCiudadCadena,
    totalCiudadUnaPasada,
    clientesRecurrentesSet,
    comprasPorCliente,
    clientesRecurrentesMap,
    productoEstrellaPorCiudad,
    primerCliente
};