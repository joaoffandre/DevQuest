//Ao clicar no "button", a função adicionarComentario() é chamada

function adicionarComentario(){
    //colocando o elemento input em uma variável
    let inputComentario = document.getElementsByName("novo-comentario")
    //"pegando" o valor digitado no input através da propriedade "value"
    let comentario = inputComentario[0].value

    //Armazenando o elemento HTML ao qual queremos adicionar o comentário em uma variável
    let novosComentarios = document.getElementById("novos-comentarios")

    //Acessando o conteúdo do elemento através da propriedade .innerHTML e adicionando conteúdo ao elemento
    novosComentarios.innerHTML += `<p>Novo comentário: ${comentario}</p>`
}
