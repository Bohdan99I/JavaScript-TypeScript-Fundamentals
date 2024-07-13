//////////////////////### 1 ###////////////////////////////////////
//Implement a function getPromise(message, delay) that takes a text message
//and an integer delay value(in ms).Function should return a Promise that waits
//a given amount of time(using the delay argument) and being resolved with a message.

function getPromise(message, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(message);
    }, delay);
  });
}

// Тестовий приклад
getPromise("test promise", 200).then((data) => {
  console.log(data); // "test promise"
});

//У цьому коді:
///Функція getPromise приймає два аргументи: message та delay.
///Створюється новий проміс, який викликає функцію resolve з повідомленням після заданої затримки delay за допомогою функції setTimeout.
///Використовується метод then для обробки вирішеного значення промісу і виведення його в консоль.
//Цей код правильно реалізує затримку і повертає повідомлення через вказаний проміжок часу.

//////////////////////### 2 ###////////////////////////////////////
//Implement a function calcArrProduct(arr) that takes an array of numbers.
//Function should return a Promise which being resolved with the product of
//the array elements, if they are of type Numbers, or rejected with the
//message "Error! Incorrect array!" if at least 1 element of the array is not a number.

function calcArrProduct(arr) {
  return new Promise((resolve, reject) => {
    if (arr.every((element) => typeof element === "number")) {
      const product = arr.reduce((acc, num) => acc * num, 1);
      resolve(product);
    } else {
      reject("Error! Incorrect array!");
    }
  });
}

// Тестові приклади
const randomValue = Math.floor(Math.random() * 10) + 1;
calcArrProduct([1, 2, 3])
  .then((product) => {
    console.log(product); // 6
    return calcArrProduct([1, 20, randomValue, 0.5]);
  })
  .then((product) => {
    console.log(product === randomValue * 10); // true
    return calcArrProduct([5, "user2", 7, 12]);
  })
  .then((product) => {
    console.log(product);
  })
  .catch((error) => console.log(error)); // Error! Incorrect array!

//У цьому коді:
//1.Функція calcArrProduct приймає масив arr.
//2.Вона повертає новий проміс.
//3.Використовується метод every, щоб перевірити, чи всі елементи масиву є числами.
//4.Якщо всі елементи масиву є числами, обчислюється їх добуток за допомогою методу reduce і проміс вирішується з цим значенням.
//5.Якщо хоча б один елемент масиву не є числом, проміс відхиляється з повідомленням "Error! Incorrect array!".

//////////////////////### 3 ###////////////////////////////////////
//Complete the following asynchronous promise chain:
//For example:
//Test	Input	Result
//it will input 3 in prompt()
//[3]          3
//it will input "text" in prompt(), after that it will input 45 in prompt()
//["text", 45]       45

new Promise(function (resolve, reject) {
  // Запитуємо користувача ввести число
  let userInput = prompt("Please enter a number:");
  let number = Number(userInput);

  // Перевіряємо, чи є введене значення числом
  if (!isNaN(number)) {
    resolve(number);
  } else {
    reject("Invalid input");
  }
})
  .catch(function (error) {
    return new Promise(function (resolve, reject) {
      function askForNumber() {
        let userInput = prompt("Invalid input. Please enter a number:");
        let number = Number(userInput);

        if (!isNaN(number)) {
          resolve(number);
        } else {
          askForNumber();
        }
      }

      askForNumber();
    });
  })
  .then(function (result) {
    // Виводимо число в консоль
    console.log(result);
  });

//У цьому коді:

//1. Перша обіцянка (Promise):
//-Запитуємо користувача ввести число за допомогою prompt().
//-Перетворюємо введене значення на число за допомогою Number().
//-Якщо введене значення є числом (не NaN), викликаємо resolve(number).
//-Якщо введене значення не є числом (NaN), викликаємо reject("Invalid input").

//2.Обробник помилки (catch):
//-Повертає нову обіцянку, яка буде запитувати користувача ввести число до тих пір, поки він не введе правильне число.
//-Внутрішня функція askForNumber викликається рекурсивно до тих пір, поки користувач не введе число.

//3.Обробник успіху (then):
///-Виводить отримане число в консоль.

//////////////////////### 4 ###////////////////////////////////////

//////////////////////### 5 ###////////////////////////////////////
