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

//////////////////////### 2 ###////////////////////////////////////

//Create a Parcel interface to represent an entity in a package delivery system.
//The package contains the following properties:
//id: integer number that can not be changed)
//weight: float value
//dimensions: 'Dimensions' interface
//description: optional value
//sender: can store sender's id number or full name
//status: enum `PackageStatus`
//deliver: function
//statusName: getter
//The deliver function takes a boolean parameter isSuccess with no return value.
//The statusName getter returns the parcel's status name as a string.
//The Dimensions interface consists of length, width and height, all of which can be floating-point numbers.
//The PackageStatus enum has the following possible values: Pending, InTransit, Delivered, Lost.

enum PackageStatus {
    Pending,
    InTransit,
    Delivered,
    Lost
}

interface Dimensions {
    length: number;
    width: number;
    height: number;
}

interface Parcel {
    readonly id: number;
    weight: number;
    dimensions: Dimensions;
    description?: string;
    sender: number | string;
    status: PackageStatus;
    deliver(isSuccess: boolean): void;
    readonly statusName: string;
}

// Приклад використання:
const item: Parcel = {
    id: 224,
    weight: 22.5,
    dimensions: {
        length: 105,
        width: 44,
        height: 50.5
    },
    sender: "Vlad Tymo",
    description: "Super power inside.",
    status: PackageStatus.Pending,
    deliver(isSuccess) {
        this.status = isSuccess ? PackageStatus.Delivered : PackageStatus.Lost;
    },
    get statusName() {
        return PackageStatus[this.status];
    }
};

item.deliver(true);
console.log(item.statusName); // "Delivered"

//У цьому коді:
//-Енум PackageStatus містить можливі статуси пакунка.
//-Інтерфейс Dimensions містить властивості довжини, ширини та висоти.
//-Інтерфейс Parcel містить всі вказані властивості, включаючи метод deliver та геттер statusName.
//-Приклад використання створює об'єкт item, змінює його статус за допомогою методу deliver, і виводить новий статус через геттер statusName.

