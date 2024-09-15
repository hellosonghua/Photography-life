//javascript 是一门编程语言 为网站添加交互功能
// let myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello Word!";
// 给出一个变量，然后用函数获取标题的引用，并把其储存在变量中。
// DOM docment object model 文档对象模型
// var myHeading = document.querySelector("h1");
// 对象：JavaScript 里一切皆对象，一切皆可储存在变量里。这一点要牢记于心。
let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/firefox2.png");
  } else {
    myImage.setAttribute("src", "images/firefox-icon.png");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  let myName = prompt("请输入你的名字。");
  localStorage.setItem("name", myName);
  myHeading.textContent = "Hello WOrld!，" + myName;
}
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.textContent = "Hello World!，" + storedName;
}
myButton.onclick = function () {
  setUserName();
};
