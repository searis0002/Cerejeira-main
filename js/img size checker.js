window.addEventListener("load", function() {
    let img = document.getElementById("image");
    var section = document.querySelector(".section1");

    console.log(img);

    var imgWidth = img.naturalWidth;
    var imgHeight = img.naturalHeight;

    // 画像の縦横比を判断
    if (imgWidth > imgHeight) {
        section.classList.add("horizontal"); // 横長の場合
        section.classList.remove("vertical");
    } else {
        section.classList.add("vertical"); // 縦長の場合
        section.classList.remove("horizontal");
    }
});
