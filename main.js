//Задание_1
/*const num = 50;
if (num >= 0 && num <= 100) {
  console.log("Число в дипазоне чисел от 0 до 100");
} else {
  console.log("Число вне диапазона чисел от 0 до 100");
}*/

//Задание_2
/*const engineers = {
  Den: 1000,
  Matt: 5000,
  Steve: 2000,
};
for (const key in engineers) {
  console.log(`Заработная плата ${key} составляет ${engineers[key]} рублей`);
}*/

//Задание_3
/*const elements = ["Helen", "Anrew", "Alex", "Ivan", "Egor"];
for (let i = 1; i < elements.length; i += 2) {
  console.log(elements[i]);
}*/

//Задание_4
/*let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70];
for (let i = 0; i < numbers.length; i++) {
  console.log(`Индексу ${i} соответсвует число ${numbers[i]}`);
}*/

//Задание_5
/*let question = [
  {
    question: "What's the cureency of the USA",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0,
  },
  {
    question: "Where was the American Declaration of Independence signet?",
    choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
    corAnswer: 0,
  },
];
for (let i = 0; i < question.length; i++) {
  question[i].userAnswer = null;
}
console.log(question);*/

//Задание_6

//1
//let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70];
//for (let elements of numbers) {
//  console.log(elements);
//}

//1.1
//let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70];
//for (let i = 0; i < numbers.length; i++) {
//  console.log(numbers[i]);
//}

//2
/*let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70];
let summ = 0;
for (let i = 0; i < numbers.length; i++) {
  summ += numbers[i];
}
console.log(summ);*/

//3
/*let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70];
summ = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    summ += numbers[i];
  }
}
console.log(summ);*/

//4
/*let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70];
max = numbers[0];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
}
console.log(max);*/

//5
/*let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70];
let max = 70;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === max) {
    console.log(i);
  }
}*/

//Задание_7
/*let arr = [5, 4, 3, -3, -10, -1, 8, -20, 0];
let newArr = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0) {
    newArr.push(arr[i]);
  }
}
console.log(newArr);*/

//Задание_8
/*let nums = [5, 4, 3, 8, 0];
let limit = 5;
let newNums = [];
for (let i = 0; i < nums.length; i++) {
  if (nums[i] >= limit) {
    newNums.push(nums[i]);
  }
}
console.log(newNums);*/

//задание_9
/*const users = [
  { name: "Vasya", age: 23 },
  { name: "Olya", age: 12 },
  { name: "Anna", age: 22 },
  { name: "Alex", age: 18 },
  { name: "Valery", age: 8 },
];
for (let i = 0; i < users.length; i++) {
  if (users[i]["age"] > 15) {
    console.log(users[i]["name"]);
  }
}*/

//Задание_10
/*let vegetables = ["морковь", "баклажан", "репа", "топинамбур"];
let newVegetables = [];
for (let i = 0; i < vegetables.length; i++) {
  newVegetables.push({ [vegetables[i]]: vegetables[i].length });
}
console.log(newVegetables);
for (let num = 0; num < newVegetables.length; num++) {
  let string = `${newVegetables[num]} - ${newVegetables[num].length}`;
  console.log(string);
}*/
