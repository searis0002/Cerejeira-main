async function loadStores() {
  const res = await fetch("json/food.json");
  const data = await res.json();

  const container = document.getElementById("food-container");
  container.innerHTML = "";

  // ✅ 表示順をここで指定（id の並びでコントロール）
  const displayOrder = [
    "food-001", // ラーメン花月
    "food-002", // クリスピークリームドーナツ
    "food-003"  // スターバックスコーヒー
  ];

  // order 配列に従って並べ替え
  const orderedData = displayOrder
    .map(id => data.find(item => item.id === id))
    .filter(item => item); // 見つからなかったものを除外

  orderedData.forEach((store, index) => {
    const div = document.createElement("div");
    div.className = "store-col";

    const link = document.createElement("a");
    link.href = `food-details.html?id=${store.id}`;
    link.textContent = `${index + 1}. ${store.title}`;

    div.appendChild(link);
    container.appendChild(div);
  });
}

loadStores();
