/*
Що таке DOM:

DOM (Document Object Model) - це об'єктна модель документа, яка представляє структуру HTML або XML документа у вигляді дерева об'єктів. Кожен елемент документа є вузлом цього дерева.
*/

/*
Для чого потрібно взаємодіяти з DOM через JS:

Взаємодія з DOM через JavaScript дозволяє:
- Динамічно змінювати вміст сторінки.
- Реалізовувати інтерактивність.
- Маніпулювати елементами документа (додавати, видаляти, змінювати атрибути).
- Обробляти події користувача (клік, наведення, введення даних).
*/

/*
Які є способи пошуку елемента на сторінці:

1. document.getElementById(id): пошук елемента за його id.
2. document.getElementsByClassName(className): пошук елементів за класом.
3. document.getElementsByTagName(tagName): пошук елементів за тегом.
4. document.querySelector(selector): пошук першого елемента, що відповідає CSS-селектору.
5. document.querySelectorAll(selector): пошук усіх елементів, що відповідають CSS-селектору.
*/

/*
В чому різниця між childNodes та children:

- childNodes: повертає колекцію всіх дочірніх вузлів (включаючи текстові вузли, коментарі та елементи).
- children: повертає колекцію тільки дочірніх елементів (ігнорує текстові вузли та коментарі).
*/

/*
Яка різниця між innerHTML та textContent:

- innerHTML: встановлює або отримує HTML вміст елемента, включаючи HTML-теги.
- textContent: встановлює або отримує текстовий вміст елемента без HTML-тегів.
*/

/*
В чому різниця між prepend та before:

- prepend: додає новий вузол як першу дитину всередині елемента.
- before: додає новий вузол перед елементом.
*/

/*
Яким чином можна додати новий елемент на сторінку:

1. Створити новий елемент за допомогою document.createElement(tagName).
2. Встановити необхідні властивості та атрибути для нового елемента.
3. Додати новий елемент до DOM за допомогою appendChild(), prepend(), insertBefore(), або іншого методу.
*/

/*
Яким чином можна змінити атрибути елемента через JS:

1. Використовуючи метод setAttribute(attributeName, value):
   element.setAttribute('id', 'newId');
2. Використовуючи властивості елемента:
   element.id = 'newId';
*/

/*
Яким чином можна змінити CSS класи елемента через JS:

1. Використовуючи властивість className:
   element.className = 'newClass';
2. Використовуючи методи classList:
   element.classList.add('newClass');
   element.classList.remove('oldClass');
   element.classList.toggle('toggleClass');
   element.classList.contains('checkClass');
*/

/*
Яким чином можна видалити елемент зі сторінки:

1. Використовуючи метод remove():
   element.remove();
2. Використовуючи метод removeChild() у батьківського елемента:
   parentElement.removeChild(element);
*/
