//* Literals
//Literal notation: Literal notation mein hum strings ko single quotes ('') ya double quotes ("") ke beech mein define karte hain. Jaise ki:

    // let str1 = 'Hello';
    // let str2 = "World";

//* constructor
//Constructor notation: Constructor notation mein hum String() constructor ka istemal karte hain. Jaise ki:

    // let str1 = new String('Hello');
    // let str2 = new String("World");

//----------------------------------------------------------------------------------------------------------------------

// object literals  ( declare karne ka tarika )

const mySym = Symbol("key1")

const user = {
    [mySym]: "mykey1",          // symbol declare kiya hai 
    name: "jay",                        //background mai name: ko string hi mana ja raha hai so string na bhi lagye tho chalega or ham jo no tarhai sai isley acess kar sakte hai( dot sai bhi or [ ] sai bhi )
    "full name": "jayprakash yadab" ,          
    age: 18,
    location: "west bengal",
    "full name": "jayprakash"   // ab ham srif isey [ ] sai hi acess kar skate hai , dot sai nahi. keuki ab usmai string lagadiya pahle jab string nahi lagate the tab tab dono tarhai sai cess kar sakte the lagane ke bad ab nahikar sakte.
}

// console.log(user.age); // ham aisey declar kar sakte hai hai but not good way.
// console.log(user["age"]) 
// console.log(user["full name"]) 
// console.log(user[mySym]);


//// changes in value (overright)

user.name = "prakash"   
//console.log(user.name);


////agr object ko freeze(koi value change nahi hogi) karna ho tho.

//Object.freeze(user)
user.name = "LLLLLLL"
//onsole.log(user);



user.greeting = function(){
    console.log("Hello JS user");
}
user.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);    
}

console.log(user.greeting());
console.log(user.greetingTwo());


