# Análisis de rendimiento

## Proyecto: Analítica de ventas

Este docuemento analiza la complejidad temporal y espacial de las funciones del proyecto, utilizando 10000 ventas para realizar las pruebas de rendimiento.

El análisis permite comprender cómo cambia el rendimiento de las funciones cuando aumenta la cantidad de datos y cuáles pueden consumir más tiempo o memoria.


## 2. Análisis de complejidad de las funciones


| `totalVendidoInstrumentado` | Calcula el total vendido y cuenta las operaciones realizadas. | O(n) | O(1) | Recorre las ventas una sola vez, acumula el dinero en una variable y no crea arreglos adicionales. | 10.000 operaciones contabilizadas. |


| `ventaMayorInstrumentado` | Encuentra la venta de mayor valor y cuenta las operaciones realizadas. | O(n) | O(1) | Recorre las ventas una vez, compara sus valores y almacena la venta mayor en una variable. | 20.000 operaciones contabilizadas. |


| `totalPorCiudadInstrumentado` | Calcula el total vendido por cada ciudad y cuenta las operaciones realizadas. | O(n) | O(n) | Recorre las ventas una vez y guarda un acumulado por cada ciudad diferente. Después convierte los resultados al formato de pesos. | 20.004 operaciones si aparecen las 4 ciudades. |


| `primeraVenta` | Devuelve la primera venta del arreglo o null si está vacío. | O(1) | O(1) | Accede directamente a la posición 0 sin recorrer las ventas ni crear arreglos adicionales. | 1 operación contabilizada. |


| `valorVenta` | Calcula el valor de una venta multiplicando la cantidad por el precio. | O(1) | O(1) | Realiza una multiplicación sin recorrer arreglos ni crear estructuras adicionales. | 1 multiplicación por llamada; 10.000 si se ejecuta una vez por venta. |


| `totalVendido` | Calcula el dinero total de todas las ventas. | O(n) | O(1) | Recorre todas las ventas una sola vez y acumula sus valores en una variable, sin crear arreglos adicionales. | 10.000 iteraciones con 10.000 ventas. |


| `unidadesVendidas` | Calcula la cantidad total de unidades vendidas. | O(n) | O(1) | Recorre todas las ventas una sola vez y suma las cantidades en una variable, sin crear arreglos adicionales. | 10.000 iteraciones con 10.000 ventas. |


| `unidadVendida` | Devuelve la cantidad de unidades de una venta específica. | O(1) | O(1) | Accede directamente a la propiedad cantidad de una venta, sin recorrer arreglos ni crear estructuras adicionales. | 1 acceso por llamada; 10.000 accesos si se ejecuta una vez por venta. |


| `ventaMayor` | Encuentra y devuelve la venta de mayor valor. | O(n) | O(1) | Recorre las ventas, compara sus valores y guarda la referencia de la venta mayor sin crear arreglos adicionales. | 10.000 iteraciones y 20.000 llamadas a valorVenta() con 10.000 ventas. |


| `ticketPromedio` | Calcula el valor promedio de las ventas que tienen una cantidad mayor que cero. | O(n) | O(1) | Primero llama a totalVendido(), que recorre todas las ventas, y después realiza otro recorrido para contar las ventas con cantidad positiva. Solo utiliza variables acumuladoras. | 20.000 iteraciones con 10.000 ventas (2 recorridos completos). |


| `ventasPorCiudad` | Calcula el valor total vendido en una ciudad específica. | O(n) | O(1) | Normaliza el nombre de la ciudad, recorre todas las ventas y acumula el valor de las que coinciden con la ciudad buscada, sin crear arreglos adicionales. | 10.000 iteraciones con 10.000 ventas. |


| `totalVendidoM` | Calcula el dinero total vendido utilizando el método reduce(). | O(n) | O(1) | reduce() recorre todas las ventas una sola vez y acumula sus valores sin crear arreglos adicionales. | 10.000 iteraciones y 10.000 llamadas a valorVenta() con 10.000 ventas. |


| `unidadesVendidasM` | Calcula la cantidad total de unidades vendidas utilizando reduce(). | O(n) | O(1) | reduce() recorre todas las ventas una sola vez y acumula sus cantidades en una variable, sin crear arreglos adicionales. | 10.000 iteraciones y 10.000 sumas con 10.000 ventas. |


