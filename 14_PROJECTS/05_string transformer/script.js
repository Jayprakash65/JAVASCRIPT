let input = document.querySelector('input')

let lowercase = document.querySelector('#lowercase')
let UpperCase = document.querySelector('#uppercase')
let camelcase = document.querySelector('#camelcase')
let pascalcase = document.querySelector('#pascalcase')
let snakecase = document.querySelector('#snakecase')
let kebabcase = document.querySelector('#kebabcase')
let trim = document.querySelector('#trim')




function capitalizeString(str) {
    // Check if str is defined and not an empty string
    if (str && str.length > 0) {
        let firstCharacter = str[0].toUpperCase();
        let remainingCharacters = str.slice(1);
        return firstCharacter + remainingCharacters;
    } else {
        // Handle case when str is undefined or empty
        return str;
    }
}





function tocamelcase(string){
    const lowerCaseString = string.toLowerCase()
    wordsArray = lowerCaseString.split(' ')         // covert into array

    // lopping on array
    let finalArr = wordsArray.map((word, i) => {
        if(i === 0) return word

        return capitalizeString(word)
        
    })

    return finalArr.join('')
    
}


function topascalcase(string){
    const lowerCaseString = string.toLowerCase()
    wordsArray = lowerCaseString.split(' ')         // covert into array

    // lopping on array
    let finalArr = wordsArray.map((word, i) => {
        

        return capitalizeString(word)
        
    })

    return finalArr.join('')
    
}


function tosnakecase(string){
    
    wordsArray = string.split(' ')         // covert into array
    return wordsArray.join('_')
    
}


function tokebabcase(string){
    
    wordsArray = string.split(' ')         // covert into array
    return wordsArray.join('-')
    
}


function totrim(string){
    
    wordsArray = string.split(' ')         // covert into array
    return wordsArray.join('')
    
}




function updateScreen (){
    lowercase.innerText = input.value.toLowerCase();
    UpperCase.innerText = input.value.toUpperCase();
    camelcase.innerText = tocamelcase(input.value);
    pascalcase.innerText = topascalcase(input.value);
    snakecase.innerText = tosnakecase(input.value);
    kebabcase.innerText = tokebabcase(input.value);
    trim.innerText = totrim(input.value);

}




input.addEventListener('input', function() {
        updateScreen()
    })

    