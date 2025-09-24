async function loadStore() {
  const params = new URLSearchParams(window.location.search);
  const storeId = params.get("id"); // 例: food-001

  const res = await fetch("json/food.json");
  const data = await res.json();

  // 該当店舗を探す
  const store = data.find(s => s.id === storeId);
  if (!store) {
    document.body.innerHTML = "<h1>店舗が見つかりません</h1>";
    return;
  }

  // ヘッダーに店舗名
  document.getElementById("store-name").textContent = store.title;

  // 店舗トップ画像やリンクもセット
  document.getElementById("store-img").src = store.img;
  document.getElementById("store-link").href = store.link;

  // カテゴリボタン生成
  const categoryContainer = document.getElementById("category-container");
  categoryContainer.innerHTML = "";

  Object.entries(store.categories).forEach(([key, category], index) => {
    const btn = document.createElement("button");
    btn.textContent = category.label;
    btn.addEventListener("click", () => renderCategory(category.items, storeId));
    categoryContainer.appendChild(btn);

    // 最初のカテゴリを表示
    if (index === 0) {
      renderCategory(category.items, storeId);
    }
  });
}

// カテゴリ内のメニューを表示
function renderCategory(items, storeId) {
  const menuContainer = document.getElementById("menu-container");
  menuContainer.innerHTML = "";

  items.forEach(item => {
    const div = document.createElement("div");
    div.className = "menu-item";

    const link = document.createElement("a");
    link.href = `food-details.html?id=${item.id}&store=${storeId}`;
    link.textContent = item.name;

    div.innerHTML = `<img src="${item.img}" alt="${item.name}">`;
    div.appendChild(link);
    menuContainer.appendChild(div);
  });
}

loadStore();



//food.js バックアップ 多分実行できないから
let menuData = {};
const menuContainer = document.getElementById("menu-container");

// JSONを読み込み
async function loadMenu() {
  const res = await fetch("json/food.json");
  menuData = await res.json();
  renderMenu("ramen"); // 初期表示はラーメン
}

// メニュー表示
function renderMenu(category) {
  menuContainer.innerHTML = "";
  if (!menuData[category]) return;

  menuData[category].forEach(item => {
    const div = document.createElement("div");
    div.className = "menu-item";
    div.innerHTML = `
      <img src="${item.img}" alt="${item.name}">
      <h3>${item.name}</h3>
    `;
    menuContainer.appendChild(div);
  });
}

function renderMenu(categoryKey) {
  menuContainer.innerHTML = "";
  const category = storeData.categories[categoryKey];
  if (!category) return;

  category.items.forEach(item => {
    const div = document.createElement("div");
    div.className = "menu-item";

    // aタグリンクを作成
    const titleLink = document.createElement("a");
    titleLink.href = `food-details.html?id=${item.id}`;
    titleLink.textContent = item.name;

    div.innerHTML = `
      <img src="${item.img}" alt="${item.name}">
    `;
    div.appendChild(titleLink);

    menuContainer.appendChild(div);
  });
}

// カテゴリ切り替え
document.querySelectorAll(".category-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    renderMenu(btn.dataset.category);
  });
});

// 初期ロード
loadMenu();
