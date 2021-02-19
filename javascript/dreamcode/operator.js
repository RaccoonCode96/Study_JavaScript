'use strict';
// 1. String concatenation(문자 연쇄)
console.log('--------1. String concatenation---------');
console.log('my' + 'cat'); // mycat
console.log('1' + 12); // 12
console.log(`string literals: 1 + 2 = ${1 + 2}`); // string literals: 1 + 2 = 3
// backtick '`'으로 묶으면 single qoute 도 그대로 표출 가능
console.log(`"go"`);

// escape string 
console.log('raccoon\'s book');
// back slash '\'를 사용 해야 backtick 안에서 backtick 표현 가능
console.log("raccoon's\n book"); // \n 개행
console.log("raccoon's\t book"); // \t tab

// 2. Numeric operatiors
console.log('--------2. Numeric operatiors---------');
console.log(1 + 1); // add 더하기
console.log(1 - 1); // substract 빼기
console.log(1 * 3); // multiply 곱하기
console.log(2 / 3); // divide 나누기
console.log(5 % 2); // remainder 나머지
console.log(2 ** 5); // exponentiation 제곱

// 3. Increment and decrement operators
console.log('--------3. Increment and decrement operators----------');
let counter = 2;
const preIncrement = ++counter;
// 1. counter = counter + 1;
// 2. preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++
// 1. postIncrement = counter;
// 2. counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);
// pre vs post 할당 순서가 다름 pre는 할당 전에 증가, post는 할당 후에 증가
// preIncrement: 3, counter: 3
// postIncrement: 3, counter: 4


// 4. Assignment operators
console.log('--------4. Assignment operators----------');
let x = 3;
let y = 6;
x += y; // x = x+y
x -= y; // x = x-y
x /= y; // x = x/y
x *= y; // x = x*y


// 5. Comparison operators
console.log('--------5. Comparison operators----------');
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal

// 6. Logical operators: || (or), && (and), ! (not)
console.log('--------6. Logical operators:----------');
// just use or, and, not in python
const value1 = false; // false
const value2 = 4 < 2; // false

// || (or) : 처음으로 true가 나오면 거기까지 실행하고 멈춤 어차피 true니까

function check() {
    for (let i = 0; i < 10; i++) {
        //wasting time
        console.log('😂');
    }
    return true;
}


const value3 = false; // false
const value4 = 4 > 2; // true

console.log(`or : ${value1 || value2 || check()}`);
console.log('------------------');
console.log(`or : ${value3 || value4 || check()}`);
// 그러므로 무거운 연산인 경우를 나중으로 배치
// 처음에 있을 수록 조건이 쉬운쪽으로 가고 점점더 엄격해지는 순서의 연산으로 배치

// && (and) : 처음으로 false가 나오면 거기까지 실행하고 멈춤 어차피 false니까
console.log('--------and------');
const value5 = true; // true
const value6 = 4 > 2; // true
const value7 = false;
console.log(`or : ${value5 && value6 && check()}`); // 모두 true , 모두 실행
console.log('------------------');
console.log(`or : ${value5 && value7 && check()}`); // false가 나온곳 까지
// 마찬가지로 엄격한 조건이나 연산인 경우 뒤쪽으로


// 그래서 null 값 확인시에 and를 사용하기도 함
// null은 false를 return 하기 때문에
// nullableObject && nullableObject.something
// if (nullableObject != null) {
    // nullableObject.something;
// }

// ! (not) boolean을 반대로 바꾸어 줌
console.log('--------not--------');
console.log(!value1); 


// 7. Equality
console.log('---------7. Equality---------');
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion (It can't use in python)
// 타입 검정을 느슨하게 동등성 비교 검증
console.log(stringFive == numberFive); // true
console.log(stringFive != numberFive); // false
console.log('------------------');

// === stirict equality, no type conversion
// 타입도 신경써서 검증
console.log(stringFive === numberFive); // flase
console.log(stringFive !== numberFive); // ture
// 웬만해서는 strict로 검증할 것
console.log('------------------');

// object equality by reference
const raccoon1 = { name: 'racoon'};
const raccoon2 = { name: 'racoon'};
const raccoon3 = raccoon1;
console.log(raccoon1 == raccoon2); // false
console.log(raccoon1 === raccoon2); // false
console.log(raccoon1 === raccoon3); // true
// 1과 2는 모두 같은 값을 가지고 있지만 다른 reference를 가르키고 있어 다름
// 3은 1을 할당 받고 있기에 똑같음

console.log('--------equality - puzzler----------');

// equality - puzzler
// 0, '' 은 python에서 bool 에서는 False로 표기되지만 비교에서 0, False만 같아 True고 나머지는 모두 다르다.
// 즉, 0 과 '' 다르지만 bool값은 False로 같다 하지만 0 과 False는 같다
// javascript의 경우 == 일때는 어느정도 해석해서 같게 인식하고
// === 일때는 모두 다르다. (type 검토까지 하기 때문에)
console.log(0 == false); // true
console.log(0 === false); // false (0은 boolean이 아니기 때문에)
console.log('' == false); // true
console.log('' === false); // false
console.log(null == undefined); // true
console.log(null === undefined); // false

// 8. If operators
console.log('---------8. If operators---------');
// if, else if , else (if, elif, else - in python)
const name = 'coder';
if (name === 'raccoon') {
    console.log('Welcome, raccoon!');
} else if (name === 'coder') {
    console.log('You are amazing coder');
} else {
    console.log('unknown');
}

// 9. Ternary operator: ?
// conditional ? value1 : value2;
console.log('--------9. Ternary operator: ?----------');
console.log(name === 'raccoon' ? 'yes' : 'no');
// 조건 ? true : false
// 간단할 때만 쓸 것!

// 10. Switch statement
// use for multiple if checks
// use for enum-like value checks
// use for multiple type check in TS
console.log('--------10. Switch statement----------');
const browser = 'IE';
switch (browser) {
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('love you!');
        break;
    default :
        console.log('same all');
        break;        
}
// 가독성에 좋음

// 11. Loops
console.log('--------11. Loops----------');
// while loop, while the condition is truthy
// body code is executed.
let i = 3;
while (i > 0) {
    console.log(`while: ${i}`);
    i--;
}

// do while loop, body code is executed first, then check the condition.
// 코드 먼저 실행시키고 조건을 확인
i = 0;
do {
    console.log(`do while: ${i}`);
    i--;
} while (i > 0);

// for loop, for(begin; condition; step) 
// begin은 처음만 실행되고 condition - code - step 순으로 loop
for (i = 3; i > 0; i--) {
    console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
    // inline variable declaration (지역변수 선언 가능)
    console.log(`inline variable for: ${i}`);
}

// nested loops
// 둘러 싸서 포함하는거 가능
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 3; j++) {
        console.log(`i: ${i}, j:${j}`);
    }
}
// O(n^2) 이기 때문에 cpu에 무리가 감 되도록 피하자

console.log('------quiz-------')
// 1. 0~10까지에서 짝수만 반복 출력 (continue 사용해서)
for (let i = 0; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(`num : ${i}`)
    } 
    // else {
        // continue;
    // }
}

// for (let i = 0; i < 11 ; i++) {
//     if (i % 2 !== 0) {
//         continue;
//     }
//     console.log(`number : ${i}`);
// }

// 2. 0~10까지에서 8까지 도달하면 그만하도록 (break 사용해서)
for (let i = 0; i <= 10; i++) {
    console.log(`${i}`)
    if (i == 8) {
        break;
    }
}

// 주의점 ! 항상 비교는 == 으로 할 것 = 는 할당시 사용
