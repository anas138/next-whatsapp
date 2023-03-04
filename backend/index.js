const express = require('express')
const mongoose = require('mongoose')
const router = require('./Routers/router')
const cors = require('cors')
const hadleError = require('./errorHandling/error')  


const app = express()
app.use(cors())
app.use(express.json())
app.use(router)
app.use(hadleError)
app.use(express.static("images"))

app.listen(8000,()=>{
    mongoose.connect('mongodb+srv://anas:anas@cluster0.rhmhv.mongodb.net/whatsapp?retryWrites=true&w=majority')
    .then((db)=>{
        console.log(db,"db is connected")
        console.log("app is listening")
    })
    
})