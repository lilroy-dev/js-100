const replaceSymbol = (str, symbl, rpl, rever = false, index = 0, newStr = '') => {
    // Найти условия выхода из функции
    if (index === str.length && !rever) return newStr
    if (index < 0 && rever) return newStr
    if (str[index] === symbl){
        newStr = `${newStr}${rpl}`
        // newStr[index] = rpl
    } else {
        newStr = `${newStr}${str[index]}`
        // newStr[index] = str[index]
    }

    return replaceSymbol(str, symbl, rpl, rever, index + 1, newStr)
}

// "Hello"[2]
console.log(replaceSymbol('Hello, World', 'l', 'L', true, ))