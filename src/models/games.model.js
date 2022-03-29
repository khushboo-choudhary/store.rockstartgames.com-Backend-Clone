const mongoose =require("mongoose");

const gamesSchema = new mongoose.Schema(
    {
    name:{type:String,required:true},
    description:{type:String,required:true},
    price:{type:Number,required:true},
    category:{type:String,required:true},
    image:{type:String,required:true},
    allimages:[{type:String,required:true}]
    },
    {
      versionKey:false,
      timestamps:true,
    }
);

const Gear = mongoose.model("gear",gearSchema);

module.exports=Gear;