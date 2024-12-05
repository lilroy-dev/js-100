function countOccurrences2(strings) {
   return  strings.reduce((acc, cur) => {
       return {...acc, [cur] :  Object.hasOwn(acc, cur)  ? acc[cur] + 1 : 1};
    },{})
}

function countOccurrences3(strings) {
    return  strings.reduce((acc, cur) => {
        return {...acc, [cur] :  acc[cur]  ? acc[cur] + 1 : 1};
    },{})
}

function countOccurrences(strings) {
    const result = new Map();

    for (let i = 0; i < strings.length; i++) {
        if(result.has(strings[i])) {
            result.set(strings[i], result.get(strings[i]) + 1);
        } else {
            result.set(strings[i], 1);
        }
    }
    // Преобразуем Map в обычный объект
    return Object.fromEntries(result);
}

console.log(countOccurrences(["apple", "banana", "apple", "orange", "banana", "banana"]));
// Ожидаемый результат: { apple: 2, banana: 3, orange: 1 }

console.log(countOccurrences([1, 2, 2, 3, 4, 4, 4]));
// Ожидаемый результат: { 1: 1, 2: 2, 3: 1, 4: 3 }
