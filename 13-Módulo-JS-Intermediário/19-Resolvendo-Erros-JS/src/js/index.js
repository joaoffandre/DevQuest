// let campeaoGaucho = "Grêmio"

// console.log(campeaoGauch)


let inputTelefone = document.getElementById("telefone")

inputTelefone.disabled = true  // "Desativa" o input

function habilitarTelefone(){
    inputTelefone.disabled = false;  // "Ativa" o input
}