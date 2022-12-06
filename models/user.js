
//const sequelize = require('../connection'); 
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');


// Calling sequelize.define(modelName, attributes, options)
// Extending Model and calling init(attributes, options)

const User = sequelize.define('User',

{
    id: {
        type: DataTypes.INTEGER, 
        allowNull: false, 
        primaryKey: true,
        autoIncrement: true,
    },
    userName: {
        type: DataTypes.STRING, 
        allowNull: false, 
    }, 
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { isEmail: true,},
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false, 
        //validate
    },
},
{
    // hooks: {}
    sequelize, 
    timestamps: false, 
    freezeTableName: false, 
    underscored: false, 
    modelName: 'user',
}); 

module.exports = User; 