//---------------------------- NUMBERS ------------------------

const score = 400
//console.log(score)

const roll = new Number(400)
//console.log(roll);

//console.log(roll.toString());
//console.log(roll.toFixed(2));   // output = 400.00

const otherNumber = 123.897456
//console.log(otherNumber.toPrecision(3));

const lakh = 100000
const core = 10000000
//console.log(lakh.toLocaleString('en-IN'));   // just seperat the numaber using commna 
//console.log(core.toLocaleString('en-IN'));


//-------------------------- MATHS -------------------------------------------

console.log(Math);

// console.log(Math.abs(-8));   //convert negative value in to postive but dont convert postive to negative 
// console.log(Math.round(4.9)); // simaple roundoff like math
// console.log(Math.ceil(4.9));  
// console.log(Math.floor(4.6));
//console.log(Math.min(4, 3, 6, 8));
//console.log(Math.max(4, 3, 6, 8));



//console.log(Math.random()); //always gives value between 0 and 1 
//console.log((Math.random()*10) + 1); //Agar hum chahate hain ki 1 se 10 ke beech mein numbers aaye, toh humein 10 se multiply karna padega. Kyunki jab hum 0 se 1 ke beech ka random number generate karte hain, aur usse 10 se multiply karte hain, toh result 0 se 10 ke beech mein hota hai. Phir hum 1 ko add kar dete hain taaki number 1 se 10 ke beech mein ho.
                                     // 10 se multiply karne se value 0 to 10 ke beche dega agar ham  + 1 kar de tho value 1 to 10 dega 

const min = 10
const max = 30
console.log(Math.floor(Math.random() * (max - min + 1)) + min)
