


const condition= false===false;
const condition2= 1===1
let secret1="";
let password1="";

console.log("This is a true type",true);
console.log("This is a true type",false);

if (condition && condition2){
    console.log("If its true , the line will run, you will see console");
}

console.log("If this is true?", 1==3);

console.log("=================lets run a program==============");
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
    });


    readline.question('What is the secret?', secret => {
    secret1=secret;

            readline.question("What is the password?",password =>{

                password1=password

                if (password1 ==="pig" && secret1 ==="make me rich"){
                    console.log("you won");
                }

                if(password1!=="pig" && secret1==="make me rich"){
                        console.log("Your so close , youll be rich when pigs fly");
                }
                if(password1 !=="pig" && secret1 !=="make me rich"){
                    console.log("Try again");
                }


            readline.close()
                            });
 
    });

   