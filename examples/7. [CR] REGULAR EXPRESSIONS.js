////////////////### 1 ###///////////////////////////////////
//Write a function upperCase that will check whether the first
//character in a string is uppercase or not.

function upperCase(str) {
  if (str.length === 0) {
    return "Empty string"; // Handle empty string case (optional)
  }
  const firstChar = str.charAt(0);
  const isUpperCase =
    firstChar.charCodeAt(0) >= 65 && firstChar.charCodeAt(0) <= 90;
  return isUpperCase
    ? "String's starts with uppercase character"
    : "String's not starts with uppercase character";
}

///////////////////### 2 ###////////////////////////////////////////
//Write a function validateEmail(email) that accepts string data and checks that it matches an email.

//Requirements to an email address:
///The email address must have a local part and a domain part separated by the @ symbol.
///The local part can contain alphanumeric characters (letters A-Z, both uppercase and lowercase,
///and digits 0 - 9), as well as the following special characters: ._ % +-.
///The local part must have at least one character.
///The domain part can contain alphanumeric characters (letters A-Z, both uppercase and lowercase,
/// and digits 0 - 9), as well as the following special characters: .-.
///The domain part must have at least one character.
///The domain part must include a period (.) to separate the domain name from the top-level
///domain(TLD) or domain extension.
///The TLD or domain extension must consist of two or more letters (both uppercase and lowercase).

function validateEmail(email) {
  // Регулярний вираз для перевірки формату електронної адреси
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

// Тестові приклади
let email1 = "john.doe@example.com";
console.log(validateEmail(email1)); // true

let email2 = "jane_smith@example.co.uk";
console.log(validateEmail(email2)); // true

let email3 = "john.doe@example";
console.log(validateEmail(email3)); // false

let email4 = "jane_smith@examplecom";
console.log(validateEmail(email4)); // false

//Ця функція використовує регулярний вираз для перевірки формату електронної адреси. Ось як він працює:

//^[a-zA-Z0-9._%+-]+ - перевіряє локальну частину, яка може містити літери, цифри та деякі спеціальні символи, і повинна мати принаймні один символ.
//@ - перевіряє наявність символу "@".
//[a-zA-Z0-9.-]+ - перевіряє доменну частину, яка може містити літери, цифри, крапки та тире, і повинна мати принаймні один символ.
//\.[a-zA-Z]{2,}$ - перевіряє, що доменна частина містить крапку і закінчується на TLD або розширення домену, яке складається з двох або більше літер.
//Функція повертає true, якщо рядок відповідає регулярному виразу, і false в іншому випадку.

///////////////////### 3 ###////////////////////////////////////////
//Write a regular expression in variable regex that will swap the 2 substrings in the string text.

let regex = /^(\S+)\s+(\S+)$/;
//Ось як це працює:

//^ і $ позначають початок і кінець рядка відповідно.
//(\w+) знайде перший підрядок, що складається з одного або більше алфавітних символів або цифр, і збереже його в першій групі захоплення.
//\s+ знайде один або більше пробільних символів (в даному випадку пробіл).
//(\w+) знайде другий підрядок, що складається з одного або більше алфавітних символів або цифр, і збереже його в другій групі захоплення.
//Заміна "$2 $1" використовує захоплені групи, щоб поміняти місцями два підрядки.
//Ось приклад використання:
//let text = "Java Script";
//let regex = /^(\w+)\s+(\w+)$/;
//let swappedText = text.replace(regex, "$2 $1");
//console.log(swappedText); // Script Java

///////////////////### 4 ###////////////////////////////////////////
//Write a regular expression in variable regex that will perform validation of
//the bank card number in format 9999 - 9999 - 9999 - 9999.  Note: First digit
//can be from 1 to 9, but not 0.

//let regex = /^[1-9]\d{3}-\d{4}-\d{4}-\d{4}$/;
//Ось приклади використання:
let cardNumber = "1234-5678-9012-3456";
let isValid = regex.test(cardNumber);
console.log(isValid); // true

cardNumber = "1234-5678-9012";
isValid = regex.test(cardNumber);
console.log(isValid); // false

cardNumber = "12A4-5678-9012-3456";
isValid = regex.test(cardNumber);
console.log(isValid); // false

cardNumber = "0234-5678-9012-3456";
isValid = regex.test(cardNumber);
console.log(isValid); // false

//Пояснення регулярного виразу:

//^[1-9] - починається з цифри від 1 до 9.
//\d{3} - три цифри.
//- - дефіс.
//\d{4} - чотири цифри.
//- - дефіс.
//\d{4} - чотири цифри.
//- - дефіс.
//\d{4}$ - чотири цифри в кінці.

///////////////////### 5 ###////////////////////////////////////////
//Write a function checkLogin(login) that checks the correctness of the login.
//A valid login is a string of 2 to 10 characters, containing only letters, dots
//and numbers, a number cannot be the first character.The function should take
//a string and return object { isValid: Bolean, numbers : Array of string } with
//result of the login verification(isValid) and array of all numbers in input
//string(numbers), including floating - point numbers.

function checkLogin(login) {
  // Регулярний вираз для перевірки правильності логіну
  const loginRegex = /^[a-zA-Z][a-zA-Z0-9.]{1,9}$/;

  // Перевірка логіну
  const isValid = loginRegex.test(login);

  // Регулярний вираз для витягування чисел, включаючи числа з плаваючою точкою
  const numberRegex = /\d+(\.\d+)?/g;
  const numbers = login.match(numberRegex) || [];

  return {
    isValid: isValid,
    numbers: numbers,
  };
}

// Приклади використання
console.log(checkLogin("user1.23")); // { isValid: true, numbers: ['1', '23'] }
console.log(checkLogin("1username")); // { isValid: false, numbers: ['1'] }
console.log(checkLogin("user.name")); // { isValid: true, numbers: [] }
console.log(checkLogin("us3r4.56name")); // { isValid: true, numbers: ['3', '4.56'] }
console.log(checkLogin("us!ername")); // { isValid: false, numbers: [] }

//Пояснення:

///Регулярний вираз ^[a-zA-Z][a-zA-Z0-9.]{1,9}$ перевіряє, чи починається рядок з літери
///і чи містить тільки літери, цифри або крапки, а також має довжину від 2 до 10 символів.
///Регулярний вираз \d+(\.\d+)? використовується для знаходження всіх чисел у рядку, включаючи числа з плаваючою точкою.
///Функція match повертає масив всіх відповідностей регулярному виразу, або null, якщо
///відповідностей немає.Використовуючи || [], ми забезпечуємо повернення порожнього масиву в разі відсутності відповідностей.
