const optsCrear = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripción de la tarea crear'
    }
};

const optsActualizar = {
    ...optsCrear,
    completado: {
        demand: true,
        alias: 'c',
        default: true,
        desc: 'Descripción de la tarea actualizar'
    }
}

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', optsCrear)
    .command('borrar', 'Elimina una tarea', optsCrear)
    .command('actualizar', 'Actualizar el estado completado de una tarea', optsActualizar)
    .help()
    .argv;

module.exports = {
    argv
}