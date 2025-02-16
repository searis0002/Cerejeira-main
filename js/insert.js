//入力ここ
//title
const title = "Cerejeira";
//アイコン画像数
img_num = 2;
//アイコン画像リンク
const icon_1 = "./img/Lyney&Lynette/icon/Lynette.ico";
const icon_2 = "./img/Lyney&Lynette/icon/Lyney.ico";

//スクリプト

//title
document.title = title;
//favicon
let array_icon = [icon_1, icon_2,];
const num = Math.floor(Math.random() * img_num);
changer = array_icon[num];
console.log(num,changer);

var favic = document.getElementById("favicon");
favic.href = changer;

//header
fetch("header.html")
    .then(response => response.text())
    .then(data => document.querySelector("#header").innerHTML = data);  
//footer
fetch("footer.html")
    .then(response => response.text())
    .then(data => document.querySelector("#footer").innerHTML = data);





