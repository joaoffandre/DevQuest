//Método .slice() : Retorna uma CÓPIA do array; primeiro parâmetro é o index de começo (inclusive) e segundo parâmetro é o index de final (exclusive)

let jogos = ["Mario Odyssey","Zelda Botw","Metroid Dread","Pokemon Legends Arceus"]

let novoJogos = jogos.slice(0,2)
let jogos2021 = jogos.slice(-2)

console.log(novoJogos)
console.log(jogos2021)
console.log(jogos)

//Método .splice : Adiciona e Retira elementos de um Array, alterando o conteúdo do Array. Retorna os elementos retirados do Array

// Adicionando elementos com .splice()

console.log(jogos.splice(2,0,"Donkey Kong Tropical Freeze"))
console.log(jogos)

// Retirando elementos com .splice()

console.log(jogos.splice(1,2))
console.log(jogos)

// Retirando elementos e adicionando outros com .splice()

console.log(jogos.splice(1,2,"Mario Maker 2","Super Smash Bros","Mario Kart 8"))
console.log(jogos)

//Retirando todos os elementos da lista a partir de um index

console.log(jogos.splice(1)) //Retorna todos os elementos (que foram retirados) a partir do index 1

console.log(jogos) //Retorna todos os elementos com index < 1 (não foram retirados)