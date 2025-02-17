const numbers = [7, 14, 21, 28, 35];
const index = numbers.findIndex(number => number % 7 === 0 && number > 20);
console.log(index);
