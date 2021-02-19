const title = document.querySelector("#title");

// const BASE_COLOR = "#34495e"
const BASE_COLOR = "rgb(52, 73, 94)"
const OTHER_COLOR = "#1abc9c"

// function handleClick() {
//     console.log(title.style.color);
// }

function handleClick() {
    const currentColor = title.style.color;
    if (currentColor === BASE_COLOR) {
        title.style.color = OTHER_COLOR;
    } else { title.style.color = BASE_COLOR; }
}

function init(){
    title.style.color = BASE_COLOR;
    title.addEventListener("click", handleClick);
}
init();

function handleOffline() {
    console.log("offline")
}

function handleOnline() {
    console.log("online")
}

window.addEventListener("offline", handleOffline)
window.addEventListener("online", handleOnline)
