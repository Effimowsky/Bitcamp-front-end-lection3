// 19.დაწერეთ პროგრამა რომელიც კონსოლში გამოპრინტავს რიცხვებს 0 დან 10 ის ჩათვლით.
// Print the numbers from 1 to 10 in the console.

// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// 20.დაწერეთ პროგრამა, რათა შეამოწმოთ რიცხვი მარტივია თუ არა.
// Write a program to check if a number is prime or not.

// function isPrime(num) {
//   if (num <= 1) {
//     return false;
//   }
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(isPrime(2));

// 21.დაწერეთ პროგრამა სტრიქონის შებრუნებისთვის.
// Write a program to reverse a string.

// function string_reverse(str) {
//   return str.split("").reverse().join("");
// }
// console.log(string_reverse("Hello"));

// 22.დაწერეთ პროგრამა, რომ იპოვოთ მასივის ყველა რიცხვის ჯამი.
// Write a program to find the sum of all numbers in an array.

// let array = [1, 2, 3, 4, 15, 61, 7, 14, 10, 16];

// function sum(arr) {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     count += arr[i];
//   }
//   return count;
// }
// console.log(sum(array));

// 23.დაწერეთ პროგრამა მასივში რიცხვების საშუალოს საპოვნელად.
// Write a program to find the average of numbers in an array.

// let array = [1, 5, 7, 10, 15, 25];

// function sum(arr) {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     count += arr[i];
//   }
//   return count / arr.length;
// }
// console.log(sum(array));

// 24.დაწერეთ პროგრამა მასივიდან დუბლიკატების მოსაშორებლად.
// Write a program to remove duplicates from an array.

// let Array = [1, 2, 3, 1, 5];
// let result = removeDuplicates(Array);

// function removeDuplicates(Array) {
//   return [...new Set(Array)];
// }
// console.log(result);

// 25.დაწერეთ პროგრამა რიცხვების მასივის ზრდის მიხედვით დასალაგებლად.
// Write a program to sort an array of numbers in ascending order.

// let Array = [4, 3, 1, 6, 7];

// console.log(Array.sort((b, a) => b - a));

// 26.დაწერეთ პროგრამა მასივში ყველაზე დიდი ელემენტის მოსაძებნად.
// Write a program to find the largest element in an array.

// let array = [2, 5, 11, 6, 7, 9];

// function sorted(array) {
//   let sortedNum = array.sort((a, b) => a - b);
//   return sortedNum[sortedNum.length - 1];
// }
// console.log(sorted(array));

// 27.დაწერეთ პროგრამა მასივში ყველაზე პატარა ელემენტის მოსაძებნად.
// Write a program to find the largest element in an array.

// let array = [2, 5, 11, 6, 7, 9];

// function sorted(array) {
//   let sortedNum = array.sort((b, a) => a - b);
//   return sortedNum[sortedNum.length - 1];
// }
// console.log(sorted(array));

// 28.დაწერეთ პროგრამა, რათა შეამოწმოთ, შეიცავს თუ არა მასივი კონკრეტულ ელემენტს.
// Write a program to check if an array contains a specific element.

// let array = [1, 7, 4, 5, 6];
// let element = 1;
// let result = containsElement(array, element);

// function containsElement(array, element) {
//   return array.includes(element);
// }
// console.log(result);

// 29.დაწერეთ პროგრამა მასივიდან ელემენტის ამოსაღებად.
// Write a program to remove an element from an array.

// let array = [1, 2, 3, 4, "hello", 10];
// array.shift();
// console.log(array);

// 30.დაწერეთ პროგრამა მასივში კონკრეტული ელემენტის გავრცელების რაოდენობის დასათვლელად.
// Write a program to count the number of occurrences of a specific element in an array.

// let array = [1, 2, 2, 2, 3, 4, 4, 5];
// let element = 2;
// let result = countOccurrences(array, element);

// function countOccurrences(array, element) {
//   let count = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === element) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(result);
