document.addEventListener("DOMContentLoaded", async () => {
  const res = await fetch("./json/IP-contents.json");
  const animeList = await res.json();

  // containerを一度だけ作成
  const content_container = document.createElement("div");
  content_container.classList.add("container");

  // containerにタイトルを追加
  const content_index = document.createElement("h3");
  content_index.textContent = "作品一覧";
  content_container.appendChild(content_index);

  //rowを先に作成 forEach内でIPcardを追加していく形  
  const IPwrapper = document.createElement("div");
  IPwrapper.classList.add("row");

  // animeList の各アニメデータでカードを作成
  animeList.forEach(anime => {
    const IPcard = document.createElement("div");
    IPcard.classList.add("anime-card");

    const titleLink = document.createElement("a");
    titleLink.href = `anime-details.html?id=${anime.id}`;
    titleLink.textContent = `${anime.title} (${anime.year})`;

    const imgdata = document.createElement("img");
    imgdata.src = anime.img;
    imgdata.alt = anime.title;

    IPcard.innerHTML = `
      <p>ジャンル: ${anime.genre.join(", ")}</p>
    `;

  // カスタム要素
 // customVisibleがtrueの場合にのみcustomを追加
    if (anime.customVisible) {
      if (anime.custom) {
        anime.custom.forEach(c => {
          const section = renderCustomSection(c);
          if (section) IPcard.appendChild(section);
        });
      }
    }
    
    IPcard.prepend(titleLink); // 先頭にリンクを追加
    IPcard.prepend(imgdata);   // 先頭に画像を追加

    
    // IPwrapper (div class.row) にIPcard
    IPwrapper.appendChild(IPcard);

    // content_container に IPcard を追加
    content_container.appendChild(IPwrapper);
  });

  // 最後に content_container を wrapper に追加
  document.getElementById("wrapper").appendChild(content_container);
});


// カスタム要素を描画する関数
function renderCustomSection(customItem) {
  const section = document.createElement("div");
  section.classList.add("custom-section");

  if (customItem.type === "accordion") {
    const accordion = document.createElement("div");
    accordion.classList.add("accordion");

    const title = document.createElement("h4");
    title.textContent = customItem.title;
    accordion.appendChild(title);

    customItem.items.forEach(item => {
      const itemElement = document.createElement("div");
      itemElement.classList.add("accordion-item");

      const term = document.createElement("strong");
      term.textContent = item.term;
      itemElement.appendChild(term);

      const desc = document.createElement("p");
      desc.textContent = item.desc;
      itemElement.appendChild(desc);

      accordion.appendChild(itemElement);
    });

    section.appendChild(accordion);
  } else if (customItem.type === "character-list") {
    const characterList = document.createElement("div");
    characterList.classList.add("character-list");

    const title = document.createElement("h4");
    title.textContent = customItem.title;
    characterList.appendChild(title);

    customItem.items.forEach(item => {
      const character = document.createElement("div");
      character.classList.add("character-item");

      const img = document.createElement("img");
      img.src = item.img;
      img.alt = item.name;
      character.appendChild(img);

      const name = document.createElement("p");
      name.textContent = item.name;
      character.appendChild(name);

      characterList.appendChild(character);
    });

    section.appendChild(characterList);
  } else if (customItem.type === "links") {
    const linkSection = document.createElement("div");
    linkSection.classList.add("link-section");

    const title = document.createElement("h4");
    title.textContent = customItem.title;
    linkSection.appendChild(title);

    customItem.links.forEach(link => {
      const a = document.createElement("a");
      a.href = link.url;
      a.textContent = link.label;
      linkSection.appendChild(a);
    });

    section.appendChild(linkSection);
  }

  return section;
}
