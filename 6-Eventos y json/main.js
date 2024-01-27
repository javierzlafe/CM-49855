
//La sintaxis para asignar una función a un evento en JavaScript es la siguiente:

                               /*  elemento.evento = function() {
                                    // Código a ejecutar cuando se produce el evento
                                }
 */

/* en este caso "elemento" es el elemento HTML al que queremos asignar el evento, 
y "evento" es el nombre del evento que queremos que se ejecute, como "onClick", "onLoad", "onMouseOver", etc.

La función que se asigna al evento puede contener cualquier código JavaScript, 
como mostrar un mensaje de alerta, cambiar el contenido de la página, enviar datos a un servidor, etc.*/


//FORMA ACEPTABLE (no es la recomendada)


/* 
// Seleccionamos el botón y el título utilizando el método getElementById()
let boton = document.getElementById("boton");
let titulo = document.getElementById("titulo");

// Asignamos la función al evento onClick del botón
boton.onclick = function() {
	// Cambiamos el contenido del título
	titulo.innerHTML = "Nuevo texto";
} */



            //ADDEVENLISTENER()  nace en em6 2015 y se usa en la actualidad



/* addEventListener() es un método que nos permite agregar una función a un evento específico en un elemento HTML. 
Cuando se produce el evento, (cuando se hace click por ejemplo) la función se ejecuta automáticamente.

La sintaxis para addEventListener() seria asi:


elemento.addEventListener(evento, funcion);
Donde:

elemento: es el elemento HTML al que se le desea agregar el evento.
evento: es el nombre del evento que se desea asignar, como "click", "load", "submit", "keyup", etc.
funcion: es la función que se va a ejecutar cuando se produzca el evento.

Por ejemplo, si queremos agregar un evento de clic a un botón con ID "mi-boton", se puede usar addEventListener() 
de la siguiente manera:


let boton = document.getElementById("mi-boton");   //crear un boton en html






boton.addEventListener("click", function() {
  console.log("¡Hiciste clic en el botón!");
  alert("evento detectado, mira la consola")
});
 */





/* 
            //esta seria la 3er forma que se muestra, pero NO SE USA.

div class="card">
		<h2>Evento Click</h2>
		<p>Presiona el botón para ver la alerta:</p>
		<button onclick="alert('¡Haz hecho clic en el botón!')">Haz clic aquí</button>
	</div> */





                            //Eventos de mouse



