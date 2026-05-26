const promesa = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve('Proceso terminado');
    }, 2000);

});

promesa.then((msg) => {
    console.log(msg);
});


let hora = false

const promesa_hora = new Promise((resolve, reject) => {
    if (hora) {
        resolve('¡La hora ha llegado!');
    } else {
        reject('La hora no ha llegado.');
    }
});

promesa_hora.then((msg) => {
    console.log(msg);
}).catch((error) => {
    console.error(error);
});


let promesa_cumplida = (valor) => { 
    console.log(`Promesa cumplida: ${valor}`); 
};

let promesa_rechasada = (error) => {
    console.error(`Promesa rechazada: ${error}`);
};

promesa_hora.then(promesa_cumplida,promesa_rechasada)