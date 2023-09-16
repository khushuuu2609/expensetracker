const { connectToMongo } = require('./db');
const express = require('express')
const app = express()
const port = 5000

//mongoDB connection function
connectToMongo();

app.get('/', (req, res) => {
    res.send('Hello World!')
})

//starting the server on the port with use of Express
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})