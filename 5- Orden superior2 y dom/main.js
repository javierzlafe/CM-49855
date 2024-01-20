

                //MATH


//math nos facilita sacar ecuaciones

/* console.log(Math) //mostrar en consola lo que aparece  
console.log(Math.PI) //muestra el valor de PI, que es estatico(no cambia)
console.log(Math.abs(7.8)) //devuelve el valor ABSOLUTO sin considerar posit o negat
console.log(Math.ceil(7.2)) //devuelve el nunero redondeado para arriba
console.log(Math.floor(7.8)) //devuelve el numero redondeado para abajo
console.log(Math.round(7.8)) //devuelve el numero redondeado para el mas cercano
console.log(Math.pow(2,5)) //devuelve 2 elevado a 5
console.log(Math.sqrt(81)) //devuelve raiz cuadrada
console.log(Math.sqrt(9)) //devuelve negativo o positivo con -1 o 1
console.log(Math.random() *30 + 20)  //*30 es que recorre 30 nunmero, +20 que a partir del 20

//METODO RANDOM

//uso uno sobre el otro para conseguir un numero entero
/* console.log(Math.round(Math.random() *150))

console.log(Math.max(15,35,9854,21+65,98,2,3,7,618,5))
console.log(Math.min(15,35,9854,21+65,98,2,3,7,618,5))
*/



                    //DATE


    
/* console.log(Date()) //me muestra la fecha actual en la consola
*/



 /*    const fechaActual = new Date();
    console.log(fechaActual); // Muestra la fecha y hora actual en el sistema
*/
/* También se puede crear un objeto Date pasando los argumentos 
para representar una fecha y hora específicas. 
Los argumentos que se pueden pasar son:

año (4 dígitos)
mes (0-11)
día del mes (1-31)
hora (0-23)
minutos (0-59)
segundos (0-59)
milisegundos (0-999)




Por ejemplo, para crear un objeto Date que represente el 25 de diciembre de 2023 
a las 10:30 de la mañana, se puede hacer lo siguiente: */


    /* const fechaEspecifica = new Date(2023, 11, 25, 10, 30, 0, 0);
    console.log(fechaEspecifica); // Muestra la fecha y hora específica
*/

/* Para obtener información específica de una fecha y hora en un objeto Date, 
se pueden llamar a sus métodos. 
*/


/* const fecha = new Date();

const año = fecha.getFullYear();  //traeme el año entero
const mes = fecha.getMonth() + 1; // Se agrega 1, ya que los meses se representan de 0 a 11
const dia = fecha.getDate(); //traeme el dia
console.log(`La fecha actual es ${dia}/${mes}/${año}`);
*/


        //EJEMPLO PARA ACOMODAR LA FECHA COMO QUERRAMOS


/* const hoy = new Date("December 18, 2021")

console.log( hoy.toDateString() ) // Fri Dec 17 2021
console.log( hoy.toLocaleString() ) // 17/12/2021 00:00:00
console.log( hoy.toLocaleDateString() ) // 17/12/2021
console.log( hoy.toTimeString() ) // 00:00:00 GMT-0300 (hora estándar de Argentina)
*/











//-------------------------DOM


 //IMPORTANTE: hay que agregar los contenedores necesarios en el html, sino no funciona.



                        //FORMAS DE PEGARLE A UN NODO     

    
    
        /* getElementById */


/* let div     = document.getElementById("app");
let parrafo = document.getElementById("parrafo1");
console.log(div.innerHTML);
console.log(parrafo.innerHTML);
 */



            //getElementsByClassName

/* let paises = document.getElementsByClassName("paises"); me trae todas las clases llamadas paises
 */


            //getElementsByTagName

/* let contenedores = document.getElementsByTagName("div"); me trae todos los div
 */




/* En este ejemplo vamos a crear una lista de paises en html 
 las vamos a asignar a nuestras variables
 vamos a recorrer con un for-of esta lista (que viene en forma de array a js)
 y le decimos que la imprima por consola*/

