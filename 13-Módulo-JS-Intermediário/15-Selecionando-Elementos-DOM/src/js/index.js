//Imprimindo document no console do navegador para acessar o DOM

console.log(document)

//Selecionando elemento pelo "id" através do método document.getElementById("id_elemento")

let paragrafo = document.getElementById("paragrafo1")

console.log(paragrafo)

//Selecionando elementos pela classe através do método document.getElementsByClassName("Classe")

let inputsClasse = document.getElementsByClassName("tag-de-input")

console.log(inputsClasse)

console.log(inputsClasse[1]) // Como getElements retorna um Array, podemos usar [index]

//Selecionando Elementos pelo Tag atráves do método document.getElementsByTagName("nomeTag")

let cabecalho = document.getElementsByTagName("h1")

console.log(cabecalho)

console.log(cabecalho[0]) //getElements retorna Array, logo usamos [index]

//Selecionar Elementos de uma tag que apresentam determinado atributo, através de document.querySelectorAll("tag[atributo='nomeAtributo']")

let inputsPorName = document.querySelectorAll("input[name='e-mail']")

console.log(inputsPorName)
console.log(inputsPorName[1]) //Pega o segundo elemento da tag que apresenta tal atributo

//Selecionar primeiro elemento de uma tag que apresenta um determinado atributo, através de document.querySelector("tag[atributo='nomeAtributo']")

let primeiroEmail = document.querySelector("input[name='e-mail']")

console.log(primeiroEmail)