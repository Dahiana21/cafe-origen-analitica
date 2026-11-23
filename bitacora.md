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
//console.log("Total vendido: ", totalVendido(ventas));

Arreglo con un solo elemento: en el caso de la prueba solo tomara el total vendido de la posicion cero osea solo de la venta numero 1 por lo tanto el total sera 84000.
//console.log("Id de venta ",(ventas[0].id),"Valor vendido: " , valorVenta(ventas[0]));

Arreglo vacío: el arreglo vacio devuelve un cero ya que el for nunca recorre el arreglo y se queda con su valor incial.
//const ventasVacias = [];
//console.log("Total vendido con arreglo vacio :", totalVendido(ventasVacias));

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

Pruebas de los dos errores
Error 1: Bogota aparecia dos veces
Sintoma: Bogota aparecia dos veces en el total
Entrada que lo produce: Dos ventas con las ciudades "Bogota" y "Bogota"
Hipotesis: Los espacios sobrantes hacian que los nombres se tomaran como ciudades diferentes.
Prueba realizada: cree dos ventas con esos nombres y ejecute la funcion totalPorCiudad.
Causa: La version preliminar no habia normalizado los espacios sobrantes.
Corrección: cree la funciones quitar espacios con .trim y la funcion convertirAMinuscula .toLowerCase antes de agrupar. La prueba mostro una sola clave para Bogota y su respectivo total.

Error 2: El ticket promedio mostraba NaN
Sintoma: Al buscar un dia sin ventas, el ticket promedio mostraba NaN
Entrada que lo produce: E   l arreglo vacio que devuelve ventasDelDia para una fecha que no tiene registros.
Hipotesis: La funcion intentaba dividir entre cero
Prueba realizada: calcule el ticket promedio de un dia sin ventas, antes me daba NaN pero despues de la correccion devuelve 0.
Causa: cantidad quedaba en cero y se intentaba dividir el total entre esa cantidad.
Correccion: agregue if (cantidad === 0) return 0 antes de la division 


Prediccion: Si la cantodad de ventas osea n se multiplica por 10, las funciones totalVendidoInstrumentado y ventaMayorInstrumentado tambien se multipliquen por 10, porque recorren las ventas. En totalPorCiudadInstrumentado espero un crecimiento cercano a 10 veces ya que ademas de recorrer las ventas, visita una vez cada ciudad agrupada.

Antes de medir la tabla dije que al multiplicar n por 10, las funciones que recorren las ventas realizarian 10 veces mas operaciones. Para primeraVenta, que solo consulta el primer elemento dije que el contador se mantendria igual.

Los resultados coinciden con la prediccion ya que al aumentar diez veces n, las operaciones de las funciones que recorren las ventas tambien au8mentan 10 veces, PrimeraVenta se mantiene en una sola operacion, en totalPorCiudadInstrumentado el valor puede varias porque suma una operacion adicional por cada ciudad que encuentre en este caso son 4.

CLASIFICACION Big O
- primeraVenta es O(1) ya que no recorre el arreglo, solo revisa si el arreglo esta vacio y si tiene algun elemento solo revisa la primera posicion ventas [0], el trabajo no aumenta con n.
- totalVendidoInstrumentado es O(n) esta tiene un ciclo que recorre todas las ventas entonces si hay 100 ventas, hace 100 visitas, si hay 1000 hara las mismas 1000.
- ventaMayorInstrumentado es O(n) despues de iniciar con la primera venta, debe recorrer las demas para comparar, sus operaciones crecen proporcionalmente al numero de ventas.
- totalesPorCiudadInstrumentado es O(n) este recorre todas las  ventas y acumula sus valores por ciudad, tambien procesa las ciudades agrupadas, pero la lista de ciudades posibles es fija por eso el recorrido depende de n.

TRAZA DE ARREGLO DE 5 VENTAS
VENTA      CLIENTE
1          C01
2          C02
3          C01
4          C03
5          C02

Entonces el ciclo exterior toma una venta y el interios la compra con la que viene despues

Venta i     Ventas comparadas despues   comparaciones
1           2,3,4 y 5                   4
2           3,4 y 5                     3
3           4 y 5                       2
4           5                           1
Total                                   10

con 5 ventas la comparacion se hace 10 veces por lo tanto crece O(n a la 2)


Mide el tiempo de ejecución con console.time y console.timeEnd para n = 1.000, 2.000, 4.000, 8.000 y 16.000. 
clientesRecurrentes con 1000 ventas: 9.093ms
clientesRecurrentes con 2000 ventas: 14.77ms
clientesRecurrentes con 4000 ventas: 56.261ms
clientesRecurrentes con 8000 ventas: 303.511ms
clientesRecurrentes con 16000 ventas: 1.056s

al duplicar la canridad de ventas, claramente el tiempo de ejecucuion aumenta, los resultados varian y no siempre se cuadruplican por ejemplo de 2000 a 4000 auemnto 3,8 veces y de 8000 a 16000 aumento 3,5 veces, los ciclos anidados comparan pares de ventas y al duplicar n, la cantidad de pares se acerca cuatro veces mas.

Con tus mediciones, estima cuánto tardaría la función con 100.000 y con 1.000.000 de ventas. Ejecuta 100.000 solo si tu estimación es menor a dos minutos.

tiempo estimado =  tiempo medido * (nuevo n / n medido) a la dos

para 100000 seria 1,056 * (100000 / 16000) a la 2 eso aproximandamende da 41,25 segundos.

para 1000000 seria 1,056 * (1000000 / 16000) a la dos eso aproximadamente da 4.125 segundos, es decir como 68 minutos y 45 segundos.

Resultados de la prueba con 100000 = clientesRecurrentes con 100000 ventas: 47.803s

Los ciclos anidados realizan hasta n a la dos comparaciones entre ventas, ademas cuando dos ventas tienen el mismo cliente, se ejecura recurrentes.includes. Esta busqueda puede revisar varios clientes guardados y en el peor de los casos crecer junto con n, por eso con una distribucion de clientes desfavorable el costo de includes puede elevar el peor caso hasta O(n) a la 3.

CONCLUSION
El reporte se vuelve mas lebto porque debe revisas muchas veces las ventas para encontrar los clientes que compraron mas de una vez y a medida que el historial crezca el programa debe hacer muchas mas revisiones y búsquedas por lo cual va a tardar mas en entregar el resultado.