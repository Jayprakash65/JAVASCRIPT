// mI CHaAHAI HU KI MATH.PI ki value chnge kar saku 

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);   // outupt same hi rahega change nahi hora hai 




const descriptor = Object.getOwnPropertyDescriptor(Math, 'PI')
//console.log(descriptor);


const chai = {
    name: 'giner chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log('chai nahi bani (code fat gayi)');
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, 'name'));


// ham value ko change kar sakte hai 
Object.defineProperty(chai, 'name', {
    //writable: false,
    enumerable: false,
})

console.log(Object.getOwnPropertyDescriptor(chai, 'name'));



for (let [key, value] of Object.entries(chai)) {

    if (typeof value!== 'function') {

        console.log(`${key} : ${value}`);
        
    }
    
}