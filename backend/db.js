const mongoose = require('mongoose');

// const MongoURL = 'mongodb+srv://admin:admin@e-commerce.opayxr0.mongodb.net/?retryWrites=true&w=majority'
const MongoURL = 'mongodb://localhost:27017/inotebook'
//mongodb://localhost:27017/

mongoose.set('strictQuery', true)

const connectToMongo = () => {
    mongoose.connect(MongoURL).then(() => { console.log('Connected') }).catch(() => console.log("WTF"));
}

module.exports = connectToMongo
