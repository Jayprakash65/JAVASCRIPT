              //ARRAY

//HOW to declare array

    const myarr = [0, 1, 2, 3, 4, 5]
    let fruits = ['apple', 'orange', 'banana']
    const myarr2 = new Array(1, 2, 3, 4, 5, 6)

    //console.log(myarr2[5]);


//// Array Methods

    // myarr.push(10)     // Ye method array mein ek ya zyada items ko array ke end mein add karne ke liye use hota hai. 
    // myarr.push(11)
    // myarr.pop()        // Ye method array se last item ko hata deta hai.

    //myarr.unshift(9)      // Ye method array ke shuruwat mein ek ya zyada items ko add karne ke liye use hota hai. 
    //myarr.shift()         // Ye method array se first item ko hata deta hai.
    
    
 // .join() method ka istemal array ke saare elements ko ek string mein jodne ke liye

    let myarrStr = myarr.join()

    // console.log(myarr);     // Default separator ke saath
    // console.log(myarrStr);  // Output: "apple,banana,orange,grapes" 
    
    
// slice, splice

    console.log("A:" , myarr);

    const mya1 = myarr.slice(1, 3)
    console.log(mya1);

    console.log("B:" , myarr);

    const mya2 = myarr.splice(1, 3)
    console.log("c:" , myarr);

    console.log(mya2);

    //"Slice() method se hum array ke kuch specific parts ko alag karke naye array mein store kar sakte hain, lekin original array ko change nahi karte. Jabki splice() method se hum array ko modify karke elements ko hata sakte hain ya naye elements add kar sakte hain."



