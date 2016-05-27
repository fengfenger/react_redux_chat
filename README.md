# test

文档地址：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions

箭头函数就是个是简写形式的函数表达式,并且它拥有词法作用域的this值.箭头函数总是匿名的.

语法EDIT
// Basic syntax: (param1, param2, paramN) => { statements } (param1, param2, paramN) => expression // equivalent to:  => { return expression; } // Parentheses are optional when there's only one argument: (singleParam) => {statements } singleParam => { statements } // A function with no arguments requires parentheses: () => {statements } // Advanced: // Parenthesize the body to return an object literal expression: params => ({foo: bar}) // Rest parameters are supported (param1, param2, ...rest) => { statements }
Detailed syntax examples can be seen here.

描述EDIT
See also "ES6 In Depth: Arrow functions" on hacks.mozilla.org.

Two factors influenced the introduction of arrow functions: shorter functions and lexical this.

参数

param
若干个参数名,0个参数需要使用()来表示,一个参数的时候小括号可以省略(比如foo => 1).
statements or expression
多条语句需要使用大括号围起来.一条表达式不需要大括号,且此时该表达式的值就是此函数的返回值.
更短的函数

In some functional patterns, shorter functions are welcome. Compare:

var a = [
  "Hydrogen",
  "Helium",
  "Lithium",
  "Beryl­lium"
];

var a2 = a.map(function(s){ return s.length });

var a3 = a.map( s => s.length );
this 的词法

Until arrow functions, every new function defined its own this value (a new object in case of a constructor, undefined in strict mode function calls, the context object if the function is called as an "object method", etc.). This proved to be annoying with an object-oriented style of programming.

function Person() { // The Person() constructor defines `this` as an instance of itself.   this.age = 0; setInterval(function growUp() { // In nonstrict mode, the growUp() function defines `this` // as the global object, which is different from the `this` // defined by the Person() constructor.   this.age++; }, 1000); } var p = new Person();




英文文档 http://redux.js.org/

中文文档http://camsong.github.io/redux-in-chinese/

redux-thunk https://github.com/gaearon/redux-thunk
react测试文档 https://facebook.github.io/react/docs/test-utils.html
immutablejs https://facebook.github.io/immutable-js/docs/
awesome-redux: https://github.com/xgrommx/awesome-redux
react-router: https://github.com/rackt/react-router
redux-devtools:  https://github.com/gaearon/redux-devtools


博客: glexe.com
微博:  weibo.com/eisneim
知乎:  https://www.zhihu.com/people/eisneim


