console.log("helllo worled");
console.log('hello');
//function generating random number between 1&3
function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(1);
    const maxFloored = Math.floor(3);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}
//declare variable for pc choice
let pcChoice = 0;
console.log("pcChoice is:", pcChoice);
//declare variable for user choice
let userNumber = 0; 
//declare variable for score
let win = 0;
let loss = 0;
let draw = 0;
console.log("Your Score is:", win, "Win", loss, "Loss", draw, "Draw");
 //make the game start with button click
 document.getElementById("userInput").addEventListener("click", function() {
//get user input and making it into a number to store in userNumber variable.
//and limit user choice to 1,2 & 3
    do {
    let userInput = prompt("Enter 1 for Rock, 2 for Paper or 3 for Scissors.");
    userNumber = Number(userInput);
    if (isNaN(userNumber) || ![0, 1, 2, 3].includes(userNumber)) {
        alert("invalid Input. Please Try again.");
    };
    } while (isNaN(userNumber) || ![0, 1, 2, 3].includes(userNumber));
 //alert user to their choice   
    switch (userNumber) {
        case 1:
            alert("You choose Rock~!");
            break;
        case 2:
            alert("You choose Paper~!");
            break;  
        case 3:
            alert("You choose Scissors~!");
            break;  
    }
    console.log("userNumber is:", userNumber);
//generating pc choice using the random function
    let pcChoice = getRandomIntInclusive();
    console.log("pcChoice is:", pcChoice);
//alert user to pc choice
    if (userNumber !== 0) {
        switch (pcChoice) {
            case 1:
                alert("PC choose Rock~!");
                break;
            case 2:
                alert("PC choose Paper~!");
                break;  
            case 3:
                alert("PC choose Scissors~!");
                break;  
        }
    };
        
//compare pc and user choice to determine the winner
    //user choice is rock
    if (userNumber === 1) {
        switch (pcChoice) {
            case 1:
                alert("It's a Draw~!");
                draw ++;
                console.log("Your Score is:", win, "Win", loss, "Loss", draw, "Draw");
                break;
            case 2:
                alert("You Lose~!");
                loss ++;
                console.log("Your Score is:", win, "Win", loss, "Loss", draw, "Draw");
                break;  
            case 3:
                alert("You Win~!");
                win ++;
                console.log("Your Score is:", win, "Win", loss, "Loss", draw, "Draw");
                break;  
        }
    //user choice is paper
    } else if (userNumber === 2) {
        switch (pcChoice) {
            case 1:
                alert("You Win~!");
                win ++;
                console.log("Your Score is:", win, "Win", loss, "Loss", draw, "Draw");
                break;
            case 2:
                alert("It's a Draw~!");
                draw ++;
                console.log("Your Score is:", win, "Win", loss, "Loss", draw, "Draw");
                break;  
            case 3:
                alert("You Lose~!");
                loss ++;
                console.log("Your Score is:", win, "Win", loss, "Loss", draw, "Draw");
                break;  
        }
    //user choice is scissors
    } else if (userNumber === 3) {
        switch (pcChoice) {
            case 1:
                alert("You Lose~!");
                loss ++;
                console.log("Your Score is:", win, "Win", loss, "Loss", draw, "Draw");
                break;
            case 2:
                alert("You Win~!");
                win ++;
                console.log("Your Score is:", win, "Win", loss, "Loss", draw, "Draw");
                break;  
            case 3:
                alert("It's a Draw~!");
                draw ++;
                console.log("Your Score is:", win, "Win", loss, "Loss", draw, "Draw");
                break;  
        }
    } else {
        alert("You Quit, Goodbye~!")
    };
 });

//compare both choices
// 1 rock 2 paper 3 scissors  (userChoice === 1)        
//output winner
//set score
//set rounds
//loop to number of rounds in a game
//declare winner of the game