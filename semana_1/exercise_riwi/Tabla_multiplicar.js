

let numero_1 = prompt("Colocar numero 1")

let resultado = 0

while (true) {

    let numero_2 = prompt("Colocar numero")

    if (numero_2 == 0){
        break
    } else {
        resultado  = Number(numero_1) + Number(numero_2)
        numero_1 = resultado
    }
    
}


alert ("resultado", resultado)

