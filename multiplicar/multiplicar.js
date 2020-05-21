const fs = require('fs');
var colors = require('colors');

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        let data = '';
        if (!Number(base)) {
            reject(`El valor introducido ${ base } no es un numero `);
            return;
        }

        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${i} = ${ base * i }\n`;

        }

        fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
            if (err) reject(err)
            else
                resolve(`tabla-${base}.txt`)

        });

    })
}


let listarTabla = (base, limite) => {

    console.log('=============================='.green);
    console.log(`======tabla del ${base}=======`.green);
    console.log('=============================='.green);



    let data = '';
    if (!Number(base, limite)) {
        reject(`El valor introducido ${ base } no es un numero `);
        return;
    }

    for (let i = 1; i <= limite; i++) {
        data += `${ base } * ${i} = ${ base * i }\n`;


    }

    console.log(data);

}

module.exports = {
    crearArchivo,
    listarTabla
}