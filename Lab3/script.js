// task 1
// function fibonacciSum(n) {
//     let a = 0, b = 1, sum = 0, count = 0;

//     while (count <= n) {
//         sum += a;
//         let temp = a + b;
//         a = b;
//         b = temp;
//         count++;
//     }

//     return sum;
// }

// console.log("Сума перших 10 чисел Фібоначчі:", fibonacciSum(10));


// task 2

// function isPrime(num) {
//     if (num < 2) return false;
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) return false;
//     }
//     return true;
// }

// function sumPrimes(limit) {
//     let sum = 0;

//     for (let num = 2; num <= limit; num++) {
//         if (isPrime(num)) {
//             sum += num;
//         }
//     }

//     return sum;
// }

// // Виклик функції для підрахунку суми простих чисел від 1 до 1000
// console.log("Сума всіх простих чисел від 1 до 1000:", sumPrimes(1000));




// task 3

// function getDayOfWeek(number) {
//     switch (number) {
//         case 1:
//             return "Понеділок";
//         case 2:
//             return "Вівторок";
//         case 3:
//             return "Середа";
//         case 4:
//             return "Четвер";
//         case 5:
//             return "П'ятниця";
//         case 6:
//             return "Субота";
//         case 7:
//             return "Неділя";
//         default:
//             return "Некоректне число! Введіть число від 1 до 7.";
//     }
// }

// const userInput = parseInt(prompt("Введіть число від 1 до 7: "), 10);
// console.log(getDayOfWeek(userInput));



//task 4

// function filterOddLengthStrings(strings) {
//     return strings.filter(str => str.length % 2 !== 0);
// }

// const words = ["apple", "banana", "granate", "cherry", "pear", "plum"];
// const oddLengthWords = filterOddLengthStrings(words);
// console.log(oddLengthWords); // Виведе: [ 'apple', 'kiwi', 'pear' ]


// task 5 

// const incrementArray = numbers => {
//     let newArray = [];
//     for (let i = 0; i < numbers.length; i++) {
//         newArray.push(numbers[i] + 1);
//     }
//     return newArray;
// };

// const numbers = [1, 2, 3, 4, 5];
// const incrementedNumbers = incrementArray(numbers);
// console.log(incrementedNumbers); // [2, 3, 4, 5, 6]



// task 6 

function checkSumOrDifference(a, b) {
    return (a + b === 10 || a - b === 10);
}

console.log(checkSumOrDifference(4, 5));  //  ( 4 + 5 = 9,  4 - 5 = -1)
console.log(checkSumOrDifference(10, 0)); //  ( 10 + 0 = 10)
console.log(checkSumOrDifference(0, 10)); //  ( 0 + 10 = 10)
console.log(checkSumOrDifference(20, 10)); //  ( 20 - 10 = 10)
console.log(checkSumOrDifference(-5, 5));  //  (-5 + 5 = 0,  -5 - 5 = -10)

