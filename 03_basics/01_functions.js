function addNumber(num1, num2) {
    
    return num1 + num2
}

let result = addNumber (5, 10)
// console.log("Result:", result);




function loginUserMessage(username) {
    
    return `${username} just logged in`
}

// console.log(loginUserMessage("jayprakash"));




/* In case , agar aap loginUserMessage function ko bina kisi argument ke call karte hain, toh username parameter undefined hoga */

// console.log(loginUserMessage());    // Output: "undefined just logged in"




 function loginUserMessage(username) {
    if (username === undefined) {
        return "Plz enter your name";
    } else {
        return `${username} just logged in`;
    }
}

//console.log(loginUserMessage("jayprakash")); // Output: "jayprakash just logged in"
// console.log(loginUserMessage()); // Output: "Plz enter your name"





function calculateCafrtPrice(...num1){
    return num1
}

//console.log(calculateCafrtPrice(200, 400, 500));


// how to pass object in function and use it 

const user = {
    username:  "jay",
    price:  1000
}

function handleObject(user) {
     console.log(`username is ${user.username} and price is ${user.price}`);
}

//handleObject(user)   // calling the function

// handleObject({
//     username: "sam",
//     price: 399
// })


// how to pass array in function and use it 

const myNewArray = [200, 400, 100, 600]

function handleArray(getArray) {
    return getArray[1]
}

const secondArray = handleArray(myNewArray)
console.log(secondArray);