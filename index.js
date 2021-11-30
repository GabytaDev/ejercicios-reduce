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

/*const numbers = [6, 1, 34, 94, 3, 17];

const suma = numbers.reduce((acc,elemento)=>{
return acc + elemento
}, 0)

console.log(suma)

const separandoPares = (array)=>{
    return  numeros.filter ((elemento)=>{
      return elemento % 2 === 0
    })
}

//Mumuki///
const sumatoria = (array)=>{
    return array.reduce ((acc,elemento)=>{
        return acc + elemento
    }, 0)
}

console.log(sumatoria(numbers))*/


/*2
Tenemos un array llamado numbers con números enteros al azar.
Utilizando reduce, queremos calcular la multiplicación de todos los números que están en el array.
const numbers = [6, 1, 34, 94, 3, 17];

// codea debajo de este comentario la solucion al ejercicio

// deberia mostrar 977976*/


/*
const multiplicacion = numbers.reduce((acc,elemento)=>{
return acc * elemento
})
console.log(multiplicacion)

// mumuki ///
const productoria = (array)=>{
return array.reduce((acc,elemento)=>{
    return acc * elemento
})
}

console.log(productoria(numbers))*/

/*3
Tenemos un array llamado notasDeTPs con números del 1 al 10, que representan las notas de los distintos trabajos prácticos 
entregados por Grace Hopper en el curso de Ada.
Usando reduce, queremos calcular la nota promedio final de trabajos prácticos (el promedio se calcula sumando todas las notas 
y dividiéndolo por la cantidad de notas, o dividiendo cada nota por la cantidad total y luego sumando los resultados).
Por ejemplo: Si tenemos [7, 8, 9, 10], la nota final es 8.5
const notasDeTPs = [4, 7, 8, 5, 10];

// codea debajo de este comentario la solucion al ejercicio

// deberia mostrar 6.8*/

//const notasDeTPs = [4, 7, 8, 5, 10];

// const promedio = notasDeTPs.reduce((acc,elemento)=>{
//     return acc + (elemento/ notasDeTPs.length)
// },0)
// console.log(promedio)
/*
const promedio = (notas) =>{
    const promedio = notas.reduce((acc,elemento)=>{
      return acc + elemento
    },0)
    return promedio/notas.length
 }
 console.log(promedio(notasDeTPs))*/

///Mumuki////
/*const promedio = (array)=>{
    const resultado = array.reduce((acc,elemento,index,array)=>{
        return acc + (elemento/array.length)
    },0)
    return resultado
}

console.log(promedio(notasDeTPs))

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

///Mumuki///
const enlistar = (array) =>{
    return array.reduce((acc,elemento)=>{
        return acc + `<li>${elemento}</li>`
    },"")
}

console.log(enlistar(librosDeJS))
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

///Mumuki ///
const sumaDeEdades = (array) =>{
    return array.reduce((acc,elemento)=>{
        return acc + elemento.edad
    },0)
}
console.log(sumaDeEdades(personas))*/

/*integrador de todos los metodos
Tenemos un array en una variable datos con números al azar, que pueden ser tanto positivos como negativos
Queremos eliminar todos los números negativos
Con los números restantes, obtener el doble de cada uno
Finalmente, obtener la suma de todos los números que obtuvimos
Podes hacerlo con uno o varios de los metodos que ya vimos: forEach, map, filter, some, every y reduce.
const datos = [2, -4, 6, 0, 5, -1];

// codear acá la solución del ejercicio
const total = ;*/
/*
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

console.log(sumaDeTodos) //26*/


//Mumuki///
/*

const sumaDeLosDoblesPositivos = (array) => {
    const positivos = datos.filter((elemento)=>{
        if(elemento > 0)
        return elemento
    })
    
    const dobles = positivos.map((elemento)=>{
        return elemento*2
    })

    const sumaDeTodos = dobles.reduce((acc,elemento)=>{
        return acc + elemento
    },0)
    return sumaDeTodos
}

console.log(sumaDeLosDoblesPositivos(datos))*/

// map 
// recorre un array
// ejecuta una funcion por cada elemento del array 
// la funcion va a recibir como parametro 
// cada uno de los elementos del array

// map retorna un array nuevo 
// a partir de las cosas que se retornan en la funcion 

