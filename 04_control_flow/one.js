// ------------- if ------------------------------

// if (condition) {
    
// } 




// const temp = 45

// if (temp < 50) {
//     console.log('less than 50');
// } else{
//     console.log('temp is greter than 50');
// }


// <, >, <=, >=, ==, !=, ===, !==, 



// const score = 400

// if (score > 100) {
//     let power = "fly"
//     console.log( `user power: ${power}`); 
// }




////implicite scope -----> for on line not for muti;y line code 

const balance = 1000

//if (balance > 500)  console.log("paisa hi paisa 😁");
//if (balance > 500)  console.log("paisa hi paisa 😁"), console.log("paisa 2");   // ham multi line mai bhi likh skate hai using conma but nahi karna hai not readable 🤢



// else if 

// if (balance < 500 ) {
//     console.log("less than ");
// } 
// else if (balance < 750){
//     console.log("less than 750 ");
// }
// else if (balance < 900){
//     console.log("less than 900 ");
// }
// else{
//     console.log("less than 1200 ");
// }



const userLoggedIn = true
const UPI = true
const loggedInFromGoogle = true 
const loggedInFromEmail = false


if (userLoggedIn && UPI) {
    console.log("allow to buy course");       // if we are using and opertaor than both condition must be true, agr ek bhi condition false hua tho code run hi nahi hoga
}


if (loggedInFromGoogle || loggedInFromEmail) {  // agr don condition mai se koi bhi ek condition true tho code ka jayega, eya tho ggogle is alog in karo ey email sai 
    console.log("allow to buy course"); 
}

