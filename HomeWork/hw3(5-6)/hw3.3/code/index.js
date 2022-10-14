//перевірка чи відображаються елементи з файлу data
console.log(data);
//була перевірка чи масив повертає
// console.log(Array.isArray(data));


//перебираю кожен елемент масиву
//знаходжу id
//знаходжу comment
//знаходжу автора
//знаходжу email
data.forEach(function (a) {
    let tr = `
    <tr> 
    <td>
    ${a.id}
    </td> 
    <td>
    ${a.body}
    </td> 
    <td>
    ${a.name}
    </td> 
    <td>
    ${a.email}
    </td> 
    </tr>
    `

    //створюю нову змінну куди записую getElementById, у мене виникала помилка тому, щоб полегшити собі пошук розбила на частини
    var element = document.getElementById('content');
    //створюю строки в таблиці
    element.innerHTML += tr
});