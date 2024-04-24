const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// Adding 10 on every number 
const newNumbers = myNumbers.map( (num) => num + 10 )
//console.log(newNumbers);


//-----------------Chaning in javascript------------------
// multi. with 10 ,as weel as adding 1, and filter bhi use kar rahe hai 

const newNums = myNumbers
                       .map((num) => num * 10)
                       .map( (num) => num + 1)
                       .filter( (num) => num >= 40) 
console.log(newNums);                      


