
let nombre, edad

let numero_aleatorio = Math.floor(Math.random() * 10)

let numero = prompt("colocar numero")

document.writeln("<br>")  

let validar = Number(numero) <= 10 ?   Number(numero) > numero_aleatorio ? document.writeln("numero es mayor al andivinado") : Number(numero) < numero_aleatorio ? document.writeln("numero es menor al andivinado") : document.writeln("adivinastes el numero") : document.writeln("valor no valido")

document.writeln("<br>")

document.writeln("numero ", numero_aleatorio)
