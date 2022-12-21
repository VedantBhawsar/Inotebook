const express = require('express')
const router = express.Router()
const User = require('../modules/User') 
const { body, validationResult } = require('express-validator');

   


router.post('/',[
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
   User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
   }).then(user => res.json(user)).catch(error => {console.log(error)
   res.send({ error : "Enter Unique Email"})
   })
  } catch (error) {
    console.log(error.massage)
  }
})




module.exports = router