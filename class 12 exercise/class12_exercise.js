const { Console } = require("console");
const { read } = require("fs"); // what is this in line 1 and 2? Is it neccessary? -- Bruna

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  /*
We will create an application that lists arrays within an object as looping through objects are useful
We will use for (let key in obj)

This application will allow hosts to give add users to their chat server, assign roles through permissions that are true or untrue

CHALLENGE,
Make a function and command to turn all permissions off and all permissions on

CHALLENGE 2,
Using the role object, make commands to assign different roles by looping through the settings and assing the values of the chosen role
  */
 

//PLANNING
//------------------------------------------------------------------ 
/**to add users use the CreateUsers function
 * Inside the function add a readline to ask the user their name
 * save the name as _newuser
 * use the "push" predefined function to add the user to the "users" array
 * display a message to the user that the user has been added
 * ----------------------------------------------------------------------
 * to assign new roles
 * inside the AssignRoles function
 * ask the user what the new role is
 * add the new role to the role array
 * ask the the user what they want to set for the permission "darkmode" 
 * use an if statement to check if the user's choice is on or off
 * if they choose "on" then use bracket notation to add the permission to the role array with the darkmode key and the value of true
 * otherwise set the value to false
 * ask the the user what they want to set for the permission "sensitivity amount" 
 * use an if statement to check if the user's choice is on or off
 * if they choose "on" then use bracket notation to add the permission to the role array with the sensitivity amount key and the value of true
 * otherwise set the value to false
 * ask the the user what they want to set for the permission "edit accounts" 
 * use an if statement to check if the user's choice is on or off
 * if they choose "on" then use bracket notation to add the permission to the role array with the edit accounts key and the value of true
 * otherwise set the value to false
 * ask the the user what they want to set for the permission "deleteaccounts" 
 * use an if statement to check if the user's choice is on or off
 * if they choose "on" then use bracket notation to add the permission to the role array with the deleteaccounts key and the value of true
 * otherwise set the value to false
 * ask the the user what they want to set for the permission "createchannels" 
 * use an if statement to check if the user's choice is on or off
 * if they choose "on" then use bracket notation to add the permission to the role array with the createchannels key and the value of true
 * otherwise set the value to false
 * ask the the user what they want to set for the permission "editchannels" 
 * use an if statement to check if the user's choice is on or off
 * if they choose "on" then use bracket notation to add the permission to the role array with the editchannels key and the value of true
 * otherwise set the value to false
 * Display a final message saying that the role has been added
 * ----------------------------------------------------------------------------------
 * 
 * In the function list users
 * use a for loop to loop through each index in the users array
 * within the for loop
 * display each name on the list using the index
 * 
 * ---------------------------------------------------------------------------------
 * 
 */

// CHALLENGE PLANNING
//------------------------------------------------------------
/**create a function called "SwitchPermissions"
 *  ask the user wether the want to turn all permissions on/off using a realine.question
 * Save the result and use an if statement to check if the result is "on"
 * then loop through the settings and switch all the values in each key to true using a for loop
 * otherwise if the user enters "off" then loop through the settings switch the value of each key using a for loop to "false"
 * Go into the StartApp function and add an if statement that checks if the command is switch then run the "SwitchPermissions perm" function
 */

//CHALLENGE 2 PLANNING
/**To assign permissions
 * create a new object called UserAssignedRoles
 * this object will hold the each user as a key and assign a new value settings(also an object) that holds the setting of the user(the key) 
 * the user key will also hold another value called "role" that will have the key off the role assigned to the user based on the settings
 * --------------------------------------
 * In the function Assign permissions
 * ask the user what permission they want to assign for "darkmode", sensitity amount, edit accounts, delete accounts, delete accounts, create channels, and edit channels
 * use if statements to check if the user input is on or off for each permission and if it is then assign true of falso values by using bracket notation for settings object
 * take the settings object and put it on the UserAssignedRoles as value for a new key "settings"
 * 
 * */
let users = [];

//CHALLENGE 2 ONLY


let role = {
  moderator:{
    darkMode:true,
    sensitivityAmount:false,
    editAccounts:true,
    deleteAccounts:false,
    createChannels:false,
    editChannels:true
  },
  simple:{
    darkMode:true,
    sensitivityAmount:false,
    editAccounts:false,
    deleteAccounts:false,
    createChannels:false,
    editChannels:false
  },
  coAdmin:{
    darkMode:true,
    sensitivityAmount:true,
    editAccounts:true,
    deleteAccounts:false,
    createChannels:true,
    editChannels:true
  }
};


let settings = {
    darkMode:true,
    sensitivityAmount:true,
    editAccounts:true,
    deleteAccounts:true,
    createChannels:true,
    editChannels:true
}

let UserAssignedRoles={

}

function createUsers(){
      //user readline to prompt for the name of the user to be added
      readline.question(`What is the name of the user you would like to add? `, _newuser=>{
        users.push(_newuser);
        console.log("The user has been added!");
        StartApp();
      })
}

