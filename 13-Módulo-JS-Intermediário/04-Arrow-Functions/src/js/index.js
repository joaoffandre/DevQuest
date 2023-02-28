/* Estrutura:

(parametro1,parametro2) => {
    bloco de declaração
}

*/

let somar = (numero1,numero2) => {
    return numero1 + numero2
} 

console.log(somar(5,7))

// Com somente 1 parâmetro, não precisa de chaves

let elevarAoQuadrado = numero => {
    return numero**2
}

console.log(elevarAoQuadrado(4))

//Com somente 1 Linha de código no Bloco de Declaração da Função, não precisa de return nem de chaves {}

let dividir = (dividendo,divisor) => dividendo/divisor

console.log(dividir(12,3))

//Com 1 parâmetro, 1 linha de código, não precisa de parênteses no parâmetro, nem de chaves {}  no bloco de declaração

let imprimirRaizQuadrada = numero => console.log(numero**(1/2))

imprimirRaizQuadrada(49)