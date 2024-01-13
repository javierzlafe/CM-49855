


// function nombreDeLaFuncion(){}


/* function login(){
    let usuario = prompt("ingresa tu usuario: ")

    if(usuario !== ""){
        alert("bienvenido " + usuario)
    }else{
        alert("error, dato mal ingresado")
    }
}

login() */







/* function sumar (numA,numB){

    numA = parseInt(prompt("ingresa el primer numero"))
    numB = parseInt(prompt("ingresa el primer numero"))

    let resultado = numA + numB
    return resultado
}

sumar() */

/* const IVA = 1.21


function calcularIva(importe){  //  creo una funcion con un parametro (importe)
    if(parseFloat(importe)){
        let resultado = importe * IVA
    alert("el importe con iva es : " + resultado)
    }else{
        alert("eso no es un numero")
    } 
}


function calcularPrecioFinal(){
let precioDelProducto = prompt("ingresa el importe del producto: ")
calcularIva(precioDelProducto)
}

calcularPrecioFinal() */





/* const sumar = function (a,b){
    return a+b
}
 */



/* 
function declarada(){
    console.log("se puede llamar desde CUALQUIER PARTE DEL CODIGO, sin importar donde se declaro")
}



const expresada =function(){
    console.log("esta funcion solo se puede llamar si ya se creo")
}

 */





/* 
function normal(a,b){
    let resultado = a+b
    alert(resultado)
}


let funcionAnonima = function(){
    return a+b
}



let funcionFlecha = ()=>{
    return a+b
}



let x = (a,b)=> a+b

 */






/* let computadora = {
    //clave: valor
    marca: "lenovo",
    modelo: "flex5",
    procesador: "ryzen9 5900",
    ram : "32gb",
    direccion: {
        calle: "av siempre viva",
        numero:"4242"
    }
}

 */





function Persona(nombre,edad, dni,altura,sexo){
    this.nombre = nombre;
    this.edad = edad;
    this.dni = dni;
    this.altura = altura;
    this.sexo = sexo;
    this.saludar = function(){
        console.log( "hola, mi nombre es "+ this.nombre + " y tengo " + this.edad + " años")
    }
}



const persona1 = new Persona("carlos",37,33123456, 2, "masculino")
const persona2 = new Persona("javi",32,33123456, 2, "masculino")
const persona3 = new Persona("juli",32,33123456, 2, "femenino")
const persona4 = new Persona("dami",40,33123456, 2, "masculino")


persona3.saludar()





