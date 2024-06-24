//////////////### 1 ###///////////////////////////////////////////
//Write class Circle with next functional:
///The constructor takes as input center point {x:number, y:number} and radius.
///Method getLength for obtain length of circle (L = 2 * Pi * R).
///Static method getLengthFromRadius for obtain length of circle with corresponding radius r (L = 2 * Pi * r).
///Method getCopy which return copy of this object.
///Static method createCircle(x, y, r) which obtain as input x, y - coordinates of center and r - circle radius, create and return new Circle with this parameters.
///Method checkPointInside(point) which obtain as parametes point = {x:namber, y:number} and return bollean response of whether the point is inside the circle.
///Override method toString to return description of circle object as string as in examples.
class Circle {
  constructor(center, radius) {
    this.center = center;
    this.radius = radius;
  }

  getLength() {
    return 2 * Math.PI * this.radius;
  }

  static getLengthFromRadius(radius) {
    return 2 * Math.PI * radius;
  }

  getCopy() {
    return new Circle({ x: this.center.x, y: this.center.y }, this.radius);
  }

  static createCircle(x, y, r) {
    return new Circle({ x, y }, r);
  }

  checkPointInside(point) {
    const distanceSquared =
      (point.x - this.center.x) ** 2 + (point.y - this.center.y) ** 2;
    return distanceSquared <= this.radius ** 2;
  }

  toString() {
    return `Circle with center in ${this.center.x},${this.center.y} and radius ${this.radius}`;
  }
}

// Приклади тестів
const circle1 = new Circle({ x: 1, y: 1 }, 2);
console.log(String(circle1)); // Circle with center in 1,1 and radius 2

const circle2 = Circle.createCircle(10, 15, 34);
console.log(String(circle2)); // Circle with center in 10,15 and radius 34

const randomRadius = Math.floor(Math.random() * 10) + 1;
const circleFirst = new Circle({ x: 1, y: 1 }, randomRadius);
const circleSecond = circleFirst.getCopy();
console.log(circleFirst === circleSecond); // false
console.log(String(circleFirst) === String(circleSecond)); // true

const circle3 = new Circle({ x: 1, y: 1 }, 5);
console.log(circle3.getLength().toFixed(1)); // 31.4

console.log(Circle.getLengthFromRadius(10).toFixed(1)); // 62.8

const expectedLength = 2 * Math.PI * randomRadius;
const circle4 = new Circle({ x: 1, y: 1 }, randomRadius);
console.log(circle4.getLength().toFixed(1) === expectedLength.toFixed(1)); // true

console.log(
  Circle.getLengthFromRadius(randomRadius).toFixed(1) ===
    expectedLength.toFixed(1)
); // true

const circle5 = new Circle({ x: 4, y: 2 }, randomRadius);
const circle6 = Circle.createCircle(4, 2, randomRadius);
console.log(circle5 === circle6); // false
console.log(String(circle5) === String(circle6)); // true

const circle7 = new Circle({ x: 2, y: 2 }, 20);
const pointInside = { x: 3, y: 3 };
console.log(circle7.checkPointInside(pointInside)); // true

const circle8 = new Circle({ x: 2, y: 2 }, 2);
const pointOutside = { x: 30, y: 30 };
console.log(circle8.checkPointInside(pointOutside)); // false

//Ця реалізація класу Circle включає:

///Конструктор для ініціалізації центру і радіуса.
///Метод getLength для обчислення довжини кола.
///Статичний метод getLengthFromRadius для обчислення довжини кола за даним радіусом.
///Метод getCopy для повернення копії об'єкта кола.
///Статичний метод createCircle для створення нового об'єкта кола за заданими координатами центру і радіусом.
///Метод checkPointInside для перевірки, чи знаходиться задана точка всередині кола.
///Перевизначений метод toString для надання рядкового представлення об'єкта кола.

//////////////////### 2 ###/////////////////////////////////////////////
//Write the function propsCount(currentObject) which obtain as input object currentObject and return the number of its properties.

function propsCount(currentObject) {
  return Object.keys(currentObject).length;
}

