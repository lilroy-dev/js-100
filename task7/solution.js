function reverseString2(str) {
   const arrWords = str.split('');
   const reversedArr = [];
    for (let i = arrWords.length - 1; i >= 0; i--) {
        reversedArr.push(arrWords[i]);
    }

    return reversedArr.join('');
}

function reverseString(str) {
  return  str.split('').reverse().join('');
}

console.log(reverseString("hello"));
// Ожидаемый результат: "olleh"

console.log(reverseString("JavaScript"));
// Ожидаемый результат: "tpircSavaJ"