| `ventasPorCiudadM` | Calcula el valor total vendido en una ciudad utilizando filter() y reduce(). | O(n) | O(n) | filter() recorre todas las ventas y crea un arreglo con las coincidencias; después reduce() suma sus valores. | 10.000 revisiones + una iteración por cada venta de la ciudad seleccionada. |


| `totalPorCiudad` | Calcula el dinero total vendido por cada ciudad y devuelve los valores en formato de pesos. | O(n) | O(n) | Recorre las ventas, acumula los valores por ciudad y utiliza entries(), map() y fromEntries() para formatear los resultados. | 10.000 iteraciones de ventas + 4 iteraciones de map() si aparecen las 4 ciudades. |


| `unidadesPorProducto` | Calcula la cantidad total de unidades vendidas por cada producto. | O(n) | O(n) | Recorre las ventas una sola vez y guarda en un objeto las unidades acumuladas de cada producto diferente. | 10.000 iteraciones con 10.000 ventas. |


| `topProductosPorValor` | Identifica los productos con mayor valor vendido y devuelve los primeros k productos ordenados. | O(n log n) | O(n) | Recorre las ventas, agrupa los valores por producto, crea un arreglo, lo ordena con sort() y selecciona los primeros k resultados. | 10.000 iteraciones de ventas + procesamiento y ordenamiento de hasta 5 productos con el generador actual. |


| `ventaValida` | Cuenta cuántas ventas tienen una cantidad mayor que cero. | O(n) | O(1) | Recorre todas las ventas una sola vez, verifica si la cantidad es positiva y aumenta un contador sin crear arreglos adicionales. | 10.000 iteraciones y 10.000 comparaciones con 10.000 ventas. |


| `ventaInvalida` | Busca y devuelve la primera venta cuya cantidad sea igual a cero. | O(n) | O(1) | Recorre las ventas hasta encontrar una cantidad igual a cero. Si la encuentra, termina inmediatamente; de lo contrario, recorre todo el arreglo. | 10.000 iteraciones y 10.000 comparaciones con las ventas del generador actual. |


| `formatoPesos` | Convierte un valor numérico a un texto con formato de pesos colombianos. | O(1) | O(1) | Utiliza toLocaleString() para formatear un número. Como trabaja con números de JavaScript de tamaño fijo, su costo se considera constante. | 1 llamada a toLocaleString() por valor; 10.000 llamadas si se ejecuta una vez por venta. |


| `ventasDelDia` | Obtiene todas las ventas que corresponden a una fecha específica. | O(n) | O(n) | Utiliza filter() para recorrer las ventas y crear un nuevo arreglo con las que coinciden con la fecha buscada. | 10.000 iteraciones y 10.000 comparaciones con 10.000 ventas. |


| `clientesRecurrentes` | Identifica los clientes que aparecen en más de una venta, sin repetirlos en el resultado. | O(n²) | O(n) | Utiliza dos ciclos for anidados para comparar clientes y un arreglo adicional para guardar los recurrentes. includes() también realiza búsquedas en ese arreglo. | Hasta 49.995.000 comparaciones entre pares con 10.000 ventas. |


| `totalCiudadCadena` | Calcula el total vendido en una ciudad utilizando map(), filter(), map() y reduce(). | O(n) | O(n) | Realiza cuatro recorridos mediante métodos de arreglos y crea tres arreglos adicionales. | 10.000 iteraciones del primer map() + 10.000 de filter() + 2 recorridos sobre las ventas coincidentes. |


| `totalCiudadUnaPasada` | Calcula el total vendido en una ciudad utilizando un solo ciclo for. | O(n) | O(1) | Recorre todas las ventas una sola vez, compara las ciudades normalizadas y acumula los valores sin crear arreglos adicionales. | 10.000 iteraciones con 10.000 ventas. |

## Pruebas de rendimiento de clientesRecurrentes
Se realizaron pruebas utilizando console.time() y
console.timeEnd() para medir el tiempo de ejecución
de la función clientesRecurrentes con diferentes
cantidades de ventas.

### Resultados obtenidos
| Cantidad de ventas | Tiempo medido |
|---|---:|
| 1.000 | 9,093 ms |
| 2.000 | 14,77 ms |
| 4.000 | 56,261 ms |
| 8.000 | 303,511 ms |
| 16.000 | 1,056 s |
| 100.000 | 47,803 s |

### Análisis de los resultados
Al duplicar la cantidad de ventas, el tiempo de
ejecución aumenta considerablemente.

