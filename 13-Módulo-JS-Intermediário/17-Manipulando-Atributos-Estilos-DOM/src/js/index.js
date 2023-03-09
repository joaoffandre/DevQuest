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