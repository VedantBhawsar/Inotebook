const mongoose = require('mongoose');

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

module.exports = mongoose.model('user', NotesSchema)