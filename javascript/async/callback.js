'use strict';

// 동기와 비동기
// JavaScript is synchronous.
// Execute the code block in oder after hoisting. (호이스팅 이후에 코드블럭을 순차적으로 실행)
// hoisting: var, function declaration 이 제일 위로 가는 것
// 즉, 선언된 함수등이 제일 위로 올라가고나서 순차적으로 코드가 실행이 된다.
// 원래는 코드 블럭 순서에 맞게 실행 되는 것이 synchronous.
console.log('1');
setTimeout(() => console.log('2'), 1000); // 비동기 
// 1000 밀리세컨드(1초 = 1000ms) 이후에 function을 호출 -> 브라우저가 실행하도록 요청해 놓음
// setTimeout 과 같은 브라우저 API들은 브라우저에게 먼저 요청을 보내게 되고 응답 안기다리고 다음 블럭으로 패스함
console.log('3'); 
// 하지만, 위처럼 차례대로 코드를 실행을 하지만 브라우저의 응답이 순차적이지 않을 경우 '비동기'라고 함
// setTimeout함수 실행시 내부의 callback함수는 바로 실행되지 않고 1초가 지나면 callback함수를 실행함
// callback 함수는 나중에 호출해주는 함수를 이야기함 (전달 함수)
// callback은 항상 비동기시에만 사용하는 것은 아님

// Synchronous callback
function printImmediately(print) {
    print();
} // 이건 선언이니까 hoisting 되고
printImmediately(() => console.log('hello'));

// Asynchronous callback
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}
printWithDelay(() => console.log('async callback'), 2000); // 비동기

// 언어마다 callback 표현이 다름

// Callback Hell example (Callback 지옥 예제)
class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if (
                (id === 'raccoon' && password === 'dream') ||
                (id === 'coder' && password === 'academy')
            ) {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if (user === 'raccoon') {
                onSuccess({ name: 'raccoon', role: 'admin' });
            } else {
                onError(new Error('no access'));
            }
        }, 1000);
    }
}

// 1) 사용자에게 id , password 받아오기
// 2) login
// 3) Roles
// 4) name: raccoon, role: admin

const userStorage = new UserStorage();
const id = prompt('enter your id!');
const password = prompt('enter your password!');
userStorage.loginUser(
    id,
    password,
    user => {
        userStorage.getRoles(
            user,
            userWithRole => {
                alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`)
            },
            error => {
                console.log(error);
            }
        );
    },
    error => {console.log(error)}
);

// 4. 콜백 체인의 문제점
// 가독성 제로
// 에러발생 및 디버깅에서 어려움, 분석도 어렵고 유지보수도 어려움
