
//edad = 18

/* let permiso

if (edad >= 18) {
  permiso = true
} else {
  permiso = false
}

if (permiso) {
  alert("Puede comprar cerveza")
} else {
  alert("No puede comprar")
}
 */


/* let mensaje = edad >=18 ? "si, podes comprar" : "sos menor, no podes tomar alcohol"
alert(mensaje) */




//let carrito = []

/* if(carrito.length ===0){
    alert("el carrito esta vacio")
}
 */
/* 
carrito.length === 0 && alert("el carrito esta vacio")
 */



/* 
const usuario1 = {
    nombre:"miguel",
    edad:25,
    ciudad: "laferrere, la matanza"
}


let usuario2 = 

alert( usuario2 ?? "escuchame una cosita pedaso de buena persona, te pedi un numero") */




/* 
const persona= {
    nombre:"lorena",
    edad:41,
    direccion:{
        ciudad:"San isidro",
        calle: "falsa",
        numero:1234
    }
}

const {nombre,edad, direccion:{ciudad,calle,numero}}= persona

console.log(nombre)

console.log(ciudad) */






/* 
const data ={
    "timestamp": 165350168975,
    "base": "USD",
    "rate":{
        "PRICE_FOR_BLUE_LATAM_ASD123456SDASC": 1300,
        "BRL":500,
        "MEX": 10.07,
        "PEN": 1256,
        "CR" :1500,
    }
}

const {rate:{PRICE_FOR_BLUE_LATAM_ASD123456SDASC:ARG}} = data

console.log(ARG)

 */





/* const arr1= [1,2,3,4,5]


const arr2 = [...arr1, 6,7,8,9]


console.log(arr2)
 */




/* function sum(x,y,z){
    return x+y+z
}


const result = sum(...numbers) */
/* const numbers=[1,2,3,4,5,6,7,8,9]

function sumar(...numbers){

    return numeros.reduce( (acc, x)=> acc+x )  
} */





