let jogos = ["Mario","Zelda","Metroid"]

//Arrays são objetos. typeof jogos == object

console.log(typeof jogos)

//Tamanho do Array : jogos.length

let numeroJogos= jogos.length
console.log(numeroJogos)

//Iterando a Lista com For

for(let i=0;i<numeroJogos;i++){
    console.log("Jogo: " + jogos[i])
}

//Iterando o Array com jogos.forEach() através de Função Anônima

jogos.forEach(function(item,indice,array){
    console.log("Jogo: " + item + " | índice: " + indice)
})

//Iterando o Array com jogos.forEach() através de Função CALLBACK

jogos.forEach(imprimeElementos)

function imprimeElementos(item,indice,array){
    console.log("Jogo: " + item + " | índice: " +indice)
}

//Método .push : Appendar elemento no Array

console.log(jogos)

jogos.push("Castlevania")

console.log(jogos)

//Método .pop : Retira o último elemento de um Array

console.log(jogos)

jogos.pop()

console.log(jogos)

//Método .shift : Retira o primeiro elemento de um Array

console.log(jogos)

jogos.shift()

console.log(jogos)

//Método .unshift : Adiciona um elemento no COMEÇO do array.

console.log(jogos)

jogos.unshift("Pokémon")

console.log(jogos)

//Método .indexOf : Retorna o índice do primeiro elemento cujo valor é o definido entre parênteses

console.log(jogos)

console.log(jogos.indexOf('Pokémon'))

//Método .lastIndexOf : Retorna o índice da ÚLTIMA OCORRÊNCIA daquele elemento no array.

let frutas = ["banana","maçã","melancia","banana"]

console.log(frutas.lastIndexOf("banana"))

console.log(frutas.lastIndexOf("banana",2))