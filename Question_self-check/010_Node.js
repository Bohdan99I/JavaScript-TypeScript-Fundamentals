/*
Що таке Node.js та для чого використовується:

Node.js - це середовище виконання JavaScript, побудоване на движку V8 від Google Chrome. Node.js дозволяє виконувати JavaScript поза браузером, що робить його корисним для серверного програмування, побудови мережевих застосунків та автоматизації задач.
*/

/*
Яка відмінність JavaScript в Node.js та в браузері:

1. Оточення:
   - Node.js: JavaScript виконується на сервері.
   - Браузер: JavaScript виконується на клієнтському пристрої (браузері).

2. Глобальні об'єкти:
   - Node.js: має глобальні об'єкти, такі як `global`, `process`, `require`.
   - Браузер: має глобальні об'єкти, такі як `window`, `document`.

3. Модульна система:
   - Node.js: використовує CommonJS для управління модулями (`require`/`module.exports`).
   - Браузер: використовує ES6 модулі (`import`/`export`).

4. Вбудовані модулі:
   - Node.js: має вбудовані модулі для роботи з файловою системою, мережею та іншими системними функціями.
   - Браузер: обмежений можливостями DOM та Web API.
*/

/*
Що таке модуль в Node.js та як його створити:

Модуль - це окремий блок коду, який можна експортувати та імпортувати в інших частинах програми. В Node.js модулі створюються за допомогою `module.exports` та `require`.

Створення модуля:
   // math.js
   function add(a, b) {
     return a + b;
   }
   module.exports = add;

Імпорт модуля:
   const add = require('./math');
   console.log(add(2, 3)); // 5
*/

/*
Назвіть деякі вбудовані модулі та їх призначення:

1. `fs`: модуль для роботи з файловою системою.
   const fs = require('fs');

2. `http`: модуль для створення HTTP-серверів.
   const http = require('http');

3. `path`: модуль для роботи з шляхами файлів та директорій.
   const path = require('path');

4. `os`: модуль для отримання інформації про операційну систему.
   const os = require('os');
*/

/*
Яка концептуальна відмінність між серверним та клієнтським застосунком:

1. Розташування:
   - Серверний: виконується на сервері.
   - Клієнтський: виконується на клієнтському пристрої (браузері).

2. Обробка даних:
   - Серверний: обробляє запити клієнтів, працює з базами даних, виконує бізнес-логіку.
   - Клієнтський: відповідає за інтерфейс користувача та взаємодію з користувачем.

3. Безпека:
   - Серверний: повинен забезпечувати захист даних та доступ до них.
   - Клієнтський: повинен захищати від шкідливого коду та зловживань.

4. Мережеві запити:
   - Серверний: приймає та обробляє HTTP-запити від клієнтів.
   - Клієнтський: надсилає HTTP-запити до серверів.
*/

/*
Що передається в запиті протоколу HTTP:

1. Стартова лінія:
   - Метод (GET, POST, PUT, DELETE, і т.д.)
   - URL (шлях до ресурсу)
   - Версія HTTP (HTTP/1.1, HTTP/2)

2. Заголовки (Headers): метадані про запит (напр., User-Agent, Accept, Content-Type)

3. Тіло (Body): дані запиту, передаються у методах POST, PUT (необов'язково).
*/

/*
Що передається у відповіді протоколу HTTP:

1. Стартова лінія:
   - Версія HTTP (HTTP/1.1, HTTP/2)
   - Код статусу (200 OK, 404 Not Found, і т.д.)
   - Повідомлення статусу (OK, Not Found, і т.д.)

2. Заголовки (Headers): метадані про відповідь (напр., Content-Type, Content-Length)

3. Тіло (Body): дані відповіді, такі як HTML, JSON, зображення (необов'язково).
*/

/*
Які модулі можна використати для створення серверного застосунку:

1. `http`: базовий модуль для створення HTTP-серверів.
   const http = require('http');

2. `express`: популярний фреймворк для створення серверних застосунків.
   const express = require('express');
*/

/*
Яким чином можна повернути JSON обʼєкт із сервера:

Використовуючи модуль `http`:
   const http = require('http');
   const server = http.createServer((req, res) => {
     res.setHeader('Content-Type', 'application/json');
     res.end(JSON.stringify({ message: 'Hello, World!' }));
   });
   server.listen(3000);

Використовуючи фреймворк `express`:
   const express = require('express');
   const app = express();
   app.get('/', (req, res) => {
     res.json({ message: 'Hello, World!' });
   });
   app.listen(3000); */
