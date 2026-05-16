let numeros = [1,5,2312,6,4,345,3456,1555]

let numero_mayor = 0

for (let numero of numeros) {


    numero_mayor = numero_mayor < numero ? numero : numero_mayor
    
}

console.log(numero_mayor)