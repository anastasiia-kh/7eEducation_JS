document.write('<span>', "массив", '</span>');
document.write('<br>');

let arr = ['Джаз', 'Блюз'];
document.write(arr);

document.write('<br>');
document.write('<span>', "додаємо Рок-н-рол + перевіряємо, що це массив", '</span>');
document.write('<br>');

// додаємо Рок-н-рол + перевіряємо, що це массив
arr.push('Рок-н-рол');
if (Array.isArray(arr)) {
    document.write(arr)
} else {
    document.write("<div> Error </div>")
}

document.write('<br>');
document.write('<span>', "міняємо середнє значення на Класика", '</span>');
document.write('<br>');

// міняємо середнє значення на Класика
arr.splice(arr.length / 2, arr.length / 2, "Класика");
document.write(arr);

document.write('<br>');
document.write('<span>', "видадяємо пеший елемент і відображаємо його", '</span>');
document.write('<br>');

// видадяємо пеший елемент і відображаємо його
let thirdArr = arr.splice(0, 1);
document.write(thirdArr);

document.write('<br>');
document.write('<span>', "додаємо Реп і Реггі на початок", '</span>');
document.write('<br>');

// додаємо Реп і Реггі на початок
arr.splice(0, 0, 'Реп', 'Реггі');
document.write(arr);


