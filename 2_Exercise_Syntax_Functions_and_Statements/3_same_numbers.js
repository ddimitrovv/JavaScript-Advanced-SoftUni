function sameNumbers(number){
    let numberAsString = String(number);
    let isSameDigits = true;
    let sumOfDigits = 0;

    let firstDigit = numberAsString[0];
    for (let index = 0; index < numberAsString.length; index++){
        let currentDigit = Number(numberAsString[index]);
        if (firstDigit != currentDigit){
            isSameDigits = false;
        }
        sumOfDigits += currentDigit
    }
    console.log(isSameDigits)
    console.log(sumOfDigits)
}

sameNumbers(2222222);
sameNumbers(1234);
