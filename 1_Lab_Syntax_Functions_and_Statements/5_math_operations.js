function solver(num1, num2, operator){

    let result;

    switch (operator) {
        case '+': result = num1 + num2; break;
        case '-': result = num1 - num2; break;
        case '/': result = num1 / num2; break;
        case '*': result = num1 * num2; break;
        case '%': result = num1 % num2; break;
        case '**': result = num1 ** num2; break;
    }
    
    console.log(result)
}

solver(5, 6, '+')
solver(3, 5.5, '*')
