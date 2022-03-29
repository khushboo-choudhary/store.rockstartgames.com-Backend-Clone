const express=require("express");

const connect = require("./confige/db");

const gearController=require("./controllers/gear.controller");
const gamesController=require("./controllers/games.controller");
const collController=require("./controllers/coll.controller");


const app = express();

app.use(express.json());

app.use("/gear",gearController);
app.use("/games",gamesController);
app.use("/coll",collController);


app.listen(3007, async () => {
    try{
        await connect();
        console.log("listening on port 3007");
    }catch(err){
      console.log(err.message);
    }
})