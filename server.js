const express = require('express');
const req = require('express/lib/request');
const route = require('./routers/route');
//const cors = require('cros');
const app = express();
const port = 5314;
app.use(express.json());
app.use(route());
app.get('/',(req,res)=>{
    res.send("Hello World!");
});


app.listen(port,()=>{
    console.log(`${port} port is running`);
});