//////////////////////### 1 ###////////////////////////////////////
//Create a function display that can be called in 3 different ways:
//-Overload 1: Accepts a single string and prints it.
//-Overload 2: Accepts two strings and prints them on separate lines.
//-Overload 3: Accepts an array of strings and prints each string on a new line.

// Визначення сигнатур перевантаження
function display(text: string): void;
function display(text1: string, text2: string): void;
function display(textArray: string[]): void;

// Реалізація функції
function display(param1: string | string[], param2?: string): void {
    if (typeof param1 === 'string' && typeof param2 === 'undefined') {
        // Якщо передано один рядок
        console.log(param1);
    } else if (typeof param1 === 'string' && typeof param2 === 'string') {
        // Якщо передано два рядки
        console.log(param1);
        console.log(param2);
    } else if (Array.isArray(param1)) {
        // Якщо передано масив рядків
        param1.forEach(text => console.log(text));
    } else {
        throw new Error("Неправильний вхідний параметр");
    }
}

// Приклади використання:
display("Hello, World!"); // Виведе: Hello, World!

display("Hello", "World"); 
// Виведе:
// Hello
// World

display(["One", "Two", "Three"]); 
// Виведе:
// One
// Two
// Three

//////////////////////### 2 ###////////////////////////////////////

//Please, create a generic function identity, that takes an array as an argument.
//-Each element of an array should satisfy the condition: it should have a rating field
//-identity function should return the average value of the ratings in the array.

// Визначення інтерфейсу з полем rating
interface HasRating {
    rating: number;
}

// Універсальна функція identity
function identity<T extends HasRating>(items: T[]): number {
    if (items.length === 0) {
        return 0;
    }
    const totalRating = items.reduce((sum, item) => sum + item.rating, 0);
    return totalRating / items.length;
}

// Приклади використання
const movies = [
    { rating: 4.5, title: "Inception" },
    { rating: 4.0, title: "Interstellar" },
    { rating: 4.7, title: "The Dark Knight" }
];

const books = [
    { rating: 4.2, name: "The Great Gatsby" },
    { rating: 3.9, name: "To Kill a Mockingbird" },
    { rating: 4.8, name: "1984" }
];

console.log(identity(movies)); // Виведе: 4.4
console.log(identity(books)); // Виведе: 4.3

//Щоб створити універсальну (generic) функцію identity, яка приймає масив елементів із полем rating і повертає середнє значення рейтингів, можна використати наступний підхід:
//typescript
//Копіювати код
// Визначення інтерфейсу з полем rating
interface HasRating {
    rating: number;
}

// Універсальна функція identity
function identity<T extends HasRating>(items: T[]): number {
    if (items.length === 0) {
        return 0;
    }
    const totalRating = items.reduce((sum, item) => sum + item.rating, 0);
    return totalRating / items.length;
}

// Приклади використання
const movies = [
    { rating: 4.5, title: "Inception" },
    { rating: 4.0, title: "Interstellar" },
    { rating: 4.7, title: "The Dark Knight" }
];

const books = [
    { rating: 4.2, name: "The Great Gatsby" },
    { rating: 3.9, name: "To Kill a Mockingbird" },
    { rating: 4.8, name: "1984" }
];

console.log(identity(movies)); // Виведе: 4.4
console.log(identity(books)); // Виведе: 4.3

//У цьому коді:
//1.Інтерфейс HasRating визначає, що об'єкти повинні мати поле rating.
//2.Універсальна функція identity приймає масив елементів, що реалізують інтерфейс HasRating.
//3.Функція reduce використовується для обчислення загальної суми рейтингів.
//4.Середнє значення обчислюється як загальна сума рейтингів, поділена на кількість елементів у масиві.
//Таким чином, функція identity приймає масив об'єктів із полем rating і повертає середнє значення рейтингів у масиві.
