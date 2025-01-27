



const findDifference1 = (arr1, arr2) => {
   if(!arr1 || !arr1.length) return [];
   return arr1.filter(item => !arr2.includes(item));
};



const findDifference = (arr1, arr2) => {
    const set2 = new Set(arr2);
    return arr1.filter(item => !set2.has(item));
};


console.log(findDifference([1, 2, 3, 4], [2, 4]));
// Ожидаемый результат: [1, 3]

console.log(findDifference(['a', 'b', 'c'], ['b']));
// Ожидаемый результат: ['a', 'c']

console.log(findDifference([1, 2, 3], []));
// Ожидаемый результат: [1, 2, 3]

console.log(findDifference([], [1, 2, 3]));
// Ожидаемый результат: []

console.log(findDifference([1, 1, 2, 2, 3], [1, 2]));
// Ожидаемый результат: [3]