/*Map 1
Tenemos un array en una variable numeros con números al azar.
Usá la función map para crear un nuevo array incrementando cada valor del array en 10, y guardarlo en 
la variable numerosMasDiez
Mostrar por consola el array original y el nuevo*/

const numeros = [1, 2, 3, 4, 5];

let numerosMasDiez = numeros.map(numero=>{
    return numero + 10
})


console.log(numeros); // [1, 2, 3, 4, 5]
console.log(numerosMasDiez); // [11, 12, 13, 14, 15]

/*Tenemos un array en una variable numeros con números al azar.
Usar la función map para crear un nuevo array multiplicando cada valor del array 
por 2, y guardarlo en la variable dobles
Mostrar por consola el array original y el nuevo*/

const numeros2 = [3, 7, 13, 99];

let dobles2 = numeros2.map(numero => {
    return numero * 2
})

console.log(numeros2); // [3, 7, 13, 99]
console.log(dobles2); // [6, 14, 26, 198]

/*3 Tenemos un array en una variable frases con frases al azar.
Usar la función map para crear un nuevo array donde cada frase empiece y termine 
con signo de exclamación.
Mostrar por consola el array original y el nuevo*/
/*const frases = ['Labore sea dolor.', 'Justo rebum dolor.', 'Stet lorem amet.'];

let frasesExclamadas = frases.map(elemento => {
    return `¡${elemento}!`
})


console.log(frases); // ['Labore sea dolor.', 'Justo rebum dolor.', 'Stet lorem amet.']
console.log(frasesExclamadas); // [ '¡Labore sea dolor.!', '¡Justo rebum dolor.!', '¡Stet lorem amet.!' ]*/

