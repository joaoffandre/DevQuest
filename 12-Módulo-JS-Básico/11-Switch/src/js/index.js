let musica = "After Dark"

switch(musica){
    case "Numb":
        console.log("o nome da música é Numb")
        break
    case "Dollhouse":
        console.log("o nome da música é Dollhouse")
        break
    case "After Dark":
        console.log("o nome da música é After Dark")
        break
    default:
        console.log("Música não identificada")
        break
}

let nota = 4

switch(nota){
    case 1:
    case 2:
        console.log("Nota ruim")
        break
    case 3:
        console.log("Nota mediana")
        break
    case 4:
    case 5:
        console.log("Nota boa")
        break
    default:
        console.log("Nota inválida")
        break
}