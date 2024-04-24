// THIS is used to acess cureent contex (simple value ; variable kaya store kar rahr hai wohi context hai means value )

const user = {
    username: "jay",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} welcome to website`);
        //console.log(this)
    }

}   

//user.welcomeMessage()

// //------- agr koi usename ka name change kar deta tho - value change ho jayegi 🙂----

  //user.username = "prakash"       // ab contex change kar diya  outupt: prakash welcome to website
  //user.welcomeMessage()


//----------------- PRINTTING THIS OUTSIDE THE object -------------------------------------------

//console.log(this)        // OUTPUT: empty object {}


// ---------------- PRINTING THIS INSIDE THE FUNCTION ---------------------------------------------------

// function chai(){
//     username: 'jay'                  // undifine  ey this object andar output dikha rah ahai
//     console.log(this.username)       // OUTput : undefine  
// }

// chai()






// const chai = function () {
//     username: 'jay'                  
//     console.log(this.username) 
// }

// chai()          // outupt: undefine 




// lets talk about how to declare function with the help of arrow 

// const chai = function () {
//     username: 'jay'                  
//     console.log(this.username) 
// }

// chai()




// const chai =  () => {
//     username: 'jay'                  
//     console.log(this) 
// }

// chai()



//---------------------------- PURE ARROW FUN. DISS -----------------------------------


// const addTwo = (num1,num2) => {
//     return num1 + num2
// }

// console.log(addTwo(3, 5))



//-------------------------- implicit return => means paranticise use nahi karna hai in one line statement -------------------

const addTwo = (num1,num2) =>  num1 + num2

//const addTwo = (num1,num2) =>  (num1 + num2)

// const addTwo = (num1,num2) =>  ({username: "jay"})


console.log(addTwo(3, 5))