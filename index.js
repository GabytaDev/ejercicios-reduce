// map
// filter
// sort
// find
// every
// some

// acumuladora:
// a partir de un array de javascript
// quiero quedarme con UN SOLO VALOR
// y ese valor NO es un elemento del array original

// // // suma de todos los numeros dle array
// // const numeros = [2, 7, 60]
// // let acc = 0
// // for (let i = 0; i < numeros.length; i++) {
// //  acc = acc + numeros[i]
// //  console.log(acc)
// // }
// // // console.log(acc)

// // concatenacion de todos los strings
// // const nombres = ["gri", "ele", "tati", "agus"]
// // let acc = ""
// // for (let i = 0; i < nombres.length; i++) {
// //   acc = acc + nombres[i]
// // }
// // console.log(acc)

// const nombres = ["gri", "ele", "tati", "agus"]

// const objetos = [
//   {
//     nombre: "Gri",
//     edad: 22,
//     email: "mail@gmail.com"
//   },
//   {
//     nombre: "Agus",
//     edad: 22,
//     email: "mail@gmail.com"
//   }

// ]

// // variable = variable + 2
// // variable += 2

// let acc = ""
// for (let i = 0; i < objetos.length; i++) {
//   acc +=  "<li>" + objetos[i].nombre + "</li>"

// }
// console.log(acc)

// // la propiedad innerHTML recibe un STRING

// const lista = document.querySelector('#nombres');

// lista.innerHTML = acc

// REDUCE

// const nombres = ["naty", "caro", "roci", "mika"]

// reduce recibe dos parametros:
// una funcion,
// y un valor inicial para la acumuladora
// la funcion, a su vez, recibe dos parametros:
// el valor de la acc y cada elemento del array

// const resultado = nombres.reduce((acc, elemento, i) => {
//   // vamos a recibir cada elemento del array
//   // lo vamos a modificar como queremos
//   // y vamos a retornar algo
//   // lo que retornemos es el nuevo valor de la acumuladora
//   console.log("-----")
//   console.log("estamos en la vuelta", i)
//   console.log("acc", acc)
//   console.log("elem", elemento)
//   console.log("retorno", acc + elemento)
//   return acc + elemento
// }, "")

// console.log(resultado)
// console.log(nombres)
// const nombres = ["gri", "ele", "tati", "agus"]
// let acc = "" // valor inicial
// for (let i = 0; i < nombres.length; i++) {
//   acc = acc + nombres[i]  // modificamos el valor de la acc
// }
// console.log(acc)

// const numeros = [10, 5, 10]

// // la suma de todos los elementos
// const resultado = numeros.reduce((acc, elemento) => {
//   return acc + elemento
// }, 0)

// // el promedio de todos los numeros
// const promedio = numeros.reduce((acc, elemento) => {
//   return acc + (elemento / numeros.length)
// }, 0)

// const nombres = ["gri", "ele", "tati", "agus"]

// const html = nombres.reduce((acc, elemento) => {
//   return acc + "<li>" + elemento + "</li>"
//   // return acc + `<li>${elemento}</li>`
// }, "")

// lista.innerHTML = "<ul>" +  html + "</ul>"

// const numeros = [
//   { nombre: 'Yani', edad: 22 },
//   { nombre: 'Gri', edad: 25 },
//   { nombre: 'Ele', edad: 24 },
// ];

// // la suma de todos los elementos
// const resultado = numeros.reduce((acc, elemento) => {
//   return acc + elemento.edad;
// }, 0);

// console.log(resultado);


// const operaciones = [
//   {
//     tipo: "gasto", 
//     monto: 100
//   }, 
//   {
//     tipo: "ganancia",
//     monto: 200 
//   }, 
//   {
//     tipo: "gasto", 
//     monto: 50
//   }
// ]

// const gastos = operaciones.filter((elemento) => {
//   return elemento.tipo === "gasto"
// })

// const ganancias = operaciones.filter((elemento) => {
//   return elemento.tipo === "ganancia"
// })

// const sumaGastos = gastos.reduce((acc, elemento) => {
//   return acc + elemento.monto
// }, 0)
// console.log(gastos)
// console.log(sumaGastos)

// quedarme con los gastos
// sumar entre si

// quedarme con las ganancias
// sumar los montos entre si




// // el valor inicial de la acc es optativo

// const numeros = [10, 5, 10]

// // la suma de todos los elementos
// const resultado = numeros.reduce((acc, elemento, index, array) => {
//   return acc + elemento
// })

// console.log(resultado)

/////// Ejercicios ////////
/*1
Tenemos un array llamado numbers con números enteros al azar.

Utilizando reduce, queremos calcular la suma de todos los números que están en el array.
Por ejemplo: Si tenemos [1, 2, 3], la suma de todos los números es 6
const numbers = [6, 1, 34, 94, 3, 17];

// codea debajo de este comentario la solucion al ejercicio

// deberia mostrar 155*/

