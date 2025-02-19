document.addEventListener("DOMContentLoaded", () => {
    fetchMultipleData([
        { path: 'json/serial/S human-illust.json', prefix: 'illust-', limit: 24 },
        { path: 'json/serial/S human-cos.json', prefix: 'cos-', limit: 9 },
        { path: 'json/serial/S human-seiyuu.json', prefix: 'VA-', limit: 4 }
    ]);
});

// 複数のJSONデータを取得
async function fetchMultipleData(fileList) {
    for (const file of fileList) {
        await fetchData(file.path, file.prefix, file.limit);
    }
}

// JSONデータを取得
async function fetchData(jsonPath, prefix, limit) {
    try {
        const response = await fetch(jsonPath);
        if (!response.ok) {
            throw new Error(`データの取得に失敗しました: ${jsonPath}`);
        }
        const source = await response.json();
        generateHTML(source, prefix, limit);
    } catch (error) {
        console.error('エラー:', error);
    }
}

function generateHTML(source, prefix, limit) {
    for (let i = 1; i <= limit; i++) {
        let IDStri = i.toString().padStart(3, '0'); // '001', '002', ...

        const IDStr = prefix + IDStri;

        const item = source.find(entry => entry.id === IDStr);
        if (!item) {
            console.warn(`ID ${IDStr} に該当するデータが見つかりません`);
            continue;
        }

        console.log(`
            ID: ${item.id}, 
            画像: ${item.img}, 
            HTML: ${item.html}, 
            名前: ${item.namer}, 
            説明: ${item.textin},
            xlink:${item.xlink}
            `);

        const element = document.getElementById(IDStr);
        if (!element) {
            console.warn(`ID ${IDStr} に対応するHTML要素が見つかりません`);
            continue;
        }

        element.innerHTML = `
            <img src="${item.img}" alt="${item.namer}" class="icon-img">
            <hr>
            <h2><a href="${item.html}">${item.namer}</a></h2>
            <p class="text">${item.textin}<br><img src="img/icon/twitter.webp" class="smalllogo"><a href="https://x.com/${item.xlink}" class="twitter"> twitter</a></p>
        `;
    }
}
