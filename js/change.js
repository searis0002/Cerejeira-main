// 色変更の汎用関数
function changecolor(color) {
  const elem = document.getElementById("BGcolor");
  elem.setAttribute('class', '');  // クラスをリセット
  elem.classList.add(color);  // 新しい色を適用

  // セッションまたはローカルストレージに色を保存
  localStorage.setItem('BGcolor', color); // localStorageを使用する場合
  // sessionStorage.setItem('BGcolor', color); // sessionStorageを使用する場合
}

// ページ読み込み時に保存されている色を適用
window.addEventListener('load', () => {
  const savedColor = localStorage.getItem('BGcolor'); // localStorageを使用する場合
  // const savedColor = sessionStorage.getItem('BGcolor'); // sessionStorageを使用する場合

  if (savedColor) {
      const elem = document.getElementById("BGcolor");
      elem.setAttribute('class', '');  // クラスをリセット
      elem.classList.add(savedColor);  // 保存された色を適用
  }
});
