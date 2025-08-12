const allItems = [];
document.addEventListener("DOMContentLoaded", () => {
    fetchMultipleData([
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
    ]).then(() => {
        // すべて完了したらフェードアウト
        const loadingScreen = document.getElementById("loading-screen");
        loadingScreen.classList.add("fade-out");
        
        // アニメーション終了後に要素を削除
        setTimeout(() => {
            loadingScreen.remove();
        }, 600); // CSSのtransition時間と合わせる
    });
});

// 複数のJSONデータを取得
async function fetchMultipleData(fileList) {
    for (const file of fileList) {
        await fetchData(file.path, file.prefix, file.limit, file.prenamer);
    }
    renderAccordion(allItems);
}

// JSONデータを取得
async function fetchData(jsonPath, prefix, limit, prenamer) {
    try {
        const response = await fetch(jsonPath);
        if (!response.ok) {
            throw new Error(`データの取得に失敗しました: ${jsonPath}`);
        }
        const source = await response.json();

        for (let i = 1; i <= limit; i++) {
            let IDStri = i.toString().padStart(3, '0');// '001', '002', ...

            let IDStr = prefix + IDStri;

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

            if (item) allItems.push({ ...item, prefix, prenamer });
        }
    } catch (error) {
        console.error('エラー:', error);
    }
}

function renderAccordion(items) {
    const container = document.getElementById('accordion-container');
    container.innerHTML = ''; // Clear previous content

    const headerContainer = document.createElement("div");
    headerContainer.className = "accordion-header-container";

    const grouped = groupByPrefix(items);

    for(const [prefix, groupData] of Object.entries(grouped)) {   
        // ヘッダー作成
        const header = document.createElement("button");
        header.className = "accordion-toggle";
        header.dataset.prefix = prefix;
        header.textContent = groupData.prenamer;
        header.onclick = () => toggleAccordion(prefix);
        headerContainer.appendChild(header);

        // コンテンツ作成
        const content = document.createElement("div");
        content.className = "accordion-content";
        content.id = `content-${prefix}`;
        content.style.display = 'none';

        // 閉じるボタン（コンテンツ内）
        const closeBtn = document.createElement("button");
        closeBtn.className = "accordion-toggle close-btn";
        closeBtn.dataset.prefix = prefix;
        closeBtn.textContent = `${groupData.prenamer}を閉じる`;
        closeBtn.onclick = () => toggleAccordion(prefix);
        content.appendChild(closeBtn);

        // 中身カード
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

    // 上部にボタン群を追加
    container.prepend(headerContainer);
}

// 開閉処理共通化
function toggleAccordion(prefix) {
  const content = document.getElementById(`content-${prefix}`);
  const toggleBtn = document.querySelector(`.accordion-toggle[data-prefix="${prefix}"]`);

  const isOpen = content.style.display === "block";

   if (isOpen) {
    // 閉じる
    content.style.display = "none";
    toggleBtn.classList.remove("active");
    if (closeBtn) closeBtn.classList.remove("active");
  } else {
    // 開く（他のは閉じない＝複数開き可能）
    content.style.display = "block";
    toggleBtn.classList.add("active");
    if (closeBtn) closeBtn.classList.add("active");
  }
}

function groupByPrefix(items) {
    const grouped = {}; 
    items.forEach(item => {
        if (!grouped[item.prefix]) grouped[item.prefix] = {
                prenamer: item.prenamer,
                items: []
            };
        grouped[item.prefix].items.push(item);
    });
    return grouped;
}

function filterItems() {
    const keyword = document.getElementById("searchInput").value.toLowerCase();

    const cards = document.querySelectorAll(".card");
    cards.forEach(card => {
        const tag = card.dataset.tag.toLowerCase();
        const id = card.dataset.id.toLowerCase();
        card.style.display = (tag.includes(keyword) || id.includes(keyword)) ? "block" : "none";
    });

    const containers = document.querySelectorAll(".accordion-content");
    containers.forEach(container => {
        const visible = Array.from(container.children).some(child => child.style.display !== "none");
        container.style.display = visible ? "grid" : "none";
    });
}

function resetSearch() {
    document.getElementById("searchInput").value = "";
    renderAccordion(allItems); // 再描画で元に戻す
}


//htmlファイルに書き出し
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

// 検索機能の追加// 検索ボタンで実行する検索機能
document.getElementById("search-button").addEventListener("click", function () {
  const input = document.getElementById("search-input");
  if (!input) return;

  const searchTerm = input.value.trim().toLowerCase();

  const accordion = document.getElementById("accordion-container");
  const searchResults = document.getElementById("search-results");

  if (!accordion || !searchResults) return;

  // アコーディオン非表示
  accordion.style.display = "none";

  // 検索結果コンテナを空にする
  searchResults.innerHTML = "";

  // すべての.cardを取得して走査
  const allCards = document.querySelectorAll(".card");

  let foundAny = false;

  allCards.forEach(card => {
    const tagText = card.dataset.tag?.toLowerCase() || "";
    const idText = card.dataset.id?.toLowerCase() || "";

    const tags = tagText.split(/\s+/).filter(Boolean); // 空文字除外

    const isMatch = tags.some(tag => tag.includes(searchTerm)) || idText.includes(searchTerm);


    if (isMatch) {
      // 複製してsearchResultsに追加（元の場所から移動しないよう cloneNode）
      const clone = card.cloneNode(true);
      searchResults.appendChild(clone);
      foundAny = true;
    }
  });

  // 結果があれば表示、なければ非表示
  searchResults.style.display = foundAny ? "grid" : "none";
});

// 検索リセット機能
function resetSearch() {
  const input = document.getElementById("search-input");
  if (input) input.value = "";

  const accordion = document.getElementById("accordion-container");
  const searchResults = document.getElementById("search-results");

  // アコーディオン表示
  accordion.style.display = "block";

  // 検索結果エリア非表示
  if (searchResults) {
    searchResults.style.display = "none";
    searchResults.innerHTML = "";
  }
}