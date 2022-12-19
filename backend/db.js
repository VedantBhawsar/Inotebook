const mongoose = require('mongoose');

const MongoURL = 'mongodb://localhost:27017'

const connectToMongo = () =>{
    mongoose.connect("MongoURL", ()=> {
        console.log('db is conncted')
    })
}

module.exports = connectToMongo
