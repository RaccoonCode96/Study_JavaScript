'use strict';

// Q1. make a string out of an array
{
const fruits = ['apple', 'banana', 'orange'];
console.log(fruits.toString()) // apple,banana,orange
}

// Q2. make an array out of a string
{
const fruits = '🍎,🥝,🍌,🍒'
console.log(fruits.split(','))
}

// Q3. make this array look like this : [5, 4, 3, 2, 1]
{
const array = [1, 2, 3, 4, 5];
console.log(array.reverse())
}

// Q4. make new array without the first two elements
{
const array = [1, 2, 3, 4, 5];
array.splice(0, 2)
console.log(array)
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
];

// Q5. find a student with the score 90
{
const scoreSt = students.filter((Student) => Student.score == 90);
console.log(scoreSt.pop());
}

// Q6. make an array of enrolled students
{
const enrolledSt = students.filter((Student) => Student.enrolled == true);
console.log(enrolledSt);
}

// Q7. make an array containing only the students' scores
// result should be : [45, 80, 90, 66, 88]
{
const scores = students.map((Student) => Student.score);
console.log(scores);
}

// Q.8 check if there is a student with the score lower than 50
{
const check = students.some((Student) => Student.score < 50);
console.log(check);
}

// Q.9 compute students' average score

{ // map, reduce 
const scores = students.map((Student) => Student.score);
const average = scores.reduce((a, b) => {
    return (a+b)
}) / scores.length;
console.log(average);
}

{ // for of loop
const scores = students.map((Student) => Student.score);
let sum = 0;
for (let score of scores) {
    sum += score; 
};
const average = sum / scores.length
console.log(average)
}

// Q.10 make a string containing all the scores
// result should be : '45, 80, 90, 66, 88'
{
const scores = students.map((Student) => Student.score);
console.log(scores.join(', '))
}

// Bonus! do Q10 sorted in asending order
// result should be : '45, 66, 80, 88, 90'
{ // 결과 음수 a가 앞으로감 
// sort 만으로
const scores = students.map((Student) => Student.score);
const sort_scores = scores.sort((a, b) => {
    return a - b;
}); 
console.log(sort_scores)
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
console.log(sort_scores)
}