const allItems = [];


// JSONファイルリスト
const fileList = [
    { path: 'json/serial/S xs-fav.json', prefix: 'fav-', limit: 22, prenamer: 'お気に入り' },
    { path: 'json/serial/S xs-guraburu.json', prefix: 'guraburu-', limit: 29, prenamer: 'グラブル' },
    { path: 'json/serial/S xs-pokemon.json', prefix: 'pokemon-', limit: 52, prenamer: 'ポケモン' },
    { path: 'json/serial/S xs-azuren.json', prefix: 'azuren-', limit: 18, prenamer: 'アズレン' },
    { path: 'json/serial/S xs-buruaka.json', prefix: 'buruaka-', limit: 62, prenamer: 'ブルアカ' },
    { path: 'json/serial/S xs-fate.json', prefix: 'FGO-', limit: 61, prenamer: 'FGO' },
    { path: 'json/serial/S xs-genshin.json', prefix: 'genshin-', limit: 16, prenamer: '原神' },
    { path: 'json/serial/S xs-DQ.json', prefix: 'DQ-', limit: 6, prenamer: 'ドラクエ' },
    { path: 'json/serial/S xs-ToLove.json', prefix: 'ToLove-', limit: 4, prenamer: 'ToLoveる' },
    { path: 'json/serial/S xs-east.json', prefix: 'east-', limit: 4, prenamer: '東方' },
    { path: 'json/serial/S xs-love.json', prefix: 'love-', limit: 54, prenamer: '好き' },
    { path: 'json/serial/S xs-series.json', prefix: 'series-', limit: 70, prenamer: 'シリーズ' },
    { path: 'json/serial/S xs-others.json', prefix: 'others-', limit: 47, prenamer: 'その他' },
];

// カスタム順序設定（範囲は "1-10"、単発は "25" のように記述）
const customOrders = {
    'fav-': [" "],
    'guraburu-': [" "],
    'pokemon-': [" "],
    'azuren-': [" "],
    'buruaka-': ["25", "1-3", "28", "4-8", "11", "40-42", "22", "13-23", "43", "24-69"],
    'FGO-': [" "],
    'genshin-': [" "],
    'DQ-': [" "],
    'ToLove-': [" "],
    'east-': [" "],
    'love-': ["1-41", "50-51", "42-54"],
    'series-': ["1-23", "67", "24-38", "68", "39-69"],
    'others-': ["1-5", "19", "6-11", "43", "12-47"],
};

// 順序生成関数
function generateCustomOrder(limit, groups) {
    const allNumbers = new Set(Array.from({ length: limit }, (_, i) => i + 1));
    const result = [];

    groups.forEach(entry => {
        if (entry.includes('-')) {
            let [start, end] = entry.split('-').map(n => parseInt(n, 10));
            if (start > end) [start, end] = [end, start];
            for (let i = start; i <= end; i++) {
                if (allNumbers.has(i)) {
                    result.push(i);
                    allNumbers.delete(i);
                }
            }
        } else {
            const num = parseInt(entry, 10);
            if (allNumbers.has(num)) {
                result.push(num);
                allNumbers.delete(num);
            }
        }
    });

    result.push(...Array.from(allNumbers).sort((a, b) => a - b));
    return result;
}

//  メイン処理
document.addEventListener("DOMContentLoaded", () => {
    fetchMultipleData(fileList).then(() => {
        const loadingScreen = document.getElementById("loading-screen");
        loadingScreen.classList.add("fade-out");
        setTimeout(() => loadingScreen.remove(), 600);
    });
});

// 複数ファイルを順に取得
async function fetchMultipleData(fileList) {
    for (const file of fileList) {
        await fetchData(file);
    }
    renderAccordion(allItems);
}

// JSON1つ分の取得と加工
async function fetchData({ path, prefix, limit, prenamer }) {
    try {
        const response = await fetch(path);
        if (!response.ok) throw new Error(`データ取得失敗: ${path}`);
        const source = await response.json();

        // 順序決定
        const orderConfig = customOrders[prefix] || [];
        const order = generateCustomOrder(limit, orderConfig);

        for (const num of order) {
            const IDStr = prefix + num.toString().padStart(3, '0');
            const item = source.find(entry => entry.id === IDStr);

            if (!item) {
                console.warn(`ID ${IDStr} のデータなし`);
                continue;
            }
            allItems.push({ ...item, prefix, prenamer });
        }
    } catch (error) {
        console.error('エラー:', error);
    }
}

