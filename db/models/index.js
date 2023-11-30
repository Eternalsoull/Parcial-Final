const definePintura = require("./pinturas.model");

function defineModels( sequelize ){
    definePintura(sequelize)
    //Other models go here
}

module.exports = defineModels