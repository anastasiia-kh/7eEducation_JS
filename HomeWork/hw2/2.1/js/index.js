
document.write('<br>');

//порожній прямокутник
for (let i = 1; i <= 10; i++) {
    if (i === 1 || i === 10) {
        document.write('*'.repeat(10));
    } else {
        document.write('*' + '&nbsp;&nbsp;'.repeat(8) + '*');
    }
    document.write('<br>');
}

document.write('<br>');

//заповнений прямокутник
for (let i = 1; i <= 10; i++) {
    document.write('*'.repeat(10));
    document.write('<br>');
}

document.write('<br>');

//рівносторонній трикутник
for (let i = 1; i <= 10; ++i) {
    for (let space = (10 - i); space >= 0; space--) {
        document.write("&nbsp;&nbsp;")
    }
    for (let j = 1; j < i; j++) {
        if (j == 1) {
            document.write('*')
        } else {
            document.write('*' + '*')
        }
    }
    document.write('<br>')
}

document.write('<br>');

//прямокутний трикутник
for (let i = 1; i <= 10; ++i) {
    for (let j = 0; j < i; j++) {
        document.write('*' + "&nbsp;")
    }
    document.write('<br>')
}

document.write('<br>');

//ромб
for (let i = 1; i <= 7; ++i) {
    if (i <= 4) {
        for (let space = (8 - i); space >= 0; space--) {
            document.write("&nbsp;&nbsp;")
        }
        if (i == 1) {
            document.write('*')
        }
        for (let j = 1; j < i; j++) {
            if (j == 1) {
                document.write('***')
            } else {
                document.write('**')
            }
        }
    } else {
        let stars = 6 - i;
        for (let j = 7 - stars; j > 0; j--) {
            document.write("&nbsp;&nbsp;")
        }
        if (i == 7) {
            document.write('*')
        }
        for (let star = stars; star >= 0; star--) {
            if (star == 1) {
                document.write('**')
            } else {
                document.write('***')
            }
        }
    }
    document.write('<br>')
}