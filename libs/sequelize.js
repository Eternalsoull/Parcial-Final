const { Sequelize } = require('sequelize');
const defineModels = require('../db/models/index')
require('dotenv').config();



// Option 2: Passing parameters separately (sqlite)
const sequelize = new Sequelize({
    dialect: 'postgres',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
   username: process.env.DB_USER,
   password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    logging: true
 });

defineModels( sequelize )

sequelize.sync()

module.exports = sequelize