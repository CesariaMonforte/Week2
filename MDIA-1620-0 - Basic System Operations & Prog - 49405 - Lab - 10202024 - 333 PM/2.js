const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

/*
Create a function that determines the type of movie ticket a person should purchase based on their age.
- If the person is under 5, they should be given a "free" ticket.
- If they are between 5 and 12, they should be given a "child" ticket.
- If they are between 13 and 17, they should be given a "teen" ticket.
- If they are between 18 and 64, they should be given an "adult" ticket.
- If they are 65 or older, they should be given a "senior" ticket.
*/

//PLANNING

/*
get the age of the user in the readline g\question function to determine the ticket they will  get
compare the age to the required contraints with if statements
display appropriate messgae
*/
//determine a proper parameter variable name
function DetermineTicketType(userAge){

  if (userAge < 5){
    console.log("free");
  }
  else if(userAge >= 5 && userAge <=12){
    console.log("child");
  }
  else if(userAge >= 13 && userAge <=17){
    console.log("teen");
  }
  else if(userAge >= 18 && userAge <=64){
    console.log("adult");
  }
  else if( userAge >= 65){
    console.log("senior");
  }
  
}

function StartApp(){
  readline.question('How old are you? ', age => {

    userAge = Number(age);

    //call your function here.
    DetermineTicketType(age);
    // readline.close();
    if(age !== "quit"){
      StartApp();
    } else {
      readline.close();
    }
  });
}

StartApp();