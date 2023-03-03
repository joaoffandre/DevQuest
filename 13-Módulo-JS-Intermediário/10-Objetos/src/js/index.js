// Declarando Objeto - Estrutura -  let jogo = {chave1: valor1, chave2:valor2, chave3:valor3}

let jogo = {
    nome:"Mario Sunshine",
    dataLancamento: 2002,
    bestSeller: false
}

//Imprimindo objeto e typeof do objeto

console.log(jogo)
console.log(typeof jogo) // Retorna "object"

//Imprimindo propriedade do objeto - 2 formas diferentes

console.log(jogo.nome) // nomeObjeto.chavePropriedade

console.log(jogo["dataLancamento"]) // nomeObjeto["chavePropriedade"]

//Atribuindo nova propriedade a um objeto após criá-lo

jogo.vendas = "6.28 milhões"  // nomeObjeto.chaveNovaPropriedade = valorNovaPropriedade
jogo.console = ["Nintendo Gamecube","Nintendo Switch"]

console.log(jogo)
console.table(jogo.console)