Код:

Задача:
Напиши функцию createCounter, которая возвращает объект с методами:

start() — запускает счетчик, который каждую секунду увеличивает значение на 1.

pause() — останавливает счетчик.

reset() — сбрасывает счетчик до 0 и останавливает его.

 ```
const counter = createCounter();

counter.start(); // Счетчик начинает работать
setTimeout(() => {
  counter.pause(); // Останавливаем счетчик через 5 секунд
}, 5000);

setTimeout(() => {
  counter.reset(); // Сбрасываем счетчик через 8 секунд
}, 8000);
 ```







