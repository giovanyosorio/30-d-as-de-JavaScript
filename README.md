# 30-dias-de-JavaScript


Durante 6 semanas continuas estaremos aprendiendo desde 0 las características de JavaScript con la peculiaridad de aprender conceptos nuevos diariamente con ejercicios prácticos y cursos de tus profesores favoritos. Te estaremos acompañando en todo tu proceso de diferentes maneras, empezando por un canal exclusivo en Discord para participantes de este reto, al igual que tendremos sesiones semanales de Q&A para despejarte tus dudas o ayudarte con algo en lo que te encuentres estancado o estancada.

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