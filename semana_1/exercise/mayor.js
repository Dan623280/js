
let numero = prompt("colocar primer numero")

let numero_2 = prompt("colocar segundo numero")


let resultado = numero > numero_2 ? "el numero " + numero + " es mayor que "+ numero_2 : "el numero " + numero_2 + " es mayor que " + numero


document.getElementById("resultado").innerHTML = resultado