// ---------- strong typing
let a: number = 10;

//a = "hello";
//a = true;
a = 45.4;

// data types: number string boolean null undefined Symbol void never any

let price: number = 3400.9;
//price = ["rgegae"];
//price = null;
price = 5500;

let email: string = "vlad@gmail.com";

let data: any = "hello";
data = 43534;
data = false;
data = [1, 2, 3];

function add(a: number, b: number): number {
    console.log(`Result: ${a + b}`);
    return a + b;
}

function welcome(name: string): void {
    console.log("Hello dear, " + name + "!");
}

let res: number = add(45, 2);

let msg = welcome("Vlad");

console.log(msg);

// -------- arrays: type[]
let marks: number[] = [1, 4, 6];

marks.push(10);

const user: { login: string, age: number } = {
    login: "bob",
    age: 20
}

// -------- type alliase
type User = { login: string, age: number };

const admin: User = {
    login: "yura",
    age: 33,
    //feaf: "aegae"
}

// --------- union types
function login(user: User | string): void {

    // TODO: fix
    // console.log(typeof user);
    // if (typeof user === typeof User)
    {
        console.log("User ligged in successfuly!");
    }
}

login(admin);
login("my_email@ukr.net");
//login(3534); // errro

// ----------- never
//let nothing: never = 323;

function startServer(): void {
    while (true) {
        // if () break;
    }
}

//let res = startServer(); // error

// --------- destructuring, spread

const arr: number[] = [3, 5, 12, 10, 34];

const [first, second] = arr;

// --------- tupples
let coord: [number, number, string] = [3, 6, "vertical"];

console.log(coord[0] + ":" + coord[1]);
