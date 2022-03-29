const mongoose =require("mongoose");

const gamesSchema = new mongoose.Schema(
    {
    name:{type:String,required:true},
    logo:{type:String,required:true},
    heroimg:{type:String,required:true},
    price:{type:Number,required:true},
    gamesDetails:{type:String,required:true},
    keyfeaTitle:[{type:String,required:false}],
    keyfeaDesc:[{type:String,required:false}],
    keyfeaImg:[{type:String,required:false}],
    videos:[{type:String,required:false}],
    ss:[{type:String,required:true}],
    category:{type:String,required:true}
    },
    {
      versionKey:false,
      timestamps:true,
    }
);

const Games = mongoose.model("games",gamesSchema);

module.exports=Games;