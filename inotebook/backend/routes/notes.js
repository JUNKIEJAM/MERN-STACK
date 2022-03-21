const express=require('express');
const router=express.Router();
const fetchuser=require('../middleware/fetchuser');
const Note=require('../models/Notes')
const {body,validationResult}=require('express-validator');

//ROUTE 1: get all the notes using: GET :"api/auth/getuser":LOGIN REQUIRED

router.get('/fetchallnotes',fetchuser,async(req,res)=>{

    try{
        const notes=await Notes.find({user:req.user.id})
        res.json(notes)
    }

    catch(error){
console.error(error.mesaage);
res.status(500).send("Internal Server Error")
    }

    
})

//ROUTE 2:add a new note using: POST :"api/auth/addnote":LOGIN REQUIRED

router.post('/addnote',fetchuser,[
    body('title','Enter a Title').isLength({min:3}),
    body('description','Write Description').isLength({min:5})
],async(req,res)=>{

    try{

    const {title,description,tag}=req.body;
    const errors=validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }

    const note=new Note({
title,description,tag,user:req.user.id
    })
   const savedNote=await note.save();
   // const notes=await Notes.find({user:req.user.id})
res.json(savedNote)
    }

    catch(error){
        console.error(error.mesaage);
        res.status(500).send("Internal Server Error")
    }


})

module.exports=router