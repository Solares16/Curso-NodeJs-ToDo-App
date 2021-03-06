/**
 * 
 * 
 */

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripcion de la tarea por hacer'
        }
    })
    .command('actualizar', 'Actualiza un elemento por hacer', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Crea un elemento por hacer'
        },
        completado: {
            alias: 'c',
            desc: 'Marca como completado o pendiente la tarea',
            default: true
        }
    })
    .command('borrar', 'Elimina un elemento por hacer', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Crea un elemento por hacer'
        }
    })
    .help()
    .argv;



module.exports = {
    argv
}