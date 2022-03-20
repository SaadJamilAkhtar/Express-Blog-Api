const express = require('express');
const dotenv = require('dotenv').config()
const app = express();
const port = process.env.POST || 5000;
const connectToDB = require('./config/mongoConfig')
const colors = require('colors')
const errorHandler = require('./middleware/errorMiddleware')

connectToDB()

app.use(express.json())
app.use(express.urlencoded({extended: false}))


app.use(errorHandler)

app.listen(port, () => {
    console.log(`Server listening at port : ${port} ...`)
});