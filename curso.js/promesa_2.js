let objeto = {

    "valor": ""

} 

function numero(valor) {

    return new Promise((resolve) => {

        setTimeout(() => {

            objeto.valor = valor;
            resolve({
                mensaje: "Valor actualizado",
                valor: objeto.valor
            })

        }, 

        5000);

    });

    

}


function verificacion(valor) {

    return new Promise((resolve, reject) => {

    setTimeout(() => {

        if (objeto.valor === valor) {

            resolve("Valor verificado");

        } else {

            reject("Valor no verificado");

        }

        },
         5000);

   })

}


async function ejecutar() {

    try {

        const mensaje1 = await numero(10);
        console.log(mensaje1);

        const mensaje2 = await verificacion(15);
        console.log(mensaje2);

    } catch (error) {

        console.log(error);

    }

}

ejecutar();
