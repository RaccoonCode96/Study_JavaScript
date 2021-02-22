const title = document.querySelector("#title");
title.innerHTML = "Hi! From JS";
// title.style.color = "red" ;
document.title = "I own you now";
// JS는 단지 html과 CSS를 바꾸고 싶어서 만들어 지진 않음
// 이벤트에 반응하기 위해서 만들어짐
// 이벤트 : 웹사이트에서 발생하는 것들 (click, resize, submit, input, change, load ..)
// 중간에 우리가 이 이벤트를 가로 챌수 있음

// function handleResize() {
//     console.log("I have been resized")
// }

// function handleResize(event) {
    // console.log(event)
// }

function handleClick(){
    title.style.color = 'blue';
}


// window.addEventListener("resize", handleResize); // submit은 윈도우에 존재하지 않음 보낼곳이 없으므로
// javascript는 이벤트를 받기를 기다림
// handleResize표현은 필요할 때 함수를 호출하고 handleResized() 표현은 즉시 호출하는 것임
// window size가 변할 때 handleResize 함수가 호출됨

title.addEventListener("click", handleClick);

