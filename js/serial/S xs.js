document.addEventListener("DOMContentLoaded", () => {
    fetchMultipleData([
        { path: 'json/serial/S xs-fav.json', prefix: 'fav-', limit: 22 },
        { path: 'json/serial/S xs-guraburu.json', prefix: 'guraburu-', limit: 29 },
        { path: 'json/serial/S xs-pokemon.json', prefix: 'pokemon-', limit: 41 },
        { path: 'json/serial/S xs-azuren.json', prefix: 'azuren-', limit: 18 },
        { path: 'json/serial/S xs-buruaka.json', prefix: 'buruaka-', limit: 52 },
        { path: 'json/serial/S xs-fate.json', prefix: 'FGO-', limit: 61 },
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
            link: ${item.sitelink},
            xlink:${item.xlink}
            `);

        const element = document.getElementById(IDStr);
        if (!element) {
            console.warn(`ID ${IDStr} に対応するHTML要素が見つかりません`);
            continue;
        }

        element.innerHTML = `
            <img src="${item.img}" alt="top-img">
            <hr>
            <h2><a href="${item.html}">${item.namer}</a></h2>
            <p class="text">${item.sitelink}${item.tag}</a></p>
        `;
    }
}