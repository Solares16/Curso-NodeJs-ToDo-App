/**
 *  importacion de archivos
 */

const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let crearToDo = porHacer.crear(argv.descripcion);
        console.log(crearToDo);
        break;
    case 'listar':
        console.log('listar por hacer');

        let listado = porHacer.getListado();

        for (const tarea of listado) {

            console.log('==================================================='.green);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.check);
            console.log('==================================================='.green);

        }

        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log('Comando no reconocido');
        break;
}