const express = require('express')
const router = express.Router()



router.get('/', (req, res)=>{
     obj ={ 
       name: 'vedant',
       date: Date.now(),
     }
     res.json(obj)
})



module.exports = router