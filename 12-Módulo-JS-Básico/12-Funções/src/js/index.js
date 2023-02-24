function parabenizaAluno(){
    alert("Parábens por ter finalizado o módulo de JavaScript!")
}

parabenizaAluno()

function potenciacao(base,expoente){
    console.log(base**expoente)
}

potenciacao(2,6)

function concatena(nome,idade,musica){

    let frase = "Meu nome é " + nome + ", tenho " + idade + " anos, e minha música favorita é " + musica  

    return frase
}

let descricao = concatena("Joao",23,"After Dark")
console.log(descricao)

descricao = descricao + ", tchau tchau"
console.log(descricao)

function confirmaReceberEmail(email, nome = "visitante"){
    
    return confirm("Olá " + nome +"! Deseja receber atualizações de nossa página em seu e-mail " + email + "?")
}

let confirmacao = confirmaReceberEmail("joaojorpas@hotmail.com")
console.log(confirmacao)