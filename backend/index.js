const express = require('express');
const connectToMongo = require('./db')
connectToMongo();

const app= express()
const port = 2000

app.use('/api/auth', require('./routes/auth')),
app.use('/api/notes', require('./routes/notes')),

app.get("/", (req, res)=> {
    res.send("Hello World")
}),

app.listen ( port, ()=>{
    console.log(`your server is running in ${port}`)
})