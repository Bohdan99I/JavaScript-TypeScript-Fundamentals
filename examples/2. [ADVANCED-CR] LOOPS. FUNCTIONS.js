//Create a function generatePrimes that takes in a number n as an argument.
//This function should generate and return an array containing the first n prime numbers.

//Write another function isPrime that takes a number num as an argument and determines
//whether it's a prime number or not. This function should return true if the number
//is prime and false otherwise.

//Utilize these functions to generate an array of the first n prime numbers.

// Функція, що перевіряє, чи є число простим
function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;

  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }

  return true;
}

// Функція, що генерує масив з перших n простих чисел
function generatePrimes(n) {
  const primes = [];
  let num = 2;

  while (primes.length < n) {
    if (isPrime(num)) {
      primes.push(num);
    }
    num++;
  }

  return primes;
}

// Приклад використання
const firstNPrimes = generatePrimes(10);
console.log(firstNPrimes);

//Пояснення
//isPrime(num):
//Якщо число менше або дорівнює 1, воно не є простим.
//Числа 2 і 3 є простими.
//Якщо число ділиться на 2 або 3 без залишку, воно не є простим.
//Для всіх інших чисел перевіряємо дільники до квадратного кореня
//числа з кроком 6(це оптимізація, яка дозволяє швидко знаходити прості числа).

//generatePrimes(n):
//Створює порожній масив primes для зберігання простих чисел.
//Починає перевірку чисел з 2.
//Поки довжина масиву primes менша за n, перевіряє кожне число на простоту за допомогою isPrime.
//Якщо число є простим, додає його до масиву primes.
//Повертає масив primes після досягнення потрібної кількості простих чисел.
