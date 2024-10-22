
const sumArray1 = (arrNums) => {
    let sum = 0;
    for (let i = 0; i < arrNums.length; i++) {
        sum += arrNums[i];
    }

    return sum;
}

const sumArray = (arrNums) => {
    return arrNums.reduce((acc, cur) => {
        acc += cur;
        return acc;
    },0)
}

console.log(sumArray([1, 2, 3, 4, 5]));
// Ожидаемый результат: 15

console.log(sumArray([-1, -2, -3, 4, 5]));
// Ожидаемый результат: 3

console.log(sumArray([]));
