Array.prototype.last = function () {
    if (this.length === 0) {
        return -1; // Возвращаем -1, если массив пуст
    }
    return this[this.length - 1]; // Возвращаем последний элемент
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */
