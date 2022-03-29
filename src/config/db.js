require("dotenv").config();
const mongoose=require("mongoose");
const connect = () => {
    return mongoose.connect(
       process.env.MONGODB_URL
    )
}

module.exports=connect;