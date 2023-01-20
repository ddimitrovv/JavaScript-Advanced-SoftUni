function cookingByNumbers(numberStr, ...args) {
    let number = Number(numberStr);
    for (let i = 0; i < args.length; i++) {
        if (args[i] == 'chop') {
           number /= 2; 
        } else if (args[i] == 'dice') {
            number = Math.sqrt(number);
        } else if (args[i] == 'spice') {
            number += 1;
        } else if (args[i] == 'bake') {
            number *= 3;
        } else if (args[i] == 'fillet') {
            number -= number * 0.2
        }
    console.log(number)
    }
}

cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
console.log('------------------');
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
