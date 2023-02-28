//Escopo Global

var nome = "Joao"
let idade = 23

console.log(nome,idade)
console.log(cidade)

if(true){
    console.log(nome,idade)
    console.log(cidade)
}

// Escopo de Bloco

if(true){
    var nome="Joao"
    let idade = 23
    const cidade = "Rio de Janeiro"
    console.log(nome,idade,cidade)
}

console.log(nome)

/* Retornam Erro
console.log(idade)
console.log(cidade) */

{
    let musica = "After Dark"
    const autor = "Mr. Kitty"
    console.log(musica,autor)
}


// Escopo de Função

function melhoresDoMundoFifa(){
    var melhorJogador="Messi"
    let melhorTreinador="Scaloni"
    const melhorGoleiro="DibuMartinez"
    console.log(melhorJogador,melhorTreinador,melhorGoleiro)
    function Puskas(){
        console.log("Oleksy")
    }
    Puskas()
}

melhoresDoMundoFifa()

/* Retornam Erro
console.log(melhorJogador)
console.log(melhorTreinador)
console.log(melhorGoleiro)
Puskas() */