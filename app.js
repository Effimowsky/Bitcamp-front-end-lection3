// 51.დაწერეთ პროგრამა, რომელიც ბეჭდავს ლუწ რიცხვებს 1-დან 20-მდე for loop-ის გამოყენებით.
// Write a program that prints the even numbers between 1 and 20 using a for loop.

// 1
// for (let i = 0; i <= 20; i += 2) {
//   console.log(i);
// }

// 2
// for (let i = 0; i < 20; i += 2) {
//   if (i % 2 !== 0) {
//     continue;
//   }
//   console.log(i);
// }

// // 52.დაწერეთ პროგრამა, რომელიც იღებს რიცხვს ინფუთის სახით და ბეჭდავს კვირის შესაბამის დღეს
// switch/case-ის გამოყენებით.მაგალითად, თუ შეიყვანენ  1-ს, მან უნდა დაბეჭდოს "კვირა".
// // Write a program that takes a number as input and prints the corresponding day of the week using as
// witch/case statement. For example, if the input is 1, it should print "Sunday."

// let num = Number(prompt("რიცხვი  "));

// switch (num) {
//   case 1:
//     console.log("კვირა");
//     break;
//   case 2:
//     console.log("ორშაბათი");
//     break;
//   case 3:
//     console.log("სამშაბათი");
//     break;
//   case 4:
//     console.log("ოთხშაბათი");
//     break;
//   case 5:
//     console.log("ხუთშაბათი");
//     break;
//   case 6:
//     console.log("პარასკევი");
//     break;
//   case 7:
//     console.log("შაბათი");
//     break;
//   default:
//     console.log("არ არის კვირის დღე");
// }

// 53.დაწერეთ პროგრამა, რომელიც სთხოვს მომხმარებელს შეიყვანოს რიცხვი და დაბეჭდოს "Hello!" იმდენჯერ
// რამდენსაც უდრის ეს  შეყვანილი რიცხვი.
// While Loop:
// Write a program that asks the user to enter a number and keeps printing "Hello!"
// that many times using a while loop.

// let num = Number(prompt("რიცხვი "));

// for (let i = 0; i < num; i++) {
//   console.log("Hello");
// }

// 54.დაწერეთ პროგრამა, რომელიც გამოთვლის რიცხვების ჯამს 1-დან 100-მდე for loop-ის გამოყენებით და დაბეჭდავს შედეგს.
// For Loop:
// Write a program that calculates the sum of numbers from 1 to 100 using a for loop and prints the result.
// let num = 0;
// for (let i = 0; i < 100; i++) {
//   num += i;
// }
// console.log(num);

// 55.დაწერეთ პროგრამა, რომელიც ინფუთის სახით მიიღებს თვის რიცხვს (1 იანვრისთვის, 2 თებერვლისთვის და ა.შ.) და
// ამობეჭდავს დღეების რაოდენობას ამ თვეში switch/case-ის გამოყენებით.
// Switch/Case:
// Write a program that takes a month number as input (1 for January, 2 for February, etc.)
// and prints the number of days in that month using a switch/case statement.

// let num = Number(prompt("რიცხვი "));

// switch (num) {
//   case 1:
//     console.log("31");
//     break;
//   case 2:
//     console.log("28");
//     break;
//   case 3:
//     console.log("31");
//     break;
//   case 4:
//     console.log("30");
//     break;
//   case 5:
//     console.log("31");
//     break;
//   case 6:
//     console.log("30");
//     break;
//   case 7:
//     console.log("31");
//     break;
//   case 8:
//     console.log("31");
//     break;
//   case 9:
//     console.log("30");
//     break;
//   case 10:
//     console.log("31");
//     break;
//   case 11:
//     console.log("30");
//     break;
//   case 12:
//     console.log("31");
//     break;
//   default:
//     console.log("არ არის თვე");
// }

// 56.დაწერეთ პროგრამა, რომელიც სთხოვს მომხმარებელს გამოიცნოს საიდუმლო რიცხვი 1-დან 10-მდე.
// განაგრძეთ გამოცნობის მოთხოვნა, სანამ ისინი სწორად გამოიცნობენ, while loop-ის გამოყენებით.

// While Loop:
// Write a program that asks the user to guess a secret number between 1 and 10.
// Keep asking for guesses until they guess correctly using a while loop.

// let num = Number(prompt("რიცხვი "));
// let secretNumber = 4;
// while (secretNumber !== num) {
//   num = Number(prompt("რიცხვი "));
// }
// console.log("სწორია ");

// 57.დაწერეთ პროგრამა, რომელიც მიიღებს შეფასებას (A, B, C, D ან F) ინფუთის სახით და დაბეჭდავს შესაბამის შეტყობინებას switch/case-ის გამოყენებით.
// მაგალითად, თუ ინფუთი არის "A", უნდა დაბეჭდოს "შესანიშნავი!"

// Switch/Case:
// Write a program that takes a grade (A, B, C, D, or F) as input and prints a corresponding message using a
// switch/case statement. For example, if the input is "A," it should print "Excellent!"

// let grade = prompt("შეფასება ").toUpperCase();

// switch (grade) {
//   case "A":
//     console.log("შესანიშნავი");
//     break;
//   case "B":
//     console.log("ძალიან კარგი");
//     break;
//   case "C":
//     console.log("კარგი");
//     break;
//   case "D":
//     console.log("ნორმალური");
//     break;
//   case "F":
//     console.log("ცუდი");
//     break;
//   default:
//     console.log("ტესტი არ უწერია");
// }

// 58.დაწერეთ პროგრამა, რომელიც მოუწოდებს მომხმარებელს შეიყვანოს პაროლი. პროგრამამ უნდა
// გააგრძელოს პაროლის მოთხოვნა სწორი პაროლის შეყვანამდე.
// სწორი პაროლის შეყვანის შემდეგ აჩვენეთ წარმატების შეტყობინება. სწორი პაროლი არის "12345".

// While Loop:
// Write a program that prompts the user to enter a password.
// The program should keep asking for the password until the correct password is entered.
// Once the correct password is entered, display a success message. The correct password is "12345".

// let correctPassword = 12345;
// let password = prompt("პაროლი- ");

// while (password !== "12345") {
//   password = prompt("პაროლი- ");
// }
// console.log("სწორია");
