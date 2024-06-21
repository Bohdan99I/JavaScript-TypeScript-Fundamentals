////////////////### 1 ###//////////////////////////////
//Write the sumSliceArray(arr, first, second) function, which takes the array and two numbers
//(first and second) - the positions of the array elements that must be added.For example,
//if you entered 3 and 5, the 3rd and 5th elements are added.
//The function should throw exceptions if non - numbers are entered, and if one or both of the
//numbers are larger or smaller than the length of the array.Use the appropriate error types in each case.

function sumSliceArray(arr, first, second) {
  if (typeof first !== "number" || typeof second !== "number") {
    throw new TypeError("Both positions must be numbers.");
  }

  if (first < 1 || second < 1 || first > arr.length || second > arr.length) {
    throw new RangeError("Positions must be within the range of the array.");
  }

  return arr[first - 1] + arr[second - 1];
}

// Examples
const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(sumSliceArray(arr, 3, 5)); // 8

try {
  const arr = [1, 2, 3, 4, 5, 6, 7];
  sumSliceArray(arr, 8, "five");
} catch (e) {
  console.log("Error"); // Error
}

//У цій функції sumSliceArray:

//Спочатку перевіряється, чи є обидва індекси числами.
//Потім перевіряється, чи входять обидва індекси в допустимий діапазон масиву.
//Якщо обидві умови виконуються, то функція повертає суму елементів масиву, розташованих на зазначених позиціях.
//Якщо хоча б одна з умов не виконується, відповідне виключення кидається з відповідним типом помилки (TypeError або RangeError).

/////////////////////////////### 2 ###///////////////////////

//Create the checkAge() function that asks the user name, then age, and then status (admin, moderator, user) and generate an error if:
//User age is less than 18 or more than 70 years (RangeError type error)
//The user has not entered any data in any field (Error type with the message 'The field is empty!')
//The wrong word was entered in the status field (EvalError error type)
//A non-numeric value is entered in the age field (TypeError error type)
//In all other cases, the user will get access to watching the movie (display a modal window with a message 'You can watch a movie!').

function checkAge() {
  const name = prompt("Enter your name:");
  const age = prompt("Enter your age:");
  const status = prompt("Enter your status (admin, moderator, user):");

  // Check if any field is empty
  if (!name || !age || !status) {
    throw new Error("The field is empty!");
  }

  // Check if age is a number
  const ageNum = Number(age);
  if (isNaN(ageNum)) {
    throw new TypeError("Age must be a number");
  }

  // Check if age is in the valid range
  if (ageNum < 18 || ageNum > 70) {
    throw new RangeError("Age must be between 18 and 70");
  }

  // Check if status is valid
  const validStatuses = ["admin", "moderator", "user"];
  if (!validStatuses.includes(status.toLowerCase())) {
    throw new EvalError("Invalid status");
  }

  // If all checks pass
  alert("You can watch a movie!");
}

// Examples for testing
function setInputValues(name, age, status) {
  window.prompt = (promptText) => {
    if (promptText === "Enter your name:") return name;
    if (promptText === "Enter your age:") return age;
    if (promptText === "Enter your status (admin, moderator, user):")
      return status;
  };
}

// Example 1
setInputValues("Bob", "18", "user");
try {
  checkAge(); // Should display alert: 'You can watch a movie!'
} catch (e) {
  console.log(e.name);
}

// Example 2
setInputValues("Bob", "ten", "user");
try {
  checkAge();
} catch (e) {
  console.log(e.name); // Should display 'TypeError'
}

// Example 3
setInputValues("Bob", "22", "guest");
try {
  checkAge();
} catch (e) {
  console.log(e.name); // Should display 'EvalError'
}

//Пояснення:
//Функція checkAge спочатку запитує у користувача ім'я, вік та статус.
//Виконується перевірка на порожні поля, якщо хоча б одне з полів порожнє, кидається помилка Error.
//Перевіряється, чи є вік числовим значенням. Якщо це не так, кидається помилка TypeError.
//Перевіряється, чи входить вік у допустимий діапазон від 18 до 70 років. Якщо ні, кидається помилка RangeError.
//Перевіряється статус користувача на відповідність одному з допустимих значень. Якщо статус не відповідає жодному з них, кидається помилка EvalError.
//Якщо всі перевірки проходять успішно, користувач отримує доступ до перегляду фільму з допомогою вікна з повідомленням.
//Для тестування використовуються приклади з функцією setInputValues, яка встановлює значення для prompt.

