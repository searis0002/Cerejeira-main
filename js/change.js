//elm.classList.add("className");
//クラスを追加
//elm.classList.add("first-class", "second-class", "third-class");
//クラスを複数追加
//elm.classList.remove("className");
//クラスを削除
//elm.classList.remove("first-class", "second-class", "third-class");
//クラスを複数削除
//elm.classList.toggle("className");
//クラスを切り替え
//elm.classList.replace("classA", "classB");
//クラスを置き換え
//elm.classList.contains("className");
//クラスが含まれているか判定
//elm.setAttribute('class', '');
//クラスをカラにするらしい

function changecolor(colorN){
    const elem = document.getElementById("BGcolor");

    elem.setAttribute('class', '');
}
function changecolorG(colorN){
    const elem = document.getElementById("BGcolor");

    elem.setAttribute('class', '');

    elem.classList.add("green");
}
function changecolorB(colorN){
    const elem = document.getElementById("BGcolor");

    elem.setAttribute('class', '');

    elem.classList.add("blue");
}
function changecolorZ(colorN){
  const elem = document.getElementById("BGcolor");

  elem.setAttribute('class', '');

  elem.classList.add("ztmy");
}
function changecolorY(colorN){
  const elem = document.getElementById("BGcolor");

  elem.setAttribute('class', '');

  elem.classList.add("yellow");
}
function changecolorLyney(colorN){
  const elem = document.getElementById("BGcolor");

  elem.setAttribute('class', '');

  elem.classList.add("Lyney");
}
function changecolorLynette(colorN){
  const elem = document.getElementById("BGcolor");

  elem.setAttribute('class', '');

  elem.classList.add("Lynette");
}

const { body } = document;
const button = document.getElementById('BGcolor');
const key = 'class';
const data = localStorage.getItem(key);

if (data) {
  body.classList.add(value);
}

if (button) {
  button.addEventListener('click', () => {
    body.classList.toggle(value);
    if (body.classList.contains(value)) {
      localStorage.setItem(key, value);
    } else {
      localStorage.removeItem(key);
    }
  });
}