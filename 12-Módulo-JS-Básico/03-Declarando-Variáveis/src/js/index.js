var nomePessoa = "João Francisco"

console.log(nomePessoa)

var nomePessoa = "Roberto Dias"

console.log(nomePessoa)

nomePessoa = "Ricardo Dias"

console.log(nomePessoa)

const email_pessoa = "joaojorpas@hotmail.com"

console.log(email_pessoa)

/* Erro: Não pode atribuir novo valor à variável "const"

email_pessoa="joaojorpas@gmail.com"

console.log(email_pessoa)*/

let telefonePessoa = "40028922"

console.log(telefonePessoa)

/*Erro: Não podemos declarar novamente uma variável com let

let telefonePessoa = "99999999"

console.log(telefonePessoa)*/

telefonePessoa = "6789998212"

console.log(telefonePessoa)

{
    var melhorFilme = "Gato de Botas 2"

    let piorFilme= "Avatar 2"

    const masterpiece = "Kung Fu Panda 3"
}

console.log(melhorFilme)

/* Erro: let e const apresentam escopo de bloco, logo seu funcionamento é restrito ao bloco

console.log(piorFilme)

console.log(masterpiece)*/

let continuar = confirm("Deseja continuar?")
console.log(continuar)

const idade = window.prompt("Qual a sua idade?")
console.log(idade)