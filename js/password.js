function checkPassword() {
        const correctPassword = "xs";
        const inputPassword = prompt("パスワードを入力してください:");

        if (inputPassword === correctPassword) {
            localStorage.setItem("auth", "true");
            location.reload();
        } else {
            alert("パスワードが違います。");
        }
    }

    window.onload = function () {
        if (localStorage.getItem("auth") === "true") {
            document.getElementById("protected-content").style.display = "block";
        } else {
            checkPassword();
        }
    };