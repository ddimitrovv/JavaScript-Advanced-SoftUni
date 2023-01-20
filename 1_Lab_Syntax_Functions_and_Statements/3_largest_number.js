function largestNumber(num1, num2, num3){
    let largest = Math.max(num1, num2, num3)
//     if (num1 > num2 && num1 > num3){
//         largest = num1;
//     }
//     else if (num2 > num1 && num2 > num3){
//         largest = num2;
//     } 
//     else {
//         largest = num3
//     }
    console.log(`The largest number is ${largest}.`)
}

largestNumber(5, -3, 16);
largestNumber(-3, -5, -22.5);
