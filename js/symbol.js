let sym1 = Symbol();
let sym2 = Symbol("foo");
let sym3 = Symbol("foo");


// Symbol("foo") не выполняет приведение  строки "foo"
// к символу. Это выражение создаёт каждый раз новый символ


console.log(sym2, sym3);
console.log(sym2 === sym3);

// Если будете использовать синтаксис конструктора то получим ошибку

// let sym = new Symbol(); // TypeError