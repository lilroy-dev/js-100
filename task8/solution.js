function isAnagram(str1, str2) {
    // Приводим строки к одному регистру и удаляем пробелы
    const strFormat1 = str1.replace(/\s+/g, '').toLowerCase();
    const strFormat2 = str2.replace(/\s+/g, '').toLowerCase();

    // Если длины строк не равны, они не могут быть анаграммами
    if (strFormat1.length !== strFormat2.length) {
        return false;
    }

    // Сортируем символы в строках и сравниваем их
    return strFormat1.split('').sort().join('') === strFormat2.split('').sort().join('');
}

console.log(isAnagram("listen", "silent"));
// Ожидаемый результат: true



console.log(isAnagram("hello", "world"));
// Ожидаемый результат: false
