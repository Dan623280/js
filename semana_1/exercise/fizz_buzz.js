
function multiplo(numero) {

    if (numero % 3 === 0 && numero % 5 === 0) {

        return "fizz_buzz"

    } else if (numero % 3 === 0) {

        return "fizz"

    } else if (numero % 5 === 0) {

        return "buzz"

    } else {

        return numero

    }
}

for (let index = 0; index <= 100; index++) {
    
    let mensaje = multiplo(index);
    console.log(mensaje)
    
}