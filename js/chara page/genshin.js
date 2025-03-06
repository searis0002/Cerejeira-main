

document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".grid-container");
    const params = new URLSearchParams(window.location.search); // クエリパラメータを取得
    const charaName = params.get('chara'); // 'chara'というパラメータの値を取得

    fetch('../json/genshin.json')
        .then(response => response.json())
        .then(characters => {
            // キャラクターリストから、クエリパラメータで渡されたキャラクターだけをフィルタリング
            const character = characters.find(c => c.id === charaName);

            if (character) {
                // キャラクター情報が見つかった場合、その情報を表示
                const characterHTML = `
            <div class="grid-img">
                <img src="${character.splashart}" alt="${character.chara}">
            </div>
            <div class="grid-information">
                <h3>${character.chara}</h3><hr>
                <ul>
                    <li>${"★".repeat(character.rarity)}</li>
                    <li>${character.weapon}</li>
                    <li>${character.element}</li>
                </ul>
                <h4>${character.info}</h4><h4><br></h4>
                <h4>誕生日 ${character.birth}</h4>
                <h4>命ノ星座 ${character.Constellation}</h4>
            </div>
            <div class="grid-detail">
                <h4>CV. ${character.cv}</h4>
                <h4>実装時期 ${character.releaseVersion}</h4>
                <h4>実装日 ${character.releaseDate}</h4>
            </div>
            <div class="grid-area4"><p>grid4</p></div>
            <div class="grid-area5"><p>grid5</p></div>  
        `;
                container.innerHTML = characterHTML; // 詳細情報をコンテナに追加
            } else {
                container.innerHTML = "<p>キャラクターが見つかりませんでした。</p>";
            }
        })
        .catch(error => console.error('Error loading JSON:', error));
});