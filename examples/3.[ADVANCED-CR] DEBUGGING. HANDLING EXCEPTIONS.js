//Create a function processData that performs a specific operation on a given array of numbers. The function should:
//Accept an array of numbers as a parameter.
//Process each number in the array:
///If the number is positive, square it.
///If the number is negative, throw a NegativeNumberError indicating that negative numbers are not allowed.
///If the number is zero, throw a ZeroNumberError indicating that zero is not allowed.
//Catch different error types:
///If a NegativeNumberError is caught, return a custom error message indicating "Negative numbers are not allowed".
///If a ZeroNumberError is caught, return a custom error message indicating "Zero is not allowed".
///If any other exception occurs during processing, return a general error message.
//Return an array containing the processed numbers (squared positive numbers) if no errors occur.
// Визначення користувацьких класів помилок

class NegativeNumberError extends Error {
  constructor(message) {
    super(message);
    this.name = "NegativeNumberError";
  }
}

class ZeroNumberError extends Error {
  constructor(message) {
    super(message);
    this.name = "ZeroNumberError";
  }
}

// Функція для обробки масиву чисел
function processData(numbers) {
  try {
    let processedNumbers = numbers.map((num) => {
      if (num > 0) {
        return num * num;
      } else if (num < 0) {
        throw new NegativeNumberError("Negative numbers are not allowed");
      } else {
        throw new ZeroNumberError("Zero is not allowed");
      }
    });
    return processedNumbers;
  } catch (error) {
    if (error instanceof NegativeNumberError) {
      return "Negative numbers are not allowed";
    } else if (error instanceof ZeroNumberError) {
      return "Zero is not allowed";
    } else {
      return "An error occurred";
    }
  }
}

// Приклади використання:
console.log(processData([2, 3, 4])); // [4, 9, 16]
console.log(processData([-1, 3, 4])); // "Negative numbers are not allowed"
console.log(processData([0, 3, 4])); // "Zero is not allowed"

//Пояснення:
//Користувацькі класи помилок:
//Ми визначили два класи помилок: NegativeNumberError та ZeroNumberError, які успадковують від стандартного класу Error.
//Функція processData:
///Функція приймає масив чисел як параметр.
//Ми використовуємо метод map для обробки кожного числа у масиві:
///Якщо число позитивне, ми повертаємо його квадрат.
///Якщо число негативне, ми кидаємо помилку NegativeNumberError.
///Якщо число дорівнює нулю, ми кидаємо помилку ZeroNumberError.
///Ми ловимо помилки за допомогою блоку try-catch:
///Якщо була спіймана помилка NegativeNumberError, ми повертаємо відповідне повідомлення.
///Якщо була спіймана помилка ZeroNumberError, ми повертаємо відповідне повідомлення.
///Якщо виникла будь-яка інша помилка, ми повертаємо загальне повідомлення про помилку.
//Приклади використання:
//processData([2, 3, 4]) повертає [4, 9, 16].
//processData([-1, 3, 4]) повертає "Negative numbers are not allowed".
//processData([0, 3, 4]) повертає "Zero is not allowed".
