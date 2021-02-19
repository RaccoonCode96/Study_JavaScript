'use strict';

// promise is a JavaScript object for asynchronous operation.

// 공부 포인트
// 1) state 상태 (기능실행중인지, 성공했는지, 실패인지)
// 2) producer vs consumer

// State: pending(수행중) -> fulfilled(실행 성공) or rejected(파일 없거나, 네트워크 문제가 생기면)
// Promise Object
// producer : 원하는 기능을 수행해 해당하는 데이터를 만들어 내는 promise Object
// consumer : 원하는 데이터를 소비하는 promise Object



// 1. Producer
// when new promise is created, the executor runs automatically.
// promise안에는 param으로 executor 콜백이 들어있고, 
// 그 executor 콜백함수안에 param으로 resolve(정상 수행시), reject(실패시) 콜백함수가 있다. 
const promise = new Promise((resolve, reject) => {
    // doing some heavy work (network, read files)
    console.log('doing somthing...');
    setTimeout(() => {
        resolve('raccoon success!');
        // reject(new Error('no network'))
    }, 2000);
}); 
// promise를 만들자 마자 executor가 실행이 됨 -> 즉, 만들자마자 네트워크 통신을 시작함 (Request get느낌?)
// 네트워크 통신을 사용자가 요구할때만 해야 되는 경우 (사용자가 버튼을 눌렀을 때) 가 있기 때문에
// 불필요한 네트워크가 없게 유의하며 promise를 만들어야함


// 2. Consummers: 
// then : 잘수행 된다면 resolve의 값을 받아올거야
// catch
// finally
promise
    .then(value => {
    console.log(value);
    })
    .catch(error => {
        console.log(error); // error가 출력되지 않고 받아온 에러를 console.log에 출력됨을 알수 있음
    }) // then을 호출하면 다시 promise를 호출하게 되고 return된 promise에 catch를 등록함
    .finally(() => {console.log('finally')}) // 성공하든 안하든 무조건 호출


// 3. promise chaning (프로미스 연결하기)
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});

fetchNumber
    .then(num => num * 2) // then은 값을 전달해도 되고 다른 비동기 promise를 전달해도 됨
    .then(num => num * 3)
    .then(num => {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(num -1), 1000);
        });
    })
    .then(num => console.log(num)); // 5

// then들을 나열해서 다른 비동기적인 것을 묶어서 처리 가능


// 4. Error Handling
const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('🐓'), 1000);
    });
const getEgg = hen =>
    new Promise((resolve, reject) => {
        // setTimeout(() => resolve(`${hen} => 🥚`), 1000);
        setTimeout(() => reject(new Error(`error ${hen} => 🥚`)), 1000); // error가 발생한 경우
    });
const cook = egg =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => 🥮`), 1000);
    });

// getHen()
// .then(hen => getEgg(hen)) // then은 return된 resolve를 받아와 가공할수 있는 함수 그래서 then안에서 promise가 return되게 하면 됨
// .then(egg => cook(egg))
// .then(meal => console.log(meal))
// .catch(console.log);

// resolve받아와서 같은 이름의 param을 바로 또 다른 함수에 넣는 경우 앞에 param, Arrow 생략 가능 
getHen()
    .then(getEgg)
    // .catch(error => {
        // return '😅'; // egg 받아오는게 문제가 생겨도 전체적이 프로세스는 진행이 되게 하여
    // }) //error 발생 자체를 resolve로 다른것을 return 하게해서 진행시킴)
    .then(cook)
    .then(console.log)
    .catch(console.log); // catch는 reject를 받아 활용하고 코드 진행을 멈춤 reject가 없으면 pass되고


