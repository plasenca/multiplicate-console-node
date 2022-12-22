const { crearArchivoTabla } = require('./helpers/multiplicar');
const argv = require('./config/yargs');


console.clear();

console.log(argv);

crearArchivoTabla(argv.b, argv.l, argv.t)
    .then(nombreArchivo => console.log(`${nombreArchivo} creado`.yellow))
    .catch(err => console.log(err));
