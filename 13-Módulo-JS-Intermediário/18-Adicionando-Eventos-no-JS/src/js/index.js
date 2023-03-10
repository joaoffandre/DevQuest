document
    .querySelector("select[name='times']")
    .addEventListener("change",function(evento){
        console.log(evento)
        console.log(evento.target.value)
    });

//Selecionamos o elemento que queremos adicionar um evento, depois adicionamos o evento através do método addEventListener(event,function)

