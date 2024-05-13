// // Promise is a object

// // constuct promise

// const promiseOne = new Promise(function(resolve, reject){
//     // Asynchronous operation
//     // If operation is successful, call resolve with value
//     // If operation fails, call reject with error

//     setTimeout(function(){
//         console.log('Asyn task is complete');
//         resolve()  // connect the resolve and then 
//     },1000)
// })

// // consume promise

// promiseOne.then(function(){
//     console.log('promise consumed');
// })




// // promise 2
// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log('Async task 2');
//         resolve()
//     },1000)
// }).then(function(){
//     console.log('Task 2 resolved');
// })




// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({name: 'jay3', pass: '123'})
//     },1000)
// })

// promiseThree.then(function(user){
//     console.log(user);
// })





// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true;

//         if(error == false) {
//             resolve({username: 'jay4', pass: '1234'})
//         }else{
//             reject('ERROR: SOMETHING IS WRONG!')
//         }
//     }, 1000)
// })

// promiseFour
// .then((user) => {
//     console.log(user);
//     return user.username
// }).then((myusername) => {
//     console.log(myusername);
// }).catch((error) => {
//     console.log(error)
// }).finally(() => {
//     console.log('the');
// })





// const promiseFive = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = false;

//         if(error == false) {
//             resolve({username: 'jay5', pass: '12345'})
//         }else{
//             reject('ERROR: JS went WRONG!')
//         }
//     }, 1000)
// })

// async function consumePromise5(){
//     try {
//         const response = await promiseFive
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }

// consumePromise5()




// async function getAllUsers (){
//     try {
//         const response = await fetch('https://api.github.com/users/Jayprakash65')
        
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log('E: error', error);
//     }
//  }

//  getAllUsers()




// same kam ko using .then and .catch

fetch('https://api.github.com/users/Jayprakash65')
.then( (response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch( (error) => {
    console.log(error);
})