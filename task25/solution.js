function deepClone(obj) {
    // Если obj не является объектом или это null, возвращаем его как есть
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }

    // Если obj — это массив, создаем новый массив и клонируем каждый элемент
    if (Array.isArray(obj)) {
        return obj.map((item) => deepClone(item));
    }

    // Если obj — это объект, создаем новый объект и клонируем каждое свойство
    const clonedObj = {};
    for (const key in obj) {
           console.log('obj', obj)
        if (obj.hasOwnProperty(key)) {
            clonedObj[key] = deepClone(obj[key]);
        }
    }

    return clonedObj;
}


const original = {
    a: 1,
    b: { c: 2, d: [3, 4] },
};

const cloned = deepClone(original);

console.log(cloned); // { a: 1, b: { c: 2, d: [3, 4] } }
console.log(cloned.b === original.b); // false (вложенный объект скопирован)
console.log(cloned.b.d === original.b.d); // false (вложенный массив скопирован)
