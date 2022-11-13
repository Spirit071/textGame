const mongoose = require('mongoose')

const player = new mongoose.Schema({
    name:
    {
        type: String
    },
    role:
    {
        type: String,
        default: "Lame Human"
    },
    weapons:
    {
        type: Array,
        default: []
    },
    skills:
    {
        type: Array,
        default: []
    },
    adventages:
    {
        type: Array,
        default: []
    },
    disatventages: 
    {
        type: Array,
        default: []
    },
    hp:
    {
        type: Number,
        default: 100
    }
})
