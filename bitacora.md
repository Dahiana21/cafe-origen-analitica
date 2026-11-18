Diccionario de datos
Propiedad: id --> tipo: numbre --> significado: Numero que se encarga de identificar cada venta.

Propiedad: fecha --> tipo: string --> significado: es un texto que representa la fecha en la que se realizo la venta.

Propiedad: cliente --> tipo: string --> significado: es el identificador de cada cliente que realizo una compra.

Propiedad: producto --> tipo: string --> significado: es el nombre del producto vendido

Propiedad: ciudad --> tipo: string --> significado: nombre de la ciudad donde se registro la venta

Propiedad: cantidad --> tipo: number --> significado: numero de unidades del producto que registro la venta.

Propiedad: precio --> tipo: number --> significado: precio de una unidad del producto.

Casos bordes detectados
La venta 8 tiene cantidad 0 ---- no cuenta con el ticket
Hay clientes reptidos como el C01-C02 Y C03 ---- es válido
La ciudad Medellín tiene una en minuscula ---- normalizar antes de comparar
Hay ciudades como "medellín" y en la 12 venta "Bogotá" que tienen un espacio invisble al final ---- normalizar antes de comparar


