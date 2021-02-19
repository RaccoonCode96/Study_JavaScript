'use strict';

// Array (list in python)

// 1. Declaration
console.log("------1. Declaration------")
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position 
console.log("------2. Index position ------")
// 데이터 삽입, 삭제, 검색, 정렬을 어떻게 하는지가 중요함
const fruits = ['🍎', '🍌'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[fruits.length - 1]); // 배열의 마지막 숫자

// 3. Looping over an array
console.log("------3. Looping over an array ------")
// a. for
for (let i=0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
// b. for of
for (const fruit of fruits) {
    console.log(fruit);
}

// c. forEach
// 해당 배열의 value, index, array를 받을수 있는데 그것을 활용해서 반복시킬수 있는 함수를 만들수 있음
fruits.forEach((fruit) => console.log(fruit));
console.log('---')
fruits.forEach(function (fruit, index, array) {
    console.log(fruit, index, array);
});
// fruits배열의 fruit라는 이름의 매개변수인 value 형태를 가지고 원하는 함수를 구현

// 4. Addtion, deletion, copy
console.log("------4. Addtion, deletion, copy ------");
// push : add an item to the end (append in python)
fruits.push('🍓','🍑');
console.log(fruits);

// pop : remove an item to the end
fruits.pop();
console.log(fruits);
fruits.pop();
console.log(fruits);

// unshift : add an item to the begining
fruits.unshift('🍓','🍑');
console.log(fruits);
// shift : remove an item to the begining
fruits.shift();
console.log(fruits);
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push
// shift, unshift는 위치를 모두 변경해 줘야해서 느림

// splice : remove an item by index position
// parameter hint에 ? parm은 선택이라는 뜻(필수x)
// splice(index start : number, deleteCount?: number) : string
fruits.push('🍓','🍑','🍋');
console.log(fruits);
fruits.splice(1, 1); // count number가 없으면 index num 부터 다 지움
console.log(fruits); 
fruits.splice(1, 1, '🍏','🍉'); // 지우고 그자리에 값 추가도 가능
console.log(fruits);

// combine two arrays
const fruits2 = ['🍐','🥥'];
const newFruits = fruits.concat(fruits2); // fruits 끝에 붙임
console.log(newFruits);

// 5. Searching
console.log("------5. Searching ------");
// indexOf : find the index (앞에서 부터)
console.log(fruits);
console.log(fruits.indexOf('🍎')); // return index of specific value
console.log(fruits.indexOf('🍉'));
console.log(fruits.indexOf('🍄')); // 없을때 -1

// includes
console.log(fruits.includes('🍉')); // check specific value in array -> boolean
console.log(fruits.includes('🍄'));

// lastIndexOf (끝에서 부터)
fruits.push('🍎') // 중복값을 가지는 경우
console.log(fruits);
console.log(fruits.indexOf('🍎')); // 0 (제일 첫번째로 만나는 값의 index return)
console.log(fruits.lastIndexOf('🍎')); // 5 (제일 마지막으로 만나는 값의 index return)







