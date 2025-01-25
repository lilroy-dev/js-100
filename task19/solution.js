const findIntersection = (arr1, arr2) => {
    if (!arr1.length || !arr2.length) return [];
    const res = [];

    for (let i = 0; i < arr1.length; i++) {
        if(arr2.includes(arr1[i])) {
            res.push(arr1[i]);
        }
    }
    return  res
};


const findIntersection2 = (arr1, arr2) => {
    if (!arr1.length || !arr2.length) return [];
    return arr1.filter(item => arr2.includes(item));
};


findIntersection([1, 2, 3, 4], [3, 4, 5, 6]);
// Ожидаемый результат: [3, 4]

findIntersection(['a', 'b', 'c'], ['c', 'd', 'e']);
// Ожидаемый результат: ['c']

findIntersection([1, 2, 3], [4, 5, 6]);
// Ожидаемый результат: []

findIntersection([], [1, 2, 3]);
// Ожидаемый результат: []
