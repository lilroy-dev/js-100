Найти объединение двух массивов
Напиши функцию findUnion, которая принимает два массива arr1 и arr2 и возвращает массив, содержащий объединение этих двух массивов.

Объединение означает, что массив должен включать все уникальные элементы из обоих массивов (без дублирования).




Код:

 ```
findUnion([1, 2, 3], [3, 4, 5]);
// Ожидаемый результат: [1, 2, 3, 4, 5]

findUnion(['a', 'b', 'c'], ['b', 'c', 'd']);
// Ожидаемый результат: ['a', 'b', 'c', 'd']

findUnion([1, 2, 3], []);
// Ожидаемый результат: [1, 2, 3]

findUnion([], []);
// Ожидаемый результат: []


 ```
Условия:

Элементы массивов могут быть числами или строками.
Порядок элементов в результирующем массиве может отличаться (это не важно).
Если оба массива пустые, результат тоже должен быть пустым.




