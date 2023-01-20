function neededMoney(fruit, grams, price){
    let total = (grams / 1000) * price;
    let kilograms = grams / 1000;
    console.log(`I need ${total.toFixed(2)} to buy ${kilograms.toFixed(2)} kilograms ${fruit}.`)
}

neededMoney('orange', 2500, 1.80);
console.log('--------------------');
neededMoney('apple', 1563, 2.35);
