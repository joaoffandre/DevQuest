const quadrado = document.querySelector(".quadrado")

quadrado.addEventListener("click",confereAzul)

function confereAzul(evento){
    const classesLista= evento.target.classList
    if (classesLista.contains("azul")){
        classesLista.remove("azul")
    } else{
        classesLista.add("azul")
        alert("Esse quadrado TEM a cor azul!")
    }
}