const mongoose = require('mongoose');
const say = require('./inputHandler/inputHandler')

say('Enter your name:', 'Hello')

const DB_URL = 'mongodb+srv://user:pass@cluster0.i9er7cs.mongodb.net/?retryWrites=true&w=majority'


mongoose.connect(DB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection
db.on('error', err => console.error(err))
db.once("open", () => console.log("Hi"))

const express = require('express')
express().listen(80)
