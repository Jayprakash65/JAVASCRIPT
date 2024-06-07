// const userEmail = "user@gmail.com"

// if (userEmail) {
//     console.log('true');
// } else{
//     console.log('false ')
// }

// output : true


const userEmail = ""

if (userEmail) {
    console.log('true');
} else{
    console.log('false ')
}

// output: false 



// ---------------- RULES --------------------

//falsy value

//false , 0, -0, BigInt 0n, "", null, undefined, NaN


//truthy value ----> jo falsy ko chor lar sab truthy hota hai 

// "0", "false", " ", [], {}, function(){}




//Empty array check

const emptyArray = []

if (emptyArray.length === 0) {
    console.log("Array is empty");
}

//Empty object check

const emptyObject = {}

if (Object.keys(emptyObject).length === 0) {
    console.log('object is empty');
}


// Nullish Coalescing Operator ( ?? ): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20
console.log(val1);


// Terniary operator 

// condition ? true state. : false state.

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log('less than 80 ') : console.log('more than 80');