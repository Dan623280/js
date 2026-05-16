
let fruta_user = prompt("Colocar fruta")

let frutas = ['Manzana', "Pera", "Uva", "Mango", "Fresa"]

let validacion = false

for (let fruta of frutas) {
    if (fruta_user == fruta){
        validacion = true
    }
}

validacion = validacion === true ? alert("Existe") : alert("No existe")