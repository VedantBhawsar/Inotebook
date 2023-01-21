const mongoose = require('mongoose');
const { Schema } = require("mongoose")

const NotesSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    title: {
        type: String,
        require: true
    },

    desc: {
        type: String,
        require: true
    },
    tag: {
        type: String
    },

    date: {
        type: Date,
        default: Date.now
    },
})

const Notes = mongoose.model('notes', NotesSchema)
Notes.createIndexes()
module.exports = Notes