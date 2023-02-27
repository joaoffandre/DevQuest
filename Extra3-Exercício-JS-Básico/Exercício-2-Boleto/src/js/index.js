let boletoPago = false

if (boletoPago){
    alert("O boleto está pago")
}else if(!boletoPago){
    alert("O boleto não está pago")
}else{
    alert("Não foi possível determinar se o boleto foi pago.")
}

/* function confereBoletoPago(valorBoleto=0,valorPago=0){
    if (valorBoleto<=valorPago){
        boletoPago=true
        console.log("O boleto está pago")
    }else{
        console.log("O boleto não está pago")
    }
}

confereBoletoPago(50,40) */