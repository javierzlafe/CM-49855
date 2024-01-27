//STORAGE   filmina 8

//HAY 4 METODOS PARA EL USO DEL STORAGE

/* 
setItem() permite crear una clave y asignarle un valor
getItem() permite recuperar o traer una clave desde el local storage
removeItem() para eliminar un dato
clear() limpiar
 */

localStorage.setItem('bienvenidos', 'javier gimenez');


function crearClaveEnLocalStorage(){
localStorage.setItem("miClave", "coderHouse")
}

//uso del set item. antes que nada hay que enlazar el formulario con js


//creamos las variables y las asociamos a cada id del formulario
const imputNombre = document.querySelector("#inputNombre")
const imputEdad = document.querySelector("#inputEdad")
const imputEmail = document.querySelector("#inputEmail")
const imputProfesion = document.querySelector("#inputProfesion")
const botonEnviar = document.querySelector("#boton")


//ahora vamos a crear una funcion que mem guarde el formulario en el local storage
function guardarFormulario(){
localStorage.setItem("nombre", imputNombre.value)
localStorage.setItem("edad", imputEdad.value)
localStorage.setItem("email", imputEmail.value)
localStorage.setItem("profesion", imputProfesion.value)
}


botonEnviar.addEventListener("click", guardarFormulario) //evento para que el boton envie el form


/* bien, ya enviamos los datos al local storage, como hago para traerlos? para recuperarlos digamos
bueno, como dijimos antes... getItem() permite recuperar o traer una clave desde el local storage */

function recuperarDatosDelFormulario(){
    imputNombre.value = localStorage.getItem("nombre")
    imputEdad.value = localStorage.getItem("edad")
    imputEmail.value = localStorage.getItem("email")
    imputProfesion.value = localStorage.getItem("profesion")
}

/* ya sabemos enviarlo y traerlo, como hacemos para eliminar un dato que ya no nececitamos? 
    aca entra el metodo removeItem()
    */


function quitarDatosDelLocalStorage(){
    localStorage.removeItem("profesion")
}



    //SESION STORAGE.

    /* El sesion storage funciona de la misma manera que el local, pero la diferencia es que solo va a poder
        recuperar los datos, pero en el momento en que la sesion este activa, una vez que se termina la sesion,
        ya no se puede acceder a ningun dato. se pierde todo. por ejemplo las sesiones de los bancos */





        //Ciclo para recorrer las claves almacenadas en el objeto localStorage
/* for (let i = 0; i < localStorage.length; i++) {
    let clave = localStorage.key(i);
    console.log("Clave: "+ clave);
    console.log("Valor: "+ localStorage.getItem(clave));
}
 */




//                             JSON


/*(JavaScript Object Notation) es un formato de intercambio de datos, ligero y fácil de leer

los objetos JSON se definen usando una sintaxis de pares clave-valor 
similar a la sintaxis de los objetos JavaScript. 
*/


 

    /* en JSON tenemos dos metodos.  parse() y stringify() */


    function guardarFormulario(){

        const datosDeFormulario= {
            nombre: imputNombre.value,
            edad: imputEdad.value,
            profesion: imputProfesion.value
        }}



        let resultado = JSON.stringify(datosDeFormulario)  //envio el objeto a json
        console.log(resultado) 
       

        /* y para traer un objeto json, lo tenemos que volver a poner en un formato de tipo objeto
        para poder leerlo usamos el parse() */



        function recuperarDatosDelFormulario(){
            const datosDelForm = JSON.parse(localStorage.getItem("datosDeFormulario"))
            imputNombre.value = datosDelForm.nombre
            imputEdad.value = datosDelForm.edad
            imputProfesion.value = datosDelForm.profesion
        }




/* 
SetItem(): permite crear una clave y asignarle un valor
GetItem(): permite recperar o traer una clave desde el storage
removeItem(): elimina un dato en concreto
clear(): limpia
*/


/* localStorage.setItem("bienvenidos", "javier gimenez")
localStorage.setItem("alumno", "sebastian")
localStorage.setItem("alumno1", "carlos")
localStorage.setItem("alumno2", "jesica")
 */



/* const inputNombre = document.querySelector("#inputNombre")
const inputEdad = document.querySelector("#inputEdad")
const inputProfesion = document.querySelector("#inputProfesion")
const botonEnviar = document.querySelector("#boton")
const botonTraer = document.querySelector("#botonTraer")


function guardarFormulario(){
    localStorage.setItem("nombre", inputNombre.value)
    localStorage.setItem("edad", inputEdad.value)
    localStorage.setItem("profesion", inputProfesion.value)
}

botonEnviar.addEventListener("click", guardarFormulario)



function recuperaDatos(){
    inputNombre.value = localStorage.getItem("nombre")
    inputEdad.value = localStorage.getItem("edad")
    inputProfesion.value = localStorage.getItem("profesion")
}

botonTraer.addEventListener("click", recuperaDatos) */





const persona= {
    nombre: "juan",
    edad: 32,
    hobbies:["correr", "leer", "viajar"],
    direccion:{
        calle: "Av. libertador",
        numero: 1234,
        ciudad: "buenos aires"
    }
}

const personaEnJson = JSON.stringify(persona)

let devueltaAobjeto = JSON.parse(personaEnJson)

console.log(devueltaAobjeto)
