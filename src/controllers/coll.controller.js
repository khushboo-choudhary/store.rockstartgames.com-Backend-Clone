const express = require("express");

const router = express.Router();

const Coll = require("../models/coll.model");

router.post("", async (req,res) => {
    try{
        const collection=await Coll.create(req.body);
        return res.send(collection);
    }catch(err){
      return res.send(err.message);
    } 
});

router.get("", async (req,res) => {
    try{
        const page = req.query.page || 1;
        const size = req.query.size || 6;
        const collection=await Coll.find()
        .skip((page -1)*size)
        .limit(size)
        .lean().exec();
 
        const totalPages = Math.ceil(
            (await Coll.find().countDocuments())/size
        );

        return res.send({collection,totalPages});
    }catch(err){
      return res.send(err.message);
    } 
});

router.get("/red/apparel", async (req,res) => {
    try{
        const page = req.query.page || 1;
        const size = req.query.size || 6;
        const collection=await Coll.find({category:"apparel",coll:"red"})
        .skip((page -1)*size)
        .limit(size)
        .lean().exec();
 
        const totalPages = Math.ceil(
            (await Coll.find({category:"apparel",coll:"red"}).countDocuments())/size
        );

        return res.send({collection,totalPages});
    }catch(err){
      return res.send(err.message);
    } 
});

router.get("/red/gear", async (req,res) => {
    try{
        const page = req.query.page || 1;
        const size = req.query.size || 6;
        const collection=await Coll.find({category:"gear",coll:"red"})
        .skip((page -1)*size)
        .limit(size)
        .lean().exec();
 
        const totalPages = Math.ceil(
            (await Coll.find({category:"gear",coll:"red"}).countDocuments())/size
        );

        return res.send({collection,totalPages});
    }catch(err){
      return res.send(err.message);
    } 
});

router.get("/grand/apparel", async (req,res) => {
    try{
        const page = req.query.page || 1;
        const size = req.query.size || 6;
        const collection=await Coll.find({category:"apparel",coll:"grand"})
        .skip((page -1)*size)
        .limit(size)
        .lean().exec();
 
        const totalPages = Math.ceil(
            (await Coll.find({category:"apparel",coll:"grand"}).countDocuments())/size
        );

        return res.send({collection,totalPages});
    }catch(err){
      return res.send(err.message);
    } 
});

router.get("/grand/gear", async (req,res) => {
    try{
        const page = req.query.page || 1;
        const size = req.query.size || 6;
        const collection=await Coll.find({category:"gear",coll:"grand"})
        .skip((page -1)*size)
        .limit(size)
        .lean().exec();
 
        const totalPages = Math.ceil(
            (await Coll.find({category:"gear",coll:"grand"}).countDocuments())/size
        );

        return res.send({collection,totalPages});
    }catch(err){
      return res.send(err.message);
    } 
});

router.get("/rock/apparel", async (req,res) => {
    try{
        const page = req.query.page || 1;
        const size = req.query.size || 6;
        const collection=await Coll.find({category:"apparel",coll:"rock"})
        .skip((page -1)*size)
        .limit(size)
        .lean().exec();
 
        const totalPages = Math.ceil(
            (await Coll.find({category:"apparel",coll:"rock"}).countDocuments())/size
        );

        return res.send({collection,totalPages});
    }catch(err){
      return res.send(err.message);
    } 
});

router.get("/rock/gear", async (req,res) => {
    try{
        const page = req.query.page || 1;
        const size = req.query.size || 6;
        const collection=await Coll.find({category:"gear",coll:"rock"})
        .skip((page -1)*size)
        .limit(size)
        .lean().exec();
 
        const totalPages = Math.ceil(
            (await Coll.find({category:"gear",coll:"rock"}).countDocuments())/size
        );

        return res.send({collection,totalPages});
    }catch(err){
      return res.send(err.message);
    } 
});


module.exports=router;