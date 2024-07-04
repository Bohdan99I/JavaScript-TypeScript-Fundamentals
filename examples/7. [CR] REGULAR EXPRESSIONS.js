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

///////////////////### 4 ###////////////////////////////////////////

///////////////////### 5 ###////////////////////////////////////////