Por ejemplo:

- De 2.000 a 4.000 ventas, el tiempo aumentó
  aproximadamente 3,8 veces.

- De 8.000 a 16.000 ventas, el tiempo aumentó
  aproximadamente 3,5 veces.

Esto ocurre porque clientesRecurrentes utiliza
dos ciclos for anidados para comparar las ventas.

Su complejidad temporal es O(n²), por lo que
al duplicar la cantidad de datos, el número de
comparaciones entre pares se aproxima a cuatro
veces el anterior.

Las diferencias entre los tiempos medidos pueden
deberse a factores como la carga del computador,
la ejecución de JavaScript y la distribución
de los datos generados.


## Proyección

### Objetivo

Estimar el tiempo de ejecución de los reportes del motor de ventas al procesar 1.000.000 de registros, utilizando las mediciones realizadas con 10.000 ventas y la
complejidad temporal de cada función.

Las proyecciones son estimaciones matemáticas y no representan tiempos reales medidos con 1.000.000 de ventas.

### Fórmulas utilizadas

Para las funciones de complejidad O(n), se utiliza:

**Tiempo estimado = Tiempo medido × (nuevo n / n medido)**

Para las funciones de complejidad O(n²), se utiliza:

**Tiempo estimado = Tiempo medido × (nuevo n / n medido)²**

Estas fórmulas permiten aproximar el crecimiento del tiempo de ejecución cuando aumenta la cantidad de ventas.

### Proyección de los reportes

Para las funciones lineales, se toma como referencia la medición con 10.000 ventas.

Como la cantidad proyectada es 1.000.000, el factor de crecimiento es: 1.000.000 / 10.000 = 100

Por lo tanto, los tiempos medidos se multiplican por 100.

| Función | Complejidad | Tiempo con 10.000 ventas | Ventas proyectadas | Tiempo estimado |
|---|---|---|---|---|
| `totalVendido` | O(n) | 1,33 ms | 1.000.000 | 133 ms |
| `unidadesVendidas` | O(n) | 0,433 ms | 1.000.000 | 43,3 ms |
| `ventaMayor` | O(n) | 0,947 ms | 1.000.000 | 94,7 ms |
| `ticketPromedio` | O(n) | 4,086 ms | 1.000.000 | 408,6 ms |
| `ventasPorCiudad` | O(n) | 1,034 ms | 1.000.000 | 103,4 ms |
| `totalVendidoM` | O(n) | 0,347 ms | 1.000.000 | 34,7 ms |
| `unidadesVendidasM` | O(n) | 0,219 ms | 1.000.000 | 21,9 ms |
| `ventasPorCiudadM` | O(n) | 1,726 ms | 1.000.000 | 172,6 ms |
| `totalPorCiudad` | O(n) | 3,709 ms | 1.000.000 | 370,9 ms |
| `unidadesPorProducto` | O(n) | 3,188 ms | 1.000.000 | 318,8 ms |
| `topProductosPorValor` | O(n)* | 4,857 ms | 1.000.000 | 485,7 ms |
| `ventaValida` | O(n) | 0,706 ms | 1.000.000 | 70,6 ms |
| `ventaInvalida` | O(n) | 0,644 ms | 1.000.000 | 64,4 ms |
| `ventasDelDia` | O(n) | 1,273 ms | 1.000.000 | 127,3 ms |
| `totalCiudadCadena` | O(n) | 2,693 ms | 1.000.000 | 269,3 ms |
| `totalCiudadUnaPasada` | O(n) | 0,607 ms | 1.000.000 | 60,7 ms |

**Nota:** En `topProductosPorValor` se considera O(n) porque el generador utiliza cinco productos fijos. En el caso general, cuando aumenta la cantidad de
productos diferentes, su complejidad puede llegar a O(n log n).

### Proyección de clientesRecurrentes

La función clientesRecurrentes presenta una complejidad temporal O(n²), debido a que utiliza dos ciclos for anidados para comparar las ventas.

Para realizar la proyección se utiliza la medición real obtenida con 100.000 ventas:

- Cantidad medida: 100.000 ventas.
- Tiempo medido: 47,803 segundos.
- Cantidad proyectada: 1.000.000 ventas.
- Complejidad temporal: O(n²).

**Cálculo:**

Tiempo estimado = 47,803 × (1.000.000 / 100.000)²

Tiempo estimado = 47,803 × 100

