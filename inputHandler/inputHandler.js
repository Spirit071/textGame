const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

module.exports = function(question, m){
    rl.question(`${question}\n`, (param) =>{
        console.log(`${m} ${param}`)
        rl.close()
    })
}