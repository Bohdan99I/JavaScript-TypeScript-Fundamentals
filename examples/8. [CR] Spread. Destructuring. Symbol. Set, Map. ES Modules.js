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
