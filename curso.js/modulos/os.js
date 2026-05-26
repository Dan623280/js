
const os = require('os');

console.log("Sistema:", os.platform());
console.log("Arquitectura:", os.arch());
console.log("RAM libre:", os.freemem() / 1024 / 1024, "MB");
console.log("Usuario:", os.userInfo().username);