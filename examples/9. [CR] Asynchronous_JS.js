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
//We have arrays delays of delays in ms. Show in console numbers from 0 to delays.length-1
//with corresponding dalay.Use function delay for creating of Promises in your solution
//For example:
//Test	let delays = [300, 200, 100, 150, 500]
//Result   2 3 1 0 4

//const delay = (i, time) =>
new Promise((resolve) => setTimeout(() => resolve(i), time));

//let delays = [300, 200, 100, 150, 500];

function showNumbersWithDelay(delays) {
  let promises = delays.map((time, index) => delay(index, time));

  promises.forEach((promise) => {
    promise.then((result) => console.log(result));
  });
}

showNumbersWithDelay(delays);

//Пояснення:
//1.Функція delay: Приймає індекс i та час затримки time, створює новий проміс, який вирішується після затримки в time мілісекунд і повертає індекс i.
//2.Масив delays: Містить затримки в мілісекундах.
//3.Функція showNumbersWithDelay:
//-Використовує Array.prototype.map для створення масиву промісів, де кожен проміс буде вирішуватись після відповідної затримки.
//-Використовує Array.prototype.forEach для обробки кожного промісу. Коли проміс вирішується, виводиться його результат в консоль.
//Цей код виведе індекси масиву delays у порядку, відповідному до часу затримки для кожного індексу.

//////////////////////### 5 ###////////////////////////////////////
//We have arrays delays of delays in ms. Show in console numbers from 0 to delays.length-1 with corresponding
//dalay BUT show numbers in correct turn.It means that first you need show 0 after delay delays[0] then
//show 1 after additional delay delays[1] and so on.Use function delay for creating of Promises in your solution
//For example:        let delays = [300, 200, 100, 150, 500]
//Test	Result        0 1 2 3 4

const delay = (i, time) =>
  new Promise((resolve) => setTimeout(() => resolve(i), time));

let delays = [300, 200, 100, 150, 500];

function showNumbersWithDelay(delays) {
  let promise = Promise.resolve();

  delays.forEach((time, index) => {
    promise = promise
      .then(() => delay(index, time))
      .then((result) => console.log(result));
  });
}

showNumbersWithDelay(delays);

//Пояснення:
//1.Функція delay: Приймає індекс i та час затримки time, створює новий проміс, який вирішується після затримки в time мілісекунд і повертає індекс i.
//2.Масив delays: Містить затримки в мілісекундах.
//3.Функція showNumbersWithDelay:
//-Створює початковий Promise.resolve(), який використовується для початку ланцюжка промісів.
//-Використовує Array.prototype.forEach для ітерації по масиву затримок.
//-Для кожної затримки додається новий проміс у ланцюжок, який викликає функцію delay з відповідним індексом та часом затримки.
//-Коли проміс вирішується, виводиться його результат в консоль.
//Цей код забезпечує, що числа будуть виводитися в правильному порядку з відповідною затримкою між кожним числом.
