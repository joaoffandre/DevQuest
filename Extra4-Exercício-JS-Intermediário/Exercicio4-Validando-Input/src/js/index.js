const inputs= document.getElementsByName("input-texto")

console.log(inputs)

inputs.forEach(confereInputs)

function confereInputs(item){
    item.addEventListener("change",coloreBorda)
    function coloreBorda(){
        if (item.value != ""){
            item.classList.add("borda-ativa")
        } else if (item.classList.contains("borda-ativa")){
            item.classList.remove("borda-ativa")
        }
    }
}