const mongoose = require('mongoose');

// const MongoURL = 'mongodb+srv://admin:admin@vedant.rinkaiq.mongodb.net/?retryWrites=true&w=majority'
const MongoURL = 'mongodb://localhost:27017/inotebook'
//mongodb://localhost:27017/


const connectToMongo = () =>{
    mongoose.connect(MongoURL).then(() => {console.log('Connected')}).catch(() => console.log("WTF"));
}

module.exports = connectToMongo
