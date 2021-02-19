'use strict';

// Objcects
// one of the JavaScript's data types.
// a collection of related data and/or functionality
// Nearly all objects in JavaScript are instances of Object

// const name = 'raccoon';
// const age = 4;
// print(name, age);
// function print(name, age) {
//     console.log(name);
//     console.log(age);
// }

// 오브젝트를 활용하여 관리하면 더 편함
function print(person) {
    console.log(person.name);
    console.log(person.age);
}

// 1. Literals and properties (상수값, 상수)
console.log('1. Literals and properties')
// object 만드는 법
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // new라는 키워드로 생성`object constructor` syntax (class를 이용해서 만들수 있음)

const raccoon = {name: 'raccoon', age: 4}; // 클래스가 없어도 바로 오브젝트 생성 가능
print(raccoon);

// JavaScript는 dynamically typed language 이기 때문에 동적으로 type이 runtime(프로그램 동작시)때 결정됨
raccoon.hasJob = true; // property를 추가 가능 (이미 정의 했음에도 불구하고)
console.log(raccoon.hasJob);

delete raccoon.hasJob; // 삭제도 가능
console.log(raccoon.hasJob);
// object = { key : value};

// 2. Computed properties (계산된 변수)
console.log('2. --------------Compyted properties-------------')
// key should be always string
console.log(raccoon.name); // dot '.'을 통해서 변수 접근 가능함
console.log(raccoon['name']); // string 형태 받아 변수에 접근 가능함
raccoon['hasJob'] = true;
console.log(raccoon.hasJob);
// 실시간으로 key를 받아오고 싶을 때 []를 사용하고 평소에는 dot을 사용하는게 맞음

function printValue(obj, key) {
    // console.log(obj.key); // obj안에 key라는 property가 들어 있는가 찾아보는 것임 (매개변수를 못받음)
    console.log(obj[key]) // 이렇게 넣음으로서 파라미터를 받아와서 응용가능 (동적으로 key의 value를 받고자 할때 사용가능)
}
 printValue(raccoon, 'name'); 
 printValue(raccoon, 'age'); 

 // 3. Property value shorthand
console.log(' --------------3. Property value shorthand-------------')
 // object 생성시 동일한 key값을 계속해서 써서 생성해야하는 불편함이 생김 ->
 // function을 정의 object 생성기를 만듬 -> 기능은 결국 template기능인 class 와 같음
 // 지금은 
const person1 = { name: 'bob', age: 2};
const person2 = { name: 'steve', age: 3};
const person3 = { name: 'dave', age: 4};
const person4 = makePerson('tom', 20);
console.log(person4)
// 과거에 했던 방식
function makePerson(name, age) {
    return {
        name, // name: name, (property이름과 parameter 이름이 같으면 생략해서 object 생성가능)
        age, // age: age,
    };
}

// 4. Constructor Function
console.log(' -------------- 4. Constructor Function-------------')
// 현재 (계산 없이 순수하게 object생성하는 함수 만들때)
// 이름 첫글자 대문자
function Person(name, age) {
    // this = {}; (원리가 생략 된 부분)
    this.name = name;
    this.age = age;
    // return this; (원리가 생략 된 부분)
}
const person5 = new Person('jerry', 34); // object 생성법
console.log(person5)

// 5. in operator: property existence check (key in obj)
console.log(' -------------- 5. in operator-------------')
// 해당하는 오브젝트안에 키가 있는지 없는지 확인하는 것
console.log('name' in raccoon);
console.log('age' in raccoon);
console.log('random' in raccoon);
console.log(raccoon.random); // undefined

// 6. for..in vs for..of
console.log(' -------------- 6. for..in vs for..of-------------')
// for (key in obj) - object에만
// console.clear()
for (const key in raccoon) {
    console.log(key);
}

// for (value of iterable) - Array에만
// 원래 반복문 출력시
const array = [1, 2, 4, 5];
for (let i = 0; i < array.length ; i++) {
    console.log(array[i]);
}
console.log(' -------------- 6. for..in vs for..of-------------')
// for of 사용시
for (const value of array ) {
    console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'ellie', age: '20'};
const user2 = user;
user2.name = 'coder'
console.log(user); // user의 name이 coder로 바뀜

// old way
const user3 = {};
for (const key in user) {
    user3[key] = user[key];
}
console.log(user3);

// Object.assign
const user4 = {}; 
Object.assign(user4, user);
console.log(user4);
const user5 = Object.assign({}, user);
console.log(user5);

// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big'};
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color); // 두개 assign하면 마지막에 할당한 값으로 update(뒤에 갈수록 우선순위가 높음)
console.log(mixed.size);
