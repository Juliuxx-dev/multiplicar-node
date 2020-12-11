const fs = require('fs');
var colors = require('colors');

listarTabla = (base, limite = 10) => {
  console.log('==================='.green)
  console.log(`Tabla de ${ base }`.green)
  console.log('==================='.green)
  console.log(base, limite)
  for (let i = 1; i <= limite; i++) {
    console.log(`${base} * ${i} = ${base * i}`);
  }
};

crearArchivo = (base, limite = 10) => {
  return new Promise((resolve, reject) => {
    let data = '';

    if (!Number(base)) {
      return reject(`El valor introducido ${base} no es un número.`);
    }

    for (let i = 1; i <= limite; i++) {
      data += `${base} * ${i} = ${base * i} \n`;
    }

    // fs.writeFile(`../tablas/tabla-${base}.txt`, data, (err) => {
    fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
      if (err)
        reject(err);
      else
        resolve(`tabla-${base}-al-${limite}.txt`);
      // console.log(`La tabla-${base} ha sido creada`);
    });
  }); 
}

module.exports = {
  crearArchivo,
  listarTabla
}
