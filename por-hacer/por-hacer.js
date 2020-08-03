/**
 * 
 * 
 * 
 */

const fs = require('fs');
const { error } = require('console');


let listadoPorHacer = [];


const crear = (descripcion) => {

    cargarDB();

    let toDo = {
        descripcion,
        check: false
    };

    listadoPorHacer.push(toDo);
    guardarDB();
    return toDo;
}


const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer); //esta funcion permite convertir un objeto al formato Json
    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('no se pudo grabar', err);
    });
}


const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json'); // para cargar un Json como objeto de javascript solo es necesario hacer el require
    } catch (error) {
        listadoPorHacer = [];
    }
}


const getListado = () => {
    cargarDB();
    return listadoPorHacer;
}


const actualizar = (descripcion, completado = true) => {

    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listadoPorHacer[index].check = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}


const borrar = (descripcion) => {
    cargarDB();

    let nuevaLista = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion);

    if (listadoPorHacer.length === nuevaLista.length) {
        return false;
    } else {
        listadoPorHacer = nuevaLista;
        guardarDB();
        return true;
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}