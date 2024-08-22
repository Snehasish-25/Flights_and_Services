const express= require("express");
const {PORT}=require("./config/serverConfig.js");
const bodyParser = require("body-parser");
const ApiRoutes=require("./routes/index.js");
//const db=require("./models/index.js")
const {Airport,City}=require("./models/index.js");


const setupAndStartServer = async ()=>{

//Create the express object
    const app=express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:false}));

    app.use("/api",ApiRoutes);
       
    app.listen(PORT,async()=>{
        console.log(`Server started on port ${PORT}`);
        // if(process.env.SYNC_DB)
        // db.sequelize.sync({alter:true}); //we need to sync with the db inorder to get access to certain functions like city.getAirports()

        // const city=await City.findOne({
        //     where:{
        //         id:21
        //     }
        // })
        // const airports=await city.getAirports();
        // console.log(city,airports);
    })
    
}
setupAndStartServer();