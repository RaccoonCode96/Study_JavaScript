'use strict';

// async & await
// clear style of using promise
// promise가 무조건 나쁜것은 아니고 스타일에 따라 깔끔하면 그것을 쓰면됨 

// 1. async
// 사용자의 데이터를 백엔드에서 받아오는 함수
// function fetchUser() { // 동기 사용시 
    // do network request in 10 sec...
    // return 'raccoon'
// }

// function fetchUser() { 
    // return new Promise((resolve, reject) => { // 비동기 사용시
        // do network request in 10 secs...
        // resolve('raccoon'); // 꼭 resolve 나 reject로 마무리를 해줘야함 안그러면 계속 pending이고 result도 없음
    // });
// }

// 아래처럼 async를 붙여주면 원래의 함수의 코드블럭이 promise로 바뀜
async function fetchUser() {
    // do network request in 10 sec...
    return 'raccoon';
}

const user = fetchUser(); 
user.then(console.log);
console.log(user);
// 비동기 처리 하지 않으면 사용자 데이터가 나오기 까지 10초가 걸림
// 실행 -> fetchUser 호출 -> 10초 기다리고 -> raccoon return -> user -> console

// 그래서 비동기가 필요함 ->  promise를 활용해서 요청만 시키고 다음 코드로 이동시킴


// 2. await
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(2000); // await은 해당 코드가 끝날때 까지 기다려줌 즉, 비동기의 코드를 동기로 해줌
    // throw 'error';
    return '🍎';
}

// function getBanana() { 
    // return delay(3000)
    // .then(() => '🍌');
// }

async function getBanana() {
    await delay(1000); // 아래 chaining 보다 위의 동기식의 코드를 사용하는 것 처럼 사용하면 더 쉽게 이해 가능
    return '🍌';
}

// function pickFruits() {
//     return getApple().then(apple => {
//         return getBanana().then(banana => `${apple} + ${banana}`)
//     });
// }

// async function pickFruits() {
//     const apple = await getApple();
//     const banana = await getBanana();
//     return `${apple} + ${banana}`;
// }

// async function pickFruits() {
//     try {
//     const apple = await getApple();
//     const banana = await getBanana();
//     } catch { 
//         return 'error'
//     } 
//     return `${apple} + ${banana}`;
// }


// 바나나, 사과 받아오는 것은 서로 연관이 안되어 있기에 동기방식은 비효율적
async function pickFruits() {
    const applePromise = getApple(); // async 상태 이므로 promise형태로 같이 받아(병렬) 시간 줄이고
    const bananaPromise = getBanana();
    const apple = await applePromise; // 동기화 시킴
    const banana = await bananaPromise;
    return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

// 3. useful Promise APIs

function pickAllFruits() {
    return Promise.all([getApple(), getBanana()]) // all은 promise 배열 전달시 모든 promise들이 병렬적으로 다 받을때 까지 모아줌 
    .then(fruits => fruits.join(' + '));
}
pickAllFruits().then(console.log);


function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]); // race 가장 먼저 값을 return하는 아이만 전달
}
pickOnlyOne().then(console.log)