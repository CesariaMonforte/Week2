const { read } = require("fs");
const { start } = require("repl");

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
/*
You are making a simple drinking store application. There are 2 parts to this

1) You need the organizer to register the age of each customer coming in. You will do this using an array.
2) Depending on the "settings" of the store, if alcohol is true that means it's adults only meaning anyone under the age of 19 are not allowed to drink and should be notified. When the alcohol setting is true, if the age in the registry is 19 or above console log "You are allow to drink in here." otherwise "You are not allowed in here.". When the setting is false, console log "Everyone is welcome in here!"

CHALLENGE 1
Have another setting for age. By default the age is set to 19, but the user can set the age to another desired drinking age by using the command "change age". This also means the age for notification needs to correspond to this setting

CHALLENGE 2
Make a VIP setting, and allow the user to type in an index that corresponds to the VIP. By default VIP is false, but the user can write "make vip", to assign a number to the VIP setting. The user can also write "cancel vip" to turn vip back to false.

When VIP is not false, when the notify function is called, only the VIP will get notified. Everybody else will get console logged "sorry the store is not available today."
*/

/**PLANNING
 * -------------------------------------------------------------------
 * To register the age of each user coming in the store
 * Create a function called Register User
 * Use a readline to ask the user their age
 * convert the age into a number 
 * Push the age to the array
 * 
 * To check if the age against the alcohol criteria
 *Within the register age function
 check if the setting for the "alcohol" key is true and if it is then check the age of the user
 Using an if statment check
 if the age is 19 or above then then display the message "You are allow to drink in here"
 otherwise if the age is less then 19 then display a message saying the user is not allowed to drink in the store

 create an else statement for the initial alcohol criteria check
 If the alcohol setting is false then display a message "Everyone is welcome here!"
 
To toggle the settings
Create a toggle settings function
And go into the settings object and add a alcohol key with the value true
in the new function for toggling the settings set the current valu of settings.alcohol to whatever is in the value of settings.alcohol but opposite using the "!" operator

In the NotifyAll Function
check add the condittion in the if statement to check if the settings.age is less then 19 
then display they are not allowed to drink in there
otherwise if the settings.age is greate then or equal to 19 
then display they are allowed to drink in there

Call the notify all function after the User enters their age
--------------------------------------------------------------------

----------------------------------------------------------------
CHALLENGE 1 PLANNING
-----------------------------------------------------------------------
in the settings object create a key "age" and set it to 19
Create a function called ChangeAge
in that function ask the user what they would like to set their age too
save the age
add it to the object under the "age" key

In the RegisterUser Function
Change the user.age to whatever the user enters so that it is the same value

In the Register user check add the condittion in the if statement to check if the settings.age is less then 19 then display they are not allowed to drink in there
otherwise if the settings.age is greate then or equal to 19 then display they are allowed to drink in there
--------------------------------------------------------------------
CHALLENGE 2 PLANNING
---------------------------------------------------------------------
in the settings object add a key called "VIP" set it to false

create a function Called MakeVIP
in this function ask the user what umber they would like to assign to VIP
assign that value to settings.VIP

Create a function called CancelVIP
In this function change settings.VIP to false
display a message that it has been cancelled
 */

let registry = [];
let settings = {
  //alcohol setting goes here
  alcohol:true,
  age:19,
  VIP:false
};

//rename this to RegisterUser
function RegisterUser(){
  //ask for the age with readline
  readline.question("How old are you? " ,_userage=>{
    settings.age=_userage;
    NotifyAll();
    // if(settings.alcohol === true){
    //     if(Number(_userage)<19 || Number(settings.age)<19){
    //         console.log(`You are not allowed in here.`)
    //     }else if(Number(_userage)>=19 || Number(settings.age)>=19){
    //       console.log(`You are allow to drink in here.`)
    //     }

    // }else if(settings.alcohol === false){
    //   console.log(`Everyone is welcome here!`)
    // }

    // StartApp();
  })
}

//rename this to ToggleAlcohol
function ToggleAlcohol(){
  //toggle alcohol setting
  settings.alcohol = !settings.alcohol

  console.log("Your alcohol settings has been toggled!")
}

function ChangeAge(){
  readline.question("what age would you like to change the current age to? " , _newage=>{
    settings.age=_newage;
    console.log("The age has been changed! ")
  })
}
function MakeVIP(){
  readline.question("What number do you want to assign to VIP? " , _assignVIP=>{
    settings.VIP=_assignVIP;
  })
}

function CancelVIP(){
 settings.VIP=false;
 console.log("VIP has been assigned to false! ")

 StartApp();
}
//rename this to NotifyAll
function NotifyAll(){
  //go through the array to notify everyone
  if(settings.alcohol === true){
    if(Number(settings.age)<19){
        console.log(`You are not allowed in here.`)
    }else if(Number(settings.age)>=19){
      console.log(`You are allow to drink in here.`)
    }

}else if(settings.alcohol === false){
  console.log(`Everyone is welcome here!`)
}

StartApp();
}

function StartApp(){
  readline.question("What is your command? ", _command=>{

    if(_command === "Register user"){
RegisterUser();
    }else if(_command === "Toggle"){
      ToggleAlcohol();
    }else if(_command === "quit"){
      readline.close();
    } else{
      StartApp();
    }
  })
}

StartApp();