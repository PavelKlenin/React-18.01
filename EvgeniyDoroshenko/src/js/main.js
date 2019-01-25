// Импортируем функцию из module1.js
import {multiple, Developer} from "./module1";
// Импортируем функцию из module2.js
import {hello} from "./module2";

// Функция вывода результатов в HTML
function render(value) {
  let div = document.createElement('div');
  div.innerText = `${typeof(value)}: ${value}`;
  document.body.appendChild(div);
}

// Посмотрим как ведет себя функция из module1.js
let num = multiple(4, 5);
render(num);

// То же для функции из module2.js
let greeting = hello('Potapich');
render(greeting);

let dev = new Developer('jason', 25, ['html', 'css', 'js']);
render(JSON.stringify(dev));