// アコーディオン描画
function renderAccordion(items) {
    const container = document.getElementById('accordion-container');
    container.innerHTML = '';

    const headerContainer = document.createElement("div");
    headerContainer.className = "accordion-header-container";

    const grouped = groupByPrefix(items);

    for (const [prefix, groupData] of Object.entries(grouped)) {
        const header = document.createElement("button");
        header.className = "accordion-toggle";
        header.dataset.prefix = prefix;
        header.textContent = groupData.prenamer;
        header.onclick = () => toggleAccordion(prefix);
        headerContainer.appendChild(header);

        const content = document.createElement("div");
        content.className = "accordion-content";
        content.id = `content-${prefix}`;

        const closeBtn = document.createElement("button");
        closeBtn.className = "accordion-toggle close-btn";
        closeBtn.dataset.prefix = prefix;
        closeBtn.textContent = `${groupData.prenamer}を閉じる`;
        closeBtn.onclick = () => toggleAccordion(prefix);
        content.appendChild(closeBtn);

        groupData.items.forEach(item => {
            const div = document.createElement("div");
            div.className = "card";
            div.dataset.id = item.id;
            div.dataset.tag = item.tag;
            div.innerHTML = `
                <img src="${item.img}" alt="top-img">
                <hr>
                <h2><a href="${item.html}">${item.namer}</a></h2>
                <p class="text">${item.sitelink}${item.tag}</p>
            `;
            content.appendChild(div);
        });

        container.appendChild(content);
    }
    container.prepend(headerContainer);
}

// 開閉制御
function toggleAccordion(prefix) {
    const content = document.getElementById(`content-${prefix}`);
    const toggleBtn = document.querySelector(`.accordion-toggle[data-prefix="${prefix}"]`);
    const closeBtn = content.querySelector(".close-btn");

    const isOpen = content.classList.contains("open");
    if (isOpen) {
        content.classList.remove("open");
        toggleBtn.classList.remove("active");
        if (closeBtn) closeBtn.classList.remove("active");
    } else {
        content.classList.add("open");
        toggleBtn.classList.add("active");
        if (closeBtn) closeBtn.classList.add("active");
    }
}

// プレフィックスごとにグループ化
function groupByPrefix(items) {
    const grouped = {};
    items.forEach(item => {
        if (!grouped[item.prefix]) grouped[item.prefix] = { prenamer: item.prenamer, items: [] };
        grouped[item.prefix].items.push(item);
    });
    return grouped;
}

// 検索機能
document.getElementById("search-button").addEventListener("click", function () {
    const input = document.getElementById("search-input");
    if (!input) return;
    const searchTerm = input.value.trim().toLowerCase();

    const accordion = document.getElementById("accordion-container");
    const searchResults = document.getElementById("search-results");
    if (!accordion || !searchResults) return;

    accordion.style.display = "none";
    searchResults.innerHTML = "";

    const allCards = document.querySelectorAll(".card");
    let foundAny = false;

    allCards.forEach(card => {
        const tagText = card.dataset.tag?.toLowerCase() || "";
        const idText = card.dataset.id?.toLowerCase() || "";
        const tags = tagText.split(/\s+/).filter(Boolean);

        const isMatch = tags.some(tag => tag.includes(searchTerm)) || idText.includes(searchTerm);
        if (isMatch) {
            const clone = card.cloneNode(true);
            searchResults.appendChild(clone);
            foundAny = true;
        }
    });

    searchResults.style.display = foundAny ? "grid" : "none";
});

// 検索リセット機能
function resetSearch() {
    const input = document.getElementById("search-input");
    if (input) input.value = "";

    const accordion = document.getElementById("accordion-container");
    const searchResults = document.getElementById("search-results");

    accordion.style.display = "block";
    if (searchResults) {
        searchResults.style.display = "none";
        searchResults.innerHTML = "";
    }
}