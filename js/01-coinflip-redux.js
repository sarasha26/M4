let coinFlip
let loopCounter

loopCounter = prompt('How many times would you want the loop to execute?Enter a valid number:')

for (let i = 0; i < loopCounter; i++) {
    //Set coinFlip variable to a random number between 0 and 9
let randomNum = Math.round(Math.random() * 1)
coinFlip = randomNum
console.log(coinFlip)
}

if(coinFlip == 0){
    console.log('Heads')
}else if(coinFlip == 1){
    console.log('Tails')

}


