const { read } = require("fs");

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
/*
This will be a simple application, but potentially complicated to implement. There's a set of colors in the theme object. "red", "green", "blue", "yellow", and "orange". By default they are all true. The application allow users to add a color to the system as long as it's part of the 5 colors. You can toggle the colors from true to false with the command "toggle" and then a second readline for the color itself. Always DisplayUserColors after AddUserColor or ToggleThemeColor completes.

Here are some logistics that this application must follow
Only add a color when the theme color is true otherwise console log that it's not allowed
When a color is toggled from true to false, also remove the color from userColors. You can do this by making a new array, then looping through userColors and only pushing the colors that are true into the new array. Then reassign the new array to userColors.
*/

/**PLANNNING
 * -------------------------------------------------------------
 * go to the theme object
 * Add all the colors and set them to true
 * 
 * Create a function to add colors to the system
 * ask the user for a color using the readline
 * use an if statement to check if the color is part of the  key in the object theme
 * if it is not part of the theme then display a message "You must chose between the colors red/green/yellow,orange or blue"
 * otherwise if it part of the color then add it to the User color Array
 * After that call the DisplayUserColor Function
 * 
 * In the ToggleThemeColor function
 * ask the user which color they want to togge and save the theme color
 * then ask the user what they want to toggle the color to and save the value
 * then loop through the theme color objects and check is the key is equal to the color 
 * if it is then toggle the color to the value the user chose
 * After that call the Display User color function
 * Also check if the value the value before the toggle is done is "true" 
 * if it si then remove the color from the User color Array
 * 
 * In the DisplayThemeColor function
 * Loop through the theme object 
 * display the key and the value of each item
 * then once its completed call the StartApp Function
 * 
 * In the StartApp function
 * use an if statement to check if the command is equal to add color and call the add color function
 * else if the command is equal to Toggle then call the ToggleTheme Color Function
 * else if the command is display color then call the displa theme color function
 * 
 * 
 */

let userColors = [];
let theme = {
  //the 5 color and their boolean value goes here
  red:true,
  green:true,
  blue:true,
  yellow:true,
  orange:true
};

//rename this to AddUserColor
function AddUserColor(){
  //add a color to userColors

  readline.question("what color would you like to add? " , _userColor=>{
    for(key in theme){
      if(key === _userColor && theme[_userColor] === true){
        
          userColors.push(_userColor);
          DisplayUserColors();
         break;
      }else {
        console.log("You must select a color between red, yellow, blue , orange and green: ")
        break;
      }
    }

    StartApp();
  })
}

//rename this to DisplayUserColors
function DisplayUserColors(){
  //add a color to userColors

  console.log("This are your colors: ")
  for(let i=0; i<userColors.length ;i++){
    console.log(` ${i+1} : ${userColors[i]}`)
  }

  StartApp();
}

//rename this to ToggleThemeColor
function ToggleThemeColor(){
  //ask for a color to toggle
  readline.question("What color would you like to toggle: ",_toggleColor=>{
    readline.question("would you like to switch it on/off? ",toggleChoice=>{
      for(key in theme){
        if(key === _toggleColor){
              if(toggleChoice === "on"){
                  theme.key=true;
              }else if(toggleChoice === "off"){
                 
                      userColors.splice(_toggleColor,_toggleColor.length);
                  
                  theme.key=false;
              }
        }
      }
      StartApp();
    })
  })

 
}


function StartApp(){
  readline.question("What is your command? ", _command=>{
    if(_command === "add color"){
      AddUserColor();
    }else if(_command === "toggle"){
        ToggleThemeColor();
    }else if(_command === "display"){
        DisplayUserColors();
    }
    if(_command === "quit"){
      readline.close();
    } else{
      StartApp();
    }
  })
}

StartApp();