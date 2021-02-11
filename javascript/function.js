"use strict";
// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a values

// 1. Function declaration
console.log('-------1. Function declaration-------')
// function functionName(param1, param1,) { body... return; }
// one function === one thing
// naming: doSometing, command, verb(동사)  // but variable name use noun (명사)
// e.g. createCardAndPoint (wrong e.g) -(seperate)-> createCard, createPoint 
// function is object in JS
function printHello() {
    console.log('Hello');
}
printHello();

function log(message) {
    console.log(message);
}

log('hello!!');
// JS에서는 type이 없기 때문에 input 받는 type지정이 불가 -> 다행히 자동으로 input 받은 숫자는 문자로 변환해서 출력함
log(1234)

// TypeScript 
// TypeScript 사이트 Platyground
// JS의 경우 interface(input, output의 datatype)가 정확히 명시안되어 있어서 프로그램 만들때 문제가 생김 
// TS의 경우 type을 요구하여 좀더 자세한 코드를 짤수 있고, 
// 협업과정이나, 작성한 것을 api로 제공시 TS를 쓰는게 더 명확하고 개발일을 더 쉽게 만들어줌

// 2. Parameters
console.log('-------2. Parameters------')
// premitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj) {
    obj.name = 'coder';
}
// 전달된 obj의 네임을 coder로 바꾸는 함수
const raccoon = { name: 'raccoon' };
changeName(raccoon);
console.log(raccoon);
// object이기 때문에 값 변경이 가능하므로 변경된 사항을 볼수 있음

