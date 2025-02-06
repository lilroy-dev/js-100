const memoize31 = (func) => {
    const cache = new Map();

    return (...args) => {
        // Преобразуем аргументы в строку, чтобы использовать их в качестве ключа
        const argsKey = JSON.stringify(args);

        if (cache.has(argsKey)) {
            console.log('Fetching from cache');
            return cache.get(argsKey);
        }

        // Вычисляем значение, если его нет в кэше
        const result = func(...args);
        cache.set(argsKey, result);
        return result;
    };
};

const add31 = (a, b) => {
    console.log(`Calculating ${a} + ${b}`);
    return a + b;
};

const memoizedAdd = memoize31(add31);

console.log(memoizedAdd(2, 3)); // Output: Calculating 2 + 3, 5
console.log(memoizedAdd(2, 3)); // Output: Fetching from cache, 5
console.log(memoizedAdd(3, 4)); // Output: Calculating 3 + 4, 7
console.log(memoizedAdd(3, 4)); // Output: Fetching from cache, 7