const numbers = [6, 1, 34, 94, 3, 17];

const suma = numbers.reduce((acc,elemento)=>{
return acc + elemento
}, 0)

console.log(suma)

/*2
Tenemos un array llamado numbers con números enteros al azar.
Utilizando reduce, queremos calcular la multiplicación de todos los números que están en el array.
const numbers = [6, 1, 34, 94, 3, 17];

// codea debajo de este comentario la solucion al ejercicio

// deberia mostrar 977976*/



const multiplicacion = numbers.reduce((acc,elemento)=>{
return acc * elemento
})

console.log(multiplicacion)

/*3
Tenemos un array llamado notasDeTPs con números del 1 al 10, que representan las notas de los distintos trabajos prácticos 
entregados por Grace Hopper en el curso de Ada.
Usando reduce, queremos calcular la nota promedio final de trabajos prácticos (el promedio se calcula sumando todas las notas 
y dividiéndolo por la cantidad de notas, o dividiendo cada nota por la cantidad total y luego sumando los resultados).
Por ejemplo: Si tenemos [7, 8, 9, 10], la nota final es 8.5
const notasDeTPs = [4, 7, 8, 5, 10];

// codea debajo de este comentario la solucion al ejercicio

// deberia mostrar 6.8*/

const notasDeTPs = [4, 7, 8, 5, 10];

const promedio = notasDeTPs.reduce((acc,elemento)=>{
    return acc + (elemento/ notasDeTPs.length)
},0)
console.log(promedio)

/*4
Tenemos un array en una variable libros con libros para leer sobre Javascript.
Usar la función reduce para crear un string con todos los titulos de los libros encerrados en una etiqueta <li></li>.
Mostrar por consola el array nuevo
Ayuda: ojo con el valor de comienzo
const librosDeJS = [
  'JavaScript for Kids: A Playful Introduction to Programming',
  'Composing Software',
  'Eloquent JavaScript: A Modern Introduction to Programming',
  'JavaScript: The Good Parts',
  'Programming JavaScript Applications: Robust Web Architecture with Node, HTML5, and Moderns JS Libraries',
  'Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript',
  'JavaScript: The Definitive Guide',
  'You Don’t Know JS',
  'JavaScript Allongé: The Six Edition'
];
*/
const librosDeJS = [
    'JavaScript for Kids: A Playful Introduction to Programming',
    'Composing Software',
    'Eloquent JavaScript: A Modern Introduction to Programming',
    'JavaScript: The Good Parts',
    'Programming JavaScript Applications: Robust Web Architecture with Node, HTML5, and Moderns JS Libraries',
    'Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript',
    'JavaScript: The Definitive Guide',
    'You Don’t Know JS',
    'JavaScript Allongé: The Six Edition'
];

const listaHtml = document.querySelector("#lista")

const listaDeLibros = librosDeJS.reduce((acc,elemento)=>{
    return acc + `<li>${elemento}</li>`
},"")

console.log(listaDeLibros)

listaHtml.innerHTML = listaDeLibros

/*5
Tenemos un array de objetos llamado personas con personas y edades .

Utilizando reduce, queremos calcular la suma de todas las edades que están en el array.
Ayuda: ojo con el valor de comienzo
const personas = [
    {nombre: "Grace", 
    edad: 6
    }, 
    {nombre: "Ada", 
    edad: 19
    },
    {nombre: "Hedy", 
    edad: 34
    }
  ];

// codea debajo de este comentario la solucion al ejercicio

// deberia mostrar 59
*/
const personas = [
    {nombre: "Grace", 
    edad: 6
    }, 
    {nombre: "Ada", 
    edad: 19
    },
    {nombre: "Hedy", 
    edad: 34
    }
];

const sumaEdades = personas.reduce((acc,elemento)=>{
    return acc + elemento.edad
},0)

console.log(sumaEdades)

/*integrador de todos los metodos
Tenemos un array en una variable datos con números al azar, que pueden ser tanto positivos como negativos
Queremos eliminar todos los números negativos
Con los números restantes, obtener el doble de cada uno
Finalmente, obtener la suma de todos los números que obtuvimos
Podes hacerlo con uno o varios de los metodos que ya vimos: forEach, map, filter, some, every y reduce.
const datos = [2, -4, 6, 0, 5, -1];

// codear acá la solución del ejercicio
const total = ;*/

const datos = [2, -4, 6, 0, 5, -1];


const positivos = datos.filter((elemento)=>{
    if(elemento > 0)
    return elemento
})
console.log(positivos) //(3) [2, 6, 5]

const dobles = positivos.map((elemento)=>{
    return elemento*2
})

console.log(dobles) //(3) [4, 12, 10]

const sumaDeTodos = dobles.reduce((acc,elemento)=>{
    return acc + elemento
},0)

console.log(sumaDeTodos) //26

