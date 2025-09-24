document.addEventListener('DOMContentLoaded', () => {
  const selectToggle = document.getElementById('js_selectToggle');
  const allContents = document.querySelectorAll('.bl_selectCont');
  const zoomback = document.getElementById('zoomback');
  const zoomimg = document.getElementById('zoomimg');
  const zoomTargets = document.querySelectorAll('.zoom');

  // 初期状態：全て表示
  allContents.forEach(el => el.classList.add('is_active'));

  // セレクト変更時の処理
  selectToggle.addEventListener('change', () => {
    const val = selectToggle.value;

    allContents.forEach(el => {
      if (val === "") {
        el.classList.add('is_active'); // 全表示
      } else {
        el.classList.toggle('is_active', el.id === val); // 選択したものだけ表示
      }
    });
  });

  // 画像クリックで拡大
  zoomTargets.forEach(img => {
    img.addEventListener('click', e => {
      zoomimg.src = e.target.src;
      zoomback.style.display = "flex";
    });
  });

  // モーダルクリックで閉じる
  zoomback.addEventListener('click', () => {
    zoomback.style.display = "none";
    zoomimg.src = "";
  });
});
