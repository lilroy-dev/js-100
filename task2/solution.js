const findUnique1 = (arr) => {
    return arr.filter((item) => arr.indexOf(item) === arr.lastIndexOf(item));
}

const findUnique = (arr) => {
    const counts = {};

    // Подсчитываем количество вхождений каждого элемента
    arr.forEach((item) => {
        counts[item] = (counts[item] || 0) + 1;
    });

    // Оставляем только уникальные элементы
    return arr.filter((item) => counts[item] === 1);
}


console.log(findUnique([1, 2, 2, 3, 4, 4, 5]));
// Ожидаемый результат: [1, 3, 5]