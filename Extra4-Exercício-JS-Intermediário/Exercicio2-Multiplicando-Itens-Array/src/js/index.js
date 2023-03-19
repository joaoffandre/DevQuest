const numeros = [65,44,12,4]
const numerosMultiplicados=[]

console.log(numeros)

numeros.forEach(multiplicar)

function multiplicar(item,indice,array){
    const resultadoMultiplicacao = item * 10
    console.log(resultadoMultiplicacao)
    numerosMultiplicados.push(resultadoMultiplicacao)
}