Tiempo estimado = 4.780,3 segundos.

**Resultado: 79 minutos y 40,3 segundos.**

Esta estimación demuestra que una función cuadrática puede presentar tiempos de ejecución mucho mayores que las funciones lineales cuando aumenta el volumen
de datos.

### Comparación de versiones de totalCiudad

Se compararon dos implementaciones que calculan el mismo resultado:

- totalCiudadCadena: utiliza map(), filter(),
  map() y reduce().
- totalCiudadUnaPasada: utiliza un único ciclo for.

| Característica | totalCiudadCadena | totalCiudadUnaPasada |
|---|---|---|
| Tiempo con 10.000 ventas | 2,693 ms | 0,607 ms |
| Proyección con 1.000.000 | 269,3 ms | 60,7 ms |
| Complejidad temporal | O(n) | O(n) |
| Complejidad espacial | O(n) | O(1) |
| Arreglos adicionales | 3 | 0 |

En la prueba realizada, totalCiudadUnaPasada fue aproximadamente 4,44 veces más rápida que totalCiudadCadena.

Aunque ambas funciones tienen complejidad temporal O(n), la versión de una sola pasada utiliza menos memoria y realiza menos recorridos.

Por esta razón, se considera más eficiente para el motor de ventas.

### Análisis general de las proyecciones

Los resultados muestran que las funciones con complejidad O(n) presentan un crecimiento lineal.

Esto significa que, si la cantidad de ventas aumenta 100 veces, su tiempo de ejecución también puede aumentar aproximadamente 100 veces, manteniendo
condiciones similares.

Por otro lado, clientesRecurrentes presenta complejidad O(n²), lo que provoca un crecimiento mucho más rápido debido a las comparaciones realizadas por los ciclos anidados.

También se identificó que las funciones pueden tener la misma complejidad temporal, pero presentar tiempos de ejecución diferentes.

Esto depende de la cantidad de operaciones, los métodos utilizados y las estructuras adicionales que necesita cada implementación.

## Riesgos

### Criterios de clasificación
Las funciones se organizan de mayor a menor riesgo teniendo en cuenta los siguientes criterios:

1. **Complejudad temporal:** Las funciones O(n²) respresentan mayor riesgo porque su tiempo crece rapidamente. Las O(n) tienen un crecimiento lineal y la O(1) mantienen un costo constante.

2. **Complejidad espacial:** Las funciones O(n) pueden consumir mas memoria al aumentar los datos, mientras que las O(1) utilizan memoria constante.

3. **Tiempo de ejecución:** Se consideran las mediciones reales y las proyecciones realizadas para 1.000.000 de ventas.

4. **Estructuras adicionales:** Las funciones que crean arreglos o realizan varios recorridos pueden necesitar más recursos que las implementaciones de una sola pasada.

### Clasificación de riesgos
Se representan de mayor a menor

