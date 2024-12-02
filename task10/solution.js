function maxProduct(numbers) {
    let result = -Infinity;

    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            result = Math.max(result, numbers[i] * numbers[j]);
        }
    }

    return result;
}

console.log(maxProduct([1, 2, 3, 4, 5]));
// Ожидаемый результат: 20 (4 * 5)

console.log(maxProduct([-1, -2, -3, -4]));
// Ожидаемый результат: 12 (-3 * -4)

// console.log(maxProduct([0, -10, 3, 5, 6]));
// // Ожидаемый результат: 30 (5 * 6)
