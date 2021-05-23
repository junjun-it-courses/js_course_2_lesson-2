// Инициализация объекта

// let user1 = new Object();   // синтаксис "конструктор объекта"
// let user2 = {};             // синтаксис "литерал объекта"


// При использовании литерального синтаксиса мы сразу
// можем поместить в объект несколько свойств в виде пар
// «ключ: значение»:

let someUser = {   // literalSyntaxObject
    name: "John",  // под ключом "name" хранится значение "John"
    age: 30,        // под ключом "age" хранится значение 30
}

// console.log(someUser, someUser.name) // Обращение
//
someUser.gender = 'female';
// console.log(someUser)

// console.log(someUser)
delete someUser.name // Удаление свойства
// console.log(someUser)



// Ключ объекта может состоять из нескольких слов

let anotherUser = {
    'user name': 'John',
    lastName: 'Doe'
}

// console.log(anotherUser.user name);
// console.log(anotherUser, anotherUser['user name']);


// имя свойства может являться переменной или выражением

const someObjKey = 'string_' + 28;

// console.log(someObjKey)

let varObjectName = {
    [someObjKey]: 'Random value',
    name: 'Pablo'
}

// console.log(varObjectName);
// console.log(varObjectName[someObjKey]);



// Можно не указывать значение ключа
// объекта если оно лежит в одноименной переменной

let info = 'some info about me';

let obj = {
    a: 1,
    name: 'Vlad',
    gander: 'male',
    'birth date': '01.02.1997',
    info
}

// console.log(obj);


// Объекты которые лежат в переменной const можно изменять

// const constObject = {
//     name: 'Helen'
// }
//
// console.log(constObject)
//
// constObject.name = 'vlad'
//
// console.log(constObject)

// constObject = {firstName: 'vlad'}

// console.log(typeof obj)