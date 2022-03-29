const express = require("express");
const connect = require("./config/db");
const {login, register} = require("./controllers/auth.controller");
const userController = require("./controllers/user.controller");

const app = express();

app.use(express.json());


//starting api routers and methods from here.
//sending this call to respective controllers to find route and desired method.

//user controller
app.use("/users", userController);

//login and register controller
app.post("/login", login)
app.post("/register", register)

app.listen(3000, () => {
    try{
        connect();
        console.log("Server is running on port 3000");
    }catch(err){

    }
})