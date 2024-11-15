let coinFlip
let loopCounter = 0

do {
     //Set coinFlip variable to a random number between 0 and 9
    let randomNum = Math.round(Math.random() * 1)
    coinFlip = randomNum
    console.log(coinFlip)
    if(coinFlip == 0){
        console.log('Heads')
        }else if(coinFlip == 1){
        console.log('Tails')
       }
    loopCounter++
   } while (coinFlip == 0); 
   console.log(`Loop executed ${loopCounter} times`)
   


