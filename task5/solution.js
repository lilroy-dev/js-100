const factorial = (num) => {
    if (num < 0) return null;
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result = result * i;
    }
    return result;
}

const factorialRecursive = (num) => {
    if (num < 0) return null;
    if (num === 0 || num === 1) return 1;
    return num * factorialRecursive(num - 1);
}



console.log(factorial(5));
// Ожидаемый результат: 120

console.log(factorial(0));
// Ожидаемый результат: 1
