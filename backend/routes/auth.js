const express = require('express')
const router = express.Router()
const User = require('../modules/User')
const fetchuser = require('../middleware/fetchuser')
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken")

const JWT_TOKEN = "Babitaji"

// This is Route (/api/createuser) for Creating User
router.post('/createuser', [
   body('name').isLength({ min: 3 }),
   body('email').isEmail(),
   body('password').isLength({ min: 1 })
], async (req, res) => {
   const error = validationResult(req)
   if (!error.isEmpty()) {
      return res.status(400).json({ error: error.array() })
   }

   try {
      const user = await User.findOne({ email: req.body.email })
      if (user) {
         return res.status(400).json({ error: "User with this Email Already existed" })
      }
      // hashing password
      const pass = req.body.password
      const salt = bcrypt.genSaltSync(10);
      const Hashedpass = bcrypt.hashSync(pass, salt);

      // Creating User
      User.create({
         name: req.body.name,
         email: req.body.email,
         password: Hashedpass
      }).then(user => {
         const data = {
            id: user.id
         }
         const authtoken = jwt.sign(data, JWT_TOKEN)
         res.json({ authtoken })
      }).catch(error => {
         console.log(error)
      })
   } catch (error) {
      console.log(error.massage)
      res.status(500).send("Internal Server Error")
   }
})

// This is Route (/api/login) for Login User
router.post('/login', [
   body('email', 'Enter Valid Email').isEmail(),
   body('password', 'Password cannot be blank').exists()
], async (req, res) => {
   const error = validationResult(req)
   if (!error.isEmpty()) {
      return res.status(400).json({ error: error.array() })
   }
   const { email, password } = req.body
   try {
      const user = await User.findOne({ email })

      if (!user) {
         return res.status(400).json({ error: "Please Check email or password" })
      }
      const ComparePass = await bcrypt.compare(password, user.password)
      if (ComparePass) {
         const data = {
            id: user.id
         }
         const authtoken = jwt.sign(data, JWT_TOKEN)
         res.json({ authtoken })
      }
      return res.status(400).json({ error: "Please Check email or password" })

   } catch (error) {
      console.log(error.massage)
   }
})

// This is Route (/api/getuser) for Login User
router.post('/getuser', fetchuser, async (req, res) => {
   try {
      const userid = req.id
      const user = await User.findById(userid).select('-password')
      res.status(200).json({ user })
   } catch (error) {
      res.status(500).json({ error: "Internal Server Error" })
      console.log(error)
   }
 })
//
 module.exports = router