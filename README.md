# 30-dias-de-JavaScript


Durante 6 semanas continuas estaremos aprendiendo desde 0 las características de JavaScript con la peculiaridad de aprender conceptos nuevos diariamente con ejercicios prácticos y cursos de tus profesores favoritos. Te estaremos acompañando en todo tu proceso de diferentes maneras, empezando por un canal exclusivo en Discord para participantes de este reto, al igual que tendremos sesiones semanales de Q&A para despejarte tus dudas o ayudarte con algo en lo que te encuentres estancado o estancada.

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

# Día 1

## Variables
Las ```variables``` son ubicaciones de almacenamiento en la memoria de la computadora que se utilizan para guardar valores que se pueden utilizar más tarde en el programa. En JavaScript, existen 3 formas de declarar variables: var, let y const.

Las variables declaradas con var y let pueden cambiar su valor a lo largo del tiempo, mientras que las variables declaradas con constson constantes y no pueden cambiar su valor una vez asignado.

Y en JavaScript las puedes usar de la siguiente forma:

```js
// Variables que pueden cambiar con el tiempo
var edad = 30
let hora = 12

// Constante que no pueden cambiar
const nombre = "Platzi"
```
En el ejemplo anterior declaramos e inicializamos todas las variables ¿Que quiere decir esto?

Básicamente el proceso de  declarar una variable es especificar su nombre sin asignarle ningún valor, esto solo se puede hacer con variables (let y var) debido a que const al no poder cambiar su valor, no podremos inicializarla sin declararla al mismo tiempo.

```js
// Declaración
var edad
let hora
```
Mientras que el inicializar una variable es el asignarles cualquier valor.
```js
// Declaración
var edad
let hora

// Inicialización
edad = 30
hora = 12

// Declaración & inicialización
const name = "Platzi"
```
Como te habrás dado cuenta, en JavaScript, no es necesario declarar explícitamente el tipo de datos de una variable al asignarle un valor. En su lugar, el lenguaje determina el tipo de datos de la variable en tiempo de ejecución basándose en el valor que se le asigna. Esto hace que JavaScript sea un lenguaje débilmente tipado.

Es importante tener cuidado al trabajar con variables débilmente tipadas, ya que pueden traer problemas si no mantienes las variables del tipo que esperas que sean. Por ejemplo, si intentas realizar una operación matemática con una variable que contiene un valor de texto en lugar de un número, obtendrás un error. Por lo tanto, es importante asegurarse de que las variables contengan los valores adecuados para el tipo de operación que se está realizando.

## Funciones
Las funciones son una de las características más importantes y poderosas de JavaScript. Una función es un bloque de código que se puede reutilizar en diferentes partes de un programa.

Las funciones se usan para realizar una tarea específica y pueden recibir uno o más argumentos (también conocidos como parámetros dependiendo la situación) y pueden devolver un valor como resultado.

