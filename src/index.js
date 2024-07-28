const express= require("express");
const {PORT}=require("./config/serverConfig.js");
const bodyParser = require("body-parser");

const setupAndStartServer = async ()=>{

//Create the express object
    const app=express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:false}));
    
    app.listen(PORT,()=>{
        console.log(`Server started on port ${PORT}`);
    })
    
}
setupAndStartServer();