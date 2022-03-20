const express=require('express');
const User=require('../models/User');
const router=express.Router();
const {body,validationResult}=require('express-validator');

// create a user using POST:
router.post('/',[
    body('name').isLength({min:3}),
    body('email').isEmail(),
    body('password','password must be at least 5 characters').isLength({min:5})
],(req,res)=>{

    const errors = validationResult(req);
  
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
   
    User.create({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    }).then(user=>res.json(user)).catch(err=>{console.log(err)
    res.json({error:"Please enter a uniqe value for email",message:err.message})});

//    res.send(req.body);
})

module.exports=router