// 3. Default parameters (added in ES6)
console.log('-------3. Default parameters (added in ES6)-----')
function showMessage(message, from = 'unknown') {
    // if (from === undefined) {
    //     from = 'unknown';
    // }
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');
// parameter default 값 지정 가능


// 4. Rest parameters (added in ES6)
console.log('-------4. Rest parameters (added in ES6)-----')
// ...args 사용시 parameters를 배열 형태로 전달됨
function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
    console.log('-------use \'of\'-----')
    for (const arg of args) {
        console.log(arg);
    }
    console.log('-------use \'forEach()\'-----')

    args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding', 'raccoon')
// python의 for in 처럼 for of를 js사용가능
// python의 pop 처럼 forEach를 python에서 사용가능
// function은 object이기 때문에 아까 만든 printAll.하면 해당하는 속성을 볼 수 있음


// 5. Local scope
// 밖에서는 안이 보이지 않고
// 안에서만 밖을 볼 수 있다.
console.log('-----5. Local scope-------')
let globalMessage = 'global'; // global variable
function printMessage() {
    let message = 'hello';
    console.log(message); // local variable
    console.log(globalMessage);
    function printAnother() {
        console.log(message);
        let childMessage = 'Hello';
    }
    // console.log(childMessage) // error , 공유 불가
    // return 이 없으면  자동으로 return undefined; 가 들어 가있는 것과 같다. 그래서 생략이 가능함
}
printMessage();
// 함수(부모)안에 함수(자식 가능 부모의 변수를 자식함수는 공유함(이를 클로저'closure' 라고 함), 
// 하지만, 반대로 자식변수를 부모 변수를 공유하지 않음 

// 6. Return a value
console.log('-----6. Return a value-------')
function sum(a, b) {
    return a + b;
}
const result = sum(1, 2); //3
console.log(`sum: ${sum(1, 2)}`);

// 7. Early return, early exit
// bad
// 블록안에서 많은 logic line을 작성하는 것은 가독성이 떨어짐
function upgradeUser(user) {
    if (user.point > 10) {
        // long upgrade logic...
    }
}
// good
// 필요한 조건 범위의 로직을 먼저 작성하지 말고
// 예외가 되는 조건의 범위를 빨리 return을 통해 빠져 나오게 하는것을 먼저 작성하여 가독성을 올리는 것이 좋다.
// 값이 undifined , -1 ,  조건이 맞지 않은 경우 빨리 return 함 (undifined 출력)
function upgradeUser(user) {
    if (user.point <= 10) {
        return;
    }
    // logic upgrade logic... 
}


// First-Class function
// functions are treated like any other variable
// can be assigned as a value to variable (변수와 마찬가지로 변수에 할당 가능함)
// can be passed as an argument to other functions. (function의 parameter로 전달가능하고)
// can be returned by another function (return 값으로도 사용가능함)

// 1. Function expression
console.log('-----1. Function expression-------')
// a function declaration can be called earlier than it is defined. (hoisted)
console.log(multiple(3, 5))
function multiple (x, y) {
    return x * y;
}
// a function expression is created when the execution reaches it.
const print = function() { // anonymous function <-> named function
    console.log('print');
}; // 이름 없이 함수 선언과 동시에 변수에 할당도 되고,  이름 있이 할당도 가능 
print();
const printAgain = print; // 다른 변수에 할당 가능
printAgain();
const sumAgain = sum; // sum함수를 sumAgain 변수에 할당하고 
console.log(sumAgain(1, 3)); // 호출 가능

// 2. Callback function using function expression
console.log('-----2. Callback function using function expression-------')
function randomQuiz(answer, Yes, No) {
    if (answer === 'love you') {
        Yes(); // paramer이기 때문에 그냥 함수처리만 되게 해도 되고, 굳이 넣을 함수와 이름이 같을 필욘 없다.
    } else {
        No();
    }
}
// 기존의 함수를 불러와 parameter 사용하는 경우 그 함수를 Callback function이라고 함 
// 즉, parmeter로 기존의 함수를 불러와 조건에 따라 함수를 return
const printYes = function() { // anonymous function
    console.log('Yes!');
};
const printNo = function print() { // named function
    console.log('No!');
    // print(); // 근데 무한 루트라서 call stack 이 꽉차서 error 발생함
};
randomQuiz('Wrong', printYes, printNo)
randomQuiz('love you', printYes, printNo)
// named function
// named function is better debugging in debugger's stack traces
// 자신 함수선언 안에서 스스로를 호출할때 사용하기도 함

// Arrow function
console.log('-----Arrow function-------')
// always anonymous (항상 이름이 없는 함수를 간결하게 만들어줌)
// base
// const simplePrint = function () {
//     console.log('simplePrint!');
// };
// Arrow form
// 함수 이름 없이, 블럭표시 없이, 한줄에 화살표 모양으로 가능
const simplePrint = () => console.log('simplePrint!');
const add = (a, b) => a + b; 
// Arrow -> function expression
// const add = function (a, b) {
//     return a + b;
// };
// code line이 많을 경우 Arrow function

const simpleMultiply = (a, b) => {
    // do something more
    return a * b
}; // 단, 블럭 사용시 항상 return을 통해 값을 불러오게 해야함


// IIFE: Immediately Invoked Function Expression
// console.log('-----IIFE-------')
// 원래는 함수 선언후 호출 해야하는데
// function hello () {
//     console.log('IIFE')
// }
// hello();

// 선언하면서 호출 가능
(function hello () {
    console.log('IIFE');
})();


// quiz
const calculate = (command, a, b) => {
    if (command == 'add' || 'substract' || 'divide' || 'multiply' || 'remainder') {
        if (command == 'add') {
            return a + b;
        } else if (command == 'substract') {
            return a - b;
        } else if (command == 'divide') {
            return a / b;
        } else if (command == 'multiply') {
            return a * b;
        } else if (command == 'remainder') {
            return a % b;
        }; 
    } else { 
        console.log('Wrong cmd or check the parameters!')
    };
}; 

console.log(calculate('add', 5, 3))
// string으로 안하고 바로 그냥 치고 싶으면 command 부분을 callback  함수로 모두 만들어서 하면 됨



