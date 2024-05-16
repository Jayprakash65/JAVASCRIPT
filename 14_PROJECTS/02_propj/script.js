const form = document.querySelector('form');
const button = document.querySelector('button')
button.addEventListener('click', function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results');

    if (height === '' || height <= 0 || isNaN(height)) {
        results.innerHTML = `Plz bhai sahi height value dal 😡${height}`;
    }

    else if (weight === '' || weight <= 0 || isNaN(weight)) {
        results.innerHTML = `Plz bhai sahi weight value dal 😡${weight}`;
    }
    else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);   // tofixed use kar rahe hai taki hame decimal ke bad jada no. na mile 

        // show the result

        results.innerHTML = `<span>${bmi} </span>`

        const bmiWeight = document.querySelector('#bmi-wight')

        if(bmi < 18.6){
        bmiWeight.innerHTML = `You are Under Weight 😒`
        bmiWeight.style.color = '	#E97451'
        }

        if(bmi >= 18.6 && bmi <= 24.9){
        bmiWeight.innerHTML = `You are Normal congrts 🙂🔥`
        bmiWeight.style.color = '#DAF7A6'
        }

        if(bmi > 24.9){
        bmiWeight.innerHTML = `You are Over Weight (kam kahana kah bhai 🙂)`
        bmiWeight.style.color = '#D70040'
        }
    }




})