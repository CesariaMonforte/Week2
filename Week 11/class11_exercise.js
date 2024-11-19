const { start } = require("repl");

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
/*
We will create an application where we will register people into an array. 
We will have a functionat that allows the host to check the registry to see all the user registered.
Use a for loop to go through all the users registered

This application also allows the host add users to the banned list and check them when they need to

CHALLENGE, when adding a user, if the user exist in the ban list, do not add the user
- hint, you will need a boolean to check... let checkBan = false...

CHALLENGE 2, use the settings to allow the adding the go through or not
*/

//Planning
/**
 * Create a function names "AddUserToRegistry" that adds new users to the registry
 * within the add new user use the ask the user for the name they want to add
 * use push command to add the new user
 * 
 * Create a function "CheckRegistry" to view all the users called Check userss
 * Within this function run a loop for the users array
 * It will start at the first name on the users array to the length of the array and increment the counter each time it loops
 * within the same loop display each name of the user
 * 
 * Create a function "BanUser" to Add a new user to the banned list called BanUser
 * Within the function ask the user to insert a name to ban as input with the readline
 * go into the array and add the user using the push command with the "Banned" array
 * 
 * Create another function "CheckBanned" view Banned list of Users
 *  Within this function run a loop for the Banned array
 * It will start at the first name on the "Banned" array to the length of the array and increment the counter each time it loops
 * within the same loop display each name of the user
 * 
 * 
 * CHALLENGE
 * 
 * Within the AddUserTORegistry Function 
 * after asking the user for the name to add
 * Create a Boolean value set to false initially before checking the user is on the banned list
 * Run a loop through the banned array from the first name to the last name on the array 
 * if the name is anywhere in the list set the boolean value to true for Check Banned
 * Outside the loop use an if statement to check if the boolean value is set to true then display a message to show that the name is banned
 * Otherwise add the name to the registry and display a message that it was added.
 * 
 * CHALLENGE 2
 * Within the AddUserToRegistry function
 * after checking if the User is checkbanned is true check if "checkBanned" is true and settings.addRegistry is true then add the user to the registry because they arent banned and their settings specify they can add users.
 * 
 */ 

let users = [];
let banned = [];
let settings = {
  addRegistry:true,
  checkRegistry:true,
  banPerson:true,
  checkBans:true
}

function AddUserToRegistry() {
  //user readline to prompt for the name of the user to be added

  let checkBanned= false;

readline.question("What is the name of the user you would like to add? " ,newUser=>{ 

  for(let i=0; i<banned.length; i++){
    if(banned[i] === newUser){
      checkBanned=true;
    }
  }

  if (checkBanned === true){
    console.log("You are banned, try another user next time! ");
    StartApp();
  }else if(settings.addRegistry === true && checkBanned === false){
    users.push(newUser);
    console.log("The user has been added. Thank you!")
    StartApp();
  }

 
})


  
}

function CheckRegistry() {
  //loop through all the users and log them
console.log("Here is all the registered users: ");
  for(let i=0; i<users.length; i++){

    console.log(i, ".", users[i]);

  }

  StartApp();
}

function BanUser(){
  //use readline to prompt for the name of the user to be banned
  readline.question("What is the name of the user you would like to Ban? " ,newBan=>{
    banned.push(newBan);
  
    StartApp();
  })

}

function CheckBanned(){
  //loop through all the banned users and log them
  for(let i=0;i<banned.length;i++){

    console.log(`${i} . ${banned[i]}`);

  }

  StartApp();
}

function StartApp() {
  readline.question("What would you like to do? ", (_command) => {
    
    //add other commands here to add

    if(_command === "Add"){
      //add user 
      AddUserToRegistry();
    } else if(_command === "View All"){
      // review the users 
      CheckRegistry();
    }else if(_command === "Ban"){
      // add new user to banned 
      BanUser();
    }else if(_command === "View Banned"){
      // review the banned users
      CheckBanned();
    } else if (_command !== "quit") {
      StartApp();
    } else {
      readline.close();
    }
  });
}

StartApp();

//reviewed by vien. codes are well explained.
