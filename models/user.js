
//const sequelize = require('../connection'); 
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection')

class User extends Model{}

User.init({
    id: {
        type: DataTypes.INTEGER, 
        allowNull: false, 
        primaryKey: true,
        autoIncrement: true,
        unique: true,
    },
    userName: {
        type: DataTypes.STRING, 
        allowNull: false, 
        unique: true
    }, 
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { isEmail: true,},
        unique: true,
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