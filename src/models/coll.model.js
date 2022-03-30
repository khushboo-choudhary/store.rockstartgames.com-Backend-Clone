const mongoose =require("mongoose");

const collSchema = new mongoose.Schema(
    {
    name:{type:String,required:true},
    description:{type:String,required:true},
    price:{type:Number,required:true},
    category:{type:String,required:true},
    coll:{type:String,required:true},
    image:{type:String,required:true},
    allimages:[{type:String,required:true}]
    },
    {
      versionKey:false,
      timestamps:true,
    }
);

const Coll = mongoose.model("coll",collSchema);

module.exports=Coll;