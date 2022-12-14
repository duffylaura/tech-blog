//Posts will have an automatic ID and be linked to the User ID
//Posts will have a title and content (both strings)

//const sequelize = require('../connection'); 
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model{}

Post.init({
    id:{
        type: DataTypes.INTEGER, 
        allowNull: false, 
        primaryKey: true, 
        autoIncrement: true,
    }, 
    title:{
        type: DataTypes.STRING, 
        allowNull: false, 
    }, 
    content:{
        type: DataTypes.STRING,
        allowNull: false, 
    },
    comments:{
        type: DataTypes.STRING,
        reference: {
          model: "comment",
          key: "id",
        },
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "user",
          key: "id",
        },
      },
},
{
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'post',
}); 

module.exports = Post; 