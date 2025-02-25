// 1 task 
// function findMinMax(arr) {
//     if (!Array.isArray(arr) || arr.length === 0) {
//         throw new Error("Вхідні дані мають бути непорожнім масивом чисел.");
//     }

//     let min = Math.min(...arr);
//     let max = Math.max(...arr);

//     return { min, max };
// }

// const numbers = [1, 10, -3, 7, 25, 0];
// const result = findMinMax(numbers);
// console.log("Мінімальне число:", result.min);
// console.log("Максимальне число:", result.max);






// 1.2
// function compareObjects(obj1, obj2) {
//     const keys1 = Object.keys(obj1);
//     const keys2 = Object.keys(obj2);

//     if (keys1.length !== keys2.length) {
//         return false; // Об'єкти мають різну кількість властивостей
//     }

//     return keys1.every(key => obj2.hasOwnProperty(key) && obj1[key] === obj2[key]);
// }

// const objA = { name: "Назар", age: 18, city: "Чернівці" };
// const objB = { name: "Іван", age: 25, city: "Київ" };
// const objC = { name: "Марія", age: 30, city: "Львів" };
// const objD = { name: "Назар", age: 18, city: "Чернівці" };


// console.log(compareObjects(objA, objB));
// console.log(compareObjects(objB, objC));
// console.log(compareObjects(objA, objD));






// 2 task

// function isInRange(num, min, max) {
//     return num >= min && num <= max;
// }

// console.log(isInRange(10, 5, 15)); // true (число 10 у діапазоні 5-15)
// console.log(isInRange(3, 5, 15));  // false (число 3 поза діапазоном)
// console.log(isInRange(20, 5, 15)); // false (число 20 поза діапазоном)


// //2.1

// function toggleState(state) {
//     return !state;
// }

// // Приклад використання:
// let isActive = true;
// console.log(isActive); // true
// isActive = toggleState(isActive);
// console.log(isActive); // false
// isActive = toggleState(isActive);
// console.log(isActive); // true (знову змінили)



// 3 task




