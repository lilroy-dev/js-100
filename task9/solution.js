function isPalindrome2(text) {
    const currentText = text.toLowerCase().replace(/\s+/g, '');
    const newStr = currentText.split('').reverse().join('');
    return newStr === currentText;
}

function isPalindrome2(text) {
    const currentText = text.toLowerCase().replace(/\s+/g, '');
    let newStr = '';
    for (let i = currentText.length-1; i >= 0; i--) {
        newStr += currentText[i]
    }

    return newStr === currentText;
}

function isPalindrome4(text) {
    const currentText = text.toLowerCase().replace(/\s+/g, '');
    const newStr = currentText.split('').reduceRight((acc, cur) => {
       return acc += cur
    },'')
    return newStr === currentText;
}

function isPalindrome(text) {
    const currentText = text.toLowerCase().replace(/\s+/g, '');
    let left = 0;
    let right = currentText.length - 1;

    while (left < right) {
        if (currentText[left] !== currentText[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
}

console.log('isPalindrome("madam")',isPalindrome("madam"));
// Ожидаемый результат: true

console.log(isPalindrome("hello"));
// Ожидаемый результат: false

console.log(isPalindrome("A man a plan a canal Panama"));
// Ожидаемый результат: true (игнорируя регистр и пробелы)
