'use strict';

// Q1. make a string out of an array
console.log(' Q1. make a string out of an array')
{
const fruits = ['apple', 'banana', 'orange'];
console.log(fruits.toString()); // apple,banana,orange
console.log(fruits.join());
console.log(fruits.join('|'));
const k = false
console.log(typeof(k))
console.log(k.toString())
}




console.log('')
console.log('Q2. make an array out of a string')
// Q2. make an array out of a string
{
const fruits = '🍎,🥝,🍌,🍒'
console.log(fruits.split(','))
}




console.log('')
console.log('Q3. make this array look like this : [5, 4, 3, 2, 1]')
// Q3. make this array look like this : [5, 4, 3, 2, 1]
{
const array = [1, 2, 3, 4, 5];
console.log(array.reverse()); // reverse 접근만 해도 영향을 줌
console.log(array);
}




console.log('')
console.log('Q4. make new array without the first two elements (변형하면 안됨)')
// Q4. make new array without the first two elements (변형하면 안됨)
{
// 변형 하는 경우
const array = [1, 2, 3, 4, 5];
array.splice(0, 2)
console.log(array)
const array1 = [1, 2, 3, 4, 5];
array1.shift();
array1.shift();
console.log(array1);
// 변형 안하는 경우
const array3 = [1, 2, 3, 4, 5];
console.log(array3.slice(2))
console.log(array3.slice(2, 5)) // slice에서 end index는 배제됨
console.log(array3)
}

class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}
const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
    // new Student('F', 30, true, 90), // filter 확인용
];





console.log('')
console.log('Q5. find a student with the score 90')
// Q5. find a student with the score 90
{ // 내가 한거 // filter 은 모두 찾아서 Array 만듦
const scores = students.filter((Student) => Student.score === 90);
// console.log(scoreSt);
console.log(scores.pop());
}
{ // 강의에서 한거 // find는 처음 찾은 것을 return
const score90 = students.find((Student) => Student.score === 90);
console.log(score90);
}




console.log('')
console.log('Q6. make an array of enrolled students')
// Q6. make an array of enrolled students
{
const enrolled = students.filter((Student) => Student.enrolled == true);
console.log(enrolled);
// console.log(students); // 원본 지장 없음
}




console.log('')
console.log("Q7. make an array containing only the students' scores")
// Q7. make an array containing only the students' scores
// result should be : [45, 80, 90, 66, 88]
{
const scores = students.map((Student) => Student.score);
console.log(scores);
// console.log(students) // 원본 지장 없음
}




console.log('')
console.log("Q.8 check if there is a student with the score lower than 50")
// Q.8 check if there is a student with the score lower than 50
{ // 내가 한거
const check = students.some((Student) => Student.score < 50);
console.log(check);
}
{ // 강의에서 한거 (and로 or 연산하고 싶으면 조건 반대로 하고 출력값도 반대로)
const check = !students.every((Student) => Student.score >= 50);
console.log(check);
}




console.log('')
console.log("Q.9 compute students' average score")
// Q.9 compute students' average score
{ // 내가 한거 (map, reduce) reduce는 피보나치 수열임
const scores = students.map((Student) => Student.score);
const average = scores.reduce((prev, curr) => {
    return (prev+curr)
}) / scores.length;
console.log(average);
}

{ // 내가한거 (map , for of loop)
const scores = students.map((Student) => Student.score);
let sum = 0;
for (let score of scores) {
    sum += score; 
};
const average = sum / scores.length
console.log(average)
}

{ // 강의 (reduce) // 첫번째 값 param 위치 조심! reduce(func, initial)
const average = students.reduce((prev, curr) => {
    return (prev+curr.score)
}, 0) / (students.length)
console.log(average);
}





console.log('')
console.log('Q.10 make a string containing all the scores')
// Q.10 make a string containing all the scores
// result should be : '45, 80, 90, 66, 88'
{
const scores = students.map((Student) => Student.score);
console.log(scores.join())
}





// Bonus! do Q10 sorted in asending order
console.log('')
console.log('Bonus! do Q10 sorted in asending order')
// result should be : '45, 66, 80, 88, 90'

{ // 내가 한거 // 결과 음수 a가 앞으로감 
// sort 만으로
const scores = students.map((Student) => Student.score);
const sort_scores = scores.sort((a, b) => {
    return a - b;
}); 
console.log(sort_scores.join())
}

{ // sort, if 이용해서
const scores = students.map((Student) => Student.score);
const sort_scores = scores.sort((a, b) => {
    if (a < b) {
        return -1;
    } else if (a > b) {
        return +1;
    } else {
        return 0;
    }
}); 
console.log(sort_scores.join())
}

{// 강의 (코드 가독성 굳굳 리얼)
const result = students
    .map((student) => student.score)
    .sort((a, b) => a - b)
    .join();
console.log(result);
}