// Приклад тесту
const mentor = {
  course: "JS fundamental",
  duration: 3,
  direction: "web-development",
};

console.log(propsCount(mentor)); // 3

//У цій функції ми використовуємо метод Object.keys(), який повертає масив ключів (властивостей)
//об'єкта. Потім ми використовуємо метод length для визначення кількості елементів у цьому масиві,
//що відповідає кількості властивостей об'єкта.

//////////////////////### 3 ###///////////////////////////
//Write class Person with constructor which obtain name and surname as parameters and create object
//with this public fields, also in Person define public method getFullName which returns the string
//with surname and name are written with a spaces
//Write class Student which is inherited from Person but its constructor obtain also year as parameter.
//year is year of entry to the university.In class Student owerride method getFullName(middleName)
// so that this method return string surname, name and middleName are written with a spaces.Write
//method getCourse() which return the student's current course (from 1 to 6). The value of the course
//will be determined as the difference between the current year(to be determined independently)
//and the year of entry to the university.

class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  getFullName() {
    return `${this.surname} ${this.name}`;
  }
}

class Student extends Person {
  constructor(name, surname, year) {
    super(name, surname);
    this.year = year;
  }

  getFullName(middleName) {
    return `${this.surname} ${this.name} ${middleName}`;
  }

  getCourse() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.year;
  }
}

// Приклад тесту
const stud1 = new Student("Petro", "Petrenko", 2019);
console.log(stud1.getFullName("Petrovych")); // Petrenko Petro Petrovych
console.log("Current course: " + stud1.getCourse()); // Current course: 5 (або інше значення залежно від поточного року)

const person = new Person("John", "Doe");
const result = person.getFullName();
console.log(result); // Doe John

//У цьому коді:

///Клас Person має конструктор, який отримує name і surname як параметри і створює об'єкт з цими публічними полями.
///Також визначено метод getFullName, який повертає рядок, що містить прізвище та ім'я з пробілом між ними.

///Клас Student успадковується від класу Person і має додатковий параметр year - рік вступу до університету.
///Метод getFullName перевантажено, щоб він приймав ще й середнє ім'я middleName та повертав рядок, що містить прізвище,
///ім'я та середнє ім'я з пробілами між ними.Метод getCourse обчислює поточний курс студента, виходячи з поточного року та року вступу.

/////////////////////////### 4 ###///////////////////////
//Write class Marker that describes a simple marker. The instances of this class should have the following components:
///Private field that stores the color of the marker and only getter color for this field, we set color by parameter in constructor.
///Private field that stores the amount of ink in the marker (in percentage), marker creating with 100% of ink and only getter ink for this field.
///Public method print(text) that call console.log with letters from text one by one, and write in console as long as there is ink in the marker;
/// one non - whitespace character is 10 % of the ink in the marker.
//Implement a class that describes a RefillableMarker inherited from a Marker and adding a method refill which add ink to 100%.
class Marker {
  #color;
  #ink;

  constructor(color) {
    this.#color = color;
    this.#ink = 100; // Marker starts with 100% ink
  }

  get color() {
    return this.#color;
  }

  get ink() {
    return this.#ink;
  }

  print(text) {
    for (let char of text) {
      if (this.#ink <= 0) {
        break;
      }
      if (char !== " ") {
        this.#ink -= 10;
      }
      console.log(char);
    }
  }
}

class RefillableMarker extends Marker {
  #ink;

  constructor(color) {
    super(color);
    this.#ink = 100;
  }

  refill() {
    this.#ink = 100; // Refill marker to 100% ink
  }

  get ink() {
    return this.#ink;
  }

  print(text) {
    for (let char of text) {
      if (this.#ink <= 0) {
        break;
      }
      if (char !== " ") {
        this.#ink -= 10;
      }
      console.log(char);
    }
  }
}

// Приклад тесту
const marker = new Marker("red");
marker.print("Hello World!");

const refillableMarker = new RefillableMarker("red");
refillableMarker.print("Lorem ipsum dolor sit amet");
refillableMarker.print("Lorem ipsum dolor sit amet");
refillableMarker.refill();
refillableMarker.print("Lorem ipsum dolor sit amet");

