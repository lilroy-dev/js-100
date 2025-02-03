const createCounter = () => {
    let intervalID = null; // Идентификатор таймера
    let counter = 0; // Текущее значение счетчика

    return {
        // Метод для запуска счетчика
        start: () => {
            if (intervalID === null) { // Проверяем, не запущен ли уже таймер
                intervalID = setInterval(() => {
                    counter++; // Увеличиваем счетчик каждую секунду
                    console.log(counter); // Выводим значение для наглядности
                }, 1000);
            }
        },

        // Метод для остановки счетчика
        pause: () => {
            if (intervalID !== null) { // Проверяем, запущен ли таймер
                clearInterval(intervalID); // Останавливаем таймер
                intervalID = null; // Сбрасываем идентификатор таймера
            }
        },

        // Метод для сброса счетчика
        reset: () => {
            counter = 0; // Сбрасываем значение счетчика
            if (intervalID !== null) { // Если таймер запущен, останавливаем его
                clearInterval(intervalID);
                intervalID = null;
            }
            console.log(counter); // Выводим значение для наглядности
        },

        // Метод для получения текущего значения счетчика
        getValue: () => {
            return counter;
        },
    };
};

// Пример использования
const counter = createCounter();

counter.start(); // Счетчик начинает работать
setTimeout(() => {
    counter.pause(); // Останавливаем счетчик через 5 секунд
    console.log('Paused at:', counter.getValue()); // Текущее значение счетчика
}, 5000);

setTimeout(() => {
    counter.reset(); // Сбрасываем счетчик через 8 секунд
    console.log('Reset to:', counter.getValue()); // Текущее значение счетчика
}, 8000);
