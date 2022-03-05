
const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs');
var colors = require('colors');

console.clear();

crearArchivo(argv.base, argv.listar, argv.hasta)
    .then(archivo => console.log(`Archivo creado: ${archivo.rainbow}`))
    .catch(error => console.log(error));
