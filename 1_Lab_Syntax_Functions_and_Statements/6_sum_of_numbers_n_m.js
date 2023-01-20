function sumNumbers(n, m){
    let num1 = Number(n);
    let num2 = Number(m);
    let sumOfAll = 0;
    for (let i = num1; i <= num2; i++){
        sumOfAll += i;
    }
    return sumOfAll
}

let a = sumNumbers('1', '5');
console.log(a);
let b = sumNumbers('-8', '20');
console.log(b);
