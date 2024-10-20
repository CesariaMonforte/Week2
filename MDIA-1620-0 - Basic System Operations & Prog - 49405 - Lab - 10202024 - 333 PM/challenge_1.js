const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

/*

Create a function that simulates a simple math quiz game. The function will take in two numbers and an operator (+, -, *, /) as parameters. 
It will then calculate the correct answer and compare it to the user's guess.

- If the user's guess is correct, display "Correct!"
- If the user's guess is incorrect, display "Incorrect!" and provide the correct answer.

BONUS:
- If the user's guess is within 5 of the correct answer, display "Very Close!"
- If the user's guess is within 2 of the correct answer, display "Almost Correct!"

BONUS 2x DIFFICULTY:
- Set a variable outside the function to limit the number of attempts allowed.
- Track the number of attempts made with a variable starting at 0.
- Each time the function runs, increment the number of attempts made.
- If the number of attempts made reaches the limit, display "No more attempts left!" and end the game.

*/

//PLANNING

/*
get the user first,second number and the operator to use the to number and the operator to find the correct answer
convert them into numbers
create a function function that uses the two numbers and performs the desired operation
get the guess number from the user and convert it into a number 
within that function create a function for displaying the message based on weather its correct or not
use tha display function within the mathgame function to display
*/

//determine a proper parameter variable name
function MathGame(num1, num2, operatorChosen, userGuess) {

  function GuessComparison(answer,userGuess){
    if (answer == userGuess){
      console.log("correct")
    }
    else if (answer != userGuess){
      console.log(`wrong`);
    }
  }

  if (operatorChosen === "+"){
    answer = Number(num1)+ Number(num2);
    GuessComparison(answer,userGuess);
  }
  else if (operatorChosen === "-"){
    answer= num1-num2;
    GuessComparison(answer,userGuess);
  }
  else if (operatorChosen === "*"){
    answer = num1*num2;
    GuessComparison(answer,userGuess);
  }
  else if (operatorChosen === "/"){
    answer= num1/num2;
    GuessComparison(answer,userGuess);
  }

 
  
}


//determine a proper question to ask and the proper variable name for the answer
readline.question("the question for number 1", (firstNumber) => {
  let num1 = Number(firstNumber);
  readline.question("the question for number 2", (secondNumber) => {
    let num2 = Number(secondNumber);
    readline.question("the question for operator such as +-*/ ", (desiredOperator) => {
      let operatorChosen= desiredOperator;
      //make an infinite recall for guessing question
      function StartGame() {
    
        //determine a proper question to ask and the proper variable name for the user to guess
        readline.question("the question for guessing ", (guess) => {
          const userGuess = Number(guess);
          
          MathGame(firstNumber,secondNumber,desiredOperator,guess);
          //call your function here
    
          if (guess === "quit") {
            readline.close();
          } else {
            StartGame();
          }
        });
      }
    
      StartGame();
    })
  })
});
