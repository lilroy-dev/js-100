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


const isArraySpecial2 = nums => !/(00|11)/.test(nums.map($ => $ & 1).join(''));


// Шаги решения:
//     Преобразование чисел в их четность :
//     Используем nums.map($ => $ & 1):
// $ & 1 — побитовая операция "И" с единицей, которая определяет четность числа:
//     Четные числа → 0.
// Нечетные числа → 1.
// Получаем массив из 0 и 1, представляющий четность каждого элемента.
//     Преобразование массива в строку :
//     .join('') преобразует массив [0, 1, 1, 0] в строку '0110'.
//     Поиск одинаковых соседних четностей :
//     /00|11/.test(...) проверяет наличие двух одинаковых соседних символов (00 или 11) в строке:
//     00 — две соседние четные числа.
// 11 — две соседние нечетные числа.
//     Если найдено совпадение, .test() возвращает true.
//     Инверсия результата :
//     ! инвертирует результат:
//     Если есть два одинаковых соседних числа (00 или 11), функция вернет false.
//     Если таких пар нет, функция вернет true.




const arr261 = [1]; // true
const arr262 = [2,1,4]; //true
const arr263 = [4,3,1,6]; //false


isArraySpecial(arr261);
isArraySpecial(arr262);
isArraySpecial(arr263);
