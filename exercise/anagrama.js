

let palabra = "ana";

let palabra2 = "";


for (let letra of palabra) {
    
    palabra2 = letra + palabra2

};

function verifi(p_1,p_2) {

    let respuesta = p_1 === p_2 ? true : false;

    return respuesta

};

let resultado =  verifi(palabra,palabra2)

console.log(resultado)