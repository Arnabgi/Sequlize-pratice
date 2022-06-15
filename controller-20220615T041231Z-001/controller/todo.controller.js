const todoModel = require('../models');
const fs = require('fs');
class todoController{
    constructor(){
        //console.log("object is created");
    }
    async getList(req,res){
        const data = await todoModel.todo.findAll();
        res.json(val);
         //res.send('stop...');
    }
}
module.exports = todoController;