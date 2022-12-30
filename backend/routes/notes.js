const express = require('express')
const router = express.Router()
const Notes = require('../modules/Notes')
const fetchuser = require('../middleware/fetchuser')

// Route 1: Fetching Notes from Mongodb
router.get('/fetchnotes', fetchuser , async (req, res)=>{
     const notes = await Notes.find({user: req.id})
     res.json(notes)
})



module.exports =  router