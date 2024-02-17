/* 

let pokemonContainer = document.getElementById("pokemonContainer")

const url = "https://pokeapi.co/api/v2/pokemon?limit=16"

fetch(url)
.then(response => response.json())
.then( data=>{

    const pokemons = data.results;

    pokemons.forEach( (pokemon)=>{
        fetch(pokemon.url)
        .then(response=> response.json())
        .then( (pokemonData=>{

            const pokemonElement = document.createElement("div")
            pokemonElement.innerHTML= `
            
            <h2> ${pokemonData.name}</h2>
            <img src="${pokemonData.sprites.front_default}">
            `
            pokemonContainer.appendChild(pokemonElement)

        })    )
    })



})
.catch() */



fetch("productos.json")
.then(response=>response.json())
.then( data=>{

const frutas = data.frutas

const frutasContainer = document.getElementById("frutas-container")

frutas.forEach( fruta =>{
    const frutaElement = document.createElement("p")
    frutaElement.className = ("pochoclo")
    frutaElement.textContent = `nombre: ${fruta.nombre}, color: ${fruta.color}, sabor: ${fruta.sabor}`
    frutasContainer.appendChild(frutaElement)
})
.catch(error=>{
    console.error("ah ocurrido algo raro")
})

})

