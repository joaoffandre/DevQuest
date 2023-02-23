let nomeFilme = "Gato de Botas 2"

if(nomeFilme==="Gato de Botas 2"){
    console.log("É o filme do Gato de Botas (muito bom)")
}

nomeFilme = "Avatar 2"

if(nomeFilme==="Gato de Botas 2"){
    console.log("É o filme do Gato de Botas (muito bom)")
}else{
    console.log("É outro filme.")
}

nomeFilme = "Avatar 2"

if(nomeFilme === "Gato de Botas 2"){
    console.log("É o filme do Gato de Botas (muito bom)")
} else if(nomeFilme==="Avatar 2"){
    console.log("É o filme Avatar 2 (muito ruim)")
} else{
    console.log("É outro filme.")
}

let melhorFilme = "Avatar 2"

melhorFilme === "Gato de Botas 2" ? console.log("É o filme do Gato") : console.log ("Não é o melhor filme")