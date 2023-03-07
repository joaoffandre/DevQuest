//Criando um objeto com uma propriedade cujo valor é um Array de Objetos

let jogo1={
    nome:"Mario Odyssey",
    valor:300
}

let jogo2={
    nome:"Tales of Vesperia",
    valor:60
}

let videoGame = {
    nome:"Nintendo Switch",
    valor:2000,
    jogos:[jogo1,jogo2]
}

console.log(videoGame)

//Adicionando um novo objeto ao Array "jogos" do objeto "videoGame"

let jogo3 ={
    nome:"Zelda Breath of The Wild",
    valor:300
}

videoGame.jogos.push(jogo3)

console.log(videoGame)


// Criando um Array com Objetos criados instanciados diretamente no Array

let videoGame2 ={
    nome:"Playstation5",
    valor:4500,
    jogos:[
        {nome:"God of War Ragnarok",valor:350},
        {nome:"The Last of Us 2",valor:200}
    ]
}

console.log(videoGame2)

//Criando um Objeto com um outro Objeto como Propriedade

let cliente ={
    nome:"Joao Francisco",
    eMail:"joaojorpas@hotmail.com",
    carrinho:{
        produtos:[
            {nome:"Playstation",valor:4500},
            {nome:"The Last of Us 2",valor:200}
        ],
        valor:4700
    }
}

console.log(cliente)

 //Chamando uma propriedade do objeto dentro do Objeto

console.log(cliente.carrinho.produtos[1].nome)