function checkPassword() {
    const correctPassword = "xs";  // ここでパスワードを設定
    const inputPassword = document.getElementById("password").value;

    if (inputPassword === correctPassword) {
         // 認証成功 → ロック画面を非表示、コンテンツを表示
        document.getElementById("lock-screen").style.display = "none";
        document.getElementById("content").style.display = "block";
        localStorage.setItem("authenticated", "true");  // 認証情報を保存
    } else {
        alert("パスワードが違います");
    }
}

 // 認証済みならロック画面をスキップ
 window.onload = function () {
    if (localStorage.getItem("authenticated") === "true") {
        document.getElementById("lock-screen").style.display = "none";
        document.getElementById("content").style.display = "block";
    }
};

