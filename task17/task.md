Найти самую длинную строку в массиве
Напиши функцию findLongestString, которая принимает массив строк и возвращает самую длинную строку. Если таких строк несколько, верни первую из них. Если массив пустой, верни null.


Код:

 ```
findLongestString(["apple", "banana", "cherry", "date"]);
// Ожидаемый результат: "banana"

findLongestString(["short", "longer", "longest", "tiny"]);
// Ожидаемый результат: "longest"

findLongestString([]);
// Ожидаемый результат: null


 ```

Условия:

Если массив пустой, функция должна вернуть null.
Если две строки имеют одинаковую длину, возвращай первую из них.

