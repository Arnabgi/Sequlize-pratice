const express = require('express');
const route = express.Router();
module.exports = function(){
    // console.log("hiii....");
    const controller = require('../controller/todo.controller');
    // console.log("controller",todoController);
    const obj = new controller();
    // console.log("Object",obj);
    const CONFIG =require('../config/config.json');
    
    route.get('/list',(req,res)=>{
        obj.getList(req,res);
        // .then(data=>{
        //     console.log(data);
        // }).catch(e=>{
        //     console.log("error",e);
        // });
    })

    return route;
}