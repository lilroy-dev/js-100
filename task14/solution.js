const countdown2 = (num) => {
    const res = [];

    for (let i = num; i >= 0; i--) {
        res.push(i);
    }

    return res
}

const countdown = (num) => {
    return Array.from({ length: num + 1 }, (_, i) => num - i);
};

console.log(countdown(5)); // [5, 4, 3, 2, 1, 0]
