// for each

const coding = ['js', 'rb', 'java', 'cpp', 'python']

// coding.forEach( function (val){
//     console.log(val);
// })



// coding.forEach( (item) => {
//     console.log(item);
// })




// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)




// coding.forEach( (index, item, arr) => {
//     console.log(index, item, arr );
// } )


const myCoding = [
    {
        langName: "javascript",
        langFile: "js"
    },
    {
        langName: "java",
        langFile: "java"
    },
    {
        langName: "python",
        langFile: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.langName);
})

