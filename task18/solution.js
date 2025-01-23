function countDivisible1(numbers, number) {
    let result = [];
    if (!numbers.length) return 0;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % number === 0) {
            result.push(numbers[i]);
        }
    }

    return result.length;
}


function countDivisible2(numbers, number) {
    return numbers.reduce((count, num) =>
            num % number === 0 ? count + 1 : count,
        0
    );
}


function countDivisible(numbers, number) {
    if (!numbers.length) return 0;

    return numbers.filter(num => num % number === 0).length;
}


console.log(countDivisible([10, 20, 33, 40, 50], 10));
// Ожидаемый результат: 4 (10, 20, 40, 50 делятся на 10)

console.log(countDivisible([3, 6, 9, 12, 15], 5));
// Ожидаемый результат: 1 (только 15 делится на 5)

console.log(countDivisible([1, 2, 3, 4, 5], 7));
// Ожидаемый результат: 0 (нет чисел, делящихся на 7)
