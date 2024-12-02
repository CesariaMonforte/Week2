const { read } = require("fs");

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

//---------PLANNING-------------------
/***to add users use the CreateUsers function
 * Inside the function add a readline to ask the user their name
 * save the name as _newuser
 * use the "push" predefined function to add the user to the "users" array
 * display a message to the user that the user has been added
 * 
 * */
//----------------------------------------------
/**
 * In the function list users
 * use a for loop to loop through each index in the users array
 * within the for loop
 * display each name on the list using the index
 * 
 */
//-----------------------------------------------
/**
 * To assign permissions
 * Go into the assign permissions function
 * Ask the user what their username is and assign it to a new object UserAssigned permissions that holds userrname and permissions
 * The object should be created globally outside the function
 * Then ask the user  what they want to assign for each permission " darkmode , sensitivity amount, eedit accounts, delete accounts, create channels and eedit channels" 
 * save the choices in the Userassigned permissions object
 */
//-----------------------------------------------------------
/**To assign roles
 * go into the assign role function 
 * ask the user what their username is and save it in an variable
 * created a new object outside the function called UserAssignedRoles and sale the user and their role as items
 *
 */
//---------------------------------------------------------
/**To show permissions
 * ask the user what their username is ?
 * loop through the User assigned roles and find their role as a value of a key (their name)
 * loop through the role array and check if the key value is simple, moderator or coAdmin
 * loop through the items in the role.key and display them with a console log and update the information on the userAssignedRole to the role name
 * 
 */
//------------------------------------------
//------------------CHALLENGE 2 PLANNING----------------------
//create a new function called switchpermissions
//ask the user their name
// loop through UserAssigned permissions
//check if the key is equal to the username entered
//if so then loop turn all the permission off at UserAssignedpermission[username]

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
let UserAssignedRoles={};
let UserAssignedPermissions={};

function createUsers(){
      //user readline to prompt for the name of the user to be added

      readline.question("What user do you want to add to the system? ", username=>{
  
          users.push(username);
        
        console.log(`User has been added`);
        StartApp();
      })
     
}

//CHALLENGE 2 ONLINE
function assignRole(){
    //user readline to prompt for the new roles to be added to system
   
    readline.question("What user do you want to assign a role too? ",_user=>{
      readline.question("what role do you want to assign to the user simple/ moderator/ coAdmin? ",_newrole=>{
        if(_newrole === "simple"){
            UserAssignedRoles[_user] = "simple";
        }else if(_newrole === "moderator"){
          UserAssignedRoles[_user] = "moderator";
        }else if(_newrole === "coAdmin"){
          UserAssignedRoles[_user] = "coAdmin";
        }
        StartApp();
      })

      
    } )
}

function listUsers(){
    //user readline to list out users
console.log("list of users: ");
    for(let i=0;i<users.length;i++){
      console.log(users[i]);
    }

    StartApp();
}

function assignPermissions(){
    //user readline to prompt for the admin to give list out added users and give individual permissions for each setting. 
    // This should give roles automatically based on whats assigned to the user based on conditions met.


readline.question("What user do you want to assign permissions to? ", user=>{

  UserAssignedPermissions[user]={};

  readline.question("What permission do you want to give for darkmode, on/off? ", _assigndarkmode=>{ // you can correct the space with the comma, before on/off, in all the options -- Bruna
          if(_assigndarkmode === "on"){

            settings.darkMode=true;

          }else if(_assigndarkmode === "off"){
            settings.darkMode=false;
          }
    readline.question("What permission do you want to give for sensitity, on/off? ", _assignsensitivity=>{

      if(_assignsensitivity === "on"){

        settings.sensitivityAmount=true;

      }else if(_assignsensitivity === "off"){
        settings.sensitivityAmount=false;
      }

      readline.question("What permission do you want to give for edit accounts, on/off? ", _assigneditaccounts=>{

        if(_assigneditaccounts === "on"){

          settings.editAccounts=true;

        }else if(_assigneditaccounts === "off"){
          settings.editAccounts=false;
        }

        readline.question("What permission do you want to give for delete accounts, on/off? ", _assigndeleteaccounts=>{

          if(_assigndeleteaccounts === "on"){

            settings.deleteAccounts=true;

          }else if(_assigndeleteaccounts === "off"){
            settings.deleteAccounts=false;
          }

          readline.question("What permission do you want to give for create channels, on/off? ", _assigncreatechannels=>{

            if(_assigncreatechannels === "on"){

              settings.createChannels=true;

            }else if(_assigncreatechannels === "off"){
              settings.createChannels=false;
            }

            readline.question("What permission do you want to give for edit channels, on/off? ", _assigneditchannels=>{
              if(_assigneditchannels === "on"){

                settings.editChannels=true;

  
              }else if(_assigneditchannels === "off"){
                settings.editChannels=false;
              }


              UserAssignedPermissions[user]={};
              UserAssignedPermissions[user]['settings']=settings;

              
              for(key in UserAssignedPermissions[user]['settings']){
                console.log(`Your current setting for ${key} is ${UserAssignedPermissions[user]['settings'][key]}`)
                
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

   readline.question("What users permissions do you want to see? " , _showperm=>{
    for(key in UserAssignedRoles){
      if(key === _showperm){
        console.log(`${key} role  is ${UserAssignedRoles[key]}`)

        if(UserAssignedRoles[_showperm] === "simple"){
          for(key in role.simple){
            UserAssignedRoles[_showperm]="simple";
            console.log(`${key}: ${role.simple[key]}`)
          }
        }else if(UserAssignedRoles[_showperm] === "moderator"){
          for(key in role.moderator){
            UserAssignedRoles[_showperm]="moderator";
            console.log(`${key}: ${role.simple[key]}`)
          }
        }else if(UserAssignedRoles[_showperm] === "coAdmin"){
          for(key in role.coAdmin){
            UserAssignedRoles[_showperm]="coAdmin";
            console.log(`${key}: ${role.simple[key]}`)
          }
        }
       
      }
    }
    
    
      StartApp();
   })
}

function SwitchPermission(){
  readline.question("Would you like to turn all permissions on/of?", _permchoice=>{

    readline.question("which user do you want to switch the permissions for? ", _userswitch=>{
      for(key in UserAssignedPermissions){
        if(key === _userswitch){
 
          if(_permchoice === "on"){
            for(let key in UserAssignedPermissions){
              UserAssignedPermissions[key] = true;
              console.log("permissions switched on")
            }
          }else if(_permchoice === "off"){
            for(let key in UserAssignedPermissions){
              UserAssignedPermissions[key] = false;
              console.log("permissions switched off")
            } 
          }

        }
      }
      
    })

   
  })
  
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
  //Reviewed by Bruna