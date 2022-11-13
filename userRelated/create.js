const Player = require('../models/player')
const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

var print = rl.question()

print(`Would you like to create a new game or ${'continue'} with an existing one?\n`, function(answer){
    answer = String(answer).toLowerCase()
    answer == 'new' ? createNewCharacter() : detectExistingCharacter() 
    rl.close()
})

function createNewCharacter(){
    print('Enter the name for the character:\n', async (name) =>{
        const player = await Player.findOne({name: name})
        if (player){ 
            console.error(`This player already exists!`)
            return
        }
        await Player.create({
            name: name
        })
        console.log('User created!')
    })
}

const x = (user) =>{
    return user
}

let toExport

function detectExistingCharacter(){
    print("What's your character's name?\n", async function(n){
        const player = await Player.findOne({
            name: n
        })

        if (player) 
        {
            console.log('User found!')
            toExport = player
        }
        else
        {
            console.error("There's no such user!\n")
            toExport = null;
        }

        rl.close()
    })
}

module.exports = function()
{
    x(toExport)
}