//У класі RefillableMarker тепер оголошено приватне поле #ink та реалізовано метод print, щоб забезпечити доступ до приватного поля та його зменшення.
//В конструкторі класу RefillableMarker викликається конструктор батьківського класу Marker за допомогою super(color).
//Поле #ink у класі RefillableMarker приватне, але отримує доступ за допомогою геттера ink.

//////////////////////////### 5 ###/////////////////////////////////
//Create class Worker, constructor of it obtain parameters: fullName:string, dayRate:number, workingDays:number, experience save them in private fields.
//In class define next public methods:
///getSalary - return worker salary which calculate as dayRate*workingDays
///getSalaryWithExperience - return worker salary which calculate as dayRate*workingDays*experience
///getter and setter on fields fullName, dayRate and experience
///getter on field workingDays and method addWorkingDays(n:number), whick add n to workingDays
//In class Worker implement method sortBySalary which obtain as parameter array of workers and return new array with workers sorted from lowest to highest salary.
class Worker {
  #fullName;
  #dayRate;
  #workingDays;
  #experience;

  constructor(fullName, dayRate, workingDays, experience) {
    this.#fullName = fullName;
    this.#dayRate = dayRate;
    this.#workingDays = workingDays;
    this.#experience = experience;
  }

  getSalary() {
    return this.#dayRate * this.#workingDays;
  }

  getSalaryWithExperience() {
    return this.#dayRate * this.#workingDays * this.#experience;
  }

  get fullName() {
    return this.#fullName;
  }

  set fullName(name) {
    this.#fullName = name;
  }

  get dayRate() {
    return this.#dayRate;
  }

  set dayRate(rate) {
    this.#dayRate = rate;
  }

  get workingDays() {
    return this.#workingDays;
  }

  addWorkingDays(n) {
    this.#workingDays += n;
  }

  get experience() {
    return this.#experience;
  }

  set experience(exp) {
    this.#experience = exp;
  }

  static sortBySalary(workers) {
    return workers.slice().sort((a, b) => a.getSalary() - b.getSalary());
  }
}

// Приклади використання:
const worker = new Worker("John Johnson", 20, 23, 1);
console.log(worker.fullName); // John Johnson
console.log(worker.getSalary()); // 460
console.log(worker.getSalaryWithExperience()); // 460

const worker2 = new Worker("Adam Oliver", 100, 1, 2);
worker2.dayRate = 200;
worker2.experience = 3;
worker2.addWorkingDays(29);
console.log(worker2.getSalary()); // 6000
console.log(worker2.getSalaryWithExperience()); // 18000

const worker1 = new Worker("David Brown", 450, 20, 1);
const worker3 = new Worker("John Johnson", 325, 30, 1);
const arrayOfWorkers = [worker1, worker2, worker3];
const sortedArrayOfWorkers = Worker.sortBySalary(arrayOfWorkers);

console.log("Before Sorting");
arrayOfWorkers.forEach((worker) => console.log(worker.fullName));
// David Brown
// Adam Oliver
// John Johnson

console.log("After Sorting");
sortedArrayOfWorkers.forEach((worker) => console.log(worker.fullName));
// David Brown
// John Johnson
// Adam Oliver

//Пояснення:
//Приватні поля: Використовуються приватні поля (#fullName, #dayRate, #workingDays, #experience) для зберігання даних робітника.
//Конструктор: Конструктор приймає параметри fullName, dayRate, workingDays і experience та ініціалізує приватні поля.
//Методи:
///getSalary(): Обчислює зарплату як добуток dayRate на workingDays.
///getSalaryWithExperience(): Обчислює зарплату з урахуванням досвіду як добуток dayRate, workingDays і experience.
//Геттери та сеттери для полів fullName, dayRate, experience.
//Геттер для поля workingDays та метод addWorkingDays(n), який додає n до workingDays.
//Статичний метод sortBySalary(workers), який сортує масив робітників за зарплатою.
