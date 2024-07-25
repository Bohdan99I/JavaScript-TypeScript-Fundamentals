//////////////////////### 1 ###////////////////////////////////////
//Create a function superSort that takes an array of strings and sort direction
//with two possible values: "asc" and "desc".The function returns a sorted array as a copy.
//Create a type alias SortFunction for this function.

type SortDirection = "asc" | "desc";

type SortFunction = (array: string[], direction: SortDirection) => string[];

const superSort: SortFunction = (array, direction) => {
  const sortedArray = [...array].sort((a, b) => {
    if (direction === "asc") {
      return a.localeCompare(b);
    } else {
      return b.localeCompare(a);
    }
  });
  return sortedArray;
};

// Приклад використання:
let names = ["Vlad", "Ira", "Nina", "Alex"];
console.log(superSort(names, "asc")); // [ 'Alex', 'Ira', 'Nina', 'Vlad' ]

const func: SortFunction = superSort;
const result = func(["A", "C", "D", "B"], "desc");
console.log(result); // [ 'D', 'C', 'B', 'A' ]

//У цьому коді:
//-Тип SortDirection визначає допустимі значення для напрямку сортування: "asc" або "desc".
//-Тип SortFunction визначає функцію, яка приймає масив рядків та напрямок сортування і повертає відсортований масив рядків.
//-Функція superSort сортує копію вхідного масиву відповідно до заданого напрямку сортування і повертає відсортований масив.
