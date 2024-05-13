// Object literal

const user = {
    username: 'jay',
    loginCount: 10,
    signedIN: true,

    getUserDetails: function(){
        // console.log('got details fron database');
        // console.log(`Username: ${this.username}`);
        console.log(this);  

    }
}



// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);   // => output is empty object




// CONSTRUCTOR FUNCTION

// jaisey hi ap new keyword use karengey tho ek empty object create hota hai jisko intance bola jata hai 
// step 1 : empty object create ho raha hai 
// step 2: contusctor function call hoata hai new keyword ke karan and jitne bhi argument hote hai usko pack kar det hai 
// 



function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn


    return this
}

const userOne = new User("jay1", 10, true)
const userTwo = new User('jay2', 12, true)


console.log(userOne);
console.log(userTwo);

console.log(userOne);

