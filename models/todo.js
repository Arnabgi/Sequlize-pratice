'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class todo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  todo.init({
    task_details: DataTypes.STRING,
    date: DataTypes.STRING,
    has_done: DataTypes.ENUM('0','1')
  }, {
    sequelize,
    modelName: 'todo',
  });
  return todo;
};

// const {Model,DataTypes,Sequelize} = require('sequelize');
// module.exports ={
//   model : function(sequelize){
//     const todoListData = sequelize.define('todos', {
//       id: {
//         allowNull: false,
//         autoIncrement: true,
//         primaryKey: true,
//         type: DataTypes.INTEGER
//       },
//       task_details: {
//         type: DataTypes.STRING
//       },
//       date: {
//         type: DataTypes.STRING
//       },
//       has_done: {
//         type: DataTypes.ENUM('0','1'),
//         defaultValue:'0',
//       },
//       createdAt: {
//         allowNull: false,
//         defaultValue: Sequelize.fn('CURRENT_TIMESTAMP'),
//         type: DataTypes.DATE
//       },
//       updatedAt: {
//         allowNull: false,
//         defaultValue: Sequelize.fn('CURRENT_TIMESTAMP'),
//         type: DataTypes.DATE
//       }
//     },{timestamps: false});
//     return todoListData;
//   }
// }