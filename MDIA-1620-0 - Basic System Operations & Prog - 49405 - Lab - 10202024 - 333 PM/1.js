const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

/*
Create a function that determines the appropriate message for a person based on their age regarding driving privileges.

- If the person is under 16, they should be told "too young to drive".
- If they are between 16 and 17, they should be told "can drive with supervision".
- If they are between 18 and 70, they should be told "can drive freely".
- If they are over 70, they should be advised to "consider a driving assessment".
*/

//PLANNING

//part 1
/*
get the users age to determinate the message to display for their driving
save that variable as locally User age and globally as age for the whole program
Use if statements based on the ranges
- less then 16 display
-greater then or equal to 16 and less then or equal to 17 
- greater then or equal to 18 and less then or equal to 70]
-greater then 70
*/
//determine a proper parameter variable name
let Age=0;
function CheckDrivingAge(Age){

  if (Age < 16){
    console.log("too young to drive");
  }
  else if (16 <= Age && 17>=Age){
    console.log("can drive with supervision");
  }
  else if(Age >= 18 && Age<=70){
    console.log("can drive freely");
  }
  else if(Age>70){
    console.log("consider a driving assessment");
  }
  
}

function StartApp(){
  readline.question('How old are you? ', UserAge => {
  const Age = parseInt(UserAge);


    CheckDrivingAge(UserAge);//call your function here.
    
    // readline.close();
    if(UserAge !== "quit"){
      StartApp();
    } else {
      readline.close();
    }
  });
}

StartApp();