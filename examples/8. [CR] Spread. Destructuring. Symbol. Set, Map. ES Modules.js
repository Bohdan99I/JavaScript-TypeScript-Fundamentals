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
