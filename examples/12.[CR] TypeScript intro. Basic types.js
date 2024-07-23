//////////////////////### 1 ###////////////////////////////////////
//A JavaScript program is given that calculates and displays information about an employee's salary including a bonus.
//You need to perform full typing of JavaScript code on TypeScript, ensuring that there are no errors and correct work with input data.

// rewrite this code in TypeScript

const employee = {
  name: "Alex Brown",
  profession: "doctor",
  worworkingHoursPerDay: 10,
};

const premiumData = {
  isPremium: true,
  premium: 1000,
};

const payPerHour = 32;
const worworkingDays = 14;

const experienceСoefficients = [1, 1.1, 1.2, 1.3, 1.5];

const getSalaryInfo = (
  employeeData,
  premiumData,
  payPerHour,
  worworkingDays,
  experienceСoefficients
) => {
  let salary;
  if (premiumData.isPremium) {
    salary =
      employeeData.worworkingHoursPerDay *
        payPerHour *
        worworkingDays *
        experienceСoefficients +
      premiumData.premium;
  } else {
    salary =
      employeeData.worworkingHoursPerDay *
      payPerHour *
      worworkingDays *
      experienceСoefficients;
  }
  return `${employee.profession} ${employee.name} has a salary of ${salary}$ this month`;
};

const salaryInfo = getSalaryInfo(
  employee,
  premiumData,
  payPerHour,
  worworkingDays,
  experienceСoefficients[2]
);

//TypeScript
type Employee = {
  name: string,
  profession: string,
  workingHoursPerDay: number,
};

type PremiumData = {
  isPremium: boolean,
  premium: number,
};

const employee: Employee = {
  name: "Alex Brown",
  profession: "doctor",
  workingHoursPerDay: 10,
};

const premiumData: PremiumData = {
  isPremium: true,
  premium: 1000,
};

const payPerHour: number = 32;
const workingDays: number = 14;

const experienceCoefficients: number[] = [1, 1.1, 1.2, 1.3, 1.5];

const getSalaryInfo = (
  employeeData: Employee,
  premiumData: PremiumData,
  payPerHour: number,
  workingDays: number,
  experienceCoefficient: number
): string => {
  let salary: number;
  if (premiumData.isPremium) {
    salary =
      employeeData.workingHoursPerDay *
        payPerHour *
        workingDays *
        experienceCoefficient +
      premiumData.premium;
  } else {
    salary =
      employeeData.workingHoursPerDay *
      payPerHour *
      workingDays *
      experienceCoefficient;
  }
  return `${employeeData.profession} ${employeeData.name} has a salary of ${salary}$ this month`;
};

const salaryInfo = getSalaryInfo(
  employee,
  premiumData,
  payPerHour,
  workingDays,
  experienceCoefficients[2]
);

console.log(salaryInfo);

//////////////////////### 2 ###////////////////////////////////////
//Implement a TypeScript function processData() that takes a param parameter that can be a string, a number,
// a boolean, or an array of numbers.Depending on the type of the input parameter param, the function must
//perform various operations and return the appropriate value:
//-    If the parameter is a string, return the uppercase version of the parameter.
// -    If the parameter is a number, square it.
// -    If the parameter is boolean, return its negation.
// -    If the parameter is an array of numbers, return the array with the square of each number.
//-    If the parameter is an empty array, return "Empty array: []".
//Example of usage:
//console.log(processData("text data")); // "TEXT DATA"
//console.log(processData(3)); // 9
//console.log(processData(false)); // true
//console.log(processData([1, 2, 3, 4])); // [1, 4, 9, 16]
//console.log(processData([])); // Empty array: []

// Оголошення функції з параметром, який може бути рядком, числом, булевим значенням або масивом чисел
function processData(
  param: string | number | boolean | number[]
): string | number | boolean | (number | string)[] {
  if (typeof param === "string") {
    // Якщо параметр є рядком, повернути його у верхньому регістрі
    return param.toUpperCase();
  } else if (typeof param === "number") {
    // Якщо параметр є числом, повернути його квадрат
    return param * param;
  } else if (typeof param === "boolean") {
    // Якщо параметр є булевим значенням, повернути його заперечення
    return !param;
  } else if (Array.isArray(param)) {
    // Якщо параметр є масивом
    if (param.length === 0) {
      // Якщо масив порожній, повернути спеціальне повідомлення
      return "Empty array: []";
    } else {
      // В іншому випадку, повернути масив з квадратами кожного числа
      return param.map((num) => num * num);
    }
  } else {
    // Для будь-якого іншого типу, який не обробляється, викинути помилку
    throw new Error("Invalid parameter type");
  }
}

// Приклади використання:
console.log(processData("text data")); // "TEXT DATA"
console.log(processData(3)); // 9
console.log(processData(false)); // true
console.log(processData([1, 2, 3, 4])); // [1, 4, 9, 16]
console.log(processData([])); // "Empty array: []"

//Пояснення:
//1.Перевірка типу: Функція використовує typeof для перевірки типу параметра та обробляє кожен випадок відповідно.
//2.Обробка рядка: Конвертує рядок у верхній регістр за допомогою toUpperCase().
//3.Обробка числа: Обчислює квадрат числа шляхом множення його на себе.
//4.Обробка булевого значення: Заперечує булеве значення за допомогою !.
//5.Обробка масиву:
//-Якщо масив порожній, повертає рядок "Empty array: []".
//-Інакше використовує map для обчислення квадратів кожного елемента масиву.
//6.Обробка помилок: Включає загальну помилку для несумісних типів, хоча в цьому випадку передбачені типи обробляються.
//Цю функцію можна використовувати з різними типами параметрів, щоб перевірити, як вона обробляє і повертає відповідні результати.
