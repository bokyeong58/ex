let btn1 = document.querySelector("#btn1");

btn1.addEventListener("click", () => {
    console.log("버튼클릭했슈");

});

//함수 선언
function greet(name){
    return`안녕, ${name}님!`;
}
console.log(greet("58")); //콘솔을 통해 호출