// "use strict"    //Strict Mode com Escopo Global 

// This no Contexto Global

console.log(this)  // Retorna o Objeto Global "window"
// console.log(this === window) // Retorna "True" NO NAVEGADOR

//This no Contexto da Função (Não-Estrito)

function imprimeThis(){
    console.log("Este é o this no escopo de função:", this)
}

imprimeThis()  //Retorna o Objeto Global "window"

//This no Contexto da Função com STRICT MODE

function imprimeThisStrict(){
    "use strict"
    console.log("Este é o this na função com Strict Mode:", this)
}

imprimeThisStrict() // Retorna "undefined"

//This dentro de um método de um Objeto

let comida = {
    nome:"brócolis",
    temperatura:0
}

console.log(comida)

comida.cozinhar = function(novaTemperatura){
    console.log(this)  // O "this" retorna o objeto "comida"
    this.temperatura= novaTemperatura
}

comida.cozinhar(100)
console.log(comida) 