/* 4 Tenemos un array en una variable libros con libros para leer sobre Javascript.
Usar la función map para crear un nuevo array donde cada titulo de los libros esté encerrado en una etiqueta 
<li></li>.
Mostrar por consola el array nuevo, encerrándolo entre <ul></ul>*/
const librosDeJS2 = [
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

// codear acá la solución del ejercicio
let listadoDeLisbros = librosDeJS2.map(libro => {
    return `<ul> ${libro} </ul>`
})
console.log(listaDeLibros)
// el resultado final debería ser
// <ul><li>JavaScript for Kids: A Playful Introduction to Programming</li><li>Composing Software</li><li>Eloquent JavaScript: A Modern Introduction to Programming</li><li>JavaScript: The Good Parts</li><li>Programming JavaScript Applications: Robust Web Architecture with Node, HTML5, and Moderns JS Libraries</li><li>Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript</li><li>JavaScript: The Definitive Guide</li><li>You Don’t Know JS</li><li>JavaScript Allongé: The Six Edition</li></ul>

/*Tenemos un array en una variable frases con frases al azar.
Usar la función map para crear un nuevo array que contenga la longitud de cada frase.
Mostrar por consola el array original y el nuevo.

const frases2 = ['Labore sea dolor.', 'Justo rebum dolor.', 'Stet lorem amet.'];

let longitudes = frases2.map(elemento =>{
    return elemento.length
})

console.log(frases2); // ['Labore sea dolor.', 'Justo rebum dolor.', 'Stet lorem amet.']
console.log(longitudes); // [ 17, 18, 16 ]*/

/*Tenemos un array en una variable playlist con una lista de canciones de un disco.
Usar la función map para agregar a cada título de la canción el número de posición en la que 
está dentro del array.*/
const playlist = ['Everlong', 'The Pretender', 'Learn to Fly'];

let listaDePlaylist = playlist.map((elemento, index) =>{
    return `${index} - ${elemento}` 
})

console.log(listaDePlaylist)
// RESULTADO ESPERADO
// [ '0 - Everlong', '1 - The Pretender', '2 - Learn to Fly' ]

/*7
Tenemos un array en una variable costos con números que representan costos de diferentes productos.
Completar el siguiente código para llegar al resultado esperado
A un costo primero se le agrega la ganancia y después el IVA (este ultimo sobre el costo + la ganancia)*/

// const costos = [ 12.5, 56, 98, 45.75 ];

// const agregarIVA = (costo) => {
//   return costo * 1.21;
// }

// const sumarGanancia = (costo) => {
//   return costo * 1.5;
// }

// let resultado = costos.map((costo)=>{
//    return (costo * 1.5) * 1.21
    
// })

// console.log(resultado)
// // deberia mostrar
// [ 22.6875, 101.64, 177.87, 83.03625 ]
/*
Tenemos un array en una variable costos con números que representan costos de diferentes productos.
También tenemos un array en una variable productos con los nombres de cada producto.
Completar el siguiente código para llegar al resultado esperado
A un costo primero se le agrega la ganancia y después el IVA
El nombre de un producto en una posición, se corresponde con el precio que está en la misma posición. 
Por ejemplo: el producto que está en la posición 1 tiene un costo igual al elemento en la posición 1 del 
array costos*/
/*
const productos = [ 'celular', 'notebook', 'monitor' ];
const costos = [ 12.5, 56, 98 ];


const agregarIVA = (costo) => {
  return costo * 1.21;
}

const sumarGanancia = (costo) => {
  return costo * 1.5;
}

let resultado = costos.map((costo)=>{
    return (costo * 1.5) * 1.21
     
 })
const corresponder = (costos, productos) =>{
    const precios = resultado
    const arrayFinal = precios.map((elemento, index) => {
    return `${productos[index]} ${precios[index]}`  
   })
   return arrayFinal
  }

console.log(corresponder(costos,productos))*/

// deberia mostrar
// [ "celular 22.6875", "notebook 101.64", "monitor 177.87" ]

/// EJERCICIOS FILTER///
// a partir de un array, me quedo con ALGUNOS elementos
// que cumplen una condicion
// en el filter
// hacemos un array con todos los elementos que respondan TRUE
// a lo que estamos retornando 
/*1
Tenemos un array en una variable costos con números que representan costos de diferentes productos.
Usando filter, crear un nuevo array con los precios más caros (mayores a 50) y guardarlo en la variable losMasCaros
Mostrar el array original y el filtrado*/
const costos = [ 39, 53, 17, 99, 7, 9, 6, 68, 54, 97, 27, 90, 92, 75, 26, 86, 22, 42, 20, 14 ];
// codear acá la solución del ejercicio

const losMasCaros = costos.filter((costo)=>{
    return costo > 50
})

console.log(costos);
console.log(losMasCaros);
// deberia mostrar
// [ 39, 53, 17, 99, 7, 9, 6, 68, 54, 97, 27, 90, 92, 75, 26, 86, 22, 42, 20, 14 ]
// [ 53, 99, 68, 54, 97, 90, 92, 75, 86 ]*/

/*2
Tenemos un array en una variable numeros con números al azar.
También tenemos dos arrays vacios en las dos variables numerosPares y numerosImpares.
Utilizando filter crear un nuevo array con todos los números pares y guardalo en la variable numerosPares
Utilizando filter crear un nuevo array con todos los números impares y guardalo en la variable numerosImpares*/
const masNumeros = [ 43, 11, 18, 46, 44, 37, 42, 29, 9, 3, 37, 0, 40, 10, 38, 34, 25, 40, 4, 32 ];

// codea acá tu solución
const numerosPares = masNumeros.filter((numero)=>{
    return numero % 2 == 0
})
const numerosImpares = masNumeros.filter((numero)=>{
    return numero % 2 !== 0
})

console.log("pares: ", numerosPares);
console.log("impares: ", numerosImpares);
// deberias tener como resultado
// pares: [18, 46, 44, 42, 0, 40, 10, 38, 34, 40, 4, 32]
// impares: [43, 11, 37, 29, 9, 3, 37, 25]

/*3
Tenemos un array en una variable mix con varios elementos, de distintos tipos de datos.
Usando filter, crear un nuevo array con todos los elementos que sean strings y guardalo en la variable 
soloStrings.
Ayuda: para saber si algo es un string en javascript, podés usar typeof ver más
Mostrar el array resultante*/

const mix = [
  'Ut vero.',
  2,
  function () { console.log('hola mundo!') },
  56,
  'Diam rebum nonumy et.',
  true,
  false,
  'Kasd stet.',
  'Sit et dolor.',
  null,
  null,
  [ 1, 2, 3],
  'Dolore.'
];

// codear acá la solución del ejercicio
const soloStrings = mix.filter((elemento, index)=>{
    return typeof elemento === "string"
})
console.log(soloStrings);
// deberia mostrar
// [ 'Ut vero.', 'Diam rebum nonumy et.', 'Kasd stet.', 'Sit et dolor.', 'Dolore.' ]


