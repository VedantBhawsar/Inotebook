const express = require('express')
const router = express.Router()
const User = require('../modules/User') 


router.post('/', (req, res)=>{
   const user = User(req.body)
   user.save()
   console.log(req.body)
   res.send(req.body)
})



module.exports = router