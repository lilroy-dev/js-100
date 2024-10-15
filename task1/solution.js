const alternateCase = (str) => {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (i % 2 !== 0) {
            result += str.charAt(i).toUpperCase();
        } else {
            result += str.charAt(i).toLowerCase();
        }
    }
    return result;
}
alternateCase("javascript");
// Ожидаемый результат: "jAvAsCrIpT"