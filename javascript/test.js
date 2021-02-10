'use strict';

// console.log(globalName); // error
// globalName = 3
// console.log(globalName); // error
let globalName = 'globalName';


{
   let name = 'raccoon';
    console.log(name);
    console.log(globalName);
    console.log(age); // undifined 출력

}

console.log(name)
console.log(globalName);
console.log(age); // undifined 로 결과 출력
age = 4 // 변수에 값 할당 먼저 함
console.log(age); // 4 출력
var age; // var만 있으면 무조건 호출 가능해짐 순서 상관 없이

const k = 'str'
console.log(k + 'string'); // strstring
console.log(k + 3); // str3
console.log(k * 3); // NaN
console.log(k / 3); // NaN
console.log(k - 3); // NaN
