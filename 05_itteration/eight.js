const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (accumulator, curentvalue) {
//     console.log(`accumulator: ${accumulator} and curentvalue: ${curentvalue}`);
//     return accumulator + curentvalue
// }, 0)

const myTotal = myNums.reduce( (accmulator, currentvalue) => accmulator + currentvalue, 0)

//console.log(myTotal);




//Adding all the price in array
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "python course",
        price: 999
    },
    {
        itemName: "DSA course",
        price: 30000
    },
    {
        itemName: "mobile dev course",
        price: 15000
    }
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)
console.log(priceToPay);