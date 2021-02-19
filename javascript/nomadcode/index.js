console.log(document); // js 에서는 document를 통해서(html)에 접근 가능
// html document가 javascript가 됨
// const title = document.getElementById("title");
const title = document.querySelector("#title"); // CSS selector와 비슷함(클래스면 ., id면 #)
// querySelector를 쓰면 더 자유롭게 뽑아 올수 있음
console.log(title)


// DOM (Document Object Module)
// javascript는 html에 있는 요소를 모두 가져와 DOM객체로 바꿈
// 객체는 엄청 많은 key를 가지고 있음
title.innerHTML = "Hi! From JS"; // 브라우저에서의 html의 내용을 바꿈
title.style.color = "red"; // javascript로 html을 조종 할 수 있음
// 우리가 배울 모든 함수들은 DOM형태로 변경 가능
console.dir(title);
console.dir(document);
document.title = "I own you now"; // document의 제목이 바뀌어 있음
