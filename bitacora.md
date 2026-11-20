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
La ciudad Medellín tiene una en minuscula ---- normalizar antes de comparar usar toLowerCase y toUpperCase
Hay ciudades como "medellín" y en la 12 venta "Bogotá" que tienen un espacio invisble al final ---- normalizar antes de comparar usando .trim

PLAN EN PSEUDOCÓDIGO

1. totalVendido(ventas): iniciar un acumulador en 0, recorrer todas mis ventas, en cada venta calcular la cantidad por el precio y sumar ese valor al acumulador total y obtener como resultado el total.
2. unidadesVendidas(ventas): iniciar un acumulador en cero, recorrer todas las ventas, en cada venta tomar la cantidad y sumarla al acumulador y al final se obtiene el total de cantidades de todas las ventas.
3. ventaMayor(ventas): primero verificar que si tengan ventas, guardar la primera venta como la mayor y empieza a recorrer todas las ventas, en cada venta compara su valor (precio por cantidad) con el valor de la venta mayor guardado, si su valor es mayor guuarda el registro en la nueva venta mayor, al terminar se tiene como resultado la venta mayor. 
4. ticketPromedio(ventas): iniciar la cantidad de ventas válidas en cero, recorrer todas las ventas y validar las que tienen cantidad mayor a cero, calcular el total vendido y dividir el total vendido entre la cantidad de ventas mayor a cero y devolver el promedio.
5. ventasPorCiudad(ventas, ciudad): iniciar el acumulador en cero, quitar los espacios sobrantes y convertir a minuscula la ciudad que se desea buscar, recorre todas nuestras ventas, en cada venta, quita los espacios y convierte a minusculas a su ciudad, si la ciudad de la venta y la ciudad buscada coinciden entonces se suma el valor de esa venta, al final devuelve el total acumulado por esa ciudad.


RESULTADOS DE PRUEBAS
Arreglo completo: el total de ventas me tomara las 12 ventas que tengo y su resultado sera 985000.
Arreglo con un solo elemento: en el caso de la rueba solo tomara el total vendido de la posicion cero osea solo de la venta numero 1 por lo tanto el total sera 84000.
Arreglo vacío: el arreglo vacio devuelve un cero ya que el for nunca recorre el arreglo y se queda con su valor incial.

TABLA DE TRAZA
ID de venta	  Cálculo del valor	      Total vendido     acumulado	  Unidades acumuladas
1	          2 × 42.000 =            84.000	        84.000	      2
2	          1 × 26.000 =            26.000	        110.000	      3
3	          1 × 95.000 =            95.000	        205.000	      4
4	          1 × 42.000 =            42.000	        247.000	      5
5	          3 × 45.000 =            135.000	        382.000	      8
6	          2 × 26.000 =            52.000	        434.000	      10
7	          1 × 120.000 =           120.000	        554.000	      11
8	          0 × 42.000 =            0	                554.000	      11
9	          2 × 45.000 =            90.000	        644.000	      13
10	          4 × 42.000 =            168.000	        812.000	      17
11	          1 × 95.000 =            95.000	        907.000	      18
12	          3 × 26.000 =            78.000	        985.000	      21


totalVendidoM (ventas):
- Recorro todas las ventas con reduce
- No filtro ninguna venta
- Transformo cada venta en su valor usando la funcion valorVenta
- Acumulo el dinero total
- No agrupo ningun dato 

unidadesVendidasM (ventas):
- Recorro todas las ventas con reduce
- No filtro ninguna venta
- Tomo la cantidad de unidades que tiene cada venta
- Acumulo la cantidad de unidades vendidas
- No agrupo ningun dato

ventasPorCiudadM (ventas, ciudad)
- Recorro las ventas para seleccionar y guardarles en la variable ciudad buscada
- Filtro las ventas cuya ciudad coinciden despues de la normalizacion
- Transformo los nombres de las ciudad haciendo que queden en minusculas y sin espacios
- Acumulo el valor vendido en esa ciudad
- Agrupo en el resultado las ventas que coinciden con el nombre de la ciudad solicitada

totalPorCiudad (ventas)
- Recorro todas las ventas 
- No filtro ninguna venta
- Normalizo el nombre de cada ciudad
- Acumulo el precio vendido por cada ciudad
- Agrupo los totales usando la ciudad como la clave del objeto

unidadesPorProducto (ventas)
- Recorro todas las ventas
- No filtro ninguna venta
- Normalizo el nombre de cada producto
- Acumulo las unidades vendidas por producto
- Agrupo las cantidades usando el producto como la clave del objeto

topProductosPorValor (ventas, K)
- Recorro todas las ventas
- No filtro ventas , al final solo se seleccionan K productos
- Normalizo el nombre de los productos  y hago una lista vacia para agregar cada producto y su total
- Acumulo el total generado por cada producto
- Agrupo por producto, se ordenan los resultados de mayor a menos usando sort (se ordena es la lista que creamos vacia)


Se ejecuto verificar.js y todos los resultador fueron verificados que su respuesta fuera OK.



