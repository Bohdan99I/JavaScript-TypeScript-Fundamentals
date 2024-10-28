// ---------- strong typing
var a = 10;
//a = "hello";
//a = true;
a = 45.4;
// data types: number string boolean null undefined Symbol void never any
var price = 3400.9;
//price = ["rgegae"];
//price = null;
price = 5500;
var email = "vlad@gmail.com";
var data = "hello";
data = 43534;
data = false;
data = [1, 2, 3];
function add(a, b) {
    console.log("Result: ".concat(a + b));
    return a + b;
}
function welcome(name) {
    console.log("Hello dear, " + name + "!");
}
var res = add(45, 2);
var msg = welcome("Vlad");
console.log(msg);
// -------- arrays: type[]
var marks = [1, 4, 6];
marks.push(10);
var user = {
    login: "bob",
    age: 20
};
var admin = {
    login: "yura",
    age: 33,
    //feaf: "aegae"
};
// --------- union types
function login(user) {
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
function startServer() {
    while (true) {
        // if () break;
    }
}
//let res = startServer(); // error
// --------- destructuring, spread
var arr = [3, 5, 12, 10, 34];
var first = arr[0], second = arr[1];
// --------- tupples
var coord = [3, 6, "vertical"];
console.log(coord[0] + ":" + coord[1]);