| Orden | Función | Tiempo | Espacio | Nivel de riesgo | Justificación |
|---|---|---|---|---|---|
| 1 | `clientesRecurrentes` | O(n²) | O(n) | Muy alto | Utiliza ciclos anidados. Su tiempo estimado con 1.000.000 de ventas es de 79 minutos y 40,3 segundos. |
| 2 | `topProductosPorValor` | O(n log n)* | O(n) | Alto | Agrupa productos y utiliza sort(). Si aumenta la cantidad de productos diferentes, también aumenta el costo del ordenamiento. |
| 3 | `totalCiudadCadena` | O(n) | O(n) | Alto | Realiza cuatro recorridos mediante métodos y crea tres arreglos adicionales. |
| 4 | `ventasPorCiudadM` | O(n) | O(n) | Alto | Utiliza filter() para crear un arreglo adicional y después reduce() para sumar sus valores. |
| 5 | `ventasDelDia` | O(n) | O(n) | Alto | Puede crear un nuevo arreglo con todas las ventas cuando coinciden con la fecha buscada. |
| 6 | `totalPorCiudad` | O(n) | O(n) | Medio | Almacena resultados por ciudad y crea estructuras adicionales para formatearlos. |
| 7 | `unidadesPorProducto` | O(n) | O(n) | Medio | Guarda un acumulado por cada producto diferente. |
| 8 | `ticketPromedio` | O(n) | O(1) | Medio | Realiza dos recorridos completos del arreglo de ventas. |
| 9 | `ventasPorCiudad` | O(n) | O(1) | Medio | Recorre todas las ventas y normaliza sus ciudades. |
| 10 | `totalCiudadUnaPasada` | O(n) | O(1) | Medio | Recorre todas las ventas una vez sin crear arreglos adicionales. |
| 11 | `ventaMayor` | O(n) | O(1) | Bajo | Recorre todas las ventas una vez y conserva únicamente la mayor. |
| 12 | `totalVendido` | O(n) | O(1) | Bajo | Realiza un recorrido y acumula los valores en una variable. |
| 13 | `unidadesVendidas` | O(n) | O(1) | Bajo | Recorre las ventas una vez y suma las cantidades. |
| 14 | `totalVendidoM` | O(n) | O(1) | Bajo | Utiliza reduce() sin crear arreglos adicionales. |
| 15 | `unidadesVendidasM` | O(n) | O(1) | Bajo | Utiliza reduce() para acumular las unidades. |
| 16 | `ventaValida` | O(n) | O(1) | Bajo | Recorre las ventas una vez y cuenta las válidas. |
| 17 | `ventaInvalida` | O(n) | O(1) | Bajo | Puede terminar antes cuando encuentra una venta inválida. |
| 18 | `valorVenta` | O(1) | O(1) | Muy bajo | Realiza una multiplicación sin recorrer ventas. |
| 19 | `unidadVendida` | O(1) | O(1) | Muy bajo | Accede directamente a la cantidad de una venta. |
| 20 | `formatoPesos` | O(1) | O(1) | Muy bajo | Formatea un valor individual sin recorrer el arreglo. |
| 21 | `primeraVenta` | O(1) | O(1) | Muy bajo | Accede directamente a la primera posición del arreglo. |

### Análisis de los principales riesgos

**Riesgo muy alto: clientesRecurrentes**
Es la función que representa el mayor riesgo de rendimiento, debido a sus ciclos anidados. Las mediciones mostraron que con 100000 ventas tardo 47,803 segundos y su proyeccion para 1000000 de ventas supera los 79 minutos.

**Riesgo alto: funciones que crean arreglos adicionales**
Funciones como totalCiudadCadena, ventasPorCiudadM y ventasDelDia necesitan memoria adicional para almacenar resultados intermedios. Aunque su complejidad temporal es O(n), pueden aumentar considerablemente el consumo de memoria cuando se procesan grandes cantidades de datos.

**Riesgo medio: funciones de agrupación**
totalPorCiudad y unidadesPorProducto almacenan información de ciudades o productos diferentes. Su memoria depende de la cantidad de valores únicos con el generador actual, esta cantidad está limitada a cuatro ciudades y cinco productos.

**Riesgo bajo: funciones lineales de una pasada**
Funciones como totalVendido, unidadesVendidas, ventaMayor y ventaValida utilizan memoria constante y recorren el arreglo una sola vez. Por eso representan un riesgo relativamente bajo frente a las funciones que crean estructuras adicionales o realizan comparaciones cuadraticas.

**Riesgo muy bajo: funciones constantes**
valorVenta, unidadVendida, formatoPesos y primeraVenta trabajan con un dato individual y no recorren el arreglo completo. Su costo se considera constante respecto a la cantidad de ventas

## Plan de optimización 
La función seleccionada para optimizar es clientesRecurrentes, ya que presenta el mayor riesgo de rendimiento del proyecto debido a su complejidad temporal O(n²).

Esta funcion identifica los clientes que aparecen en mas de una venta y evita agregarlos repetidamente al resultado.

### Que trabajo se repite?
Actualmente, la funcion utiliza dos ciclos for anidados para comprar el cliente de cada venta con los clientes de las ventas siguientes.
Esto provoca que se realicen muchas comporaciones repetitivas para identificar clientes que ya fueron encontrados anteriormente, ademas utiliza includes () para comprobar si un cliente ya esta guardado en el arreglo recurrentes.
Con 10000 ventas, los ciclos realizan 49.995.000 comparaciones entre pares de ventas, sin contar las busquedas adiciones de includes()

### Que información se podria guardar
Para evitar las comparaciones repetitivas, se prodria guardar información de los clientes a medida que se recorren las ventas.

Por ejemplo:
- los clientes que yua aparecieron anteriormente
- los clientes que ya fueron identificados como recurrentes

### Idea de mejora
Se propone utilizar un Set, una estructura de datos que permite almacenar valores unicos y consultar rapidamente si un elemento ya existe.

