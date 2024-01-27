const Producto = function(nombre,precio,stock){
    this.nombre = nombre
    this.precio = precio
    this.stock = stock
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

function filtrarProductos(){
    let palabraClave = prompt("ingresa el producto que deseas buscar").trim().toUpperCase()
    let resultado = lista.filter((producto)=> producto.nombre.toUpperCase().includes(palabraClave))

    if (resultado.length > 0){
        console.table(resultado)
    }else{
        alert("no se encontro ninguna coincidencia con: "+ palabraClave)
    }
}
function agregarProducto(){
let nombre = prompt("ingresa el nombre del producto").trim()
let precio = parseFloat(prompt("ingresa el precio del producto"))
let stock = parseInt(prompt("ingresa la cantidad de stock"))

if(isNaN(precio) || isNaN(stock) || nombre==""){
    alert("por favor, ingresa valores validos")
    return
}
let producto = new Producto(nombre,precio,stock)
if(lista.some((p)=>p.nombre === producto.nombre)){
    alert("el producto ya existe en la lista")
    return
}
lista.push(producto)
console.table(lista)
}
let agregar = document.getElementById("javi")
agregar.addEventListener("click", agregarProducto)