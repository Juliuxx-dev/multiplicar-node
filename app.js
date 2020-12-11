const argv = require('./config/yargs').argv;
var colors = require('colors/safe');


const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
  case 'listar':
    listarTabla(argv.base, argv.limite);
    break;
  case 'crear':
    crearArchivo(argv.base, argv.limite)
      .then(archivo => console.log(`Archivo creado:`, colors.green(archivo)))
      .catch(err => console.log(err));
    break;

  default:
    console.log('comando no reconocido')
    break;
}

// console.log(process.argv);
// let argv = process.argv;
// let param = argv[2];
// let base = param.split('--base=').pop();
// console.log(base);
// console.log(argv)
// console.log('base:', argv.base)
// console.log('limite: ', argv.limite)

