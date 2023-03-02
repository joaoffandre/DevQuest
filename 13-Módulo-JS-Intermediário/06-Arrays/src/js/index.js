//Cria Array

const jogos = ["Mario", "Zelda", "GTA"]

//Retorna elemento indexado do Array

console.log(jogos[0])

// Substitui/ Reatribui outro elemento em uma posição do Array

jogos[1]="Metroid"
console.log(jogos[1])

console.log(jogos)

//Determina tamanho do Array

let tamanhoLista= jogos.length
console.log(tamanhoLista)

//Reatribui elemento da última posição do Array

jogos[jogos.length -1] ="Metal Gear Solid"
console.log(jogos)

//Adiciona elemento ao fim do Array

jogos[jogos.length]= "Pokemon"
console.log(jogos)

jogos.push("Sly Cooper")
console.log(jogos)

//Array com Diferentes tipos de Dados

let filme =["Gato de Botas", 9, true]
console.log(filme)

//Console.log de uma posição não existente Retorna Undefined

console.log(filme[filme.length])