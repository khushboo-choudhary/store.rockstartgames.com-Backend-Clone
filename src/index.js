const express=require("express");

const connect = require("./confige/db");

const gearController=require("./controllers/gear.controller");


const app = express();

app.use(express.json());

app.use("/gear",gearController);


app.listen(3007, async () => {
    try{
        await connect();
        console.log("listening on port 3007");
    }catch(err){
      console.log(err.message);
    }
})