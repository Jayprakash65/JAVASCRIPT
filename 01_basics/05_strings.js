const name  = "jay"
const repo  = 1

//console.log(name + repo);    // old way 


//// `` ----->  called backticks

//console.log(`hello my name is ${name} and my repo count is ${repo}  `)   // modern way 


//// Anthor way to declare string 

 const instaName = new String('jayprakash123');  // typeof---> object
//console.log(typeof instaName )  //output --->object



// -------------------------- SOME STRING MRETHODS ----------------------

//console.log(instaName[0]);
//console.log(instaName.__proto__);  // output object


//console.log(instaName.length);
//console.log(instaName.toUpperCase());
//console.log(instaName.charAt(5));
//console.log(instaName.indexOf('p'));

//console.log(instaName.substring(0, 4)); 
//console.log(instaName.slice(-13, 2)); 


// const name1 = "    jay   ";
// console.log(name1);
// console.log(name1.trim());   // irts trim the starting and ending space

const url = "https:jay.com/jay%20yadav"
//console.log(url.replace('%20', '_'));  // means %20 ko replace kardo '_' sai 

console.log(url.includes('prakash'));  // output false because prakash not exits in url 😁






