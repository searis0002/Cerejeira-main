// id="js_selectToggle"が指定されたselect要素を取得
const selectToggle = document.getElementById('js_selectToggle');

if (selectToggle) {
  // valueが空のセレクトメニューを初期表示に設定
  selectToggle.value = "";
  // セレクトメニューが変更されたら実行
  selectToggle.addEventListener('change', () => {
    // 変更されたセレクトメニューのvalueを取得
    const toggleVal = selectToggle.value;
    document.querySelectorAll('.bl_selectCont').forEach(selectCont => {
      // 各コンテンツのIDがtoggleValと一致するかを確認し、条件に応じてis_activeクラスを制御
      const isActive = selectCont.id === toggleVal;
      // isActiveがtrueならis_activeクラスを追加し、falseなら削除
      selectCont.classList.toggle('is_active', isActive);
    });
  });
}


// 要素を取得　..①
const zoom = document.querySelectorAll(".zoom");
const zoomback = document.getElementById("zoomback");
const zoomimg = document.getElementById("zoomimg");

// 一括でイベントリスナ　..②
zoom.forEach(function(value) {
      value.addEventListener("click",kakudai);
      });

function kakudai(e) {

// 拡大領域を表示　..③
zoomback.style.display = "flex";
// 押された画像のリンクを渡す　..④
zoomimg.setAttribute("src",e.target.getAttribute("src"));
}


// 元に戻すイベントリスナを指定　..⑤
zoomback.addEventListener("click",modosu);

// 拡大領域を無きものに　..⑥
function modosu() {

zoomback.style.display = "none";
}

function kakudai(e) {

    zoomback.style.display = "flex";
    zoomimg.setAttribute("src",e.target.src);
    // 「deka」クラスを付与　..⑦
    zoomimg.classList.add("deka");
}
function modosu() {

    zoomback.style.display = "none";
    // 「deka」クラスを削除　..⑧
    zoomimg.classList.remove("deka")
    }
    

    const modal = document.getElementById('modal-container');
    images = document.querySelectorAll('img.popup');
    modal.addEventListener('click', function() {
      modal.style.display = 'none';
    }, false);
