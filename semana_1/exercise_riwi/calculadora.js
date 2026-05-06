
let numero_1 = prompt("colocar numero 1")

let numero_2 = prompt("colocar numero 2")

let resultado

let operacion = prompt("colocar operacion")




switch (operacion) {
    case "+":

        resultado = numero_1 + numero_2
        alert("resutado de la suma "+ numero_1 + " + " + numero_2 +" = " + resultado)
        
        break;

    case "-":
        resultado = numero_1 - numero_2
        alert("resutado de la resta "+ numero_1 + " - " + numero_2 +" = " + resultado)
        break;

    case "*":
        resultado = numero_1 * numero_2
        alert("resutado de la multiplicacion "+ numero_1 + " * " + numero_2 +" = " + resultado)
        break;

    case "/":

        resultado = numero_1 / numero_2
        alert("resutado de la division "+ numero_1 + " / " + numero_2 +" = " + resultado)

        break;

    default:

        alert("operacion no valida")
        break;
}