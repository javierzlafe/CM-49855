/* 
html *
script *
variables
bucles
funciones
interactividad con el usuario  = prompt, alert, confirm, etc
condicionales
 */
 

let identificar = true
let intentos=3
do{
let usuario = prompt("ingresa tu usuario, tenes 3 intentos") //pido ingresar un usser
if(usuario == null){  //si usser es null, corta la ejecucion del programa
    break
}
if (usuario == "blas" && intentos <=3){  //si usser ok en menos de 3 intentos, hay acceso
    alert("bienvenido " + usuario)
    identificar=false  //si hay acceso, el identificador pasa a false, y corta el bucle de reconocimiento
}else{
    alert("no reconozco el usuario: " + usuario + " te quedan " + intentos + " intentos")  //si no hay acceso, siguiente paso
    intentos--

    if(intentos>3){
        alert("ya llegaste a los 3 intentos")
        break
    }
}
}while(identificar)




let x = parseInt(prompt("dame un numero")) 
let y = parseInt(prompt("dame otro numero"))


console.log(typeof x)


alert(x+y)