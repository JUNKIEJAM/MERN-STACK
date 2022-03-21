const express=require('express');
const User=require('../models/User');
const router=express.Router();
const {body,validationResult}=require('express-validator');
const bcrypt=require('bcryptjs')

const jwt=require('jsonwebtoken');

const JWT_SECRET='Pritheshisa$boy'
// create a user using POST: // No login required
router.post('/createuser',[
    body('name').isLength({min:3}),
    body('email').isEmail(),
    body('password','password must be at least 5 characters').isLength({min:5})
],async(req,res)=>{

    // if there are errors return bad request and the errors
    const errors = validationResult(req);
  
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
   // check whether the user with same email exists already
  
   try{

   let user =await User.findOne({email:req.body.email})

   if(user){
       console.log(user)
       return res.status(400).json({error:"An user with this email exists"})
   }

   const salt=await bcrypt.genSalt(10);

   const secPass=await bcrypt.hash(req.body.password,salt)

   //create a new user
   user=await User.create({
        name:req.body.name,
        email:req.body.email,
        password:secPass
    });


    const data={
        user:{
         id:user.id   
        }
    }

   const authToken= jwt.sign(data,JWT_SECRET);
   //console.log(authToken);
    
    //res.json({user})
    res.json({authToken});
    
}
catch(error){
    console.log(error.message)
    res.status(500).send("Some error occured")
}

    //.then(user=>res.json(user)).catch(err=>{console.log(err)
    //res.json({error:"Please enter a uniqe value for email",message:err.message})});

//    res.send(req.body);
})

module.exports=router