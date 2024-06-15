//////////////###   1   ###//////////////////////////////////
//Write a function calc(a, b, op) that performs one of the arithmetic operations on numbers a and b and returns the result.
//The type of operation is determined by the integer op:
//1 - subtraction,
//2 - multiplication,
//3 - division,
//other values - addition.

function calc(a, b, op) {
  if (op === 1) {
    return a - b;
  } else if (op === 2) {
    return a * b;
  } else if (op === 3) {
    return a / b;
  } else {
    return a + b;
  }
}
//Ось як можна реалізувати функцію calc, яка виконує
//арифметичні операції на основі значення 'op'.
//Пояснення:

//Якщо op дорівнює 1, функція виконує віднімання.
//Якщо op дорівнює 2, функція виконує множення.
//Якщо op дорівнює 3, функція виконує ділення.
//Для всіх інших значень op, функція виконує додавання.
//Приклади використання:
console.log(calc(10, 3, 1)); // Виведе 7
console.log(calc(10, 3, 15)); // Виведе 13

//////////////////###   2   ###//////////////////////
//Write a function createArray(start, end) that takes two parameters as input:
//the starting value
//the ending value.
//The function should return an array with a range of these values (implement it with numeric values only).

function createArray(start, end) {
  let array = [];
  for (let i = start; i <= end; i++) {
    array.push(i);
  }
  return array;
}
//Ця функція ініціалізує порожній масив array, а потім використовує цикл for, щоб додати всі значення від start до end включно до масиву.
//Приклади використання:
console.log(createArray(2, 9)); // Виведе [2, 3, 4, 5, 6, 7, 8, 9]

////////////////////####  3  ###///////////////////////
//Write a function randArray(k) that will populate an array k with random integers.
//The random numbers are generated from the range 1-500.
//Example:randArray(5);  // [399,310,232,379,40]

function randArray(k) {
  let array = [];
  for (let i = 0; i < k; i++) {
    array.push(Math.floor(Math.random() * 500) + 1);
  }
  return array;
}
//Ця функція ініціалізує порожній масив array, а потім використовує цикл for, щоб додати k випадкових цілих чисел у діапазоні від 1 до 500.
//Приклади використання:
console.log(randArray(5)); // Приклад: [399, 310, 232, 379, 40]
console.log(randArray(10)); // Приклад: [120, 221, 345, 123, 78, 234, 489, 321, 67, 89]

///////////////###   4   ###///////////////////////
//Write a function findUnique(arr) that takes an array arr and checks the uniqueness of its elements.
//If all elements of the array are unique (have no duplicates), the function will return true;
//otherwise, it will return false.

function findUnique(arr) {
  // Створюємо множину з елементів масиву
  const uniqueElements = new Set(arr);
  // Порівнюємо розмір множини з довжиною масиву
  return uniqueElements.size === arr.length;
}
//Ця функція створює новий Set з елементів масиву. Оскільки множина не може містити дубльованих значень,
//розмір множини буде дорівнювати кількості унікальних елементів у масиві.Якщо розмір множини дорівнює
//довжині масиву, це означає, що всі елементи масиву унікальні.
//Приклади використання:
console.log(findUnique([1, 2, 3, 4, 5])); // true
console.log(findUnique([1, 2, 2, 4, 5])); // false
console.log(findUnique(["a", "b", "c", "d", "e"])); // true
console.log(findUnique(["a", "b", "c", "d", "a"])); // false

///////////////////###   5   ###//////////////////////////////////
//Given two integers, a and b (a < b).
//Print all integers from a to b inclusive, such that 'a'
//is printed once, 'a + 1' is printed twice, and so on.

function getNumbers(a, b) {
  let result = [];
  for (let i = a; i <= b; i++) {
    for (let j = 0; j < i - a + 1; j++) {
      result.push(i);
    }
  }
  console.log(result.join(","));
}
// Приклад використання:
getNumbers(1, 3);

//Пояснення:

//Ініціалізуємо порожній масив result для зберігання чисел.
//Зовнішній цикл проходить від i = a до i = b.
//Внутрішній цикл виконується i - a + 1 разів, додаючи значення i в масив result під час кожної ітерації.
//Нарешті, використовуємо join(',') для перетворення масиву в рядок, розділений комами, і виводимо його.
//Коли ви викликаєте getNumbers(1, 3), очікуваний результат буде:
//1,2,2,3,3,3

/////////////###   6   ###/////////////////////
//Write a function named compact(arr) that takes an array as input and returns a new array with unique values.
//Do not use console.log in your solutions

function compact(arr) {
  return [...new Set(arr)];
}

// Приклад використання:
console.log(compact([5, 7, 4, 5, 6, 7, 13])); // [5, 7, 4, 6, 13]

//Щоб створити функцію compact, яка приймає масив arr і повертає новий масив з унікальними значеннями,
//можна скористатися множиною(Set) для видалення дублікатів.
//Пояснення:
//new Set(arr) створює множину з масиву arr, яка автоматично видаляє всі дублікати.
//[...] оператор розширення використовується для перетворення множини назад в масив.

///////////////###   7   ###///////////////////////////
//There is an array [5, "Limit", 12, "a", "3", 99, 2, [2, 4, 3, "33", "a", "text"], "strong", "broun"].
//Write a function that will output new arrays consisting of the data from the initial array, but with
//data of the same type(do not convert string to a number, even if it contains only a number).
//let arr = [5, “Limit”, 12, “a”, “3”, 99, 2, [2, 4, 3, “33”, “a”, “text”], “strong”, “broun”];
//let arrNew = funcName(arr); /* [ [5, 12, 99, 2, 2, 4, 3], [”Limit”, “a”, “3”, “33”, “a”, “text”, “strong”, “broun” ] */

function funcName(arr) {
  let numbers = [];
  let strings = [];

  function separateElements(array) {
    for (let element of array) {
      if (Array.isArray(element)) {
        separateElements(element);
      } else if (typeof element === "number") {
        numbers.push(element);
      } else if (typeof element === "string") {
        strings.push(element);
      }
    }
  }

  separateElements(arr);
  return [numbers, strings];
}

// Приклад використання:
const array = [
  5,
  "Limit",
  12,
  "a",
  "3",
  99,
  2,
  [2, 4, 3, "33", "a", "text"],
  "strong",
  "broun",
];
console.log(funcName(array));

//Цей код визначає функцію funcName, яка приймає масив як аргумент. Вона використовує допоміжну функцію
//separateElements, щоб рекурсивно пройти по масиву і будь - яких вкладених масивах, розділяючи
//елементи на масиви numbers і strings залежно від їх типу.
//Ось як працює рішення:
//1.Основна функція funcName ініціалізує два порожні масиви: numbers та strings.
//2.Допоміжна функція separateElements визначена для ітерації по елементах масиву.
//3.Якщо елемент є масивом, separateElements викликається рекурсивно для цього вкладеного масиву.
//4.Якщо елемент є числом, він додається до масиву numbers.
//5.Якщо елемент є рядком, він додається до масиву strings.
//6.Після обробки всіх елементів, funcName повертає масив, що містить масиви numbers та strings.
