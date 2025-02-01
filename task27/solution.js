const reverseNumber = (nums) => {
    nums = nums.toString();
   const res = nums.split('').reduceRight((acc, cur) => {
        return acc += !isNaN(Number(cur)) ? cur :''
    },'')

    return nums < 0 ? Number(-res) : Number(res);
}


 function reverseNumber3(num) {
     const reversed = parseInt(Math.abs(num).toString().split('').reverse().join(''));
     return num < 0 ? -reversed : reversed;
 }

// Тестовые данные
 console.log(reverseNumber1(-456)); // -654

console.log(reverseNumber(123)); // 321
console.log(reverseNumber(1000)); // 1
console.log(reverseNumber(0)); // 0
