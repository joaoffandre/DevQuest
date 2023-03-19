const caixa1 = document.getElementsByClassName("caixa")[0]
const botao = document.getElementById("botao")

function trocarCor(){
    caixa1.style.backgroundColor="yellow"
}

botao.addEventListener("click",trocarCor)


/* Para mudar a cor de fundo podemos adicionar e remover as classes que o elemento tem. Ex:

function trocarCor() {
    quadradoAzul.classList.remove("azul");
    quadradoAzul.classList.add("amarelo");
  }
  */