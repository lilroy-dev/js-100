Напиши функцию deepClone, которая выполняет глубокое копирование объекта. Функция должна корректно обрабатывать вложенные объекты и массивы.
Код:

 ```
const original = {
  a: 1,
  b: { c: 2, d: [3, 4] },
};

const cloned = deepClone(original);
console.log(cloned); // { a: 1, b: { c: 2, d: [3, 4] } }
console.log(cloned.b === original.b); // false (вложенные объекты и массивы тоже скопированы)s
 ```







