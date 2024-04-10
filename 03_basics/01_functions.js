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



