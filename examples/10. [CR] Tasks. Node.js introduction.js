//////////////////////### 1 ###////////////////////////////////////
//Create a Node.js http server that will be listening for requests on port 5000 on the local machine.
//The server returns a page containing the name of the current user of the operating system, the type
//of the operating system, the system uptime in minutes(use the os module), the current working
//directory and the name of the server file(use the path module).

// Include required modules
const http = require("http");
const os = require("os");
const path = require("path");

// Create server instance
const server = http.createServer((req, res) => {
  // Get the current user information
  const userInfo = os.userInfo();
  const username = userInfo.username;

  // Get the operating system type
  const osType = os.type();

  // Get the system uptime in minutes
  const uptimeMinutes = Math.floor(os.uptime() / 60);

  // Get the current working directory
  const currentWorkingDirectory = process.cwd();

  // Get the name of the server file
  const serverFileName = path.basename(__filename);

  // Create the response content
  const content = `
        <html>
            <head>
                <title>System Information</title>
            </head>
            <body>
                <h1>System information</h1>
                <p>Current user name: ${username}</p>
                <p>OS type: ${osType}</p>
                <p>System uptime (minutes): ${uptimeMinutes}</p>
                <p>Current working directory: ${currentWorkingDirectory}</p>
                <p>Server file name: ${serverFileName}</p>
            </body>
        </html>
    `;

  // Set the response HTTP headers
  res.writeHead(200, { "Content-Type": "text/html" });

  // Send the response content
  res.end(content);
});

// Start the server
server.listen(5000);

//Пояснення:
//1.Включення модулів: http для створення HTTP-сервера, os для отримання інформації про операційну систему, та path для роботи з шляхами файлів.
//2.Створення сервера: Використовуємо http.createServer() для створення HTTP-сервера.
//3.Отримання інформації: Збираємо інформацію про користувача, тип операційної системи, час роботи системи у хвилинах, поточну робочу директорію та ім'я серверного файлу.
//4.Створення вмісту відповіді: Форматуємо HTML - відповідь з використанням зібраної інформації.
//5.Налаштування заголовків відповіді: Встановлюємо заголовок Content-Type на text/html.
//6.Відправка відповіді: Використовуємо res.end() для відправки сформованого HTML.
//7.Запуск сервера: Слухаємо порт 5000 на локальній машині, використовуючи server.listen().
//Цей код створює сервер, який слухає запити на порту 5000 та повертає HTML-сторінку з інформацією
//про систему, не виводячи повідомлення в консоль, як вимагається.
