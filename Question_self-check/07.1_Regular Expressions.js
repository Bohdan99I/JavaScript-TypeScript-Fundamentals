/*
Regular Expressions:

Для яких завдань використовуються регулярні вирази:
Регулярні вирази використовуються для:
1. Пошуку тексту в рядках.
2. Заміни тексту в рядках.
3. Валідації введення (наприклад, перевірка формату email).
4. Парсингу та обробки текстових даних.
*/

/*
Яка різниця між RegExp.test() та RegExp.exec():
- RegExp.test(string): перевіряє, чи відповідає рядок регулярному виразу, повертає true або false.
- RegExp.exec(string): виконує пошук регулярного виразу в рядку, повертає масив з інформацією про знайдений текст або null, якщо збігів немає.
*/

/*
Які є квантифікатори в регулярних виразах:
1. * - нуль або більше разів.
2. + - один або більше разів.
3. ? - нуль або один раз.
4. {n} - рівно n разів.
5. {n,} - не менше n разів.
6. {n,m} - від n до m разів.
*/

/*
Що означають символи ^ та $ в регулярному виразі:
- ^ - початок рядка.
- $ - кінець рядка.
*/

/*
Які є прапори в регулярних виразах:
1. g - глобальний пошук.
2. i - пошук без врахування регістру.
3. m - багаторядковий пошук.
4. s - дозволяє . відповідати символам нового рядка.
5. u - включає підтримку повних Юнікод.
6. y - "стійкий" режим, пошук від позиції в рядку.
*/

/*
Що виконує прапор m:
Прапор m (multiline) дозволяє ^ та $ відповідати на початку та в кінці кожного рядка в тексті, а не тільки на початку та в кінці всього тексту.
*/

/*
Які є метасимволи в регулярних виразах:
1. . - будь-який символ, крім нового рядка.
2. \d - будь-яка цифра.
3. \D - будь-який символ, крім цифри.
4. \w - будь-яка буква, цифра або підкреслення.
5. \W - будь-який символ, крім букви, цифри або підкреслення.
6. \s - будь-який пробільний символ.
7. \S - будь-який символ, крім пробільного.
8. \b - межа слова.
9. \B - не межа слова.
*/

/*
Що таке групування, для чого воно може бути використане:
Групування (групи) в регулярних виразах створюються за допомогою круглих дужок () і дозволяють:
1. Застосовувати квантифікатори до групи символів.
2. Захоплювати підрядки для подальшого використання (напр. для заміни або аналізу).
*/

/*
Яким чином можна отримати всі входження в тексті певного регулярного виразу:
Використовувати метод match() з прапором g:
const matches = text.match(/regex/g);
*/

/*
Яким чином можна замінити в тексті частину, яка відповідає регулярному виразу:
Використовувати метод replace():
const newText = text.replace(/regex/g, 'replacement');
*/
