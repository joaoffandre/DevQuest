//Criando Array Multidimensional (Tridimensional)

let jogos = [
    ["Mario Odyssey","Nintendo Switch",2017],
    ["Mario 3d World",["Nintendo WiiU", "Nintendo Switch"],[2013,2021]]
]

//Imprimindo Array com console.table

console.table(jogos)

//Imprimindo Array dentro do Array

console.table(jogos[0])
console.table(jogos[1])

//Imprimindo o Array de 3ª Geração

console.log(jogos[1][0])
console.table(jogos[1][1])
console.table(jogos[1][2])

//Imprimindo itens dos Arrays de terceira Geração

console.log(jogos[1][1][0])
console.log(jogos[1][2][0])