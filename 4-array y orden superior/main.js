

/* 
let miArray = [1,"dos",true,{name:"javier",age:32}]

const frutas = ["manzana", "banana", "pera", "sandia"]

//INDICE           0          1         2        3


const frutaPreferida = frutas[2]

frutas[0] = "kiwi"

alert(frutas[17])
 */




/* const numeros = [10,20,30,40,50]

console.log(numeros[1] + numeros[4])
 */



/* 
const numeros = [1,2,3,5,6,7,8,9,10,11,12,13,15,16,17 ]


for (let i = 0 ; i < numeros.length ; i++){
    console.log(numeros[i])
} */





//PUSH

/* 
push(): agrega un elemento al final del array
*/

/* const frutas = ["manzana", "banana", "pera", "sandia"]

frutas.push("melon")

console.log(frutas)
 */



//POP

/* 
pop(): eliminar el ultimo elemento del array*/


/* const frutas = ["manzana", "banana", "pera", "sandia"]

frutas.pop()

console.log(frutas) */



//shift

/* 
shift(): eliminar el primer elemento del array*/


/* const frutas = ["manzana", "banana", "pera", "sandia"]

frutas.shift()

console.log(frutas) */



//unshift

/* 
unshift(): agregar al primer elemento del array*/


/* const frutas = ["manzana", "banana", "pera", "sandia"]

frutas.unshift("kiwi")

console.log(frutas) */


//SPLICE

/* const nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];
nombres.splice(3, 2)

console.log(nombres) */
// ['Rita', 'Ana', 'Vanesa']




//SLICE

/* 
slice(): retorna una copia del array, parametros (desde, hasta)
*/

/* const frutas = ["manzana", "banana", "pera", "sandia"]

const copia = frutas.slice(0,2) */




//JOIN


/* 
join(): une todos los elementos de un array, en una cadena(string)
 */

/* const nombres = ["Luis", "Ana", "Julia", "juan"]

console.log( nombres.join("*") ) 

console.log( nombres.join("\n") ) 
 */



//CONCAT 

/* 
concat(): une dos o mas array */

/* const perros = ["puqui", "negrito", "manchita"]
const gatos = ["michi", "salem", "garfield"]

const mascotas = gatos.concat(perros)

console.log(mascotas) */



//ARRAY DE OBJETOS


/* let personas = [
    {
        nombre:"jairo",
        edad:28,
        ciudad: "guadalajara"
    },
    {
        nombre:"miguel",
        edad:27,
        ciudad:"buenos aires"
    },
    {
        nombre:"mati",
        edad:24,
        ciudad:"mendoza"
    },
    {
        nombre:"maxi",
        edad:30,
        ciudad:"salta"
    }
]


for(let i =0 ;i < personas.length; i++){
    console.log(personas[i].nombre + " vive en " + personas[i].ciudad )
}
 */



/* const remeras = [
    {id:1, color:"negro"},
    {id:2, color:"rojo"},
    {id:3, color:"blanco"},
    {id:4, color:"turquesa"},
]


for(const remera of remeras){
    console.log(remera.color)
} */





    //----------------FUNCIONES DE ORDEN SUPERIOR





 /*    function sumar (num1,num2){ //declaro una funcion, paso 2 parametros
        return num1+num2
    }


    const resultado = sumar(5,10)


    enfriarHeladera */




/* 
    const coche = {
        marca:"toyota",
        modelo: "corolla",
        anio: "2022",
        caballos: 120,
        arrancar : function(){
            alert("el coche arranco")
        },
        frenar : function(){
            alert("estoy frenando")
        }
    }


    coche.arrancar()
    coche.frenar()
    


    alert("hola mundo") */






    //FOREACH


    /* 
    foreach(): ejecuta una funcion para cada elemento del array
    se puede decir que es como un for, pero aplicado de manera sencilla
    */

   /*  const frutas = ["manzana", "banana", "pera", "sandia"]

    frutas.forEach(function(x){
        console.log(x.toUpperCase())
    }) */





    //MAP


    /* 
    map(): crea un nuevo array con el resultado de llamar a la funcion para cada elemento del array
    */




/* const numeros = [1,2,3,4,5]


const dobles = numeros.map( function(x){
    return x* 2
} )
 */



// FIND


/* 
    find(): buscar un elmento en un array que cumpla con cierta condicion, y devuelve el primero
*/


/* const numeros = [2,4,6,8,10]

const encontrado = numeros.find((x)=>x >=5)

console.log(encontrado)

 */



//FILTER


/* 
filter(): crea un nuevo array con todos los elementos que pasan por la prueba de la funcion
*/

/* const numeros = [ 1,2,3,4,5,6,7,8,9,10]

const numerosPares =  numeros.filter( function(numero){
    numero % 2 ===1
})

console.log(numerosPares)

 */





//REDUCE



/* 
reduce se usa para procesar cada elemento del array y combinarlos en un solo valor
*/


/* let preciosProductosComprados = [12569,35296,5000,47891]


const suma = preciosProductosComprados.reduce((acumulador, valorActual)=> acumulador + valorActual)


console.log(suma)
 */



//SORT


//const numeros = [1,2,58,3,1,63,1,64,3,31,168,41,2,196,5,1,456]



/* 
    ordena los numeros de forma ascendente
*/

/* numeros.sort( function(a,b){
    return b-a
})

console.log(numeros) */


/* 
constructor *
productos *
nombre,precio,stock *
filtrar el producto en un array
interactividad con usuario
si no hay, lo agrego
*/




const Producto = function(nombre,precio,stock){
    this.nombre = nombre
    this.precio = precio
    this.stock = stock
    this.iva = function(){
        
    }
}
let producto1= new Producto ("notebook lenovo", 480000, 20)
let producto2= new Producto ("lenovo pad", 45500, 26)
let producto3= new Producto ("notebook apple macbook", 700000, 45)
let producto4= new Producto ("apple pad", 350000, 23)
let producto5= new Producto ("apple smartwatch", 150000, 10)
let producto6= new Producto ("samsung smartwatch", 17000, 30)
let producto7= new Producto ("samsung smarttv", 120000, 1)
let producto8= new Producto ("samsung galaxy s23", 320000, 7)
let lista = [producto1,producto2,producto3,producto4,producto5,producto6,producto7,producto8]




function filtrarProducto(){
    let palabraClave= prompt("ingresa producto que queres buscar").toUpperCase().trim()
    let resultado = lista.filter( (producto)=> producto.nombre.toUpperCase().includes(palabraClave))
    if(resultado.length >0){
        console.table(resultado)
    }else{
        alert("no se encontro ninguna conincidencia con " + palabraClave)
        let agregar = confirm("desea agregar el producto?")
    }
}