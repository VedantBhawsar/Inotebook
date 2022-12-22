const express = require('express')
const router = express.Router()
const User = require('../modules/User') 
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken")

const JWT_TOKEN = "Babita ji"

// This is Route (/api/createuser) for Creating User
router.post('/createuser',[
   body('name').isLength({ min: 3 }),
   body('email').isEmail(),
   body('password').isLength({ min: 1})
] , async (req, res)=>{
   const error = validationResult(req)
   if(!error.isEmpty()){
      return res.status(400).json({ error: error.array() })
   }

  try {
   const user = await User.findOne({ email: req.body.email})
   if(user){
      return res.status(400).json({error : "User with this Email Already existed"})
   }
   // hashing password
   const pass = req.body.password
   const salt = bcrypt.genSaltSync(10);
   const Hashedpass =  bcrypt.hashSync( pass , salt);

   // Creating User
   User.create({
      name: req.body.name,
      email: req.body.email,
      password: Hashedpass
   }).then(user => res.json(user)).catch(error => {console.log(error)
   res.send({ error : "Enter Unique Email"})
   })
    
   const data = {
      id: user.id
    }
    const authtoken = jwt.sign( data, JWT_TOKEN) 
   
    res.json({authtoken})


  } catch (error) {
//    console.log(error.massage)
  }
})

// This is Route (/api/login) for Login User
router.post('/login',[
   body('email', 'Enter Valid Email').isEmail(),
   body('password', 'Password cannot be blank').exists()
] , async (req, res)=>{
   const error = validationResult(req)
   if(!error.isEmpty()){
      return res.status(400).json({ error: error.array() })
   }
     const {email, password} =  req.body
   try {
      const user = await User.findOne({ email: req.body.email})

      if(!user){
      return res.status(400).json({error : "Please Check email or password"})
   }
      const CompPass = await bcrypt.compare(password, user.password)
       if(CompPass){
           return res.status(200).json({ msg : "User found"})
         }
           return res.status(500).json({error : "Please Check email or password"})
            
   } catch (error) {
     console.log(error.massage)
  }
})

// This is Route (/api/get) for Login User



module.exports = router