const god = ['hanuman', 'krishna', 'balram']
const dcheros = ['superman', 'flash', 'batman']

//god.push(dcheros)       /


// console.log(god)
// console.log(god[3, 1])

const allhero = god.concat(dcheros)
console.log(allhero);


//---------- spread operator ...  ----------------- used to merge arrays

const godheros = [...god, ...dcheros]
//console.log(godheros)



// Arrya ke andar arya ho or use ek array mai lana ho tho .flat use karengey 
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



//------------------------------------------------------
//Array.from() method ka kaam hai non-array objects ya iterables ko arrays mein convert karna.

// // Convert a string to an array of characters
var str = "jay";
console.log(Array.isArray("jay"))   // .isarray check karta hai ki jay array hai ki nahi

var charArray = Array.from(str);
// console.log(charArray); // Output: ["j", "a", "y"]

// // Convert a Set to an array
var set = new Set([1, 2, 3, 4, 5]);
var setArray = Array.from(set);
// console.log(setArray); // Output: [1, 2, 3, 4, 5]


//console.log(Array.from({name: "hitesh"})) // interesting //Toh, jab hum {name: "hitesh"} object ko array mein convert karte hain, toh humein ek empty array milta hai ([]). Kyunki object ko array mein convert karne ke liye kuch specific values nahi hai.
//-----------------------------------------

// multiple variable or array ko array mai aiey convert karna hai 
let score1 = 200
let score2 = 300
let score3 = 400

//console.log(Array.of(score1, score2, score3 ));


