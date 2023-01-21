const express = require('express');
const connectToMongo = require('./db')
var cors = require('cors')

connectToMongo();

const app = express()
const port = 4599


app.use(cors())
app.use(express.json())

app.use('/api/auth', require('./routes/auth')),
    app.use('/api/notes', require('./routes/notes')),

    app.get("/", (req, res) => {
        res.send("Hello World")
    }),

    app.listen(port, () => {
        console.log(`your server is running in ${port}`)
    })