function initAnimeCustom(anime) {
  const container = document.getElementById("anime-detail");
  container.innerHTML = ""; // 共通の描画を完全リセット

  //header
  const header = document.createElement("header");
  header.classList.add("site-header");

  //header logo
  const logo = document.createElement("a");
  logo.classList.add("logo");
  logo.href = "https://www.pokemon.co.jp/"; // トップページへのリンク
  logo.innerHTML = "<img src='./img/IP/pokemon/logo.webp' alt='pokemon'>";

  //header list
  const nav = document.createElement("nav");
  nav.classList.add("nav");
  const ul = document.createElement("ul");
  const menus = [
  { label: "ホーム", href: "index.html" },
  { label: "キャラクター", href: "#characters" },
  { label: "エピソード", href: "#episodes" },
  { label: "公式サイト", href: anime.link, target: "_blank" }
  ];

  menus.forEach(menu => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.textContent = menu.label;
    a.href = menu.href;
    if (menu.target) a.target = menu.target;
    li.appendChild(a);
    ul.appendChild(li);
  });

  //main content
  const customDiv = document.createElement("div");
  customDiv.classList.add("anchor");

  customDiv.innerHTML = `
  <h1>🌍 ${anime.title} - ワールドトリガー専用</h1>
    <img src="${anime.img}" alt="${anime.title}" class="main-img">
    <p>ジャンル: ${anime.genre.join(", ")}</p>
    <p>放送年: ${anime.year}</p>
    <div class="special-section">
      <p>ここは専用JSだけのコンテンツ</p>
    </div>
    <h2>ポケモン専用ページ</h2>
    <p>ここは専用JSで自由に作り込み可能。</p>
  `;

  //css 作成
  const style = document.createElement("style");
  style.textContent = `
    .main-img {
      max-width: 100%;
      height: auto;
    }
    header {
      max-height: 80px;
      background-color:rgba(25, 100, 238, 0);
      & > img {
        max-width: 100px;
      }
        & > .nav{
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 80px;
            & > ul{
                display: flex;
                align-items: center;
                list-style: none;
                margin: 0;
                padding: 0;
                & > li{
                    display: flex;
                    align-items: center;
                    margin-left: 22px;
                    font-size: 16px;
                    letter-spacing: 1px;
                    & > a{
                        color: rgb(115, 166, 166);
                        text-decoration: none;
                    }
                }
            }
        }
    }
    header{
    font-weight: 700;
    width: 100%;
    z-index: 3;
    & > .container{
        max-width: 1680px;
        width: 90vw;
        margin: 0 auto;
        & > .row{
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 80px;
            & > .logo{
                font-size: 24px;
            }
            & > ul{
                display: flex;
                align-items: center;
                list-style: none;
                margin: 0;
                padding: 0;
                & > li{
                    display: flex;
                    align-items: center;
                    margin-left: 22px;
                    font-size: 16px;
                    letter-spacing: 1px;
                    & > button {
                        width: 35px; 
                        height: 35px;
                        border-radius: 50%;
                        cursor: pointer;
                        padding: 0;
                    }
                    & > a{
                        color: rgb(115, 166, 166);
                        text-decoration: none;
                    }
                }
            }
        }
    }
}
  `;


  document.head.appendChild(style);
  container.prepend(header);
  container.appendChild(customDiv);

  header.appendChild(logo);
  header.appendChild(nav);
  nav.appendChild(ul);
}


