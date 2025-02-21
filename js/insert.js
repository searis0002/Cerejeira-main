//入力ここ
//title
const title = "Cerejeira";


//title
document.title = title;

//header
fetch("header.html")
    .then(response => response.text())
    .then(data => document.querySelector("#header").innerHTML = data);  
//footer
fetch("footer.html")
    .then(response => response.text())
    .then(data => document.querySelector("#footer").innerHTML = data);

    
    fetch('json/favicon_img.json')
    .then(response => response.json())  // JSON を取得
    .then(data => {
      // 画像リストを作成（JSONの適切なキーを指定）
      let array_icon = data.map(item => item.source); 
  
      // ランダムなアイコンを選択
      const num = Math.floor(Math.random() * array_icon.length);
      const changer = array_icon[num];
  
      console.log(num, changer); // 選ばれた画像を確認
  
      // favicon を変更
      var favic = document.getElementById("favicon");
      if (favic) {
        favic.href = changer;
      } else {
        console.error("Favicon要素が見つかりませんでした");
      }
    })
    .catch(error => console.error('Error:', error));
  



