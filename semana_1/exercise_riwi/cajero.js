


function validar(valor, saldo) {
    if (valor > saldo) {
        alert("saldo insuficiente")
    } else {
        return saldo - valor
    }

}

let saldo = 1000000

while (true) {

    let numero = prompt("1. Consultar saldo \n2. Retirar dinero \n3. Salir ")

    if (numero == 1) {

        alert(saldo)

    } else if (numero == 2) {

        let valor = prompt("colocar valor a retirar")

        saldo = validar(valor,saldo)
        alert(saldo)
        
    } else if (numero == 3) {

        alert("Gracias por usar el cajero")
        break

    } else {

        alert("valor no valido")

    }

}