Para declarar una función en JavaScript, se utiliza la palabra clave function, seguida del nombre de la función y una lista de parámetros entre paréntesis. El cuerpo de la función se escribe entre llaves y contiene el código que se ejecutará cuando se llame a la función.
```js
function miFuncion(parametro1, parametro2) {
  // Código de la función
}
```
Para llamar a una función, simplemente escribes su nombre seguido de paréntesis.
```js
miFuncion(valor1, valor2);
```
Las funciones también pueden devolver un valor como resultado usando la palabra clave return. El valor devuelto se puede asignar a una variable o utilizar en una expresión.
```js
function suma(a, b) {
  return a + b;
}

let resultado = suma(2, 3);
console.log(resultado); // Imprime 5
```
Aunque esta es la forma tradicional que se le conoce como “Function declaration”en JavaScript existen otras 3 [formas de hacer uso de funciones](https://platzi.com/clases/1814-basico-javascript/26295-cuando-utilizar-una-funcion-declarativa-y-una-expr/).

1. IIFE (Immediately Invoked Function Expression): una función que se autoejecuta inmediatamente después de ser definida. Esta función es anónima y no se puede reutilizar.
```js
(function () {
  console.log("Soy una IIFE");
})();
```
2. Función expresión: una función que se define como una expresión y puede ser asignada a una variable. Esta función también puede ser llamada y reutilizada.
```js
let saluda = function () {
  console.log("Hola");
};

saluda();
```
3. Arrow function: una función que se define utilizando la sintaxis () =>. Esta función es una forma más concisa de escribir funciones y es útil para funciones de una sola línea.
```js
let saluda = () => console.log("Hola");

saluda();
```
## Sintaxis básica
Ya que conoces este par de conceptos de JavaScript es importante que tomes en cuenta los siguientes aspectos para no tener typos en tu código o errores comunes.

### Punto y coma ;
El uso de punto y coma es totalmente opcional, a excepción de algunos casos especiales como en ciclos o cuando se quiere separar declaraciones en una misma línea.

Un código así 👇
```js
const saludo = "Hola"
const nombre = "Platzi"
const saludoCompleto = saludo + " " + nombre
console.log(saludoCompleto) // "Hola Platzi"
```
Hace exactamente lo mismo que el siguiente 👇
```js
const saludo = "Hola";
const nombre = "Platzi";
const saludoCompleto = saludo + " " + nombre;
console.log(saludoCompleto); // "Hola Platzi"
```
Como consejo, si vas a usar el punto y coma desde un inicio trata de mantenerlo en cada linea para que por cuestiones de legibilidad se vea bien.

### Corchetes o llaves {}
Las llaves {} se utilizan para encapsular bloques de código, funciones, bucles y otros elementos en JavaScript. También se utilizan para declarar objetos, un tipo de dato que veremos en la siguiente clase.
```js
const carro = {
  color: "rojo",
  llantas: 4,
  marca: "Audi"
}
```
Es importante tener cuidado al trabajar con punto y coma y llaves en JavaScript, ya que el olvido o el uso incorrecto de estos elementos puede llevar a errores en el código.

# Tipos de datos
En JavaScript, existen distintos tipos de datos que podemos utilizar para almacenar información. A continuación, presentamos una descripción de los más populares:

## Numbers
Los números son un tipo de dato que representa valores numéricos. En JavaScript, no existe un tipo de dato específico para representar números enteros o números con decimales, todos los números son tratados de la misma manera.

Podemos crear números utilizando la notación numérica, que incluye dígitos y puede incluir un punto decimal para representar números con decimales.
Ejemplo:
```js
const edad = 30;
const pi = 3.14;
const salario = 1500.50;
```

También podemos utilizar la notación científica para representar números muy grandes o muy pequeños.

Ejemplo:

```js
const numeroGrande = 1e6; // 1 millón
const numeroPequeño = 1e-6; // 0.000001
```

## Strings

Las cadenas de texto (strings) son un tipo de dato que representa una secuencia de caracteres. En JavaScript, podemos crear strings utilizando comillas simples o comillas dobles.

Ejemplo:
```js
const nombre = "Platzi";
const apellido = 'Academy';
```

Podemos concatenar dos strings utilizando el operador +:
```js
console.log("Hola, " + nombre + " " + apellido + "!"); // "Hola, Platzi Academy!"
```

También podemos utilizar la notación template literal para crear strings que incluyen variables y expresiones:

```js
console.log(`Hola, ${nombre} ${apellido}!`); // "Hola, Platzi Academy!"
```

JavaScript proporciona una serie de métodos para manipular strings. Algunos de los métodos más comunes son:

* ```length```: Devuelve la longitud de un string.
* ```toUpperCase()```:: Devuelve el string en mayúsculas.
* ```toLowerCase()```:: Devuelve el string en minúsculas.
* ```substring()*```: Devuelve una parte del string.

```js
const nombre = "Platzi";

console.log(nombre.length) // 6
console.log(nombre.toUpperCase()) // PLATZI
console.log(nombre.toLowerCase()) // platzi
console.log(nombre.substring(0, 5)) // Platz
```
## Objects

Los objetos son estructuras de datos que nos permiten almacenar un conjunto de pares clave-valor. Estos pares son conocidos como propiedades del objeto.

Para crear un objeto, debemos utilizar las llaves {} y especificar las propiedades del objeto mediante la sintaxis nombrePropiedad: valorPropiedad. Los valores de las propiedades pueden ser de cualquier tipo de dato, incluyendo otros objetos.

```js
const persona = {
  nombre: "Fulanita",
  platziRank: 9567,
	cursoFavorito: {
		nombre: "Básico de JavaScript",
		clases: 30,
		duración: "2 horas"
	}
};
```
Para acceder a las propiedades de un objeto, podemos utilizar el operador . o la notación de corchetes ```[]```.

Ejemplo:
```js
console.log(persona.nombre); // "Fulanita"
console.log(persona.cursoFavorito.nombre); // "Básico de JavaScript"
console.log(persona["platziRank"]); // 9567
```

## Booleanos
Los valores booleanos (boolean) son un tipo de dato que representa un valor verdadero o falso. En JavaScript, podemos utilizar la palabra clave true para representar el valor verdadero y false para representar el valor falso.

Ejemplo:
```js
const cursoCompletado = true;
const lecturaCompletada = false;
```

No pasa nada si no recuerdas el tipo de dato con el que estás trabajando, dentro de JavaScript existe la instrucción typeof la cual te dirá el nombre del tipo de dato con el que estás trabajando

Ejemplo:
```js
typeof "#PlatziChallenge" // "string"
typeof 30 // number
typeof true // boolean
typeof {} // "object"

// 👀 con los arrays nos devuelve que son un objeto
// Más adelante descubriremos la razón
typeof [] // "object"
```


## Null


El valor null es un tipo de dato que representa un valor vacío o nulo. En JavaScript, podemos utilizar la palabra clave null para representar el valor nulo. A menudo, utilizamos null para representar un valor que aún no ha sido inicializado o para representar un valor que no tiene sentido en el contexto actual.

Ejemplo:
```js
const nombre = null;
console.log(nombre); // imprime "null"
```

## Undefined
El valor undefined es un tipo de dato que representa un valor que aún no ha sido asignado o que no tiene un valor válido. En JavaScript, podemos utilizar la palabra clave undefined para representar el valor undefined.

Ejemplo:
```js
let nombre;
console.log(nombre); // imprime "undefined"
```

## Diferencias entre Null y Undefined
Es importante tener en cuenta que null y undefined son valores diferentes en JavaScript. null representa un valor intencionalmente vacío, mientras que undefined representa un valor que aún no ha sido asignado o que no tiene un valor válido.

Por ejemplo, podríamos utilizar null para representar que un gatito aún no tiene dueño:
```js
let gatito = {
  nombre: "Michi",
  edad: 3,
  dueño: null
};

console.log(gatito.dueño); // "null"
```

Por otro lado, podríamos utilizar undefined para representar que un gato aún no ha sido adoptado:
```js
let gato;
console.log(gato); // "undefined"
```

Es importante tener en cuenta que null y undefined son valores diferentes en JavaScript y deben ser tratados de manera diferente.

## Symbol
Los símbolos son un tipo de dato único en JavaScript que se utiliza para crear identificadores únicos. Cada vez que se crea un símbolo, se genera un nuevo identificador único, lo que lo hace ideal para usar como claves de objetos o para identificar elementos de manera única en una aplicación.

Ejemplo:
```js
const simbolo = Symbol();

let perrito = {
  nombre: "Firulais",
  edad: 3,
  [simbolo]: "Identificador único"
};

console.log(perrito[simbolo]); // "Identificador único"

```

También puedes proporcionar una descripción opcional al crear un símbolo, lo que puede ser útil para depurar y mantener el código:
```js
const simbolo = Symbol("Identificador único de gatitos");
```

Es importante tener en cuenta que los símbolos son valores únicos, lo que significa que dos símbolos creados de manera independiente nunca serán iguales, incluso si tienen la misma descripción. Esto hace que los símbolos sean ideales para usar como identificadores únicos en tus futuras aplicaciones.

## BigInt

Los bigint son un nuevo tipo de dato en JavaScript que se usa para representar números enteros de un tamaño mayor al que puede manejar JavaScript de manera nativa. Los bigint se escriben con el sufijo n, por ejemplo: 12345678901234567890n.

Aquí tienes un ejemplo de cómo usar bigint en JavaScript:
```js
const numeroGrande = 12345678901234567890n;

console.log(numeroGrande + 1n); // 12345678901234567891n
console.log(numeroGrande * 2n); // 2469135780246913578n
console.log(numeroGrande / 3n); // 411218936707805260n
```

Es importante tener en cuenta que los bigint solo pueden ser usados para operaciones matemáticas y no pueden ser usados con operadores de comparación, como == o ===. En su lugar, debes usar los métodos BigInt.asIntN y BigInt.asUintN para hacer comparaciones entre bigint y números normales.

También es importante tener en cuenta que los bigInt no son compatibles con todas las funciones y métodos de JavaScript que aceptan números, por lo que debes asegurarte de verificar la documentación de la función o método que quieres usar antes de intentar usar bigInt con ellos.

# DIA 2

## Operadores

Los ```operadores``` son elementos de lenguaje que nos permiten realizar cálculos y comparaciones en JavaScript. Aquí hay una lista de los operadores más comunes:

### Operadores aritméticos
Los operadores aritméticos nos permiten realizar operaciones matemáticas básicas, como la suma, la resta, la multiplicación y la división.

```js
// Suma
console.log(1 + 2); // 3

// Resta
console.log(5 - 2); // 3

// Multiplicación
console.log(3 * 4); // 12

// División
console.log(10 / 2); // 5

// Módulo (devuelve el resto de una división)
console.log(10 % 3); // 1
```

### Operadores de asignación

Los operadores de asignación nos permiten asignar valores a variables.
```js
let x = 10;
x += 5; // x = x + 5
console.log(x); // 15

x -= 3; // x = x - 3
console.log(x); // 12

x *= 2; // x = x * 2
console.log(x); // 24

x /= 4; // x = x / 4
console.log(x); // 6
```

### Operadores de comparación

Los operadores de comparación nos permiten comparar valores y nos devuelven true o false según el resultado de la comparación.

```js
console.log(1 < 2); // true
console.log(2 > 1); // true
console.log(1 <= 2); // true
console.log(2 >= 1); // true
console.log(1 !== 2); // true
```

Entre estos existen 2 operadores de igualdad los cuales son ```==``` y ```===```. El primero realiza una comparación de valor y el segundo, además de comparar el valor, también verifica el tipo de dato. Es recomendable utilizar siempre === ya que, en un lenguaje como JavaScript, que es debilmente tipado, comparar solo el valor puede llevar a resultados inesperados.

```js
console.log(1 == "1") // true
console.log(1 === "1") // false
```

En el primer caso, ```1 == "1"``` devuelve ```true``` ya que solo se está comparando el valor y no el tipo de dato. Sin embargo, en el segundo caso, ```1 === "1"``` devuelve ```false``` ya que está comparando tanto el valor como el tipo de dato y, aunque ambos son iguales, uno es de tipo número y el otro de tipo string.

### Operadores lógicos

Los operadores lógicos son aquellos que nos permiten realizar operaciones lógicas, es decir, comparaciones y evaluaciones. En JavaScript tenemos disponibles los siguientes operadores lógicos:

1. ```AND (&&)```: Este operador lógico evalúa si ambas expresiones son verdaderas. Si ambas expresiones son verdaderas, devuelve true, de lo contrario, devuelve false. Por ejemplo:
```js
let edad = 25;
let mayorDeEdad = edad >= 18;

if (edad >= 18 && mayorDeEdad) {
  console.log("Eres mayor de edad");
} else {
  console.log("Aún eres menor de edad");
}
```

2. ```OR (||)```: Este operador lógico evalúa si al menos una de las expresiones es verdadera. Si al menos una de las expresiones es verdadera, devuelve true, de lo contrario, devuelve false. Por ejemplo:

```js
let edad = 25;
let tieneIdentificacion = true;

if (edad >= 18 || tieneIdentificacion) {
  console.log("Puedes entrar al bar");
} else {
  console.log("No tienes la edad o la identificación suficiente para entrar al bar");
}
```

3. ```NOT (!)```: Este operador lógico invierte el valor de la expresión. Si la expresión es verdadera, devuelve false, de lo contrario, devuelve true. Por ejemplo:

```js
let esFinDeSemana = true;

if (!esFinDeSemana) {
  console.log("A trabajar");
} else {
  console.log("A disfrutar del fin de semana");
}
```

## Alcance de las variables

En JavaScript no todas las variables son iguales y es importante entender cómo funciona el alcance de las variables.

En este lenguaje existen dos tipos de scope (alcance) de variables: global y local.

Las variables declaradas fuera de cualquier función tienen alcance global, lo que significa que pueden ser accedidas y modificadas desde cualquier parte del código. Por otro lado, las variables declaradas dentro de una función tienen alcance local, lo que significa que solo pueden ser accedidas y modificadas dentro de esa función.

Es importante tener en cuenta que cuando se declara una variable con var dentro de una función, esta variable tendrá alcance global, aunque esté dentro de una función. Sin embargo, si se declara con let o const, la variable tendrá alcance local.

Otro concepto importante a entender es el de ```hoisting```, que se refiere al comportamiento de javascript de mover las declaraciones de variables al inicio del ámbito en el que están declaradas. Esto significa que si se declara una variable dentro de una función, javascript la moverá al inicio de la función, incluso antes de que se ejecute cualquier línea de código dentro de la función.

Por ejemplo, si tenemos el siguiente código:

```js
function miFuncion() {
  console.log(x);
  var x = 10;
}

miFuncion();
```
Javascript movería la declaración de x al inicio de miFuncion, lo que significa que la línea console.log(x) daría como resultado ```undefined```, ya que x aún no ha sido inicializada en ese momento.

## Hoisting y coerción

El hoisting es un comportamiento de JavaScript en el que las declaraciones de variables y funciones son movidas al comienzo del ámbito actual antes de que cualquier otro código sea ejecutado. Esto significa que las declaraciones de variables y funciones pueden ser utilizadas antes de haber sido declaradas en el código.

Por ejemplo, si tenemos el siguiente código:
```js
console.log(x);
var x = 5;
```

JavaScript interpreta este código como si estuviera escrito de la siguiente manera:
```js
var x;
console.log(x);
x = 5;
```

Esto significa que cuando se ejecuta el código, el valor de x será undefined en la primera línea, ya que la declaración de x ha sido movida al comienzo del ámbito.

Sin embargo, es importante tener en cuenta que las asignaciones no son movidas al comienzo del ámbito, sólo las declaraciones. Esto significa que el siguiente código dará un error:

```js
console.log(x);
x = 5;
```

Por otro lado, coercion es el proceso en el cual JavaScript intenta convertir automáticamente un valor de un tipo a otro, para que puedan ser comparados o operados. Esto puede dar lugar a algunos resultados inesperados si no se tiene en cuenta.

Por ejemplo, si comparamos un número con un string:
```js
console.log(1 == "1")
```

El resultado sería verdadero, ya que JavaScript intenta convertir el string “1” en el número 1 antes de compararlos.

Otro ejemplo es el siguiente:
```js
console.log(true == 1)
```

Aquí, el valor booleano true es convertido en el número 1 antes de compararlos, dando como resultado verdadero.

Es importante tener en cuenta estos comportamientos de JavaScript y asegurarse de que los valores estén en el tipo correcto antes de realizar comparaciones o operaciones. Esto puede ser logrado mediante funciones específicas de tipo o usando el operador estricto ```===``` en lugar del operador de igualdad ```==```.


# Día 3

## Condicionales

La **estructura de control “if”** sirve para tomar decisiones en función de si una determinada condición es verdadera o falsa. El código dentro de un bloque “if” sólo se ejecutará si la condición es verdadera, mientras que el código en un bloque “else” sólo se ejecutará si la condición es falsa.

```js
La sintaxis básica de una estructura “if” es la siguiente: 

if (condicion) {
  // código a ejecutar si la condición es verdadera
} else {
  // código a ejecutar si la condición es falsa
}
```

Una de las formas más comunes de utilizar una estructura “if” es comparando una variable con un valor específico. Por ejemplo:

```js
let edad = 25;
if (edad >= 18) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}
```

En este ejemplo, se establece una variable “edad” con un valor de 25. Luego, se utiliza una estructura “if” para comprobar si la edad es mayor o igual a 18. Si es verdadero, se imprimirá “Eres mayor de edad” en la consola, de lo contrario, se imprimirá “Eres menor de edad”.

También es posible utilizar varias condiciones en una estructura “if” utilizando la palabra clave “else if”. Por ejemplo:

```js
let calificacion = 75;

if (calificacion >= 90) {
  console.log("Obtuviste una A");
} else if (calificacion >= 80) {
  console.log("Obtuviste una B");
} else if (calificacion >= 70) {
  console.log("Obtuviste una C");
} else {
  console.log("Obtuviste una calificación insuficiente");
}
```

En este ejemplo, se establece una variable “calificacion” con un valor de 75. Luego, se utiliza una estructura “if-else if” para determinar en qué rango de calificación se encuentra. Si la calificación es mayor o igual a 90.


## Switch

La estructura de control switch permite ejecutar diferentes bloques de código en función de un valor específico. Es una alternativa a la estructura if-else para casos en los que hay varios valores posibles para una variable y se desea ejecutar diferentes acciones en función de cada valor manteniendo legible el código.

La sintaxis básica de una estructura “switch” es la siguiente:

```js
switch (variable) {
	case valor1:
	  // código a ejecutar si variable es igual a valor1
	  break;
	case valor2:
	  // código a ejecutar si variable es igual a valor2
	  break;
	default:
	  // código a ejecutar si variable no es igual a ninguno de los valores anteriores
}
```

La variable especificada en el “switch” se compara con cada uno de los casos especificados. Si se encuentra una coincidencia, se ejecutará el código dentro del bloque correspondiente. Es importante notar que se utiliza la palabra clave “break” al final de cada bloque de código para indicar que se debe salir del “switch” una vez que se ha ejecutado el código correspondiente. Si no se incluye “break”, el código seguirá ejecutándose en los siguientes casos.

Por ejemplo, el siguiente código imprimirá un mensaje diferente en la consola dependiendo del valor de la variable “dia”:
```js
const dia = "lunes";
switch (dia) {
  case "lunes":
    console.log("Hoy es lunes");
    break;
  case "martes":
    console.log("Hoy es martes");
    break;
  case "miercoles":
    console.log("Hoy es miércoles");
    break;
  default:
    console.log("Hoy no es lunes, martes o miércoles");
}
```
En este ejemplo, la variable “dia” tiene un valor de “lunes”, por lo que se ejecutará el código dentro del primer bloque y se imprimirá “Hoy es lunes” en la consola. Si la variable “dia” tuviera un valor diferente, como “martes” o “miercoles”, se ejecutaría el código dentro del bloque correspondiente y se imprimiría el mensaje correspondiente en la consola. Si la variable “dia” tuviera un valor que no coincide con ninguno de los casos especificados, se ejecutaría el código dentro del bloque “default” y se imprimiría el mensaje “Hoy no es lunes, martes o miércoles” en la consola.

También es posible hacer diferentes validaciones dentro los casos del switch. Por ejemplo:

```js
let numero = "12";
switch (true) {
  case numero > 100:
    console.log("El valor es mayor a 100");
    break;
  case numero % 2 === 0:
    console.log("El valor es multiplo de 2");
    break;
  default:
    console.log("El valor no cumple con ninguna de las características");
}
```

# Ciclos

Los ciclos son una herramienta esencial dentro de JavaScript. Sirven para repetir un bloque de código varias veces, dependiendo de una condición específica. Los ciclos son fundamentales para la automatización de tareas y la eficiencia en el código.

Existen dos tipos de ciclos en JavaScript: los ciclos ```“for”``` y los ciclos ```“while”```. Ambos tienen una sintaxis similar, pero se utilizan en situaciones diferentes.

El ciclo ```“for”``` es utilizado para repetir un bloque de código un número específico de veces. Su sintaxis básica es la siguiente:

```js
for (inicialización; condición; actualización) {
  // código a ejecutar
}
```

La inicialización se ejecuta una sola vez al principio del ciclo, la condición se evalúa en cada iteración antes de ejecutar el código dentro del ciclo y la actualización se ejecuta al final de cada iteración. Por ejemplo, el siguiente ciclo “for” imprimirá los números del 1 al 10 en la consola:
```js
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
```

También existen los ciclos **for-in** y ```for-of```. El ciclo for-in se utiliza para recorrer las propiedades de un objeto, mientras que el ciclo for-of se utiliza para recorrer los elementos de una colección como un array.

El uso de un ciclo **“for in”** es la siguiente:
```js
const user = {
	name: "Pepito",
  age: 20,
  role: "JavaScript developer"
}

for (const prop in user) {
	console.log(user[prop])
}

// "Pepito"
// 20
// "JavaScript developer

```

En este ejemplo, se establece una variable ```“prop”``` que se utilizará para recorrer las propiedades del objeto. El valor de cada propiedad se imprimirá en la consola.

Por otro lado, la sintaxis de un ciclo for-of es la siguiente:
```js
const technologies = ["js", "html", "node", "php"]

for (const element of technologies) {
  console.log(element)
}

// "js"
// "html"
// "node"
// "php"
```

En este ejemplo, se establece una variable “element” que se utilizará para recorrer cada elemento en el array. Cada valor se imprimirá en la consola.

Por otro lado, el ciclo **while** se utiliza para repetir un bloque de código mientras se cumpla una determinada condición. Su sintaxis básica es la siguiente:
```js
while (condición) {
  // código a ejecutar
}
```

La condición se evalúa antes de ejecutar el código dentro del ciclo y si la condición es verdadera, el código se ejecutará de nuevo. Por ejemplo, si quisiéramos hacer una implementación del ejemplo anterior con los números del 1 al 10, quedaría de la siguiente manera:
```js
let i = 1;
while (i <= 10){
  console.log(i);
  i++;
}
```

Existe una extensión del ```while``` en javascript llamado ```do-while``` que tiene una pequeña diferencia, el código dentro del ciclo se ejecutará al menos una vez antes de evaluar la condición. Por ejemplo:
```js
let i = 1;
do {
	console.log(i);
	i++;
	} while (i <= 10);
  ```

# Día 4

## Arrays

Los arrays en JavaScript son un tipo de objeto que permite almacenar una colección de valores. Estos valores pueden ser de cualquier tipo, como números, cadenas, objetos, incluso otros arrays. Los arrays son muy útiles para almacenar y manejar datos en una sola estructura.

La sintaxis para crear un array en JavaScript es la siguiente:

```js
  let miArray = [valor1, valor2, valor3]
  ```
  Por ejemplo, el siguiente código crea un array llamado “colores” que contiene tres valores: “rojo”, “azul” y “verde”:
    ```js
  let colores = ["rojo", "azul", "verde"];
    ```
    
Los arrays tienen un índice numérico que comienza en 0. Por lo tanto, el primer elemento del array tiene el índice 0, el segundo tiene el índice 1, y así sucesivamente. Por ejemplo, para acceder al primer elemento del array “colores”, se utilizaría la sintaxis ```colores[0]```.
    
 Uno de los métodos más populares en los arrays de JavaScript es ```push()```. Este método permite agregar un nuevo elemento al final del array. Por ejemplo:
```js   
    colores.push("amarillo");
console.log(colores); // ["rojo", "azul", "verde", "amarillo"]
```
 Otro método popular es **pop()**, que permite eliminar el último elemento del array. Por ejemplo:
 ```js     
    colores.pop();
console.log(colores); // ["rojo", "azul", "verde"]
```
     
El método **map()** permite aplicar una función a cada elemento del array y devolver un nuevo array con los valores modificados. Por ejemplo:
```js      
     const numeros = [1, 2, 3, 4, 5];
const cuadrados = numeros.map(function(numero) {
  return numero * numero;
});
console.log(cuadrados); // [1, 4, 9, 16, 25]
```
El método “reduce()” permite combinar todos los elementos del array en un solo valor. Por ejemplo:
```js 
const suma = numeros.reduce(function(acumulador, numero) {
  return acumulador + numero;
}, 0);
console.log(suma); // 15
```
Existen muchos otros métodos populares en los arrays de JavaScript, como ```filter()```, ```sort()``` y ```slice()```, por los cuales no te debes preocupar por ahora, más adelante tendrás una sección completa acerca de estos métodos.

## Objetos

Los objetos en JavaScript son un tipo de dato que permite almacenar una colección de pares clave-valor. Estos pares representan las propiedades y sus valores correspondientes de un objeto. Los objetos son similares a los arrays en cuanto a que también son una forma de almacenar y manejar datos, pero en lugar de tener un índice numérico, tienen una clave de string.

La sintaxis para crear un objeto es la siguiente:
```js 
const miObjeto = {
	clave1: valor1, 
	clave2: valor2, 
	clave3: valor3
};
```

Por ejemplo, el siguiente código crea un objeto llamado ```curso``` que tiene cinco propiedades: ```Clases```, ```Duración```, ```Nombre```, ```detalles``` y ```comentarios```:
```js 
const curso = {
	nombre: "30 días de JS", 
	duración: "20 horas", 
	clases: 100,
	detalles: {
		tecnologias: ["js", "node", "web browser"],
		calificacion: 5,	
	},
	comentarios: ["¡Excelente curso!", "Javscript no es lo mismo que Java", "hola"]
};
```
Para acceder a las propiedades de un objeto, se utiliza la notación de punto o la notación de corchetes. Por ejemplo, para acceder al nombre del curso anterior se utilizaría la siguiente sintaxis:
```js 
console.log(curso.nombre); // "30 días de JS"
console.log(curso["nombre"]); // "30 días de JS"

```

Además de las propiedades, los objetos también pueden tener métodos, que son funciones asociadas a un objeto. Por ejemplo, el siguiente código crea un objeto ```carro``` con una propiedad ```marca``` y un método ```encender```
```js 
let carro = {
  marca: "Toyota",
  encender: function() {
    console.log("El carro ha sido encendido");
  }
};
```

Para llamar a un método de un objeto, se utiliza la notación de punto. Por ejemplo:
```js 
carro.encender(); // "El carro ha sido encendido"
```

JavaScript también tiene una característica llamada prototype, que permite agregar propiedades y métodos a un objeto de forma dinámica. Esto permite a los desarrolladores crear nuevos objetos a partir de objetos existentes y heredar sus propiedades y métodos, pero esto lo verás mucho más adelante, por el momento no tienes de que preocuparte.

# Día 5 - Checkpoint
En este desafío, debes crear una función que encuentre el palíndromo más largo en una lista de palabras.

Recibirás un único parámetro: un array de palabras. Si no hay ningún palíndromo en la lista, la función debe devolver null. Si hay más de un palíndromo con la misma longitud máxima, debes devolver el primer palíndromo encontrado en la lista.

Un palíndromo es una palabra que se puede leer de la misma manera tanto hacia adelante como hacia atrás.

Ejemplo 1:

Input: findLargestPalindrome(["racecar", "level", "world", "hello"])

Output: "racecar"

Ejemplo 2:

Input: findLargestPalindrome(["Platzi", "javascript", "html", "css"])

Output: null


# Día 6

## Reasignación y redeclaración

En JavaScript, la reasignación y la redeclaración son dos conceptos diferentes relacionados con las variables.

Reasignación se refiere al proceso de darle un nuevo valor a una variable existente. Por ejemplo:
```js
let numero = 5;
numero = 10;
```

En este ejemplo, la variable “numero” se ha reasignado con un nuevo valor de 10. Es importante notar solo su valor.

Además, es importante mencionar que las variables declaradas con la palabra clave “const” no pueden ser reasignadas, ya que su valor es constante. Si se intenta reasignar una variable declarada con “const”, se generará un error en el código. Por ejemplo:
```js
const numero = 5;
numero = 10; // Uncaught TypeError: invalid assignment to const
```

Por otro lado, redeclaración se refiere al proceso de crear una nueva variable con el mismo nombre de una variable existente. Por ejemplo:
```js
let numero = 5;
let numero = 10;

// Uncaught SyntaxError: redeclaration of let numero
```

En este ejemplo, se está intentando crear una nueva variable ```numero``` con un valor de 10, pero esto generará un error ya que no se puede redeclarar una variable con el mismo nombre en el mismo ámbito. Sin embargo, es posible redeclarar una variable utilizando la palabra clave ```var``` en lugar de ```let``` o ```const```.

```js
var numero = 5;
var numero = 10;

// Esto funciona sin problema ✅
```

Ten en cuenta que la reasignación y la redeclaración tienen implicaciones diferentes en el código y deben utilizarse con cuidado para evitar errores y confusiones en el código. Es recomendable utilizar ```let``` o ```const``` en lugar de ```var``` para evitar la redeclaración accidental de variables.

## Modo estricto

JavaScript cuenta con un modo estricto que es un conjunto de reglas y características que proporcionan una mayor seguridad y control en el código. El modo estricto se activa mediante la palabra clave “use strict” al comienzo de un archivo o al principio de una función.

Una de las principales ventajas de utilizar el modo estricto es que ayuda a evitar errores comunes en el código. Por ejemplo, en modo estricto, no se puede redeclarar una variable con el mismo nombre en el mismo ámbito, lo que evita confusiones y errores en el código.

```js
"use strict";
let numero = 5;
let numero = 10; 
// ❌ Generará un error en modo estricto, ya que no se puede redeclarar 
// una variable con el mismo nombre en el mismo ámbito
```
Además, en modo estricto, no se puede cambiar el tipo de dato de una variable al momento de hacer la reasignación.

```js
function miFuncion() {
  "use strict";
  let numero = 5;
  numero = "10"; // Generará un error en modo estricto, ya que no se puede cambiar el tipo de dato de una variable
}
```

El modo estricto también proporciona mejoras en la performance del código. Por ejemplo, en modo estricto, el código se ejecuta más rápido ya que no se realizan algunas comprobaciones y conversiones que se realizan en modo no estricto.

En resumen, el ```modo estricto``` es una herramienta útil en la programación en JavaScript que proporciona una mayor seguridad, control y performance en el código. Es recomendable utilizar el modo estricto en todos los proyectos de JavaScript para evitar errores comunes y problemas de seguridad. Sin embargo, es importante tener en cuenta que el modo estricto puede generar algunos problemas al trabajar con código existente que no está escrito en modo estricto, por lo que se debe utilizar con precaución.

# Día 7

## Debugging y manejo de errores

Dentro de JavaScript los errores van a ser tus mejores amigos, por lo que debes aprender a lidiar con estos mediante técnicas como el debugging.

Debugging es el proceso de encontrar y corregir errores en el código. Es una parte importante del desarrollo de software y es esencial para garantizar que el código funcione correctamente. En JavaScript, hay varias herramientas y técnicas disponibles para ayudar en el debugging y manejo de errores.

Una de las herramientas más comunes para manejar errores en JavaScript es el bloque try-catch. Este bloque permite ejecutar código que podría generar un error, y capturar ese error en caso de que ocurra. Por ejemplo:

```js
try {
  //Código que podría generar un error
} catch (error) {
  //Código que se ejecuta si ocurre un error
  console.log(error);
}
```

El bloque ```try-catch``` permite ejecutar código que podría generar un error de forma segura, y capturar el error para poder manejarlo de manera adecuada. Por ejemplo, si se está tratando de dividir un número por cero, se puede capturar el error y mostrar un mensaje de error al usuario en lugar de tener que detener el programa.

La forma más común de manejar errores es a través de la sentencia throw new Error.

La sentencia throw se utiliza para generar una excepción o error en tiempo de ejecución, y ```new Error``` crea un nuevo objeto de error con un mensaje personalizado. Este mensaje es útil para proporcionar información sobre el error y para facilitar la solución de problemas.

Aquí hay un ejemplo de código que muestra cómo utilizar throw new Error para generar un error y capturarlo con un bloque try-catch:

```js
try {
  const num = 100;
  if (num > 50) {
    throw new Error("El número es mayor a 50");
  }
} catch (error) {
  console.error(error.message);
}
```

En este ejemplo, si el número num es mayor a 50, se lanzará una excepción con el mensaje ```El número es mayor a 50```. El bloque catch capturará el error y lo imprimirá en la consola.

Es importante tener en cuenta que el manejo de errores con throw new Error solo se recomienda para errores en tiempo de ejecución y no para errores de sintaxis.

Otra herramienta útil para el debugging en JavaScript es el comando ```debugger```. Este comando se utiliza para detener la ejecución del código en un punto específco, lo que permite inspeccionar variables y entender el estado del programa en ese momento. Por ejemplo:

```js
let numero = 5;
debugger;
let resultado = numero / 2;
```

En este ejemplo, la ejecución del código se detiene en la línea con ```debugger``` y se pueden inspeccionar las variables y entender el estado del programa en ese momento (puedes ejecutar este código desde la consola del navegador y ver que pasa 👀).

La consola de JavaScript también es una herramienta útil para el debugging. La consola proporciona varios comandos para inspeccionar el código y entender el estado del programa. Por ejemplo, el comando ```console.log()``` permite imprimir valores en la consola para inspeccionarlos, el comando ```console.table()``` permite ver los valores de un objeto o array en forma de tabla, entre otros.

## Programación funcional

La programación funcional es un enfoque de programación que se centra en el uso de funciones y evita el uso de estado y efectos secundarios. En JavaScript, la programación funcional se basa en el uso de funciones puras, es decir, funciones que no tienen efectos secundarios y siempre devuelven el mismo resultado dado el mismo input.

Una de las características principales de la programación funcional es el uso de **first-class functions** (funciones como primer ciudadano), es decir, se consideran como valores y pueden ser asignados a variables, pasados como argumentos a otras funciones y retornadas como resultado de otras funciones. Esto permite crear funciones más pequeñas y reutilizables que se pueden combinar para crear funciones más complejas.

Por ejemplo, podemos crear una función **add** que toma dos números como argumentos y devuelve su suma:

```js
function add(a, b) {
  return a + b;
}
```

Luego, podemos asignar esta función a una variable y pasarla como argumento a otra función, como **makeOperation**:

```js
const operation = add;

function makeOperation(operation, num1, num2) {
  return operation(num1, num2);
}

console.log(makeOperation(operation, 2, 3)); // Output: 5
```

De esta forma, la función **makeOperation** se vuelve más genérica y reutilizable, ya que puede recibir cualquier función que tenga la misma estructura de argumentos.

Otra característica importante de la programación funcional es el uso de funciones puras. Esto significa que las funciones no tienen efectos secundarios y siempre devuelven el mismo resultado dado el mismo input. Esto hace que el código sea más fácil de probar y depurar, ya que no hay efectos secundarios ocultos que puedan afectar el comportamiento del código.

Por ejemplo, la función ```map()``` es una función pura ya que toma un array de números como input y devuelve un nuevo array con los números transformados, sin modificar el array original.

```js
const numbers = [1, 2, 3, 4, 5];
const doubles = numbers.map(function(number) {
  return numero * 2;
});
console.log(doubles); // [2, 4, 6, 8, 10]
```

En resumen, la programación funcional es un enfoque de programación que se centra en el uso de funciones y evita el uso de estado y efectos secundarios. En javascript, se puede utilizar programación funcional mediante el uso de funciones como **map**, **reduce**, **filter**, **arrow functions** y *librerías de programación* funcional pura, lo cual permite crear código más fácil de probar y depurar.

# Dia 8


## Closures

Los closures en JavaScript son una característica fundamental del lenguaje que permite a las funciones recordar el estado de su entorno de ejecución, incluso después de que la función haya sido invocada. Esto permite a las funciones mantener un estado privado y protegido de variables y funciones internas, lo que proporciona una mayor flexibilidad y seguridad en el código.

Un closure se crea cuando una función es declarada dentro de otra función. La función interna tiene acceso al ámbito de la función externa, lo que significa que puede acceder a las variables y funciones declaradas dentro de la función externa. Además, un closure también tiene acceso a las variables y funciones globales.

Observa el siguiente ejemplo de la función counter. La función externa crea una variable privada ```count``` y una función interna ```increment``` que incrementa el valor de ```count``` y devuelve el valor actual.

```js
function counter() {
  let count = 0;
  return function increment() {
    count++;
    return count;
  }
}
const myCounter = contador();
console.log(myCounter()); // Output: 1
console.log(myCounter()); // Output: 2
console.log(myCounter()); // Output: 3

```

En este ejemplo, la función ```contador``` es el closure y tiene acceso a la variable privada ```count``` y la función interna ```increment```. Al asignar la función ```contador``` a la variable ```myCounter``` y luego llamar a la función “myCounter”, se está utilizando el closure para acceder a la variable ```count``` y modificar su valor cada vez que se llama a la función ```increment```. Esto permite mantener un estado interno privado en la función ```contador``` y evitar conflictos con otras variables con el mismo nombre en el ámbito global.

Además de ayudar a mantener el estado privado, los closures también son útiles para crear funciones genéricas y reutilizables, ya que pueden ser parametrizadas con variables y funciones declaradas en su entorno de ejecución. Por ejemplo, una función que toma una función y un valor como argumentos y devuelve una nueva función que aplica el valor a la función original.

```js
function multiplyBy(multiplier) {
  return function (value) {
    return value* multiplier;
  }
}

const double= multiplyBy(2);
console.log(double(5)); // Output: 10
console.log(double(10)); // Output: 20

const triple = multiplyBy(3);
console.log(triple(10)); // Output: 30
console.log(triple(20)); // Output: 60
```

En este ejemplo, la función ```multiplyBy``` es un closure que toma un factor como argumento y devuelve una nueva función que multiplica el valor dado por el factor. Al asignar la función ```multiplicador``` con un factor específico a la variable ```doble```, se está utilizando el closure para parametrizar la función con un valor específico y crear una nueva función reutilizable que siempre multiplica el valor dado por 2, por 3 o cualquier otro número.

## Higher order functions

Las ```Higher-Order Functions``` son una característica fundamental de la programación funcional en JavaScript. Como lo vimos en clases anteriores estás funciones puras que pueden tomar otras funciones como argumentos y/o devolver funciones como resultados. Esto permite crear funciones más genéricas y reutilizables que pueden ser combinadas de diferentes maneras para crear funciones más complejas.

Una de las características principales de las ```Higher-Order Functions``` es su capacidad para manipular otras funciones de manera genérica. Por ejemplo, una función ```map``` es una Higher-Order Function que toma una función y un array como argumentos, y devuelve un nuevo array con los resultados de aplicar la función a cada elemento del array original.

```js
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(function(number) {
  return number * 2;
});
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
console.log(numbers) // Output: [1, 2, 3, 4, 5] 
// El array original sigue intacto 
```

Otra característica importante de las ```Higher-Order Functions``` es su capacidad para crear funciones más pequeñas y reutilizables. Por ejemplo, una función ```filter``` es una Higher-Order Function que toma una función y un array como argumentos, y devuelve un nuevo array con los elementos que cumplen con una determinada condición.

```js
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(function(number) {
  return number % 2 === 0;
});
console.log(evenNumbers); // Output: [2,4]
```

# Día 9

## ECMAScript
ECMAScript es un estándar de programación para lenguajes de scripting. Fue creado por la organización **ECMA International** y es el estándar subyacente para JavaScript, el lenguaje de programación más utilizado en el desarrollo web.

ECMAScript tiene como objetivo lo siguiente:

Define la sintaxis y las funciones básicas de JavaScript
Objetos y funciones de alto nivel
Establecer un conjunto de reglas para la creación de scripts y todo el código que puedas crear con JavaScript.
Crear reglas para la sintaxis básica, funciones, objetos y métodos disponibles en las estructuras de datos del lenguaje.
Cada versión de ECMAScript (conocida como una ```edición``` agrega nuevas características y mejoras al lenguaje. Características como mejoras en la manipulación de objetos, mejoras en las funciones de programación asíncrona y mejoras en el rendimiento del lenguaje.

ECMAScript es ampliamente compatible con los navegadores web y se utiliza en una variedad de entornos, desde el desarrollo web hasta la programación de servidores y aplicaciones móviles. Además, existen varios entornos de ejecución de JavaScript fuera de los navegadores web, como Node.js, que utilizan la especificación ECMAScript.

En resumen, **ECMAScript** es el estándar subyacente para JavaScript y define las reglas y las características básicas del lenguaje. Cada versión de ECMAScript agrega nuevas características y mejoras al lenguaje, y es ampliamente compatible con los navegadores web y otros entornos de ejecución.


## TC39

**TC39** es el comité técnico de ECMAScript, el estándar de javascript. Este comité está compuesto por expertos en el lenguaje y es responsable de su evolución y mantenimiento.

La labor de TC39 se divide en varias etapas, las cuales son las siguientes:

* Stage 0: Strawman. En esta etapa, cualquier miembro de TC39 puede proponer una idea o mejora para javascript.
* Stage 1: Proposal. En esta etapa, la idea o mejora propuesta es evaluada y discutida por el comité para determinar si es viable y si se continuará trabajando en ella.
* Stage 2: Draft. En esta etapa, se comienza a trabajar en la especificación formal de la propuesta.
* Stage 3: Candidate. En esta etapa, se considera que la propuesta está lo suficientemente madura como para ser implementada en los navegadores y se espera que sea incluida en la próxima versión del estándar.
* Stage 4: Finished. En esta etapa, la propuesta ha sido aceptada y se incluye en la última versión del estándar.

Además de las etapas mencionadas, ```TC39``` también se encarga de mantener la compatibilidad entre versiones, de manera que las nuevas características no rompan el código existente.

```TC39``` es el encargado de asegurar que javascript siga siendo un lenguaje de programación moderno y relevante. Los miembros de TC39 son expertos en javascript y sus decisiones afectan directamente a la forma en que se desarrolla el lenguaje y a las características que estarán disponibles en el futuro.


# Día 10 - Checkpoint

## ES6

ECMAScript 6, también conocido como ES6, fue lanzado en junio de 2015 y trae una gran cantidad de características nuevas y mejoras al lenguaje. Algunas de las características más importantes incluyen:

* Sintaxis de clases: ES6 introduce una nueva sintaxis para la creación de clases en JavaScript. Esto hace que el código sea más fácil de leer y entender, especialmente para desarrolladores con experiencia en lenguajes orientados a objetos. Ejemplo:

```js
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
  saludar() {
    console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
  }
}
const persona = new Persona("Juan", 30);
persona.saludar(); // Output: "Hola, mi nombre es Juan y tengo 30 años."
```

* Template literals: ES6 introduce una nueva sintaxis para crear cadenas de texto de manera más sencilla y legible. Esto permite la interpolación de variables y expresiones dentro de las cadenas de texto. Ejemplo:

```js
const nombre = "Juan";
const edad = 30;
console.log(`Hola, mi nombre es ${nombre} y tengo ${edad} años.`); // Output: "Hola, mi nombre es Juan y tengo 30 años."
```

* Arrow functions: ES6 introduce una nueva sintaxis para crear funciones anónimas de manera más corta y sencilla. Esto hace que el código sea más legible y fácil de escribir. Ejemplo:

```js
const numeros = [1, 2, 3, 4, 5];
const dobles = numeros.map(n => n * 2);
console.log(dobles); // Output: [2, 4, 6, 8, 10]
```

* Spread operator: El spread operator es una característica que permite expandir un array o un objeto en una lista de valores. Se representa con los tres puntos (…) y se utiliza para copiar elementos de un array o para combinar elementos de varios arrays en uno solo. También se utiliza para pasar argumentos a una función de manera dinámica. Ejemplo:

```js
const numeros = [1, 2, 3];
const nuevosNumeros = [...numeros, 4, 5, 6]; // [1, 2, 3, 4, 5, 6]
```

* Destructuring: ES6 introduce una nueva sintaxis para asignar valores de un objeto o un array a variables de manera más sencilla y legible. Ejemplo:
```js
const persona = {nombre: "Juan", edad: 30};
const {nombre, edad} = persona;
console.log(nombre); // Output: "Juan"
console.log(edad); // Output: 30
```
* Manejo de módulos: ES6 permite la importación y exportación de funciones y variables entre archivos de manera más sencilla y estructurada. Por ejemplo:

```js
import { miFuncion } from './miArchivo.js';

export const otraFuncion = () => {};
```
* Nuevos métodos de arrays: ES6 incluye métodos como “Array.prototype.find” y “Array.prototype.findIndex” que facilitan la búsqueda de elementos en un array.
```js
const numeros = [1, 2, 3, 4, 5];
const encontrado = numeros.find(n => n === 3);
console.log(encontrado); // Output: 3
```
* Manejo de promesas: ES6 incluye mejoras en el manejo de promesas, permitiendo la utilización de métodos como ```Promise.prototype.finally``` para ejecutar código independientemente del resultado de la promesa.

```js
const miPromesa = new Promise((resolve, reject) => {
  // código
});
miPromesa.finally(() => console.log('Promesa finalizada'));
```

* Try catch: En cuanto al manejo de errores y excepciones, ES6 incluye la introducción de la palabra clave “try-catch” para el manejo de bloques de código que pueden generar excepciones.

```js
try {
  // código que puede generar excepciones
} catch (error) {
  console.log(error);
}
```

## ES7

ECMAScript 7, también conocido como ES7, es una versión del estándar ECMAScript para JavaScript. Fue lanzado en junio de 2016 y trae algunas características nuevas y mejoras al lenguaje. Algunas de las características más importantes incluyen:

* Exponentiation operator (**): ES7 introduce un nuevo operador para elevar un número a una potencia. Anteriormente, esto podría ser logrado con la función Math.pow(). Ejemplo:
```js
console.log(2 ** 3); // Output: 8
console.log(Math.pow(2,3)); // Output: 8
```

* Trailing commas: ES7 permite la utilización de comas al final de una lista de argumentos, objetos y arrays. Este es un cambio sintáctico que ayuda a la legibilidad y mantenimiento del código. Ejemplo:
```js
const objeto = {nombre: "Juan", edad: 30,};
const array = [1, 2, 3,];
//El poner una coma al final de un array u objetos ocasionaba errores en el pasado
```

* string.prototype.padStart() y string.prototype.padEnd(): ES7 introduce dos nuevos métodos para el prototipo de String rellena la cadena actual con una cadena dada (repetida eventualmente) de modo que la cadena resultante alcance una longitud dada. El relleno es aplicado
desde el inicio (izquierda) de la cadena actual si es usado con padStart, y de modo contrario con padEnd. Ejemplo:

```js
const cadena = "Hola";
console.log(cadena.padStart(7, "**")); // Output: "****Hola"
*****console.log(cadena.padEnd(7, "*")); // Output: "Hola****"
```
Cada año sale una nueva versión de ES, en esta colección de lecturas solamente te mostramos 2 que tuvieron muchos grandes cambios. Te invitamos a que indagues más en las futuras versiones que salen cada año.

# Día 11

## Asincronismo

JavaScript es un lenguaje asíncrono, lo que significa que las operaciones no bloquean el hilo de ejecución principal. Esto significa que varias operaciones pueden ocurrir al mismo tiempo sin afectar el rendimiento del programa. En lugar de bloquear el hilo de ejecución mientras se carga la imagen, el navegador carga la imagen en segundo plano y notifica al programa cuando está lista para ser utilizada mediante una función callback.

## Promesas

Las promesas son un mecanismo para manejar operaciones asincrónicas en JavaScript de una manera más limpia y fácil de leer. Permiten que una función asíncrona devuelva una promesa, que es básicamente una forma de representar un valor que estará disponible en el futuro, ya sea de manera exitosa o con un error.

Para crear una promesa, se utiliza el constructor ```Promise```, el cual acepta una función que a su vez recibe dos parámetros: ```resolve``` y ```reject```.

 El primero se usa para indicar que la operación se ha completado correctamente y se puede obtener el valor, mientras que el segundo se usa para indicar que la operación ha fallado y se devuelve el error correspondiente.

 Por ejemplo, podemos crear una promesa que resuelva (o devuelva) con el número 42 después de 2 segundos:
```js
 const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(42);
  }, 2000);
});
```

Podemos encadenar promesas para ejecutar múltiples operaciones asincrónicas de manera secuencial. Para ello, se utiliza el método then de una promesa, el cual recibe como parámetro una función que se ejecutará cuando la promesa se resuelva correctamente. Esta función puede devolver otra promesa, lo que permite encadenar múltiples operaciones.

Por ejemplo, podemos crear una promesa que resuelva con un objeto que contenga el número 42 y una cadena después de 2 segundos, y luego encadenar otra promesa que devuelva una cadena que contenga el doble del número de la promesa anterior:

```js
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ number: 42, text: "hello" });
  }, 2000);
});

promise
  .then((result) => {
    const doubledNumber = result.number * 2;
    return doubledNumber.toString();
  })
  .then((result) => {
    console.log(`The result is ${result}`);
  })
  .catch((error) => {
    console.error(error);
  });
  ```

  ## setInterval y setTimeout

Los temporizadores son una característica importante en JavaScript para programar tareas para que se ejecuten en el futuro. Dos de los temporizadores más comunes son setTimeout y setInterval.

setTimeout es una función que permite programar una tarea para que se ejecute después de un cierto período de tiempo en milisegundos. La función toma dos parámetros: la función que se debe ejecutar después del tiempo especificado y el tiempo en milisegundos antes de que se ejecute la función.

Por ejemplo, supongamos que queremos imprimir un mensaje después de 5 segundos. Podemos usar setTimeout de la siguiente manera:
```js
setTimeout(() => {
  console.log('Han pasado 5 segundos');
}, 5000);
```

Es importante tener en cuenta que setTimeout() devuelve un identificador único (un número) que puede ser utilizado para cancelar el temporizador antes de que se ejecute. Para hacer esto, podemos usar la función clearTimeout() y pasarle el identificador como argumento. Por ejemplo:
```js
let id = setTimeout(() => {
  console.log('Han pasado 5 segundos');
}, 5000);

// Cancelar el temporizador
clearTimeout(id);
```

Otro temporizador común es setInterval. En contraste con setTimeout, setInterval se utiliza para programar una tarea para que se repita en un intervalo de tiempo determinado. La función toma dos parámetros: la función que se debe ejecutar en cada intervalo y la duración de cada intervalo en milisegundos.

Por ejemplo, supongamos que queremos imprimir un mensaje cada 2 segundos. Podemos usar setInterval de la siguiente manera:

```js
setInterval(() => {
  console.log('Han pasado 2 segundos');
}, 2000);
```

Esto imprimirá “Han pasado 2 segundos” cada 2 segundos.

Es importante tener en cuenta que tanto setTimeout como setInterval son funciones asincrónicas. Esto significa que no bloquean la ejecución del código, lo que permite que otras tareas se ejecuten mientras se espera que se complete la tarea programada.

Para trabajar con temporizadores en conjunto con promesas, debes entender cómo se puede utilizar el método ```setTimeout()``` dentro de una promesa para crear una tarea asincrónica que se resolverá o rechazará después de un período de tiempo determinado.

Al crear una promesa con ```setTimeout()```, podemos utilizar el constructor new ```Promise()```. La función interna debe contener el código que se ejecutará en el futuro y, finalmente, llamará a ```resolve()``` o ```reject()``` para indicar si la tarea se completó correctamente o no.

Un ejemplo de promesa con setTimeout() podría verse así:
```js
function wait(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
			const seconds = ms / 1000
      resolve(seconds);
    }, ms);
  });
}

// ejemplo de uso
wait(3000).then((seconds) => {
  console.log(`Han pasado ${seconds} segundos`);
});
```

En este ejemplo, la función ```wait()``` toma un argumento ms, que representa el número de milisegundos que se deben esperar antes de resolver la promesa. Dentro del constructor new Promise(), se llama a setTimeout() para crear una tarea asincrónica que llamará a resolve() después del número de milisegundos especificado. La función wait() devuelve la promesa creada.

Cuando se llama a wait(2000), se crea una nueva promesa que se resolverá después de 2 segundos. Después de que se resuelva la promesa, se llama a la función then() y se ejecuta la función de devolución de llamada, que simplemente registra con la variable seconds que es devuelta al resolverse la promesa un mensaje en la consola.

También podemos usar setTimeout() en conjunto con reject() para manejar errores en una tarea asincrónica. Si ocurre un error durante la ejecución de la tarea, podemos llamar a reject() con un objeto de error para indicar que la tarea ha fallado.


Un ejemplo de promesa con setTimeout() que maneja errores podría verse así:

```js
function wait(ms) {
  return new Promise((resolve, reject) => {
    if (ms < 0) {
      reject(new Error("El número de milisegundos no puede ser negativo"));
    } else {
      setTimeout(() => {
				const seconds = ms / 1000
        resolve(seconds);
      }, ms);
    }
  });
}

// ejemplo de uso
wait(-2000)
  .then((seconds) => {
    console.log(`Han pasado ${seconds} segundos`);
  })
  .catch((error) => {
    console.error(error.message);
		// El número de milisegundos no puede ser negativo
  });
```

En este ejemplo, la función wait() verifica si el argumento ms es menor que cero. Si es así, se llama a reject() con un objeto de error que indica que el número de milisegundos es inválido. Si ms es mayor o igual a cero, se llama a setTimeout() para crear la tarea asincrónica que llamará a resolve() después del número de milisegundos especificado. La función wait() devuelve la promesa creada.

## Manejando el asincronismo

Las promesas son una característica importante de JavaScript para manejar operaciones asíncronas y controlar su flujo. Pero, ¿cómo se manejan las promesas en el código de forma eficiente y efectiva? Vamos a discutir dos formas populares de manejar promesas: mediante callbacks y mediante async/await.

### Callback

Los callbacks son funciones que se pasan como argumentos a otra función y se llaman en algún momento después de que se complete la operación asíncrona. Un callback es una forma de manejar la respuesta de una promesa.

```js
function getUserData(userId, callback) {
  fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(response => response.json())
    .then(data => callback(data))
    .catch(error => console.log(error))
}

function displayUserData(data) {
  console.log(data.name);
}

getUserData(1, displayUserData);
```
En este ejemplo, se define una función getUserData que toma un ID de usuario y un callback como parámetros. Dentro de esta función, se llama a la API de jsonplaceholder y se obtiene el objeto de datos del usuario. Luego, se llama al callback con los datos del usuario como argumento. En este caso, el callback es la función displayUserData que simplemente muestra el nombre del usuario en la consola.

La desventaja de usar callbacks es que puedes crear un ```Callback Hell```, que es un anti-patrón producido por anidar múltiples callbacks dentro de otros callbacks en un código asíncrono. Esto puede ocurrir cuando un código asíncrono necesita realizar múltiples operaciones de manera secuencial, donde la ejecución de una operación depende de los resultados de la operación anterior. Este anti-patrón puede hacer que el código sea difícil de entender, mantener y depurar.

Un ejemplo del Callback Hell puede ser el siguiente, donde se realiza una serie de operaciones asíncronas anidadas que dependen de los resultados de la operación anterior:
```js
operation1(function(result1) {
  operation2(result1, function(result2) {
    operation3(result2, function(result3) {
      operation4(result3, function(result4) {
        // ...continuar con más operaciones
      });
    });
  });
});
```
En este ejemplo, la ejecución de operation2 depende del resultado de operation1, y la ejecución de operation3 depende del resultado de operation2, y así sucesivamente. Como se puede ver, el código se vuelve cada vez más anidado y difícil de leer a medida que se agregan más operaciones.

### Promesas

Una forma de evitar el Callback Hell es utilizar Promesas o Async/Await, que proporcionan una forma más estructurada y fácil de leer para manejar código asíncrono. Por ejemplo, el código anterior se puede reescribir utilizando Promesas de la siguiente manera:
```js
operation1()
  .then(result1 => {
    return operation2(result1);
  })
  .then(result2 => {
    return operation3(result2);
  })
  .then(result3 => {
    return operation4(result3);
  })
  .then(result4 => {
    // ...continuar con más operaciones
  })
  .catch(error => {
    // Manejar errores
  });
  ```

  En este ejemplo, cada operación devuelve una Promesa que se encadena usando el método then(). Esto hace que el código sea más legible y fácil de seguir en comparación con la versión anterior.

### Async/await

Async/await es una forma más moderna y legible de manejar promesas. En lugar de usar callbacks anidados, async/await permite que el código parezca más secuencial y fácil de leer.
```js
async function getUserData(userId) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function displayUserData(userId) {
  const data = await getUserData(userId);
  console.log(data.name);
}

displayUserData(1);

```

En este ejemplo, se define una función getUserData que hace la misma llamada a la API que en el ejemplo anterior, pero esta vez usa await para esperar la respuesta y el try/catch para manejar los errores. La función displayUserData también utiliza await para esperar que se resuelva la promesa retornada por getUserData y luego muestra el nombre del usuario en la consola.

### Conclusión

El uso de callbacks y async/await son formas efectivas de manejar promesas en JavaScript. Aunque ambos métodos tienen sus ventajas y desventajas, async/await se ha convertido en la opción preferida para muchas personas debido a su legibilidad y sintaxis más clara. Sin embargo, aún hay situaciones en las que los callbacks pueden ser la mejor opción, especialmente en situaciones donde se necesitan múltiples llamadas asincrónicas en secuencia.


# Día 12

## Arrays a profundidad


Los arrays en JavaScript son un tipo de estructura de datos que permite almacenar múltiples valores en una sola variable. A diferencia de las variables simples como los números o las cadenas de texto, los arrays pueden tener múltiples valores y elementos.

En esta clase, vamos a explorar algunas de las características avanzadas de los arrays en JavaScript, incluyendo la creación de arrays utilizando la clase constructora Array, copiar arrays, arrays bidimensionales y arrays de múltiples dimensiones.

### Creación de Arrays utilizando la Clase Constructora Array

En JavaScript, los arrays se pueden crear de una forma diferente a la tradicional utilizando la clase constructora Array. La clase constructora Array proporciona una forma fácil y flexible de crear arrays con diferentes elementos y longitudes.
```js
let myArray = new Array();
```

También puedes especificar los elementos que deseas incluir en el array al crearlo, como se muestra a continuación:

```js
let myArray = new Array(1, 2, 3, 4);
```

**Array.from()**
La función ```Array.from()``` permite crear un nuevo array a partir de un objeto similar a un array o iterable. La sintaxis para utilizar Array.from() es la siguiente:
```js
let myArray = Array.from('hello');
console.log(myArray); // ["h", "e", "l", "l", "o"]
```

**Array(n).fill()**
La función fill() permite llenar un array con un valor específico. La sintaxis para utilizar fill() es la siguiente:
```js
let myArray = new Array(5).fill(0);
console.log(myArray); // [0, 0, 0, 0, 0]
```

**Array.isArray()**
La función Array.isArray() permite determinar si un objeto es un array o no. La sintaxis para utilizar Array.isArray() es la siguiente:
```js
let myArray = [1, 2, 3, 4];
console.log(Array.isArray(myArray)); // true
```

## Copiando Arrays
En JavaScript, es común tener la necesidad de hacer una copia de un array existente, ya sea para manipular los datos sin afectar el array original o para trabajar con múltiples versiones del mismo array. Hay varias maneras de hacer esto en JavaScript, incluyendo la creación de una nueva instancia de un array, el uso de métodos incorporados y el uso del spread operator.

**Crear una nueva instancia del array:**
Una forma de hacer una copia de un array es crear una nueva instancia del mismo array. Esto se logra usando el constructor Array:
```js
const originalArray = [1, 2, 3, 4];
const copiedArray = new Array(...originalArray);

console.log(originalArray === copiedArray); // Output: false
```
En este ejemplo, se utiliza el operador spread para expandir los elementos del array original en una nueva instancia del constructor Array.

**Uso de métodos incorporados:**
Otro enfoque para hacer una copia de un array es utilizar los métodos incorporados de JavaScript. Por ejemplo, puedes utilizar el método slice para hacer una copia de un array:
```js
const originalArray = [1, 2, 3, 4];
const copiedArray = originalArray.slice();

console.log(originalArray === copiedArray); // Output: false
```
**Otro método incorporado es el método concat:**
```js
const originalArray = [1, 2, 3, 4];
const copiedArray = originalArray.concat();

console.log(originalArray === copiedArray); // Output: false
```
**spread operator:**
El spread operator es una forma conveniente de hacer una copia de un array. El spread operator se utiliza para expandir los elementos de un array en una lista:
```js
const originalArray = [1, 2, 3, 4];
const copiedArray = [...originalArray];

console.log(originalArray === copiedArray); // Output: false
```
En este ejemplo, se utiliza el spread operator para expandir los elementos del array original en una nueva instancia de un array.

Es importante tener en cuenta que, aunque estos métodos parecen hacer una copia de un array, solo hacen una copia superficial, lo que significa que los elementos dentro del array original y la copia comparten los mismos valores. Si necesitas hacer una copia profunda de un array, es necesario utilizar una biblioteca de terceros o escribir tu propia función para hacer una copia profunda.

### Arrays Bidimensionales
Los arrays bidimensionales son un tipo de estructura de datos en la que cada elemento es un array y cada uno de esos arrays contiene más elementos. En otras palabras, son arrays de arrays. Estos pueden ser útiles para representar datos en un formato más organizado, como una tabla o una matriz.

Para crear un array bidimensional, puedes inicializar un array vacío y luego agregar arrays a sus elementos. Aquí hay un ejemplo:
```js
const matrix = [];
matrix[0] = [1, 2, 3];
matrix[1] = [4, 5, 6];
matrix[2] = [7, 8, 9];

console.log(matrix);
// Output: [
//   [1, 2, 3], 
//   [4, 5, 6], 
//   [7, 8, 9]
// ]
```
También puedes crear un array bidimensional utilizando la clase constructora Array:
```js
const matrix = new Array(3);
for (let i = 0; i < matrix.length; i++) {
  matrix[i] = new Array(3);
}

matrix[0][0] = 1;
matrix[0][1] = 2;
matrix[0][2] = 3;
matrix[1][0] = 4;
matrix[1][1] = 5;
matrix[1][2] = 6;
matrix[2][0] = 7;
matrix[2][1] = 8;
matrix[2][2] = 9;

console.log(matrix);
// Output: [
//   [1, 2, 3], 
//   [4, 5, 6], 
//   [7, 8, 9]
// ]
```
Para acceder a un elemento específico en un array bidimensional, debes proporcionar dos índices. Por ejemplo, si deseas acceder al elemento 5 en el ejemplo anterior, puedes hacerlo de la siguiente manera:
```js
console.log(matrix[1][1]);
// Output: 5
```
Además de crear y acceder a los elementos de un array bidimensional, también puedes copiar un array bidimensional utilizando el spread operator:

```js
const originalMatrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const copiedMatrix = [...originalMatrix];

console.log(originalMatrix === copiedMatrix);
// Output: false
```
En este ejemplo, el spread operator se utiliza para crear una copia profunda del array original, lo que significa que los elementos dentro del array también se copian.

Además de los arrays bidimensionales, también puedes crear arrays de más dimensiones. Por ejemplo, puedes crear un array tridimensional:
```js
const cube = [];
for (let i = 0; i < 3; i++) {
  cube[i] = [];
	for (let j = 0; j < 3; j++) {
		cube[i][j] = [];
		for (let k = 0; k < 3; k++) {
			cube[i][j][k] = i + j + k;
		}
	}
}
console.log(cube);
// Output: 
//[
//  [[0, 1, 2], [1, 2, 3], [2, 3, 4]], 
//  [[1, 2, 3], [2, 3, 4], [3, 4, 5]], 
//  [[2, 3, 4], [3, 4, 5], [4, 5, 6]]
//]
```
Como puedes ver, los arrays de más dimensiones siguen la misma lógica de los arrays bidimensionales, pero con más niveles de índices para acceder a los elementos.



## Métodos de arrays: Every, Find y findIndex

### Array.prototype.every()
El método every es una función que se utiliza en los arrays en JavaScript para comprobar si todos los elementos del array cumplen con una determinada condición. Devuelve un valor booleano que indica si todos los elementos del array cumplen con la condición especificada.

Por ejemplo, supongamos que tienes un array de números y deseas comprobar si todos los números son mayores que cero:
```js
const numbers = [1, 2, 3, 4, 5];
const allPositive = numbers.every(function(element) {
	return element > 0;
});

console.log(allPositive);

// Output: true
```
En este ejemplo, el método every se utiliza para comprobar si todos los elementos en el array numbers son mayores que cero. La función que se pasa como argumento a every devuelve true si el elemento es mayor que cero y false en caso contrario. Si todos los elementos devuelven true, every devuelve true. De lo contrario, devuelve false.

También puedes utilizar una arrow function para hacer lo mismo:
```js
const numbers = [1, 2, 3, 4, 5];
const allPositive = numbers.every((element) =>
	 element > 0;
);

console.log(allPositive);
```

Además de comprobar si todos los elementos cumplen con una determinada condición, también puedes utilizar el método every para realizar otras tareas en cada elemento del array. Por ejemplo, supongamos que tienes un array de objetos y deseas comprobar si todos los objetos tienen una propiedad específica:
```js
const objects = [{name: 'John'}, {name: 'Jane'}, {name: 'Jim'}];
const allHaveName = objects.every(function(element) {
  return element.hasOwnProperty('name');
});

console.log(allHaveName);
// Output: true
```

El método every es una herramienta útil para comprobar si todos los elementos en un array cumplen con una determinada condición. Es una forma sencilla y eficiente de procesar los elementos en un array y realizar tareas específicas en ellos.

### Array.prototype.Find()
El método find se puede utilizar en arrays para encontrar un elemento que cumpla con una condición determinada. Este método devuelve el primer elemento que cumple con la condición o undefined si no se encuentra ninguno.

El método find toma un callback como argumento. Este callback es llamado para cada elemento del array hasta que se encuentre un elemento que cumpla con la condición.

Aquí hay un ejemplo de cómo utilizar el método find para encontrar el primer número mayor que 5 en un array:
```js
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result = numbers.find(number => number > 5);

console.log(result);
// Output: 6
```

En este ejemplo, el callback number => number > 5 se utiliza para determinar si un número es mayor que 5. Si se encuentra un número que cumpla con esta condición, el método find devuelve ese número y detiene la búsqueda.

También es posible utilizar el método find con objetos. Por ejemplo, aquí hay un ejemplo de cómo utilizar el método find para encontrar el primer objeto con una propiedad específica:
```js
const people = [
  { name: 'John', age: 32 },
  { name: 'Jane', age: 28 },
  { name: 'Jim', age: 40 }
];
const result = people.find(person => person.age === 32);

console.log(result);
// Output: { name: 'John', age: 32 }
```

En este ejemplo, el callback person => person.age === 32 se utiliza para determinar si una persona tiene una edad de 32 años. Si se encuentra un objeto que cumpla con esta condición, el método find devuelve ese objeto y detiene la búsqueda.

### Array.prototype.findIndex()
El método findIndex es una función que se utiliza para buscar un elemento en un array y devolver el índice de su primera aparición. Este método acepta un callback como argumento y la ejecuta para cada elemento en el array hasta que se encuentra un elemento que cumpla con la condición especificada. En ese momento, findIndex devuelve el índice del elemento encontrado.

A diferencia del método find, en este caso, solo se devuelve el primer indice del elemento que cumpla la condición, por ejemplo:
```js
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const index = numbers.findIndex(num => num > 5);
console.log(index); // Output: 5
```

En este ejemplo, la función de callback recibe cada elemento del array numbers y devuelve true si el elemento es mayor que 5. El método findIndex devuelve el índice del primer elemento que cumple con esta condición, que es 5.

Si no se encuentra ningún elemento que cumpla con la condición, findIndex devuelve -1. Por ejemplo:

```js
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const index = numbers.findIndex(num => num > 100);
console.log(index); // Output: -1
```

En este ejemplo, no hay ningún elemento en el array numbers que sea mayor que 100, por lo que findIndex devuelve -1.

#  Día 13

## Métodos de arrays: Includes, Join y concat

### Array.protoype.includes()
El método Array.prototype.includes es una función para determinar si un elemento determinado existe en un array. Este método es muy útil a la hora de verificar si un elemento específico está presente en un array o no, sin tener que recorrer todo el array.
Este método acepta dos parámetros: el primer parámetro es el elemento que se quiere buscar y el segundo parámetro es el índice desde donde se iniciará la búsqueda. Si el segundo parámetro no se proporciona, la búsqueda comenzará desde el índice 0.

El método includes devuelve un valor booleano que indica si el elemento buscado se encuentra o no en el array. Si el elemento se encuentra en el array, el valor devuelto será true, de lo contrario, el valor será false.

Ejemplo
```js
const numbers = [1, 2, 3, 4, 5];

const result = numbers.includes(3);

console.log(result); // true
```
Como se puede ver en el ejemplo anterior, el método Array.prototype.includes se utiliza para determinar si el elemento 3 está presente en el array numbers. La función devuelve un valor booleano de true, lo que indica que el elemento se encuentra en el array.

Además de poder buscar elementos primitivos, como números y cadenas, el método Array.prototype.includes también puede buscar objetos y otros tipos de datos. Sin embargo, es importante tener en cuenta que para objetos y otros tipos de datos, la búsqueda se realiza utilizando la comparación de igualdad estricta (===), lo que significa que sólo se considerarán iguales dos objetos si se refieren a la misma ubicación en memoria.

### Array.protoype.join()
El método Array.prototype.join() se utiliza para convertir todos los elementos de un array en un solo string. Este método recibe como argumento un separador, que es una cadena de texto que se utilizará para separar los elementos del arreglo en el string resultante.

Por ejemplo, si tenemos un arreglo fruits con los siguientes elementos: ["apple", "banana", "cherry"], podemos convertir este arreglo en un string usando el método join como se muestra a continuación:
```js
const fruits = ["apple", "banana", "cherry"];
const fruitsString = fruits.join(", ");
console.log(fruitsString); // "apple, banana, cherry"
```

En este ejemplo, el separador que se utiliza es una coma y un espacio (, ), pero podemos usar cualquier otra cadena de texto como separador. Si no se proporciona un separador, se usará una coma (,) por defecto.
```js
const fruits = ["apple", "banana", "cherry"];
const fruitsString = fruits.join();
console.log(fruitsString); // "apple,banana,cherry"
```
Es importante destacar que el método join no modifica directamente el arreglo original, sino que retorna una nueva cadena de texto con los elementos del array original.

