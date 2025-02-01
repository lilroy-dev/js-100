const isArraySpecial = function(nums) {
    // Если массив содержит только один элемент, он всегда специальный
    if (nums.length <= 1) return true;

    // Проверяем каждую пару соседних элементов
    for (let i = 0; i < nums.length - 1; i++) {
        // Если два соседних числа имеют одинаковую четность, возвращаем false
        if (nums[i] % 2 === nums[i + 1] % 2) {
            return false;
        }
    }

    // Если все проверки пройдены успешно, возвращаем true
    return true;
};

const arr261 = [1]; // true
const arr262 = [2,1,4]; //true
const arr263 = [4,3,1,6]; //false


isArraySpecial(arr261);
isArraySpecial(arr262);
isArraySpecial(arr263);
