const argv = require('./config/yargs').argv;
const color = require('colors');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let command = argv._[0];
console.log(argv);

switch(command){
    case 'listar':
    listarTabla(argv.base, argv.limite);
    break;
    case 'crear':
    crearArchivo(argv.base, argv.limite)
    .then(archivo => console.log(`Archivo creado: ${ archivo }`.yellow))
    .catch(e=>console.log(e));
    break;
    default:
    console.log('Comando no reconocido');
    
}

