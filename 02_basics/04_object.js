// in previous lec hamne string, arrya, number, boolean, function    ko acess kaiey karte hai woo dekhta tha 
//---------------------------------------------------------------------


//const tinderUser = new Object()    // ey ek singalton object hai 
const tinderUser = {}                // otuput dono mai sami hai but , ey wala singalton nahi hai 

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Jayprakash",
            lastname: "yadab"
        }
    }
}

//console.log(regularUser.fullname.userfullname.lastname);


//// combining the objects

const obj1 = {1: "a", 2: "b", 3: "c"}
const obj2 = {4: "d", 5: "e", 6: "f"}

// const  obj3 = { obj1, obj2}
//const obj3 = Object.assign({}, obj1, obj2,)

const obj3 = {...obj1, ...obj2};               // 90% of the ey syntax hi use karengey using spread operator 
//console.log(obj3);



// jab value database sai ati hai tho (array of object) mai ati hai means array ke andar baut sare objects.

const users = [
    {
        id: 1,
        email: "j@gamil.com",

    },

    {
        id: 2,
        email: "j@gamil.com",

    },

    {
        id: 3,
        email: "j@gamil.com",

    },
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));   // srif keys dega in arrays
console.log(Object.values(tinderUser));   // srif value dega in arrays
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('id'));  //  isiey ham check kar rahe hai ki tinderuser ke pass id property hai ki nahi or output : true





// OBJECT DE-STRUCTURE

/* Object de-structuring mein hum ek object ko kholkar uske parts ko alag-alag variables mein store karte hain. Jaise ki agar humare paas ek object hai: */

const toyBox = {
    teddy: 'Teddy Bear',
    car: 'Toy Car',
    ball: 'Toy Ball'
  };

  
const { teddy, car, ball } = toyBox;    // const uske bad curly braket uske bad = kaha se value extract karni hai 

console.log(teddy); // Output: Teddy Bear
console.log(car);   // Output: Toy Car
console.log(ball);  // Output: Toy Ball





// JSON API

/*JSON API ek communication protocol hai jo data exchange karne ke liye istemal hota hai. Data ko JSON format mein bhejkar aur prapt karke communicate kiya jata hai. Example: */
 

// {
//     "key": "value"       //syantax
// }
  
// {
//     "name" = "jay"
//     "cousename" = "free"
// }  

// [
//     {},
//     {},
//     {}
    
// ]