const catalogo =[
    {producto:"Origen Nariño 250 g" , precio: 26000},
    {producto:"Origen Huila 500 g" , precio: 42000},
    {producto:"Origen Sierra 500 g" , precio: 45000},
    {producto:"Filtros de papel x100" , precio: 18000},
    {producto:"Taza de ceramica" , precio: 35000},
    {producto:"Origen Huila 1 Kg" , precio: 79000},
    {producto:"Prensa francesa" , precio: 95000},
    {producto:"Molino manual" , precio: 120000}
]

function comboRegalo (catalogo, valor){
    for (let i=0; i< catalogo.length; i++){
        for (let j=i + 1; j < catalogo.length; j++){
            if (catalogo[i].precio + catalogo[j].precio === valor){
                return [catalogo[i], catalogo[j]];
            }
        }
    }

    return null;
}

console.log(comboRegalo(catalogo, 87000));

function comboRegaloMap (catalogo, valor){
    const preciosVistos = new Map();

    for (const producto of catalogo){
        const sobrante = valor - producto.precio;

        if(preciosVistos.has(sobrante)){
            return[preciosVistos.get(sobrante), producto];
        }

        preciosVistos.set(producto.precio, producto);
    }

    return null;
}

console.log("Combo regalo con map: ", comboRegalo(catalogo, 87000));

console.log("Combo de 87.000: ", comboRegaloMap(catalogo, 87000));
console.log("Comgo de 61.000: ", comboRegaloMap(catalogo, 61000));
console.log("Sin combinacion: ", comboRegaloMap(catalogo, 4000));

