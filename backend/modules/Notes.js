const mongoose = require('mongoose');
const { Schema } = require("mongoose")

const NotesSchema = new Schema({
    tittle:{
        type: String,
        require: true
    },
    
    desc:{
        type: String,
        require: true
    },
    tag:{
        type: String
    },

    date:{
        type: Date,
        default: Date.now
    },
})

const notes = mongoose.model('notes', NotesSchema)
notes.createIndexes()
module.exports = notes