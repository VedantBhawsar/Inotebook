const express = require('express')
const router = express.Router()
const Notes = require('../modules/Notes')
const fetchuser = require('../middleware/fetchuser')
const { body, validationResult } = require('express-validator')
const user = require('../modules/User')

//Route

// Route 1: Fetching Notes from Mongodb
router.get('/fetchnotes', fetchuser, async (req, res) => {
     const notes = await Notes.find({ user: req.id })
     res.json(notes)
})

// Route 2: Add Notes
router.post('/addnote', fetchuser, [
     body('title').isLength({ min: 3 }),
     body('desc').isLength({ min: 5 })
], async (req, res) => {
     try {
          const { title, desc, tag } = req.body

          const errors = validationResult(req)
          if (!errors.isEmpty()) {
               res.status(404).json({ errors: errors.array() });
          }
          const notes = new Notes({
               title, tag, desc, user: req.id
          })
          const savenote = await notes.save()

          res.json(savenote)

     } catch (error) {
          console.log(error)
          res.send(error)
     }
})

router.post('/updatenote/:id', fetchuser, async (req, res) => {
     const { title, desc, tag } = req.body

     const newNote = {}
     if (title) { newNote.title = title }
     if (desc) { newNote.desc = desc }
     if (tag) { newNote.tag = tag }

     const note = await Notes.findById(req.id)
     if (!note) {
          return res.status(404).send("Not Found")
     }

     if (note.user.toString() !== req.id) {
          return res.status(401).send("Not Allowed")
     }
     note = await Notes.findByIdAndUpdate(req.id, { $set: newNote }, { new: true })
     res.send({ note })
})

router.delete('/deletenote/:id', fetchuser, async (req, res) => {
     try {
          const { id } = req.body
          const note = await Notes.findById(req.id)
          if (!note) {
               return res.status(404).send("Not Found")
          }

          if (note.user.toString() !== req.id) {
               return res.status(401).send("Not Allowed")
          }
          note = await Notes.findByIdAndDelete(req.id)
          res.status(200).send("deleted Successfully!")
     } catch (error) {
          res.status(400).send("Internal Server Error!")
     }
})

module.exports = router