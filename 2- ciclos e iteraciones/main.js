


/* let nombre = prompt("ingresa tu nombre")


if(nombre == "santi"){
    alert("bienvenido santi")
}else if(nombre == "mariam"){
    alert("bienvenida maraim")
}else if(nombre == "cris"){
    alert("bienvenido cris")
}else{
    alert("no te conozco tomate el palo")
}
 */


/* 
let numero = 5   
let numero2 = "5"

if(numero === numero2){
    alert("si, son iguales")
}

 */


/* 
let nombreIngresado   = prompt("Ingresar nombre");
let apellidoIngresado = prompt("Ingresar apellido");



if((nombreIngresado !="" && nombreIngresado != Number) || (apellidoIngresado !="")){


    alert("Nombre: "+nombreIngresado +"\nApellido: "+apellidoIngresado); 
}else{
    alert("Error: Ingresar nombre y apellido");
}


if(nombreIngresado.toUpperCase == "franquito"){
    alert("hola franquito")
} */





/* 
    producto
    ofertantes
    2000
    condicional para saber quien ofrece mas
*/



/* alert("vendo algo, escucho ofertas")

let precioProducto = 2000

let ofertaDelUsuario = parseFloat(prompt("ingresa tu oferta"))    


if(ofertaDelUsuario >= precioProducto){
    alert("ahi te traigo el moño papá")
}else if(ofertaDelUsuario >= 1500 && ofertaDelUsuario <2000){
    alert("estirate un poco mas")
}else{
    alert("anda pa`alla bobo")
}
 */






//sintaxis  for(inicio;limite/condicion;incremento){}



/* for(let i=0; i < 5; i++){
    console.log("estoy contando "+i)
} */





/* for (let i = 1; i <= 10; i++) {
    //Si la variable i es igual 5 interrumpo el for. 
                if(i == 5 || i==9){
                    continue;
                }
    alert(i);
} */





/*  let repetir = false;
 while(repetir){
     console.log("Al infinito y...¡Más allá!");
     repetir = confirm("desea seguir?")

 }
 */

/* let verificar = true
let intento = 1

 do{
    let usuario = prompt("ingresa tu usuario (solo tenes 3 intentos)")
    if(usuario == ""){
        break
    }
    if(usuario.toLowerCase === "miguel gonzales" && intento <=3){
        alert("bienvenido mi querido " + usuario)
        verificar = false
    }else{
        alert("no se reconoce el usuaio: "+ usuario)
        intento++
        if(intento >3){
            alert("usted supero los 3 intentos")
            break
        }
    }
 }while(verificar) */




 alert("binevenidos a la concesionaria del pela")
 let consulta = confirm("te puedo ayudar a buscar un coche?")

 if(consulta===true){

    let coche = prompt("que coche buscas?")
    let color = prompt("elegi el color de tu "+coche)


    switch(color){

        case "blanco":
            alert("tenemos "+ coche + " en color " + color)
            break;
        case "negro":
            alert("tenemos "+ coche + " en color " + color)
            break;
        case "azul":
            alert("tenemos "+ coche + " en color " + color)
            break;
        case "naranja":
            alert("tenemos "+ coche + " en color " + color)
            break;
        default:
            alert("no tenemos " + coche + "en ese color")

            
            let comprar = confirm("queres comprarlo?")
    if(comprar){
        alert("gracias por tu compra")
    }
    }

    
 }
