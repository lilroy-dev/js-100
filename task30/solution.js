
const findMinMax =  (arrNums) => {
    if (arrNums.length === 0) {
        throw new Error("Массив не должен быть пустым");
    }
    const result = {
        min: arrNums[0],
        max: arrNums[1],
    };
    for (let i = 0; i < arrNums.length; i++){
        if (arrNums[i] < result.min) {
            result.min = arrNums[i];
        }

        if (arrNums[i] > result.max) {
            result.max = arrNums[i];
        }
    }

    return result;
}


console.log(findMinMax([4, 3, 5, 3, 2])); // {min: 2, max: 5}
console.log(findMinMax([4, 4, 7, 2, 1, 10])); // {min: 1, max: 10}
console.log(findMinMax([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // {min: 1, max: 10}
