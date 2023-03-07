//Inicializando Objetos

let videoGame = {
    console:"Nintendo Switch",
    valor:2000
}

let videoGame2 ={
    console:"Playstation5",
    valor:4500
}

//Inicializando Array com Objetos como elementos

let videoGames=[videoGame,videoGame2]

console.log(videoGames)

//Imprimindo propriedade/método de um dos objetos do Array

console.log(videoGames[1].console,videoGames[1].valor)
