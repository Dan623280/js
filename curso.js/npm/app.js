
const user = require('./user.json')

let string = '{ "edad": 18, "nombre": "John Doe" }'

console.log(typeof user);

console.log(typeof string);

let string_objeto = JSON.parse(string);

console.log(string_objeto);

console.log(typeof string_objeto);