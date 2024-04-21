// for of   (used to loop array and object easily)

// syntax

// for (const iterator of object) {     // iterator ko koi bhi nam do act as variable or object ke jahai wo likh jaimai loop lagana chahite ho 
    
// }



// ["", "", ""]
// [{}, {}, {}]



//Iterating over an Array

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {        
    //console.log(num);
}



//Iterating over a string

const greeting = "namaste world"

for (const greet of greeting) {
    //console.log(`each char is ${greet}`);
}



// Maps

const map = new Map()

map.set('IN', 'India')                    // IN = key , India = value
map.set('USA', 'United State of America')   
map.set('FR', 'France')   

//console.log(map);



//loop on map

for (const [key, value] of map) {
    //console.log(key, ':-', value);
}


// Iterating or Loop on object 

const myObject = {
    "game1": 'NFS',
    'game2': 'super'
}

for (const [key, value] of myObject) {
    console.log(key, ':-', value);
}

// OUTPUT: myObject is not iterable    