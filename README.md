# dynamicList
Project for php-students(practice session)
<pre>

<a href="https://demjanua.github.io/dynamicList/">Look it here</a>

<strong>Task list:</strong>

1. Прочитати завдання;
2. Створити проект на gitHub, в описі(Description) вказати ім*я, скайп, електронну пошту. 
У розділі 'Initialize this repository with a README' поставити галочку.
В випадаючому списку .gitignore вибрати 'Node';
3. Клонувати проект, у папці проекту створити:
    -index.html
    -src/
    -public/
    -css/
    .babelrc
4. Виконати >npm init;
5. Встановити npm мудулі:
    >npm install —save-dev babel-cli
    >npm install —save-dev babel-preset-es2015
    >npm install —save-dev babel-preset-es2016
    >npm install bootstrap@3
6. В іndex.html підключити файл стилів css/main.css;
7. Підключити на сторінку шрифт Open Sans з google fonts;
8. Склонувати файл bootstrap.css з node_modules\bootstrap\dist\css у css/... та підключити його у іndex.html;
9. В .babelrc внести "presets": ["es2016", "es2015"];
10. Створити в index.html базову розмітку з bootstrap grid;
11. Створити контейнер, що міститеме список з n-кількістю пунктів та input[type="search"];
12. У папці src створити list.js з массивом, елементи якого представлені об'єктами з n-кількістю властивостей;
    Обов'язковими є:
    -id
    -href
    -name
    -date
13. Заповнити массив даними(мінімальна кількість елементів масиву 15), зручніше буде працювати з даними на англійській мові;
14. У файлі src/app.js написати функцію render(), що прийматиме 1 аргумент - массив з файлу list.js та повертатиме колекцію DOM елементів з ієрархією, що відповідає html list items;
15. У src/app.js створити BOM event, що відповідатиме за render колекції DOM елементів після завантаження сторінки;
16. Реалізувати динамічний список за пушуком на базі функції render();
17. Транспілювати source code у public/;
18. Виконати git push;
19. Опублікувати проект на gitPage;
20. Скинути посилання у спільний чат;
</pre>