///////////////////### 3 ###/////////////////////////
//Implement the calcRectangleArea(width, height) function, which takes 2 parameters, the rectangle width
//and height, and calculates its area.Provide termination of program execution and generation of
//an exception if non - numeric parameters are passed to the function.
//Write code that uses this function and handles possible exceptions.

function calcRectangleArea(width, height) {
  // Перевірка, чи параметри є числовими значеннями
  if (typeof width !== "number" || typeof height !== "number") {
    throw new Error("Parameters must be numbers");
  }
  // Обчислення площі прямокутника
  return width * height;
}

// Приклад використання
try {
  console.log(calcRectangleArea(2, 7)); // 14
} catch (e) {
  console.log(e.name);
}

try {
  calcRectangleArea("two", "seven");
} catch (e) {
  console.log(e.name); // Error
}

try {
  calcRectangleArea("2", "7");
} catch (e) {
  console.log(e.name); // Error
}

//Пояснення:
//У функції calcRectangleArea перевіряється, чи є параметри числовими значеннями.
//Якщо будь - який з параметрів не є числом, генерується помилка типу Error.
//Обробка можливих виключень виконана за допомогою try...catch. Якщо відбувається
//помилка, вікно сповіщень(alert) відображає відповідне повідомлення або тип помилки.
//Уточнення:
//Використовуйте рядкові значення, які можна перетворити на числа ("2" та "7"), як допустимі параметри.
//Впевніться, що у функції обробляються помилки типу Error.

/////////////////### 4 ###//////////////////
//Implement the getUser(id) function that takes a user id as a parameter and returns an object that
//contains the value of the passed id.The function also throws an error if a negative id is entered.
//Implement the getUsers(ids) function, which takes an array of user ids as a parameter, checks each
//element of the ids array for correctness using the getUser function and displays an error message
//in the event of an exceptional situation.The getUsers function returns an array of objects where
//the key values are valid ids elements.

//Функція getUser(id)
//Ця функція:
//Приймає параметр id.
//Перевіряє, чи id є від'ємним. Якщо так, вона викидає помилку.
//Повертає об'єкт з властивістю id.
//Ось реалізація:
function getUser(id) {
  if (id < 0) {
    throw new Error("ID не може бути від'ємним");
  }
  return { id };
}

//Функція getUsers(ids)
//Ця функція:
//Приймає масив ids з ідентифікаторами користувачів в якості параметра.
//Ітерується по кожному id у масиві.
//Викликає getUser(id) для кожного id, щоб отримати відповідний об'єкт.
//Обробляє будь-які винятки, які виникають у getUser(id) (що вказує на від'ємний id) і обробляє їх.
//Збирає дійсні об'єкти користувачів в масив і повертає цей масив.
//Ось реалізація:
function getUsers(ids) {
  const result = [];
  for (let id of ids) {
    try {
      const user = getUser(id);
      result.push(user);
    } catch (error) {
      // Обробка помилки згідно з вимогами (використовуючи alert)
      alert(error.message); // Припускаючи, що повідомлення про помилку має бути показане через alert
    }
  }
  return result;
}

//Ось як ми можемо перевірити ці функції за наданими прикладами:
console.log(getUser(5)); // Виведе: { id: 5 }

console.log(getUsers([7, -12, 44, 22]));
// Повинно показати alert "ID не може бути від'ємним"
// Виведе: [ { id: 7 }, { id: 44 }, { id: 22 } ]

////////////### 5 ###///////////////////////////////////////////
//Create the MonthException class whose constructor takes a message parameter and sets the name
//field with the 'MonthException' value.
//Implement the showMonthName(month) function, where the month parameter is the sequential
//number of the month of the year.The function returns the name of the month according to
//the entered month number.In case of incorrect input, an exception is thrown in the form
//of an object of the MonthException class with the message 'Incorrect month number'.
//Write code that uses this function, provide handling of possible exceptions.
//Клас MonthException
class MonthException extends Error {
  constructor(message) {
    super(message);
    this.name = "MonthException";
  }
}

//Функція showMonthName(month)
//Ця функція повертає назву місяця за його порядковим номером
function showMonthName(month) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  if (typeof month !== "number" || month < 1 || month > 12 || isNaN(month)) {
    throw new MonthException("Incorrect month number");
  }

  return months[month - 1];
}
