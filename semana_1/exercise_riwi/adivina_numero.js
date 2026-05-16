

while (true) {
    let numero_aleatorio = Math.floor(Math.random() * 10)

    let numero = prompt("colocar numero")
    
    let validar = Number(numero) <= 10 ?   Number(numero) > numero_aleatorio ? alert("numero es mayor al andivinado") : Number(numero) < numero_aleatorio ? alert("numero es menor al andivinado") : alert("adivinastes el numero") : alert("valor no valido")
    
    alert(numero_aleatorio)
}
