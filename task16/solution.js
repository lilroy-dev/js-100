const isPalindrome = (str) => {
    // Приводим строку к нижнему регистру и убираем все небуквенные символы
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    // Сравниваем строку с ее обратной версией
    return cleanStr === cleanStr.split('').reverse().join('');
};



console.log(isPalindrome("A man, a plan, a canal, Panama"));
// Ожидаемый результат: true

console.log(isPalindrome("racecar"));
// Ожидаемый результат: true

console.log(isPalindrome("hello"));
// Ожидаемый результат: false

console.log(isPalindrome("No 'x' in Nixon"));
// Ожидаемый результат: true
