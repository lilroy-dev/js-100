
const findIntersectionWithCount1 = (arr1, arr2) => {
    if (!arr1 || !arr1.length) return [];
    const result = [];

    for (let i = 0; i < arr1.length; i++) {
        const indexInArr2 = arr2.indexOf(arr1[i]); // Найти индекс элемента из arr1 в arr2
        if (indexInArr2 !== -1) { // Если элемент найден
            result.push(arr1[i]); // Добавить его в результат
            arr2.splice(indexInArr2, 1); // Удалить элемент из arr2
        }
    }
    return result;
};


const findIntersectionWithCount = (arr1, arr2) => {
    if (!arr1.length || !arr2.length) return [];

    return arr1.reduce((acc, num) => {
        const indexInArr2 = arr2.indexOf(num);
        if (indexInArr2 !== -1) {
            acc.push(num);          // Добавить в результат
            arr2.splice(indexInArr2, 1); // Удалить из arr2
        }
        return acc;
    }, []);
};



console.log(findIntersectionWithCount([1, 2, 2, 3], [2, 2, 4]));
// Ожидаемый результат: [2, 2]

console.log(findIntersectionWithCount(['a', 'b', 'b', 'c'], ['b', 'b', 'c', 'c']));
// Ожидаемый результат: ['b', 'b', 'c']

console.log(findIntersectionWithCount([1, 2, 3], [4, 5, 6]));
// Ожидаемый результат: []

console.log(findIntersectionWithCount([], [1, 2, 3]));
// Ожидаемый результат: []

console.log(findIntersectionWithCount([1, 1, 1], [1, 1]));
// Ожидаемый результат: [1, 1]
