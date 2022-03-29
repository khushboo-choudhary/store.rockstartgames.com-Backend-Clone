const express = require("express");
const connect = require("./config/db");

const app = express();

app.use(express.json());




app.listen(3000, () => {
    try{
        connect();
        console.log("Server is running on port 3000");
    }catch(err){

    }
})