const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
/*
a person should not be allowed to drink if they are under 19, they should be asked to "leave" if they are under 19.
however the checker is a bit more dynamic, if they are too young (under 13), they should be asked to "leave"
if they are in their teens, then tell them they need to "grow up to 19" before they can drink
if they are between 19 to 50, then "drink away"
if they are over 50, then warn them about their "health"
if they are over 70, then ALSO warn them about their "life"
*/

/*Cesaria Monforte Planning */

/**Part 1 */
//Getting the User Age in order to check if they are old enough to drink
//Recieve the users age in a reader function and assign it a data type of number
//Put that question within a function for the start of the app and provide an option for the user to end



/**Part 2 */
//create another function to compare the age to the 
//Using a condition (either an If or a Case Statement)
//if they are under 19 display a message telling the user to leave
//if they are under 13 tell them they are too young and leave
//if they are between 19 to 50, then "drink away"
// if they are over 50, then warn them about their "health"
// if they are over 70, then ALSO warn them about their "life"

/**Part 3 */

//Call the function Condition function within the Question function 

/**Part 4 */

// call the Question of 




//determine a proper parameter variable name
function CheckDrinkingAge(age){

  if (age < 13){
    console.log(`Leave`);
  }
  else if(age >= 13 && age < 19){
    console.log(`grow up to 19`);
  }
  else if(age >= 19 && age <= 50){
    console.log(`drink away`);
  }
  else if(age > 50 && age <= 70){
    console.log(`health`);
  }
  else if(age > 70){
    console.log(`life`);
  }

  
  
}

//determine a proper question to ask and the proper variable name for user input
readline.question('How old are you? ', userAge => {
  age=Number(userAge);
  
  CheckDrinkingAge(userAge);
  //call your function here
  
  readline.close();
});

//placing of brackets can be confusing. reviewed and tested by vien