const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    demand: true,
                    desc: 'Base de la tabla',
                    type: 'number'
                })
                .option('l', {
                    alias: 'listar',
                    type: 'boolean',
                    default: false,
                    desc: 'Muestra la tabla en consola',
                })
                .option('h', {
                    alias: 'hasta',
                    desc: 'hasta de la tabla',
                    type: 'number',
                    default: 10
                })
                .check((argv, options) => {
                    console.log('argv: ', argv);
                    if (isNaN(argv.base)) {
                        throw new Error('La base tiene que ser un numero');
                    }
                    if (isNaN(argv.hasta)) {
                        throw new Error('El hasta tiene que ser un numero');
                    }
                    return true;
                })
                .argv;


module.exports = argv;