// for in

// loop in object using for in

const myObject = {
    js: 'javascript',
    cpp: 'cpp',
    rb: 'ruby'
}

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}


// loop in array using for in

const programming = ['js', 'rb', 'java', 'cpp']

for (const key in programming) {
    //console.log(`${key} is for ${programming[key]}`);               // by defalut array ka keys 0, 1, 2, 3 ,4
}




//itoring on map using for in

// const map = new Map()

// map.set('IN', 'India')                    // IN = key , India = value
// map.set('USA', 'United State of America')   
// map.set('FR', 'France') 

// for (const key in map) {
//     console.log(key);
// }