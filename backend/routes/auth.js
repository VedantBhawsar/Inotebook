const express = require('express')
const router = express.Router()

router.get('/', (req, res)=>{
     obj ={ 
        name: 'hello',
        Date: Date.now
     }
     res.json(obj)
})



module.exports = router