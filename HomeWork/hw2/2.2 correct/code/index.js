let style = ['Джаз', 'Блюз'];
// Створюю нову змінну, надаю їй значення середини масиву (масив/2 приведене у число і окрулено в меншу сторону)
const midlArray = Math.floor(style.length / 2);
// Видаляю середній елемент і вставляю на його місце новий
style.splice(midlArray, 1, " Класика");
// Вивожу новий масив на сторінку
document.write(style + "<br>" + "<br>");

// Видаляю і вивожу перший елемент масиву, за тим вивожу змінений масив
const firstWord = style.shift()
document.write("Перше слово, яке прибрали - " + firstWord + "<br>" + "<br>");
document.write(style + "<br>");

// Додаю два елементи на початок масиву і виводимо новий масив
style.unshift(" Реп", " Реггі");
document.write(style);

const style2 = [" Джаз", " Блюз"];
style2.push(" Рок-н-ролл");
document.write(style2.splice(Math.floor(style2.length / 2), 1, " Класика"));