//CHALLENGE 2 ONLINE
function assignRole(){
    //user readline to prompt for the new roles to be added to system\

    readline.question("what role do you want to add to the system? ", _newrole=>{
      role[_newrole] ={};

        readline.question("What permission do you want to give for darkmode , on/off? ", _newroledarkmode=>{ // You can correct the space with the comma, before on/off, in all the options -- Bruna
                if(_newroledarkmode === "on"){
    
                  role[_newrole]['darkMode']=true;
    
                }else if(_newroledarkmode === "off"){
                  role[_newrole]['darkMode']=false;
                }
          readline.question("What permission do you want to give for sensitity , on/off? ", _newrolesensitivity=>{
    
            if(_newrolesensitivity === "on"){
    
              role[_newrole]['sensitivityAmount']=true;
    
            }else if(_newrolesensitivity === "off"){
              role[_newrole]['sensitivityAmount']=false;
            }
    
            readline.question("What permission do you want to give for edit accounts , on/off? ", _newroleditaccounts=>{
    
              if(_newroleditaccounts === "on"){
    
                role[_newrole]['editAccounts']=true;
    
              }else if(_newroleditaccounts === "off"){
                role[_newrole]['editAccounts']=false;
              }
    
              readline.question("What permission do you want to give for delete accounts , on/off? ", _newroledeleteaccounts=>{
    
                if(_newroledeleteaccounts === "on"){
    
                  role[_newrole]['deleteAccounts']=true;
    
                }else if(_newroledeleteaccounts === "off"){
                  role[_newrole]['deleteAccounts']=false;
                }
    
                readline.question("What permission do you want to give for create channels , on/off? ", _newrolecreatechannels=>{
    
                  if(_newrolecreatechannels === "on"){
    
                    role[_newrole]['createChannels']=true;
      
                  }else if(_newrolecreatechannels === "off"){
                    role[_newrole]['createChannels']=false;
                  }
    
                  readline.question("What permission do you want to give for edit channels , on/off? ", _newroleeditchannels=>{
                    if(_newroleeditchannels === "on"){
    
                      role[_newrole]['editChannels']=true;
    
        
                    }else if(_newroleeditchannels === "off"){
                      role[_newrole]['editChannels']=false;
                    }
                  
      
                   console.log(`The role "${_newrole}" has been added`)
                    console.log(role);
                    StartApp();
          
                  })
                })
          
              })
          
            })
          
          })
        })
         
      
    })
    


}

function listUsers(){
    //user readline to list out users

    for(let i=0;i<users.length;i++){
      console.log(users[i]);
    } // you could add a console.log introducing the list, like "The listed user is:" or something like that -- Bruna
    StartApp();
}

function assignPermissions(){
    //user readline to prompt for the admin to give list out added users and give individual permissions for each setting. 
    // This should give roles automatically based on whats assigned to the user based on conditions met.

    console.log(users);


  readline.question("What user do you want to assign permissions to? ", user=>{

    readline.question("What permission do you want to give for darkmode , on/off? ", _assigndarkmode=>{ // you can correct the space with the comma, before on/off, in all the options -- Bruna
            if(_assigndarkmode === "on"){

              settings.darkMode=true;

            }else if(_assigndarkmode === "off"){
              settings.darkMode=false;
            }
      readline.question("What permission do you want to give for sensitity , on/off? ", _assignsensitivity=>{

        if(_assignsensitivity === "on"){

          settings.sensitivityAmount=true;

        }else if(_assignsensitivity === "off"){
          settings.sensitivityAmount=false;
        }

        readline.question("What permission do you want to give for edit accounts , on/off? ", _assigneditaccounts=>{

          if(_assigneditaccounts === "on"){

            settings.editAccounts=true;

          }else if(_assigneditaccounts === "off"){
            settings.editAccounts=false;
          }

          readline.question("What permission do you want to give for delete accounts , on/off? ", _assigndeleteaccounts=>{

            if(_assigndeleteaccounts === "on"){

              settings.deleteAccounts=true;

            }else if(_assigndeleteaccounts === "off"){
              settings.deleteAccounts=false;
            }

            readline.question("What permission do you want to give for create channels , on/off? ", _assigncreatechannels=>{

              if(_assigncreatechannels === "on"){

                settings.createChannels=true;
  
              }else if(_assigncreatechannels === "off"){
                settings.createChannels=false;
              }

              readline.question("What permission do you want to give for edit channels , on/off? ", _assigneditchannels=>{
                if(_assigndarkmode === "on"){

                  settings.editChannels=true;

    
                }else if(_assigndarkmode === "off"){
                  settings.editChannels=false;
                }

  
                UserAssignedRoles[user]={};
                UserAssignedRoles[user]['settings']=settings;

                
                for(key in UserAssignedRoles[user]['settings']){
                  console.log(`Your current setting for ${key} is ${UserAssignedRoles[user]['settings'][key]}`)
                  
                }

                for(key in role){
                  if(role.key === settings){
                    UserAssignedRoles[user].role = key;
                  }
                }
            

                StartApp();
                
      
              })
            })
      
          })
      
        })
      
      })

    })
    
  
  })

  
  
}

function showPermissions(){
    //loop through all the users settings and roles based on their permissions
readline.question("what is your username? ",usershowperm=>{

  console.log(UserAssignedRoles[usershowperm]);
  for(key in UserAssignedRoles){

    console.log(`${key} : ${UserAssignedRoles[key].settings}`);
  }

})

function SwitchPermission(){
  readline.question("Would you like to turn all permissions on/of?", _permchoice=>{
    if(_permchoice === "on"){
      for(let key in settings){
        settings[key] = true;
      }
    }else if(_permchoice === "off"){
      for(let key in settings){
        settings[key] = false;
      } 
    }
  })

  
}
    
}

function StartApp() {
    readline.question("What would you like to do? ", (_command) => {
      
      //add other commands here to add
  
      if(_command === "add user"){
        createUsers();
      }else if (_command === "assign role") {
        assignRole();
      }else if (_command === "list users") {
        listUsers();
      }else if (_command === "assign permissions") {
        assignPermissions();
      } else if (_command === "show permissions") {
        showPermissions();
      } else if (_command === "switch permissions") {
        SwitchPermission();
      } else if (_command !== "quit") {
        StartApp();
      } else {
        readline.close(); // you could add a console log saying like "command not found, try again" -- Bruna
      }
    });
  }
  
  StartApp();
  