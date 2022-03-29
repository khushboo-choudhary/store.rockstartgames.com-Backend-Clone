require("dotenv").config();
const express = require("express");
const connect = require("./config/db");
const {login, register, newToken} = require("./controllers/auth.controller");
const userController = require("./controllers/user.controller");
const passport = require("./config/auth");


const app = express();

app.use(express.json());


//starting api routers and methods from here.
//sending this call to respective controllers to find route and desired method.

//user controller
app.use("/users", userController);

//login and register controller
app.post("/login", login)
app.post("/register", register)


//google oauth
passport.serializeUser(function(user, done){
    done(null, user);
})

passport.deserializeUser(function(user, done){
    done(null, user);
})

app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: [
      "profile",
      "email",
      "https://www.googleapis.com/auth/user.addresses.read",
    ],
  })
);

app.get("/google/callback", passport.authenticate("google", {
    successRedirect: "/auth/google/success",
}),
    (req, res)=>{
        const {user} = req;
        const token = newToken(user);
        return res.status(200).json({msg: "Login Successful", token});
    }
);

app.get("/auth/google/success", (req, res)=>{
    return res.status(200).json({msg: "Login Successful"});
});

app.get("/auth/google/failure", (req, res)=>{
    return res.status(400).json({msg: "Login Failed"});
});


//connecting ans starting server
const port = process.env.PORT || 1698;

app.listen(port, () => {
    try{
        connect();
        console.log(`Server is running on port ${port}`);
    }catch(err){

    }
})