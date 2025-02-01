Напиши функцию fetchSequentially, которая принимает массив URL-адресов и последовательно (один за другим) выполняет HTTP-запросы к этим адресам с помощью fetch. Функция должна возвращать массив результатов в том же порядке, в котором были переданы URL.

Код:

 ```
const urls = [
  'https://jsonplaceholder.typicode.com/posts/1',
  'https://jsonplaceholder.typicode.com/posts/2',
  'https://jsonplaceholder.typicode.com/posts/3',
];

fetchSequentially(urls)
  .then((results) => {
    console.log(results); // Массив результатов в порядке запросов
  })
  .catch((error) => {
    console.error('Ошибка:', error);
  });
 ```

Подсказки:
Используй async/await для работы с асинхронным кодом.

Для последовательного выполнения запросов можно использовать цикл for или метод reduce.

Обрабатывай ошибки с помощью try/catch.







