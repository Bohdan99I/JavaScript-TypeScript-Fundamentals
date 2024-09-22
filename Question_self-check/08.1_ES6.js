/*
Яка різниця між var та let:

1. Область видимості:
   - var: функціональна область видимості (visible within the function it's declared in).
   - let: блочна область видимості (visible within the block it's declared in).

2. Повторне оголошення:
   - var: дозволяє повторне оголошення змінної в межах однієї області видимості.
   - let: не дозволяє повторне оголошення змінної в межах однієї області видимості.

3. Hoisting:
   - var: оголошення піднімаються (hoisted) на початок області видимості з ініціалізацією undefined.
   - let: оголошення піднімаються, але не ініціалізуються, тому доступ до змінної до її оголошення викликає помилку ReferenceError.
*/

/*
Які особливості є в arrow functions (=>) порівняно із звичайними функціями:

1. Синтаксис: коротший синтаксис.
   const add = (a, b) => a + b;

2. Контекст this:
   - Arrow functions не мають власного контексту this, вони успадковують його від батьківського контексту.

3. Не мають arguments об'єкта:
   - Arrow functions не мають власного об'єкта arguments, але можуть використовувати rest параметри.

4. Не можуть бути використані як конструктори:
   - Arrow functions не можуть бути викликані з new, тому їх не можна використовувати як конструктори.
*/

/*
Які завдання може виконувати spread оператор:

1. Розпакування масивів в аргументи функцій:
   const numbers = [1, 2, 3];
   Math.max(...numbers);

2. Злиття масивів:
   const arr1 = [1, 2];
   const arr2 = [3, 4];
   const merged = [...arr1, ...arr2];

3. Копіювання масивів:
   const copy = [...originalArray];

4. Розпакування об'єктів в новий об'єкт:
   const obj1 = { a: 1 };
   const obj2 = { b: 2 };
   const mergedObj = { ...obj1, ...obj2 };
*/

/*
Які є обмеження у використанні оператора ...rest:

1. Rest параметри повинні бути останніми у списку параметрів функції:
   function example(a, b, ...rest) { }

2. Не можна використовувати rest оператор в літералі об'єкта:
   const { ...rest, a } = obj; // Помилка
*/

/*
Що таке деструктуризація, який процес вона спрощує:

Деструктуризація - це синтаксис, що дозволяє розпаковувати значення з масивів або властивості з об'єктів у окремі змінні.
   const [a, b] = [1, 2];
   const { name, age } = person;

Вона спрощує процес витягування даних з масивів і об'єктів, роблячи код чистішим і зрозумілішим.
*/

/*
Що таке тип даних Symbol, яка його особливість:

Symbol - це примітивний тип даних, який використовується для створення унікальних ідентифікаторів. Особливість Symbol полягає в тому, що кожен символ є унікальним, навіть якщо вони мають однаковий опис.
   const sym1 = Symbol('desc');
   const sym2 = Symbol('desc');
   console.log(sym1 === sym2); // false
*/

/*
Які є варіанти використання типу Symbol:

1. Створення унікальних властивостей об'єктів:
   const obj = {};
   const sym = Symbol('key');
   obj[sym] = 'value';

2. Використання як ключі в колекціях (напр. Map):
   const map = new Map();
   const sym = Symbol('key');
   map.set(sym, 'value');

3. Створення прихованих властивостей об'єктів, які не конфліктують з іншими властивостями.
*/

/*
Які є колекції в ES6, яка особливість кожної:

1. Map: колекція пар ключ-значення, де ключ може бути будь-якого типу.
   const map = new Map();
   map.set('key', 'value');

2. Set: колекція унікальних значень, де кожне значення може з'являтися тільки один раз.
   const set = new Set([1, 2, 3]);

3. WeakMap: колекція пар ключ-значення, де ключі є об'єктами, і ці об'єкти можуть бути garbage collected.
   const weakMap = new WeakMap();
   const obj = {};
   weakMap.set(obj, 'value');

4. WeakSet: колекція унікальних об'єктів, які можуть бути garbage collected.
   const weakSet = new WeakSet();
   const obj = {};
   weakSet.add(obj);
*/
