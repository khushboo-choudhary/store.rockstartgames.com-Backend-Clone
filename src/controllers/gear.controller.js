const express = require("express");

const router = express.Router();

const Gear = require("../models/gear.model");

router.post("", async (req,res) => {
    try{
        const gear=await Gear.create(req.body);
        return res.send(gear);
    }catch(err){
      return res.send(err.message);
    } 
});

router.get("", async (req,res) => {
    try{
        const page = req.query.page || 1;
        const size = req.query.size || 6;
        const gear=await Gear.find()
        .skip((page -1)*size)
        .limit(size)
        .lean().exec();
 
        const totalPages = Math.ceil(
            (await Gear.find().countDocuments())/size
        );

        return res.send({gear,totalPages});
    }catch(err){
      return res.send(err.message);
    } 
});

router.get("/apparel", async (req,res) => {
    try{
        const page = req.query.page || 1;
        const size = req.query.size || 6;
        const gear=await Gear.find({category:"apparel"})
        .skip((page -1)*size)
        .limit(size)
        .lean().exec();
 
        const totalPages = Math.ceil(
            (await Gear.find({category:"apparel"}).countDocuments())/size
        );

        return res.send({gear,totalPages});
    }catch(err){
      return res.send(err.message);
    } 
});

router.get("/caps", async (req,res) => {
    try{
        const page = req.query.page || 1;
        const size = req.query.size || 6;
        const gear=await Gear.find({category:"caps"})
        .skip((page -1)*size)
        .limit(size)
        .lean().exec();
 
        const totalPages = Math.ceil(
            (await Gear.find({category:"caps"}).countDocuments())/size
        );

        return res.send({gear,totalPages});
    }catch(err){
      return res.send(err.message);
    } 
});

router.get("/posters", async (req,res) => {
    try{
        const page = req.query.page || 1;
        const size = req.query.size || 6;
        const gear=await Gear.find({category:"posters"})
        .skip((page -1)*size)
        .limit(size)
        .lean().exec();
 
        const totalPages = Math.ceil(
            (await Gear.find({category:"posters"}).countDocuments())/size
        );

        return res.send({gear,totalPages});
    }catch(err){
      return res.send(err.message);
    } 
});

router.get("/collectibles", async (req,res) => {
    try{
        const page = req.query.page || 1;
        const size = req.query.size || 6;
        const gear=await Gear.find({category:"collectibles"})
        .skip((page -1)*size)
        .limit(size)
        .lean().exec();
 
        const totalPages = Math.ceil(
            (await Gear.find({category:"collectibles"}).countDocuments())/size
        );

        return res.send({gear,totalPages});
    }catch(err){
      return res.send(err.message);
    } 
});

router.get("/:id", async (req, res) => {
  try {
    const games = await Gear.findById(req.params.id);
    return res.send(games);
  } catch (err) {
    return res.send(err.message);
  }
});

module.exports=router;