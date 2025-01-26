const findUnion1 = (arr1, arr2) => {
    return [...new Set([...arr1, ...arr2])];
}


const findUnion2 = (arr1, arr2) => {
    const combined = arr1.concat(arr2);
    return combined.filter((item, index) => combined.indexOf(item) === index);
};


const findUnion = (arr1, arr2) => {
    const result = [...arr1];
    for (let item of arr2) {
        if (!result.includes(item)) {
            result.push(item);
        }
    }
    return result;
};



console.log(findUnion([1, 2, 3], [3, 4, 5]));
// Ожидаемый результат: [1, 2, 3, 4, 5]

console.log(findUnion(['a', 'b', 'c'], ['b', 'c', 'd']));
// Ожидаемый результат: ['a', 'b', 'c', 'd']

console.log(findUnion([1, 2, 3], []));
// Ожидаемый результат: [1, 2, 3]

console.log(findUnion([], []));
// Ожидаемый результат: []