/* 

Existen varios eventos que puede tener un mouse en JavaScript



        CLICK: Este evento se activa cuando el usuario hace clic en un elemento con el mouse.



// Seleccionar un elemento HTML por su ID
var elemento = document.getElementById("miElemento");

// Agregar un evento de clic al elemento utilizando addEventListener
elemento.addEventListener("click", function() {
  console.log("Haz hecho clic en el elemento!");
});





        MOUSEOVER: Este evento se activa cuando el mouse entra en un elemento.

// Seleccionar un elemento HTML por su ID
var elemento = document.getElementById("miElemento");


// Agregar un evento de mouseover al elemento utilizando addEventListener
elemento.addEventListener("mouseover", function() {
  console.log("El mouse ha entrado en el elemento!");
})







            MOUSEOUT: Este evento se activa cuando el mouse sale de un elemento.

// Seleccionar un elemento HTML por su ID
var elemento = document.getElementById("miElemento");

// Agregar un evento de mouseout al elemento utilizando addEventListener
elemento.addEventListener("mouseout", function() {
  console.log("El mouse ha salido del elemento!");
});


        MOUSEMOVE: Este evento se activa cuando el mouse se mueve dentro de un elemento.


// Seleccionar un elemento HTML por su ID
var elemento = document.getElementById("miElemento");

// Agregar un evento de mousemove al elemento utilizando addEventListener
elemento.addEventListener("mousemove", function(event) {
  console.log("El mouse estaen la posición x: " + event.clientX + " y: " + event.clientY);
});


//EL JUEGUITO DEL TATATATATA, NO LO PUSE. TRATEN DE HACERLO USTEDES COMO PRACTICA



                            //Ejemplo para explicar el e.target


                            document.getElementById("boton1").addEventListener("click", function (e) {
                                // e.target se refiere al elemento <button id="boton1">Botón 1</button>
                                alert("Se hizo clic en " + e.target.textContent);  /* textContent.content, seria "boton1" */
                              
                              
                              document.getElementById("boton2").addEventListener("click", function (e) {
                                // e.target se refiere al elemento <button id="boton2">Botón 2</button>
                                alert("Se hizo clic en " + e.target.textContent);
                              });
                              
                              
                              
                              
                              
                                                          //EVENTOS DE TECLADO
                              
                              
                              
                              
                                                          //INPUT
                              
                              /* input: Este evento se activa cuando se cambia el valor de un elemento de entrada, si?
                              como un campo de texto o un área de texto, peude ser una entrada de teclado o una acción del mouse. 
                              Pero normalmente se usa con el teclado
                              El evento input se dispara inmediatamente después de que el valor cambia.
                              Código de ejemplo:
                              
                              
                              
                              
                              let inputField = document.getElementById('miCampoDeTexto');
                              inputField.addEventListener('input', function(event) {
                                console.log('Valor del campo de texto cambiado:', event.target.value);
                              });
                              
                              
                              input: es útil cuando necesitas realizar alguna acción mientras el usuario está ingresando información 
                              en un campo de texto o área de texto. 
                              Por ejemplo, podemos usarlo para mostrar una vista previa en tiempo real de lo que el usuario está escribiendo, 
                              para validar el contenido de un campo de texto a medida que el usuario lo escribe.
                              
                              
                              
                              
                                                          //CHANGE
                              
                              
                              change: Este evento también se activa cuando se cambia el valor de un elemento de entrada, 
                              pero a diferencia del evento input, el evento change se dispara después de que el usuario termino
                              de interactuar con el texto, por ejemplo, haciendo clic fuera del campo de texto.
                              Código de ejemplo:
                              
                              
                              let inputField = document.getElementById('miCampoDeTexto');
                              inputField.addEventListener('change', function(event) {
                                console.log('Valor del campo de texto cambiado:', event.target.value);
                              });
                              
                              
                              change: Este evento es útil cuando necesitas realizar alguna acción después de que el usuario haya terminado 
                              de ingresar información en un campo de texto o área de texto. 
                              Por ejemplo, puedes utilizarlo para validar el contenido de un campo de texto después de que el usuario 
                              haya terminado de escribir o para actualizar un campo de texto con el contenido ingresado 
                              antes de enviar el formulario.
                              
                              
                              
                              
                                                          //SUBMIT
                              
                              
                              submit: Este evento se activa cuando se envía un formulario, 
                              ya sea haciendo clic en un botón de enviar o presionando la tecla Enter en un campo de texto. 
                              Puedes utilizar este evento para realizar alguna acción antes de enviar el formulario.
                              Código de ejemplo:
                              
                              
                              let form = document.getElementById('miFormulario');
                              form.addEventListener('submit', function(event) {
                                event.preventDefault(); // Detener el envío del formulario
                                console.log('Formulario enviado');
                              });
                              
                              
                              En el ejemplo anterior, se utiliza el método preventDefault() para detener el envío del formulario 
                              y evitar que la página se recargue. 
                              Pueden agregar su propia lógica para manejar la información del formulario antes de enviarla al servidor.
                              
                              
                              
                              
                              submit: Este evento es útil cuando necesitas realizar alguna acción antes de enviar un formulario al servidor. 
                              Por ejemplo, podemos usarlo para validar la información ingresada por el usuario, 
                              realizar alguna operación adicional en los datos del formulario o enviar los datos mediante una llamada AJAX...
                              
                              
                               */
                              
                              
                              
                              
                              
                              
                              
                              


























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
