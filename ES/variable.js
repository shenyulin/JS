// 20210207  let和const命令

// 1.同一个作用域内，不能同时用var、let、const声明同名变量/常量标识符
// var count=10;
// let count=8;
// const count=6;
// console.log(count);  //报错：SyntaxError: Identifier 'count' has already been declared


// 2.var声明全局变量，作用域为当前代码块
// var a=10;
// {
//     var a=8;
//     var a=6;
//     var b=2;
//     console.log(a);   //输出6
// }
// console.log(a);  //输出6
// console.log(b);   //输出2


// 3.let声明变量，作用域为当前代码块
// let a=10;
// {
//     let a=8;
//     let b=2;
//     console.log(a);   //输出8
//     console.log(b);   //输出2
// }
// console.log(a);  //输出10
// console.log(b);   //报错：b is not defined


// 5.let：不能重复说声明多次声明同一常量
var a=10;
var a=12;
console.log(a);  // 报错SyntaxError: Identifier 'a' has already been declared

// ------------const-----------------//
// 1.const声明常量，作用域为当前代码块
// const a=10;
// {
//     const a=8;
//     const b=2;
//     console.log(a);   //输出8
//     console.log(b);   //输出2
// }
// console.log(a);  //输出10
// console.log(b);   //报错：b is not defined

// 2.const常量声明时初始化，且值不能改变
// const a=10;
// a=12;
// console.log(a);  // 报错TypeError: Assignment to constant variable.


// 3.const常量声明时必须初始化（只声明不赋值，报错）
// const a;
// console.log(a);  // 报错SyntaxError: Missing initializer in const declaration


// 4.const常量声明时必须初始化，不能换行来赋值
// const a;
// a=12;
// console.log(a);  // 报错SyntaxError: Missing initializer in const declaration

// 5.const：不能重复说声明多次声明同一常量
// const a=10;
// const a=12;
// console.log(a);  // 报错SyntaxError: Identifier 'a' has already been declared