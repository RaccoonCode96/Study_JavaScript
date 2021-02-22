const title = document.querySelector("#title");

const  CLICKED_CLASS = "clicked";

// function handleClick() {
//     const hasClass = title.classList.contains(CLICKED_CLASS);
//     if(hasClass) {
//         title.classList.remove(CLICKED_CLASS);
//     } else {
//         title.classList.add(CLICKED_CLASS);
//     }
// }

function handleClick() {
    title.classList.toggle(CLICKED_CLASS); // toggle 함수 : class list에서 해당 class 이름이 있는지 없는지 체크해서 없으면 추가하고, 있으면 제거함
    }

function init(){
    title.addEventListener("click", handleClick);
}
init();

// class 추가 제거를 제어해서 css를 제어

