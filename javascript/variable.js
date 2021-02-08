// 1. Use strict
// added in ES 5
// use this for Valina Javascript

'use strict';

// 2. Variable
// let (added in ES6)
// 어플리케이션 마다 제한적으로 메모리가 할당됨
// 값은 메모리에 할당
// let을 통해서 메모리를 가리킬수 있음(point)
let name = 'raccoon';
let globalName = 'globalName'
console.log(name);
name = 'hello';
console.log(name);
console.log(globalName);

// 3. block scope
// {}를 이용해서 안에 코드를 넣으면 블록 밖에서는 코드에 접근 못함
// 이와 반대로 블럭 밖에서 바로 정의하는 변수 : global scope (어디에서나 접근 가능, 블록 안에서도)
// global 메모리를 할당 하기 때문에 class, function, if, for loop 에서만 정의해서 쓰는게 좋음
{
    let name = 'raccoon';
    console.log(name);
    name = 'hello';
    console.log(name);
    console.log(globalName);
    
}

// var (don't ever use this!)
// block scope도 무시함
console.log(age);
age = 4 // var의 경우에는 선언하기 전에 값을 할당 할 수 있음 근데 일단은 선언은 해야함
console.log(age);
var age; // var hoisting (move declaration from bottom to top) 제일 위로 올라감

// num = 4;
// let num;

// 3. constants
// favor immutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes
// 한번 할당하면 절대 값을 변경하지 X
// mutable(let) vs immutable(const) 
const daysInWeek = 7;
const maxNumber = 5;

// 4. Variable types
// primitive -> single item(더이상 나누어 질수 없음): number, string, boolean, null, undefined, symbol
// object -> box container(singl item 들을 여러개 묶어서 한 단위로 관리할 수 있는 box)
// function, first-class function(함수도 다른 데이터 타입 처럼 변수에 할당이 가능하고 parameter(인자)로 전달도 되고 return타입으로 불러올수도 있음)
// 다른 Java, C 언어의 경우 할당하고자 하는 값의 메모리 크기에 따라서 사용하는 함수가 다른데 JS의 경우 number로 통일 되어 있으며 심지어 number 선언도 필요가 없다.

const count = 17; // integer
const size = 17.113; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${count}, type: ${typeof count}`); // 모두 number type으로 들어감

// number - special numeric values: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(`value: ${infinity}, type: ${typeof infinity}`); // 양의 무한
console.log(`value: ${negativeInfinity}, type: ${typeof negativeInfinity}`); // 음의 무한
console.log(`value: ${nAn}, type: ${typeof nAn}`); // 숫자가 아님

//bigInt (fairly new, don't use it yet)
// 숫자 끝에 n을 붙여서 모두 표현 가능 (chrome , firefox만 가능한데 이제 좀 풀린거 같음 )
const notbigInt = 1234567890123456789012345678901234567890; // over (-2**53 ~ 2**53)
const bigInt = 1234567890123456789012345678901234567890n; // over (-2**53 ~ 2**53)
const overbigInt = 9917199254740990000080; // over (-2**53 ~ 2**53)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);
console.log(`value: ${notbigInt}, type: ${typeof notbigInt}`);
console.log(`value: ${overbigInt}, type: ${typeof overbigInt}`);

// string, (백틱 사용)
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}`; // template literals(string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// boolean
// false: 0, null, undefined, NaN, '' 그에 반해 python에서는 보통 undfined, NaN 등은 error처리함
// true : any other value
const canRead = true;
const test = 3 < 1; // false
const k = NaN
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);
console.log(`value: ${k}, type: ${typeof k}`);

//null (null로 값이 할당 되어 있음 type : object)
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

//undefined (선언은 되었지만 값이 아무것도 없음)
let x;
let y = undefined;
console.log(`value: ${x}, type: ${typeof x}`);
console.log(`value: ${y}, type: ${typeof y}`);

//symbol , create unique identifiers for objects (고유한 식별자가 필요한 경우)
// string을 식별자로 쓰는 경우 다른 파일이나, 모듈에서 동일한 string을 사용할때 같은 식별자로 간주하기 때문에 문제가 됨
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 == symbol2); // false
// 동일한 식별자로 쓰고 싶다면 for 사용
const gsymbol1 = Symbol.for('id');
const gsymbol2 = Symbol.for('id');
console.log(gsymbol1 == gsymbol2); // true
// symbol출력시 항상 description으로 변환해서 출력해야함
// console.log(`value: ${symbol1}, type: ${symbol1}`); // error
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`); // 정상 출력

// object, real-life objects, data structure
const raccoon = { name: 'raccoon', age: 26 };
// const 로 선언된 raccoon의 경우 변수이름을 바꿀수는 없지만 객체의 key에 접근하여 value를 바꿀수 있음
raccoon.age = 21;



// 5. Dynamic typing: dynamically typed language (Need not defining type) 
// c or java are statically typed language (Need defining type)
// 정의를 안하면 프로토타입을 빠르게 만들어 낼수 있지만 큰 규모인 경우 불리함
let text = 'hello';
console.log(text.charAt(0)); // h (인덱싱)
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`); // 자동으로 type이 바뀜
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`); // 자동으로 int를 string으로 인식하여 바꿈
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`); // 자동으로 string을 int로 인식하여 값을 도출
// console.log(text.charAt(0)); // string인줄 알고 인덱싱 하였으나 어느순간 number로 바뀌어 runtime error발생
// 그래서 TS 가 나옴










