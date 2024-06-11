const BASE_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button")
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

for(let select of dropdowns) {
    for (currcode in countryList) {
        newOption = document.createElement("option");
        newOption.innerHTML = currcode;
        newOption.value = currcode;
        if(select.name=== 'from' && currcode === 'USD'){
            newOption.selected = 'selected'
        } else if(select.name=== 'to' && currcode === 'INR'){
            newOption.selected = 'selected'
        }
        select.append(newOption)
    }

    select.addEventListener("change", (e) => {
        updateFlag(e.target)
    })
}


let updateFlag = (element) =>{
    let currcode = element.value;
    let countryCode = countryList[currcode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
}


btn.addEventListener("click", async (e) => {
    e.preventDefault();
    let amount = document.querySelector(".amount input")
    let amtval  = amount.value
    if (amtval === '' || amtval < 1){
        amtval = 1
        amount.value = '1'
    }
    
    const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`
    try {
        let response = await fetch(URL);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        let data = await response.json();
    
        let rate = data[toCurr.value.toLowerCase()];
    
        let finalAmount = amtval * rate;
        msg.innerHTML = `${amtval} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
    } catch (error) {
        console.error('Error fetching exchange rate:', error);
        msg.innerHTML = 'Failed to fetch exchange rate. Please try again later.';
    }

})