
const operac = require('./modulosumar/operaciones')

setTimeout(() => {
  console.log(operac);
}, 2000);

setTimeout(() => {
  console.log(operac.restar(12, 3));
}, 1000);

//console.log(multiplicar(5,3));
//console.log(dividir(10,2));

//sin setImmediate

setImmediate(() => {
  console.log("Hola desde setImmediate");
});

console.log("ahora se coloca esto");
