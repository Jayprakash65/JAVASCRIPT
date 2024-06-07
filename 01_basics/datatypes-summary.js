// On the basis of how the data store and acess the datatypes are categorize in two parts


//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id === anotherId);   // false

// const bigNumber = 3456543576654356754n





// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}


//console.log(typeof heros);

// https://262.ecma-international.org/5.1/#sec-11.4.3


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack memo.(Primitive),      // ismai copy milta hai original ka 
// Heap memo. (Non-Primitive)   // ismai reference milta hai or direct original copy mai change kar deta hai

let myYoutubeName = 'jay'
// let anthorname = myYoutubeName  // out: jay
let anthorname = 'jp'


console.log(myYoutubeName);
console.log(anthorname);



let userOne = {
    email: 'jayprakash@gmail.com',
    upi:'user@ybl'
}

let userTwo = userOne

userTwo.email = 'jp@gmail.com'

console.log(userOne.email);   // output dono mai same hoga keki isne dorect orignal mai change kar diya hai 
console.log(userTwo.email);
