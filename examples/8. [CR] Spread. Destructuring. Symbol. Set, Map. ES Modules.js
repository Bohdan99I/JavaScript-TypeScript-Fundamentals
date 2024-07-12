//////////////////////### 1 ###////////////////////////////////////
//Change the code below so that obtain values from object names using destructuring assignment.
//Save properties in the next variables:
///names.first in variable f with default value "Name №1";
///names.second in variable s with default value "Name №2";
///names.third in variable t with default value "Name №3".
// Приклад об'єкта names
let names = { first: "Tom", second: "Sam", third: "Ray" };

// Деструктуризація з значеннями за замовчуванням
let {
  first: f = "Name №1",
  second: s = "Name №2",
  third: t = "Name №3",
} = names;

console.log(names);
console.log(f);
console.log(s);
console.log(t);

// Інший приклад об'єкта names (порожній об'єкт)
names = {};

({ first: f = "Name №1", second: s = "Name №2", third: t = "Name №3" } = names);

console.log(names);
console.log(f);
console.log(s);
console.log(t);

//////////////////////### 2 ###////////////////////////////////////
//You have object data with two properties names and ages.
//names and ages are arrays with 3 elements in each. Using destructuring
//assignment save in variables age1, age2, age3, name1, name2, name3 all values from data object.

let data = {
  names: ["Sam", "Tom", "Ray", "Bob"],
  ages: [20, 24, 22, 26],
};

// Деструктуризація об'єкта зберігаючи змінні
let {
  names: [name1, name2, name3],
  ages: [age1, age2, age3],
} = data;

console.log(data);
console.log(name1); // Sam
console.log(name2); // Tom
console.log(name3); // Ray
console.log(age1); // 20
console.log(age2); // 24
console.log(age3); // 22

//Результати виконання цього коду будуть такими:
{
  names: ["Sam", "Tom", "Ray", "Bob"], ages;
  [20, 24, 22, 26];
}
Sam;
Tom;
Ray;
20;
24;
22;

//////////////////////### 3 ###////////////////////////////////////
//Write function mul(), which takes any number of parameters of different types and returns the product of parameters of type Number.
//If there are no number parameters among the arguments, the 0 should be returned.
//Do not use arguments in your function.

function mul(...args) {
  // Фільтруємо нечислові параметри
  const numbers = args.filter((arg) => typeof arg === "number");

  // Якщо немає чисел, повертаємо 0
  if (numbers.length === 0) {
    return 0;
  }

  // Обчислюємо добуток всіх чисел
  return numbers.reduce((product, num) => product * num, 1);
}

// Тестові приклади
console.log(mul(10, "str", 2, 3, true)); // 60
console.log(mul(null, "str", false, true)); // 0

//Пояснення:
//Синтаксис залишкових параметрів(...args):
///function mul(...args) дозволяє функції приймати будь-яку кількість аргументів, які зберігаються у масиві args.

//Фільтрація чисел:
///args.filter(arg => typeof arg === 'number') створює новий масив numbers, який містить лише елементи масиву args, які мають тип number.

//Перевірка на наявність чисел:
///Якщо масив numbers порожній (numbers.length === 0), функція повертає 0.

//Обчислення добутку:
///Якщо є числа, функція використовує метод reduce(), щоб обчислити їхній добуток. Метод reduce() застосовує
///функцію до акумулятора(product) та кожного числа(num), щоб звести масив до одного значення, яке є добутком
///чисел.Початкове значення акумулятора встановлено на 1.

//////////////////////### 4 ###////////////////////////////////////
//Change the code so that bind is not used but functionality will be same.

let server = {
  data: 0,
  convertToString: function (callback) {
    callback(() => this.data + "");
  },
};

let client = {
  server: server,
  result: "",
  calc: function (data) {
    this.server.data = data;
    this.server.convertToString(this.notification());
  },
  notification: function () {
    return (callback) => {
      this.result = callback();
    };
  },
};

// Тестовий приклад
client.calc(123);
console.log(client.result); // 123
console.log(typeof client.result); // string

//Пояснення:
//Стрілкова функція у convertToString:
///Стрілкова функція () => this.data + "" автоматично зберігає контекст this об'єкта server.

//Стрілкова функція у notification:
///Використовуючи стрілкову функцію у notification, ми забезпечуємо, що контекст this буде відповідати об'єкту client.

//////////////////////### 5 ###////////////////////////////////////
//Using the code below, an array is created using a loop, and three functions are written to the array.
//The logic of the functions is simple, the counter value at the time of creation of the function is output to the console.
//The code looks logical, but if you run this code without changes, the number 3 will be output to the console in all function calls.
//Using the closure mechanism, modify the code to output the correct numbers.
//It is possible solve this problem by replacing var to let, but in this task the keyword let is not allowed.

var arr = [];

for (var i = 0; i <= 2; i++) {
  (function (j) {
    arr[j] = function () {
      console.log(j);
    };
  })(i);
}

// Тестовий приклад
arr[0](); // 0
arr[1](); // 1
arr[2](); // 2

//У цьому коді IIFE створює нову область видимості для кожної ітерації циклу, захоплюючи поточне
//значення i у змінну j.Це дозволяє кожній функції в масиві arr зберігати правильне значення i під час її створення.

//////////////////////### 6 ###////////////////////////////////////
//Write funсtion "mapBuilder (keysArray, valuesArrays)", which obtain two arrays of the same length.
//Using these arrays, the function must create an object of type "Map", the keys of which are the
//values from the first array, and the Map values are values from the second array.After that, the function returns this Map object.

function mapBuilder(arr1, arr2) {
  // Перевірка, що обидва масиви мають однакову довжину
  if (arr1.length !== arr2.length) {
    throw new Error("Both arrays must have the same length");
  }

  // Створення нового об'єкта Map
  let map = new Map();

  // Додавання пар ключ-значення до Map
  for (let i = 0; i < arr1.length; i++) {
    map.set(arr1[i], arr2[i]);
  }

  return map;
}

// Тестові приклади
let map1 = mapBuilder([], []);
console.log(map1 instanceof Map); // true

let map2 = mapBuilder([1, 2, 3, 4], ["div", "span", "b", "i"]);
console.log(map2.get(2)); // "span"

//У цьому коді:
///Функція mapBuilder приймає два масиви arr1 і arr2.
///Перевіряється, що обидва масиви мають однакову довжину. Якщо довжини не співпадають, функція викидає помилку.
///Створюється новий об'єкт типу Map.
///Ітерація по елементах обох масивів за допомогою циклу for.
///Додаються пари ключ-значення до об'єкта Map за допомогою методу set.
///Повертається заповнений об'єкт Map.
