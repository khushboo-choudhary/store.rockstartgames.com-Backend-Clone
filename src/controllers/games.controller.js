const express = require("express");

const router = express.Router();

const Games = require("../models/games.model");

router.post("", async (req,res) => {
    try{
        const games=await Games.create(req.body);
        return res.send(games);
    }catch(err){
      return res.send(err.message);
    } 
});

router.get("", async (req,res) => {
    try{
        const page = req.query.page || 1;
        const size = req.query.size || 4;
        const games=await Games.find()
        .skip((page -1)*size)
        .limit(size)
        .lean().exec();
 
        const totalPages = Math.ceil(
            (await Games.find().countDocuments())/size
        );

        return res.send({games,totalPages});
    }catch(err){
      return res.send(err.message);
    } 
});

router.get("/red", async (req,res) => {
    try{
        const page = req.query.page || 1;
        const size = req.query.size || 4;
        const games=await Games.find({category:"red"})
        .skip((page -1)*size)
        .limit(size)
        .lean().exec();
 
        const totalPages = Math.ceil(
            (await Games.find({category:"red"}).countDocuments())/size
        );

        return res.send({games,totalPages});
    }catch(err){
      return res.send(err.message);
    } 
});

router.get("/grand", async (req,res) => {
    try{
        const page = req.query.page || 1;
        const size = req.query.size || 4;
        const games=await Games.find({category:"grand"})
        .skip((page -1)*size)
        .limit(size)
        .lean().exec();
 
        const totalPages = Math.ceil(
            (await Games.find({category:"grand"}).countDocuments())/size
        );

        return res.send({games,totalPages});
    }catch(err){
      return res.send(err.message);
    } 
});

router.get("/rock", async (req,res) => {
    try{
        const page = req.query.page || 1;
        const size = req.query.size || 4;
        const games=await Games.find({category:"rock"})
        .skip((page -1)*size)
        .limit(size)
        .lean().exec();
 
        const totalPages = Math.ceil(
            (await Games.find({category:"rock"}).countDocuments())/size
        );

        return res.send({games,totalPages});
    }catch(err){
      return res.send(err.message);
    } 
});



module.exports=router;