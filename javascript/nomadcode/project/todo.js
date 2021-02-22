"use strict";

const toDoForm = document.querySelector(".js-todoForm"),
    toDoInput = toDoForm.querySelector("input"), // 충돌 방지를 위한 변수 이름 다르게 지정
    toDoList = document.querySelector(".js-todoList");
let idNumber = 1
const TODOS_LS = "toDos";

let toDos = []; // 변해야 됨으로
function deleteToDo(event) {
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter((toDo) => {
        return toDo.id !== parseInt(li.id); // li.id 가 string으로 찍혀서 parseInt를 이용해서 number로 바꿈
    });
    // const reDos = [];
    //  for (const value of cleanToDos) {
    //     reDos.push({text: value.text, id: reDos.length + 1})
    // } 
    // toDos = reDos;
    toDos = cleanToDos;
    saveToDos();
}

function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos)); // 스토리지의 toDos키에 계속 값을 찍어줌 toDos가 생기는 것은 아님
}



function paintToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    let newId = idNumber
    // const newId = toDos.length + 1; // 중간이나 처음 id를 지우면 중복 id가 생김
    // const newId = Date.now()// 새로 고침시 같은 아이디 
    delBtn.innerText = "❌";
    delBtn.addEventListener("click", deleteToDo);
    span.innerText = text
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    toDoList.appendChild(li);
    const todoObj = { // 이런식으로 따로 Obj를 품은 array를 만드는 이유는 local storage에 save해야 되서
        text: text,
        id: newId
    };
    toDos.push(todoObj);
    saveToDos();
    idNumber += 1
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}


function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadedToDos !== null) {
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach((toDo) => {
            paintToDo(toDo.text);
            });
        }
    }


function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit)
}

init();
