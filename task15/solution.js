const filterEvenNumbers1 = (numbers) => {
    return numbers.filter(number => number % 2 === 0);
};

const filterEvenNumbers = (numbers) => {
    const evenNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evenNumbers.push(numbers[i]);
        }
    }
    return evenNumbers;
};


console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6])); // [2, 4, 6]
