const { DataTypes } = require('sequelize');

function definePintura( sequelize ) {
    sequelize.define('pintura', { 
        //Model attributes are defined here
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        titulo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        nacimiento: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        fallecimiento: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        fecha_inicio: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        fecha_fin: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        tecnica: {
            type: DataTypes.STRING,
            allowNull: false
        },
        altura: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        anchura: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        unidad: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        estilo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        colecciones: {
            type: DataTypes.STRING,
            allowNull: false
        },
        valoracion_criticos: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        valoracion_usuarios: {
            type: DataTypes.DECIMAL,
            allowNull: false
        }
    }, {
        //Other model options go here
        timestamps: false
    });
}

module.exports = definePintura;   