const  findSecondLargest1 = (arr) => {
    if (arr.length === 0) return null;
    const max = Math.max(...arr);
    const isSame = arr.every(item => item === max);
    if(isSame) return null;
    let preMax = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if(preMax < arr[i] &&  arr[i] !== max) {
            preMax = arr[i];
        }
    }

    return preMax;
}



const findSecondLargest2 = (arr) => {
    if (arr.length < 2) return null; // Если меньше двух элементов, нет второго максимума

    let max = -Infinity;
    let preMax = -Infinity;

    for (let num of arr) {
        if (num > max) {
            preMax = max; // Предыдущее максимальное значение становится вторым
            max = num;    // Обновляем максимальное значение
        } else if (num > preMax && num !== max) {
            preMax = num; // Обновляем preMax, если это число меньше max, но больше preMax
        }
    }

    return preMax === -Infinity ? null : preMax; // Если preMax не обновился, возвращаем null
};



const findSecondLargest = (arr) => {
    if (arr.length < 2) return null; // Если меньше двух элементов, возвращаем null

    const uniqueNumbers = [...new Set(arr)]; // Убираем дубликаты
    if (uniqueNumbers.length < 2) return null; // Если уникальных чисел меньше двух, возвращаем null

    uniqueNumbers.sort((a, b) => b - a); // Сортируем массив по убыванию
    return uniqueNumbers[1]; // Второй элемент — второе наибольшее число
};





console.log(findSecondLargest([1, 2, 3, 4, 5]));
// Ожидаемый результат: 4

console.log(findSecondLargest([10, 10, 10]));
// Ожидаемый результат: null

console.log(findSecondLargest([5]));
// Ожидаемый результат: null

console.log(findSecondLargest([-10, -20, -30, -40, -50]));
// Ожидаемый результат: -20
