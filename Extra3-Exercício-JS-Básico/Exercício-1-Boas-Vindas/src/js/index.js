function perguntaNome(){
    let nome= prompt("Qual o seu nome?")
    if (nome == '' || nome===null){
        nome="visitante"
    }
    return nome
}

function alertaVisitante(){
    let nome= perguntaNome()
    alert("Seja bem-vindo(a), " + nome + "!")
}

alertaVisitante()