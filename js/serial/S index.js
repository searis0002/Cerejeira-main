document.addEventListener("DOMContentLoaded", () => {
    fetchData();
});

//ループ上限(colの数)
let looplimit = 5;


// JSONデータを取得
async function fetchData() {
    try {
        const response = await fetch('json/serial/S index.json');
        if (!response.ok) {
            throw new Error('データの取得に失敗しました');
        }
        const source = await response.json();
        generateHTML(source);
    } catch (error) {
        console.error('エラー:', error);
    }
}

function generateHTML(source) {
    for (let i = 1; i <= looplimit; i++) {
        const IDStr = i.toString().padStart(3, '0'); // '001', '002', ...

        const item = source.find(entry => entry.id === IDStr);
        if (!item) {
            console.warn(`ID ${IDStr} に該当するデータが見つかりません`);
            continue;
        }

        // デバッグ用ログ
        console.log(`ID: ${item.id}, 画像: ${item.img}, HTML: ${item.html}, 名前: ${item.namer}, 説明: ${item.textin}`);

        // HTML要素を取得
        const element = document.getElementById(IDStr);
        if (!element) {
            console.warn(`ID ${IDStr} に対応するHTML要素が見つかりません`);
            continue;
        }

        // HTMLを書き換え
        element.innerHTML = `
            <img src="${item.img}" alt="icon">
            <hr>
            <h2><a href="${item.html}">${item.namer}</a></h2>
            <p class="text">${item.textin}</p>
        `;
    }
}



