//----------------------DATES----------------------------

let myDate = new Date();
//console.log(myDate.toString());
//console.log(myDate.toLocaleString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
console.log(typeof myDate);         // typeof ---> object

//let anotherDate = new Date(2024, 3, 6)  // javasript ke andar month 0 sai start hota hai like 0--> jan , 1---> feb
//let anotherDate = new Date(2024, 3, 6, 8, 5)  
//let anotherDate = new Date("2024-04-06")
let anotherDate = new Date("06-04-2024")

//console.log(anotherDate.toLocaleString());


let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(anotherDate.getTime()); //in milli second 
// console.log(Math.floor(Date.now()/1000)); //in second 

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getMonth() + 1); 

// `${newDate.getDay()} and the time `

// newDate.toLocaleString('default', {
//     weekday: "long",
    
// })







