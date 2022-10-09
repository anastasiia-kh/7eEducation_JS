// Створити об'єкт "Документ", де визначити властивості "Заголовок, тіло, футер, дата". 
//Створити об'єкт вкладений об'єкт - "Додаток". 
//Створити об'єкт "Додаток", вкладені об'єкти, "Заголовок, тіло, футер, дата". 
//Створити методи для заповнення та відображення документа.

let doc = {
    title: 'title1',
    body: 'body1',
    footer: 'footer1',
    date: 'date1',
    addition: {
        title: { 
            title: 'title2'
        },
        body: {
            body: 'body2'
        },
        footer: {
            footer:'footer2'
        },
        date: {
            date: 'date2'
        },
    },
};

//проходжусь по першому рівню вкладеності
for (let key in doc){

    //перевіряю чи є в вкладеності об`єкт
    if  (typeof doc[key] == 'object'){
        document.write(key + '</br>');

        //проходжусь по другому рівню вкладеності
        for (let key1 in doc[key]){
            let doc1 = doc[key];

            //перевіряю чи є в вкладеності об`єкт
            if  (typeof doc1[key1] == 'object'){
                document.write('__' + key1 + '</br>');
                
                let doc2 = doc1[key1];
                for (let key2 in doc1[key1]){
                    document.write('____' + key2 + ":" + doc2[key2] + '</br>');
                }
            }
        }
        
    }  else {
        document.write(key + ":" + doc[key] + '</br>');
    }
    
};

