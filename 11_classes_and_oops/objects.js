// BASICALLY WE AREUNDERSTANDING new KEYWORD


// Defining a function with properties:

function multiple5(num){
    return num*5 
}

multiple5.power = 2

//Using the function and accessing its property:

console.log(multiple5(6));          // => 30
console.log(multiple5.power);       // => 2

// Understanding prototypes:
console.log(multiple5.prototype);   // => {}

//Constructor function for creating users:
function createUser(username, price){
    this.username = username
    this.price = price
}

// Adding methods to the prototype:

createUser.prototype.increment = function(){
    this.price++
}

createUser.prototype.printMe = function(){
    console.log(`price is ${this.price}`);
}


//Creating user objects and using methods:
const chai = new createUser('chai', 50)
const tea = new createUser('tea', 100)


chai.increment()
chai.printMe()



/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/