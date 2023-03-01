function resultadoAluno(nota1,nota2,nota3,mediaAluno,imprimir){
    let situacao=""
    if (mediaAluno(nota1,nota2,nota3)<7){
        situacao="reprovado"
    }else{
        situacao="aprovado"
    }
    imprimir(situacao)
}

function calcularMedia(nota1,nota2,nota3){
    return (nota1 + nota2 + nota3)/3
}

function imprimirMensagem(situacao){
    console.log("O aluno foi " + situacao)
}

resultadoAluno(3,10,5,calcularMedia,imprimirMensagem)

// função como return

function multiplicar(multiplicador){
    return function (numero){
        console.log(numero*multiplicador)
    }
}

const dobrar = multiplicar(2)
const triplicar = multiplicar(3)
const quadruplicar = multiplicar(4)

console.log(dobrar)

dobrar(50)
triplicar(4)
quadruplicar(12)

// chamando função dentro de outra função

function determinarNumeroPar(numero){
    let paridade = ""
    if (numero%2 === 0) paridade="par"
    else if (numero%2 ===1) paridade = "ímpar"
    else paridade = "indefinido"
    imprimePar(numero,paridade)
}

function imprimePar(numero,mensagem){
    console.log("O número " + numero + " é " + mensagem)
}

determinarNumeroPar(10)