/* let paises       = document.getElementsByClassName("paises");
let contenedores = document.getElementsByTagName("div");

for (const pais of paises) {
    console.log(pais.innerHTML);
}
 */




                            //EJEMPLO INNERTEXT

/* const parrafo = document.getElementById("miParrafo");
const texto = parrafo.innerText; // obtiene el texto dentro del párrafo
console.log(texto); // imprime "Este es un párrafo de ejemplo."



parrafo.innerText = "Este es un párrafo modificado con JavaScript.";  */



                        //APPEND()        =>FILMINA 36

/* // se Crea un nodo de tipo Elemento, en este caso la etiqueta p
let parrafo = document.createElement("p");
// se Inserta HTML interno
parrafo.innerHTML = "<h2>¡Hola Coder!</h2>"; 
// Añadir el nodo Element como hijo de body
document.body.append(parrafo);
 */



                        //REMOVE
/* 
document.getElementById("p");
//Elminando el propio elemento
parrafo.remove(); */


            //Tambien podemos borrar valores especificos


/* document.getElementsByClassName("paises");
//Eliminando el primer elemento de clase paises
paises[0].remove() */


/*  EJEMPLO PARA OBTENER Y MODIFICAR DATOS DE INPUT 

document.getElementById("nombre").value = "HOMERO";
document.getElementById("edad").value   = 39; */



                        //Plantillas Literales


/* let producto = { id: 1,  nombre: "Arroz", precio: 125 };
let concatenado = "ID : " + producto.id +" - Producto: " + producto.nombre + "$ "+producto.precio;


let plantilla   = `ID: ${producto.id} - Producto ${producto.nombre} $ ${producto.precio}`;
//El valor es idéntico pero la construcción de la plantilla es màs sencilla
console.log(concatenado);
console.log(plantilla); */



/* let productos   = { id: 1,  nombre: "Arroz", precio: 125};
let contenedor = document.createElement("div");
//Definimos el innerHTML del elemento con una plantilla de texto
contenedor.innerHTML = `<h3> ID: ${producto.id}</h3>
                        <p>  Producto: ${producto.nombre}</p>
                        <b> $ ${producto.precio}</b>`;
//Agregamos el contenedor creado al body
document.body.appendChild(contenedor); */



/* const productos = [{ id: 1,  nombre: "Arroz", precio: 125 },
                  {  id: 2,  nombre: "Fideo", precio: 70 },
                  {  id: 3,  nombre: "Pan"  , precio: 50},
                  {  id: 4,  nombre: "Flan" , precio: 100},];

for (const producto of productos) {
    let contenedor = document.createElement("div");
    //Definimos el innerHTML del elemento con una plantilla de texto
    contenedor.innerHTML = `<h3> ID: ${producto.id}</h3>
                            <p>  Producto: ${producto.nombre}</p>
                            <b> $ ${producto.precio}</b>`;
    document.body.appendChild(contenedor);
}
 */





                        //QUERY SELECTOR

                        
/*  let parrafo = document.querySelector("#contenedor p")
// seleccionar sólo el contenedor por id con #
let contenedor = document.querySelector("#contenedor")

// o por clase:
parrafo = document.querySelector(".texto")                        */

/* let div     = document.getElementById("app");
let parrafo = document.getElementById("parrafo1");
console.log(div.innerHTML);
console.log(parrafo.innerHTML); */



/* 
let productos = [
    {id:1, nombre: "arroz", precio: 125},
    {id:2, nombre: "fideos", precio: 155},
    {id:3, nombre: "azucar", precio: 180},
    {id:4, nombre: "huevos", precio: 600},
    {id:5, nombre: "harina", precio: 100},  
] */



for(const x of productos ){

    let contenedor = document.createElement("div")

    contenedor.innerHTML= `
    <h1> nombre: ${x.nombre} </h1>
    <h2> precio: ${x.precio} </h2>
    `

    document.body.appendChild(contenedor)
}
