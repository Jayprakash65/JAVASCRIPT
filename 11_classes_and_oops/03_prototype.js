// let myName = 'jaypraksh'
// console.log(myName.length);

// // OUTPUT: 9


// let myName = 'jaypraksh       '
// console.log(myName.length);

// // OUTPUT: 16


// GOAL: EK METHOD BANAHAI JO TRUE LENGTH DE IF THERE ARE SPACE IN THEM 
let myName = 'jaypraksh       '
console.log(myName.truelength);

// // expected OUTPUT: 9




let heros = ['thor', 'spiderman']

let herosPower = {
    thor: 'hammer',
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}


Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}

// herosPower.hitesh()
// heros.hitesh()
// heros.heyHitesh()
// heroPower.heyHitesh()


// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)




// solving the string count problem 


// define a string
const name = 'alakh sir     '


// create a method name truelength
String.prototype.truelength = function(){

    console.log(`The true length is: ${this.trim().length}`);
}

name.truelength()