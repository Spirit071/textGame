const mongoose = require('mongoose')

const adjs = ['Horrific', 'Tiny', 'Mighty', 'Savage', 'Gigantic']
const types = ['Dragon', 'Giant', 'Wolf', 'Hog', 'Griffin', 'Pheonix', 'Ant', 'Goblins']

const monsterSchema = new mongoose.Schema({
    name:
    {
        type: String,
        default: types[Math.random()*types.length]
    },
    type:
    {
        type: String,
        default: adjs[Math.random()*adjs.length]
    },
    damage:
    {
        type: Number,
        default: 100 * Math.random() * 10 + 10
    },
    hp:
    {
        type: Number,
        default: 1000 * Math.random() * 10 + 150
    }
})

module.exports = mongoose.model('Monster', monsterSchema)
