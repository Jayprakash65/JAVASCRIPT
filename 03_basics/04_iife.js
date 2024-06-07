// Immediately Invoked Function Expression (IIFE)
// IIFE matalb jo Immediately invoked ho jake or golobal scope kai pollutions sai prblem hoti hai kai bar tho jo global scope kai variable kai pollution ko hatane kai ley hamne iife use kiya
(function chai() {
    // named iife--> chai
    console.log('DB connected');
}
)();                              // jab ek hi file mai 2 iffe ko run karna hai tho semicolan is important {INTERVIEW QUESTION}


// //Unamed iife
// ( () => {
//     console.log(`DB connected TWO ` );
// })()



//Unamed iife { how to pass parameter like name }
( (name) => {
    console.log( `DB connected TWO ${name}`);
})('jay')



