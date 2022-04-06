const os = require('os');

console.log('Sistema operativo ' + os.platform());
console.log('Versión del OS ' + os.release());
console.log('Memoria libre del sistema: ' + os.freemem())