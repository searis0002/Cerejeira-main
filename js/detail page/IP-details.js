//  基本構造だけここで生成
//  それ以外のjsonデータなどは別のjsでレンダリング
//  代わりにこのjsで個別jsのスクリプトタグをjson anime.idで取り出すようにする


document.addEventListener("DOMContentLoaded", async () => {
  const container = document.getElementById("anime-detail");

  // URLからidを取得
  const params = new URLSearchParams(window.location.search);
  const animeId = params.get("id");

  if (!animeId) {
    container.innerHTML = "<p>作品IDが指定されていません。</p>";
    return;
  }

  try {
    // JSON読み込み
    const res = await fetch("./json/IP-contents.json");
    const animeList = await res.json();

    const anime = animeList.find(a => a.id === animeId);

    if (!anime) {
      container.innerHTML = "<p>作品が見つかりませんでした。</p>";
      return;
    }

    // --- テーマ適用 ---
    const themes = ["worldtrigger-theme", "jujutsu-theme", "kimetsu-theme"];
    document.body.classList.remove(...themes);
    if (anime.theme) document.body.classList.add(anime.theme);

    // --- 描画 ---
    renderAnimeDetail(anime, container);

  } catch (err) {
    console.error(err);
    container.innerHTML = "<p>データの読み込みに失敗しました。</p>";
  }
});

// 詳細ページ描画
function renderAnimeDetail(anime, container) {
  container.innerHTML = `
    <h1>${anime.title}</h1>
    <img src="${anime.img}" alt="${anime.title}">
    <p>放送年: ${anime.year}</p>
    <p>ジャンル: ${anime.genre.join(", ")}</p>
    <a href="${anime.link}" target="_blank">公式サイト</a>
    <hr>
  `;

  if (anime.custom) {
    anime.custom.forEach(c => {
      const section = renderCustomSection(c);
      if (section) container.appendChild(section);
    });
  }
}

// 共通カスタムUIレンダリング
function renderCustomSection(custom) {
  switch (custom.type) {
    case "accordion": return renderAccordion(custom);
    case "character-list": return renderCharacterList(custom);
    case "links": return renderLinks(custom);
    default: return null;
  }
}

// アコーディオン描画
function renderAccordion(data) {
  const div = document.createElement("div");
  div.classList.add("accordion");
  div.innerHTML = `<h3>${data.title}</h3>`;
  data.items.forEach(item => {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("accordion-item");
    itemDiv.innerHTML = `
      <div class="accordion-title">${item.term}</div>
      <div class="accordion-content">${item.desc}</div>
    `;
    itemDiv.querySelector(".accordion-title").addEventListener("click", () => {
      const content = itemDiv.querySelector(".accordion-content");
      content.style.display = content.style.display === "block" ? "none" : "block";
    });
    div.appendChild(itemDiv);
  });
  return div;
}

// キャラクターリスト描画
function renderCharacterList(data) {
  const div = document.createElement("div");
  div.classList.add("character-list");
  div.innerHTML = `<h3>${data.title}</h3>`;
  data.items.forEach(ch => {
    div.innerHTML += `
      <div>
        <img src="${ch.img}" alt="${ch.name}">
        <p>${ch.name}</p>
      </div>
    `;
  });
  return div;
}

// リンク集描画
function renderLinks(data) {
  const div = document.createElement("div");
  div.innerHTML = `<h3>${data.title}</h3>`;
  data.links.forEach(l => {
    div.innerHTML += `<p><a href="${l.url}" target="_blank">${l.label}</a></p>`;
  });
  return div;
}
