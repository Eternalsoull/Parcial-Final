const {models} = require('../libs/sequelize')
const moment = require('moment');

const loggerMiddleware = require('../middlewares/loggerMiddleware');



const fs = require('fs');






//Funcion para listar todos los pinturas
async function index() {
    const pinturas = await models.pintura.findAll();
    return pinturas;
}

//Funcion para crear una nueva pintura
async function store(body) {
    const pintura = await models.pintura.create(body);
    return pintura;
}

//Funcion para mostrar un pintura
async function show(id) {
    const pintura = await models.pintura.findByPk(id);
    return pintura;
}

//Funcion para actualizar un pintura
async function update(id, body) {
    const [affectedRows, [updatedPintura]] = await models.pintura.update(body, {
        where: {
            id
        },
        returning: true
    });
    return updatedPintura;
}

//Funcion para eliminar un pintura
async function destroy(id) {
    const pintura = await models.pintura.findByPk(id);
    const deletedPintura = await models.pintura.destroy({
        where: {
            id
        },
        returning: true
    });
    if(deletedPintura){
        return pintura;
    }
    return null;
}

//Exportar las funciones del controlador
module.exports = {
    index,
    store,
    show,
    update,
    destroy
}