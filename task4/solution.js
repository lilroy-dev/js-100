const removeDuplicates = (arr) => {
    return [...new Set(arr)];
}

const removeDuplicates1 = (arr) => {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}


const removeDuplicates3 = (arr) => {
    return arr.reduce((acc, item) => {
        if (!acc.includes(item)) {
            acc.push(item);
        }
        return acc;
    }, []);
}


console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
// Ожидаемый результат: [1, 2, 3, 4, 5]

console.log(removeDuplicates([1, 1, 1, 1]));
// Ожидаемый результат: [1]