const isSubset1 = (arr1, arr2) => {
    if(!arr2.length) return true;
    for (let i = 0; i < arr2.length; i++) {
        if(!arr1.includes(arr2[i])){
            return false;
        }
    }
    return true;
};



const isSubset = (arr1, arr2) => arr2.every(item => arr1.includes(item));


console.log(isSubset([1, 2, 3, 4, 5], [2, 4]));
// Ожидаемый результат: true (все элементы массива [2, 4] содержатся в массиве [1, 2, 3, 4, 5])

console.log(isSubset([1, 2, 3, 4, 5], [6]));
// Ожидаемый результат: false (6 отсутствует в массиве [1, 2, 3, 4, 5])

console.log(isSubset([1, 2, 3, 4, 5], []));
// Ожидаемый результат: true (пустой массив всегда является подмножеством)
