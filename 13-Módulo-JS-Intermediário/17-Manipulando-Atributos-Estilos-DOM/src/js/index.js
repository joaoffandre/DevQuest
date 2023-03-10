function alterarCorDeFundoPrimeiroPost(){
    //Atribuindo um array com os elementos "article" a uma variável
    let arrayArticles= document.getElementsByClassName("post")
    console.log(arrayArticles)

    //Atribuindo o primerio article (objeto) a uma variável

    let primeiroPost= arrayArticles[0]
    console.log(primeiroPost)

    //Mudando o estilo do elemento através do objeto "style"

    primeiroPost.style.backgroundColor="crimson"
}

function alterarFonteSegundoPost(){
    //Atribuindo um array com os elementos "p" de classe "texto-post" a uma variável
    let arrayParagrafos= document.getElementsByClassName("texto-post")
    console.log(arrayParagrafos)

    //Atribuindo o segundo elemento do array (objeto) a uma variável

    let segundoPost= arrayParagrafos[1]
    console.log(segundoPost)

    //Adicionando classe ao elemento através da propriedade classList e do seu método .add

    console.log(segundoPost.classList)
    segundoPost.classList.add("fonte-grande")
}

function marcarRadio(genero){
    //selecionando o input radio que queremos marcar

    let radioFeminino = document.getElementById("genero-feminino")
    let radioMasculino = document.getElementById("genero-masculino")

    //Marcando checked no input de acordo com o botão clicado (valor do parâmetro)

    if (genero === "feminino"){
        radioFeminino.checked= true
    } else if (genero === "masculino"){
        radioMasculino.checked= true
    }
}