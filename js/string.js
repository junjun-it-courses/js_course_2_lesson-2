let str = "Привет";

console.log( str, typeof str );

let str2 = 'Одинарные кавычки тоже подойдут';

console.log(str2, typeof(str2) );

let phrase = `Обратные кавычки позволяют ${str} встраивать переменные`;

console.log( phrase )

let phrase2 = 'Обратные кавычки позволяют ' + str + ' встраивать переменные' ;

console.log( phrase2 )
