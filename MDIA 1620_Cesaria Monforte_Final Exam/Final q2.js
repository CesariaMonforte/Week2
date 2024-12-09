const { KeyObject } = require("crypto");

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
/*
You are creating a badge system. This badge system depends on the amount of points you accumulated in these modes "new", "easy", "medium", "hardest", and "apocolypse", by default they all start with 0. The simple application has 2 core functions.

1) ShowStatus, when user use the command "status", the system will show every mode and it's current points.
2) AddPoints, when user use the command "add", the system will ask the user which mode they want to add 1 point to. The user will write one of the mode and that mode will be incremented by 1.

CHALLENGE 1
1) Make a function MakeBadge. This function goes through all the badge and add the points together. If the points total is...
  - less than 10 -> "horrible newbie"
  - between 10 and 20 -> "adventurer"
  - between 20 to 30 -> "slayer"
  - between 30 to 40 -> "divined"
  - above 40 -> "eternal"

CHALLENGE 2
2) Make it that when you calculate points, you multiply the points to the length of the key. EG if "new" only has 1 point, then you will add 3 point to the total because "new" has 3 letters and 3*1 = 3. This is also why having more points in apocolypse will get you the most points because the word apocolypse is the longeest
*/

/**
 * PLANNNING
 * ------------------------------------------------------
 * add the modes to the badge object
 * 
 * Create a function called showstatus
 * In this function you want to display all the keys and values for the modes in the badge object
 * loop through the badge object and display the modes at each key
 * Go to the startapp and call the function using an if statement
 * 
 * 
 * Create an AddPoints Function
 * This function will will add one point to the desired badge by the user
 * In the function ask the user what bage they want to add the point to using a readline
 * Save the bage name
 * Loop through the Badge object and check if the key is exactly equal to the bage name the user entered
 * if it is then increment the value in the bage they choice by one ( adding one to the value already inside that badge )
 * ----------------------------------------------------------------------------
 * CHALLENGE 1 PLANNING 
 * _____________________________________________________________________________________
 * 
 * Create function called MakeBadge
 * this function will add the total of each badge and display a message based on the total
 * to add the total of each badge 
 * create a variable "total" and set it to zero
 * loop through the badge object
 * add the value at each key to the total
 * after that create an if statement outside the loop
 * check if the total is less then 10 then display a message "horrible newbie"
 * otherise if the total is between 10 and 20 included then display a message "adventurer"
 * otherise if the total is between 20 and 30 included then display a message "slayer"
 * otherise if the total is between 30 and 40 included then display a message "divined"
 * otherise if the total is over 40 then display a message "eternal"
 * 
 * In the StartApp function call the MakeBage function with the command "make badge"
 * 
 * ---------------------------------------------------------------------
 * CHALLENGE 2 PLANNING
 * ---------------------------------------------------------------------
 *  Create a function called CalculatePoints
 * in this function loop through the bagde object
 * display the number of points at that key and multiply it by the length of th key
 * Call the function in the StartApp function when the command "calculate" is used
 * 
 */
let badge = {
  //modes go here
  new:0,
  easy:0,
  medium:0,
  hardest:0,
  apocalypse:0,
};

//rename this to ShowStatus
function ShowStatus(){
  //loop through the badge and log all the mode and all their corresponding points

  console.log(`Here is a list of the badges and their values: `)
  for(key in badge){
    console.log(`The Badge ${key} has ${badge.key}`);
  }
}

//rename this to AddPoints
function AddPoints(){
  //Add the point to the correct mode by capturing the readline

  readline.question("What badge do you want to increment by 1? " , _ChosenBage=>{
    for(key in badge){
      if(key === _ChosenBage){
          badge[key]++
          console.log(`The new value in ${key} is ${Number(badge[key])}`)
      }
    }

    StartApp();
  })
}

function MakeBadge(){
  let total=0;
  for(Key in badge){
      total=total + Number(badge[key]);
  }

  if(total <10){
    console.log("horrible newbie")
  }else if(total >=10 && total<=20){
    console.log("adventurer")
  }else if(total >20 && total<=30){
    console.log("slayer")
  }else if(total> 30 && total<=40){
    console.log("divined")
  }else if(total>40){
    console.log("eternal")
  }

  StartApp();
}

function CalculatePoints(){

  console.log("Here are the calculated values ")
  for(key in badge){
    console.log(`The ${key} has ${Number(key.length)* Number(badge[key])}`)
  }

  StartApp();
}



function StartApp(){
  readline.question("What is your command? ", _command=>{
    if(_command === "status"){
      ShowStatus();
    }else if(_command === "add"){
      AddPoints();
    } else if(_command === "make badge"){
      MakeBadge();
    } else if(_command === "calculate"){
      CalculatePoints();
    } else if(_command === "quit"){
      readline.close();
    } else{
      StartApp();
    }
  })
}

StartApp();