function searchpage() {
    const correctinput = document.getElementById("pageinput").value.trim();

    let target;
    if (correctinput) {
        target = correctinput.endsWith(".html") ? correctinput : correctinput + ".html";
    } else {
        target = "index.html";
    }

    window.location.href = target;
}

// Enterキーで実行
document.getElementById("pageinput").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        searchpage();
    }
});
// 検索リセット機能
function resetbutton() {
    // 入力欄をクリア
    const input = document.getElementById("pageinput");
    if (input) {
        input.value = "";
        input.focus(); // カーソルを戻す
    }
}