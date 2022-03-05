const fs = require('fs');
var colors = require('colors');

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {

    try {
       

        let salida = '', consola = '';

        for (let x = 1; x <= hasta; x++) {
            salida += `${base} x ${x} = ${base * x} \n`;
            consola += `${colors.red(base)} x ${colors.green(x)} ${colors.blue('=')} ${colors.yellow(base * x) } \n`;
        }
        if (listar){
            console.log('===================================='.blue);
            console.log('       Tabla del:' + colors.green(base));
            console.log('===================================='.blue);

            console.log(consola);
        }

        const file = `tabla-${base}.txt`;
        fs.writeFileSync(`salida/${file}`, salida);
        return file;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    crearArchivo: crearArchivo
};