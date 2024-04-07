const god = ['hanuman', 'krishna', 'balram']
const dcheros = ['superman', 'flash', 'batman']

//god.push(dcheros)


// console.log(god)
// console.log(god[])

// const allhero = god.concat(dcheros)
// console.log(allhero);


//---------- spread operator ...  -----------------

const godheros = [...god, ...dcheros]
//console.log(godheros)

//------------------------------------------------------
//Array.from() method ka kaam hai non-array objects ya iterables ko arrays mein convert karna.

// // Convert a string to an array of characters
var str = "jay";
var charArray = Array.from(str);
// console.log(charArray); // Output: ["j", "a", "y"]

// // Convert a Set to an array
var set = new Set([1, 2, 3, 4, 5]);
var setArray = Array.from(set);
// console.log(setArray); // Output: [1, 2, 3, 4, 5]


console.log(Array.from({name: "hitesh"})) // interesting //Toh, jab hum {name: "hitesh"} object ko array mein convert karte hain, toh humein ek empty array milta hai ([]). Kyunki object ko array mein convert karne ke liye kuch specific values nahi hai.
//-----------------------------------------

// multiple variable or array ko array mai aiey convert karna hai 
let score1 = 200
let score2 = 300
let score3 = 400

console.log(Array.of(score1, score2, score3 ));


