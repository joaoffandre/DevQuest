let jogo = {
    nome:"Pokémon Ruby",
    pararProducao:function(){
        console.log("O jogo " + this.nome + " parou de ser produzido")
    }
}

jogo.pararProducao() //Chama o método. nomeObjeto.chaveMetodo()

console.log(jogo.pararProducao) // Se não colocarmos () depois do nome do método, nos é retornado a função toda