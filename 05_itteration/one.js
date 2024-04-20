// for loop

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 6) {
     //   console.log("6 is best number");
    }
  //  console.log(element);
    
}


// printing table fro 1 to 12

for (let i = 1; i <= 12; i++) {
        //console.log(`Outer loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
        //console.log(`Inner loop value: ${j} and inner loop ${i}`);
        //console.log(i + '*' + j + '=' + i*j);
    }
    
}


// printing just 5 ka table 

for (let i = 1; i <= 10 ; i++) {
    //console.log(`${5} * ${i} = ${5 * i}`);
    
}



//array loop

let myArray = ["flash", "supaerman","lionman"]
//console.log(myArray.length)

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);
}



//break and continue

// break ----> kisi bhi control flow ko brak karn hai tho brak ka use karengey 

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        break
    }
    //console.log(`Value of i: ${index}`);
    
}



// continue

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
    console.log(`Value of i: ${index}`);
    
}






