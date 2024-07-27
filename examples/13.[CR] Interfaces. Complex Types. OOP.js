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

//////////////////////### 3 ###////////////////////////////////////

//Create classes that simulate a basic user management system with a user and an admin.
//There is an abstract class User with the following members:
//-id - unique integer number that starts from 1000 and increments for each user instance; cannot be changed after initialization
//-email - user's email address
//-password - user's password, only accessible inside this class
//-passwordPreview - getter for the password
//-changePassword - method that takes a new password and sets it to the class, only accessible inside this and derived classes
//-showProfile - empty method that must be implemented in derived classes
//The user password must contain at least 6 characters; otherwise, show the message: "Password too short!".
//The passwordPreview getter returns the password but shows only the first and the last characters, with all the other characters replaced by the '•' character. For example: "Qwerty" would be displayed as "Q****y".
//There is also a class Admin that extends the User class and implements the Printable interface.
//This class has isActive boolean property and realises the showProfile method, which logs a URL address to the console depending on the active status:
//-active: "https://softserve/profile/{user_id}"
//-inactive: "https://softserve/login"
//The Printable interface has a print method that is used to display the class name in the console.
//For example:
//Test	Result               const admin = new Admin('admin@gmail.com', 'Qwerty');
//admin.changePassword('Weak');
//console.log(admin.passwordPreview);
//admin.changePassword('Super-Pass');
//console.log(admin.passwordPreview);
//Password too short!
//Q••••y
//S••••••••s


interface Printable {
    print(): void;
}

abstract class User {
    private static idCounter: number = 1000;
    public readonly id: number;
    public email: string;
    private password: string;

    constructor(email: string, password: string) {
        this.id = User.idCounter++;
        this.email = email;
        if (password.length < 6) {
            console.log("Password too short!");
            this.password = "default";
        } else {
            this.password = password;
        }
    }

    get passwordPreview(): string {
        let mask = '';
        for (let i = 0; i < this.password.length - 2; i++) {
            mask += '•';
        }
        return this.password.charAt(0) + mask + this.password.charAt(this.password.length - 1);
    }

    protected changePassword(newPassword: string): void {
        if (newPassword.length < 6) {
            console.log("Password too short!");
        } else {
            this.password = newPassword;
        }
    }

    abstract showProfile(): void;
}

class Admin extends User implements Printable {
    public isActive: boolean;

    constructor(email: string, password: string) {
        super(email, password);
        this.isActive = true; // За замовчуванням, адмін активний
    }

    showProfile(): void {
        if (this.isActive) {
            console.log(`https://softserve/profile/${this.id}`);
        } else {
            console.log(`https://softserve/login`);
        }
    }

    public updatePassword(newPassword: string): void {
        this.changePassword(newPassword);
    }

    print(): void {
        console.log("Admin");
    }
}

// Приклад використання:
const admin = new Admin('admin@gmail.com', 'Qwerty');

admin.updatePassword('Weak');
console.log(admin.passwordPreview); // Має вивести "Password too short!" і "Q••••y"

admin.updatePassword('Super-Pass');
console.log(admin.passwordPreview); // Має вивести "S••••••••s"

admin.showProfile(); // Має вивести "https://softserve/profile/1001"
admin.isActive = false;
admin.showProfile(); // Має вивести "https://softserve/login"
admin.print(); // Має вивести "Admin"
