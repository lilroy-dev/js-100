const findLongestString1 = (strings) => {
    if (!strings.length) return null; // Проверяем, пуст ли массив
    let result = '';

    for (let i = 0; i < strings.length; i++) {
        if (result.length < strings[i].length) {
            result = strings[i];
        }
    }

    return result;
};


const findLongestString2 = (strings) => {
    if (!strings.length) return null;
    return strings.sort((a, b) => b.length - a.length)[0];
};


const findLongestString = (strings) => {
    if (!strings.length) return null;

    const maxLength = Math.max(...strings.map(str => str.length));
    return strings.find(str => str.length === maxLength);
};



console.log(findLongestString(["apple", "banana", "cherry", "date"]));
// Ожидаемый результат: "banana"

console.log(findLongestString(["short", "longer", "longest", "tiny"]));
// Ожидаемый результат: "longest"

console.log(findLongestString([]));
// Ожидаемый результат: null
