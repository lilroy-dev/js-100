function isSorted(numArr) {
    if (numArr.length <= 1) {
        // Если массив пустой или состоит из одного элемента, он считается отсортированным по возрастанию
        return 1;
    }

    let isAscending = true;  // Флаг для проверки возрастания
    let isDescending = true; // Флаг для проверки убывания

    for (let i = 0; i < numArr.length - 1; i++) {
        if (numArr[i] > numArr[i + 1]) {
            // Если текущий элемент больше следующего, массив не возрастающий
            isAscending = false;
        }
        if (numArr[i] < numArr[i + 1]) {
            // Если текущий элемент меньше следующего, массив не убывающий
            isDescending = false;
        }
    }

    // Проверяем флаги
    if (isAscending) {
        return 1; // Массив отсортирован по возрастанию
    }
    if (isDescending) {
        return -1; // Массив отсортирован по убыванию
    }
    return 0; // Массив не отсортирован
}


console.log(isSorted([1, 2, 3, 4, 5]));
// Ожидаемый результат: 1
//
console.log(isSorted([5, 4, 3, 2, 1]));
// Ожидаемый результат: -1

console.log(isSorted([1, 3, 2, 4, 5]));
// Ожидаемый результат: 0
