//Users will have an automatic ID, 
//create their own username, enter their email, 
//and create a password that will be hashed with bcrypt

const {Model, DataTypes} = require('sequelize'); 
const Sequelize = require('../connection'); 
const bcrypt = require('bcrypt');

class User extends Model {};

User.init({
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
    Sequelize, 
    timestamps: false, 
    freezeTableName: false, 
    underscored: false, 
    modelName: 'user',
}); 

modle.exports = User; 