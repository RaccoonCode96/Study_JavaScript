"use strict";

const body = document.querySelector("body");

const IMG_NUMBER = 3;

// function handleImgLoad() {
//     console.log("finished loading");
// }

function painImage(imgNumber) {
    const image = new Image();
    image.src = `/nomadcode/project/imgs/${imgNumber + 1}.jpg`;
    image.classList.add("bgImage");
    body.prepend(image);
    // image.addEventListener("loadend", handleImgLoad) // API에서 한다면 이렇게

}

function genRandom() { // floor 버림, ceil 올림
    const number = Math.floor(Math.random() * IMG_NUMBER)
    return number;
}

function init() {
    const randomNumber = genRandom();
    painImage(randomNumber)
}

init();
