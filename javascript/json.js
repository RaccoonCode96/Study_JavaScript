// JSON
// JavaScript Object Notation

// 1. Object to JSON
// stringfy(obj)
let json = JSON.stringify(true);
console.log(json); // true
// 오버로딩 : method 이름이 같은데 매개변수를 어떻게 받냐에 따라 다를 경우

json = JSON.stringify(['apple', 'banana']); // 홑 따옴표 대신 쌍 따옴표로 바뀌어 표기됨
console.log(json);


const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    // symbol: Symbol("id"),
    jump: () => {
        console.log(`${this.name} can jump!`);
    },
}; // method는 json 표현에 포함 안됨(object안에 있는 데이터가 아니라서) 또 symbol도 포함 안됨

json = JSON.stringify(rabbit);
console.log(json);

// replacer 는 Array 또는 Function 형태로 전달해도 됨
// replacer -> Array
json = JSON.stringify(rabbit, ['name', 'color', 'size']); // 원하는 properties 만 보이게 할수 있음 
console.log(json)

// replacer -> Function (처음 전달되는 것은 value에 최상위 객체가 먼저 들어옴 그리고 순서대로 key, value가 들어옴)
json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'name' ? 'raccoon' : value; // key가 name이면 raccoon을 값으로 그외는 기존 value를 값으로 
}); // 원하는 properties 만 보이게 할수 있음 
console.log(json)


// 2. JSON to Object
// parse(json)
console.clear()
json = JSON.stringify(rabbit);
console.log(json);
const obj = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj);
rabbit.jump();
// obj.jump(); // serialize 하면서 method는 들어 가지 않았기 때문에

console.log(rabbit.birthDate.getDate());
// console.log(obj.birthDate.getDate()); // birthDate가 json되면서 string으로 있었기 때문에 method 활용 불가 error
console.log(obj.birthDate.getDate()); 
// json에서 다시 object가 되어 data를 string이 아닌 원래 메소드 형태로 활용하려고 한다면 
// parse 할때 string으로 죽은 데이터 함수로 살려줘야 메소드를 활용할 수 있음
