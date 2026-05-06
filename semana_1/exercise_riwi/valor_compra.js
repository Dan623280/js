
let valor = prompt("Colocar valor")

valor = Number(valor) >= 100000 ? (Number(valor)) - Number(valor) * 0.10 : Number(valor)


alert("Precio final " + valor)