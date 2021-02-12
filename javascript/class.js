'use strict';
// Object-oriendted programming
// class: template
// object: instance of a class
// JavaScript classes
// - introduced in ES6
// - syntactical sugar over prototype-based inheritance(기존의 프로토 타입을 기반으로 문법만 추가됨)

// 예전에 클래스 도입전에는 정의하지 않고, 바로 object를 만들수 있었음 (function을 통해)

// 1. Class declarations
class Person {
    //constructor
    constructor(name, age) {
        // fields
        this.name = name;
        this.age = age;
    }

    // methods
    speak() {
        console.log(`${this.name}: hello!`); // 인스턴스 메소드 인스턴스 변수 this.변수를 사용하기 때문에
    }
}
// constructor 생성자를 통해서 object를 만들때 필요한 데이터를 전달함
// constructor 코드 블럭 안에 fields (this.name, this.age)에 전달하여 할당하는 것임

const raccoon = new Person('raccoon', 26);
console.log(raccoon.name)
console.log(raccoon.age)
raccoon.speak();


// 2. Getter and setters
// 사용자가 중요변수에 접근하지 못하게 하며 또한 받는 입력값에 대한 제한을 위해서 getter and setters를 사용함
// 이것이 바로 class , method, variables(property) 를 캡슐화 시키고 접근에 대해 제한(한정?)을 걸어 커스터 마이징(private) 하는 것! = capsulation
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        // if (value < 0) {
        //     throw Error('age can not be negative')
        // }
        this._age = value < 0 ? 0 : value; // value < 0 으면 0 아니면 value 할당
    }
}

const user1 = new User('Steve', 'Job', -1);
console.log(user1.age) // 사람의 나이가 -1이 불가능
// 1) constructor생성하면서 값 할당시에 setter를 호출하게 됨
// 2) setter안에서 전달된 value를 this.age에 할당함(메모리 업데이트는 안하고)
// 3) 값 할당 -> setter 호출 -> value -> setter 호출 -> 무한 반복 그래서 call stack이 다 찼다고 뜸
// 4) 그래서 getter 와 setter안에서의 변수이름을 다르게 해야함 
// User 클래스에는 3개의 field 존재 firstName, lastName, _age
// 호출시 그냥 _age를 안쓰고 age를 사용하는 것은 _age는 내부적으로만 사용되기 때문


// 3. Fields (public, private)
// Too soon! (edge, chorme, opera 만 private 가능)
// 생성자 constructor를 쓰지 않고 field를 정의가능 -> public (외부에서 접근 가능)
// #을 앞에 붙이면 -> private (class 내부에서만 값이 보여지고 접근 변경가능, 외부에서는 모든 접근 권한이 없음) 
class Experiment {
    publicField = 2;
    #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField); // undefined 

// 4. Static properties and methods
// Too soon!
class Article {
    static publisher = 'Dream Coding'; // 클래스 변수
    constructor(articleNumber) { // instance 변수 : this.articleNumber에서 articleNumber임
        this.articleNumber = articleNumber;
    }

    static printPublisher() { // 클래스 멤버 (메소드)
        console.log(Article.publisher)
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher) // undefined
console.log(Article.publisher)  // static은 class 변수로 인식하기 때문에 클래스에서 호출해야함
Article.printPublisher(); // static이므로 class 메소드로 인식하여 클래스에서 호출
// static 사용시 메모리 절약가능 
// static 없이 method 선언시 this인 인스턴스 변수


// 5. Inheritance
// a way for one class to extend another class
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color!`);
    }

    getArea() {
        return this.width * this.height;
    }
} 

class Rectangle extends Shape {}
// overriding
class Triangle extends Shape {
    getArea() {
        return (this.width * this.height) / 2
    }
    draw() {
        super.draw() // 부모 메서드 호출
        console.log('🔺');
    }
}
const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea())
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea())


// 6. Class checking: instanceOf
// 좌측의 instance object가 우측의 클래스를 이용해서 만들어 졌는지 확인 -> false true값으로 return 
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object); // 우리가 만든 모든 클래스는 object class를 상속 받은것임
// ctrl 누르고 클릭하면 정의된 부분으로 갈 수 있음
// Object안에 선언된 함수들(내장 함수) 이름을 똑같이 overiding도 가능함 