const urls = [
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/posts/2',
    'https://jsonplaceholder.typicode.com/posts/3',
];


const  fetchSequentially = async (urls) => {
    const result = [];
    for (let url of urls) {
        try {
            const response = await fetch(url); // Ждем ответа от сервера
            const data = await response.json(); // Ждем преобразования ответа в JSON
            result.push(data); // Добавляем данные в массив
        } catch(err) {
           throw err;
        }
    }
    return result;
}


fetchSequentially(urls)
    .then((results) => {
        console.log(results); // Массив результатов в порядке запросов
    })
    .catch((error) => {
        console.error('Ошибка:', error);
    });
