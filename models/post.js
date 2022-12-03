//Posts will have an automatic ID and be linked to the User ID
//Posts will have a title and content (both strings)

const {Model, DataTypes} = require('sequelize'); 
const Sequelize = require('../connection'); 

class Post extends Model {}; 

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
    user_id:{
        type: DataTypes.INTEGER,
        references:{
            model:'user',
            key:'id',
        },
    },
},
{
    Sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'post',
}); 

module.exports = Post; 