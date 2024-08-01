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