    

document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".grid-container");
    const swiper_1 = document.querySelector(".swiper-illust"); // 追加する要素を取得
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
            <div class="grid-area4"><p><strong>${character.explanation}</strong></p></div>
            <div class="grid-area5"><p>grid5</p></div>  
        `;
                container.innerHTML = characterHTML;

                // Swiper用のHTML
                const swiperHTML = `
                    <section class="swiper slider-3"><!--スライドショー-->
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <img src="${character.illust_001}" alt="${character.chara}" class="tate">
                        </div>
                        <div class="swiper-slide">
                            <img src="${character.splashart}" alt="${character.chara}" class="tate">
                        </div>
                        <div class="swiper-slide">
                            <img src="img/human/ilust/akakura/001.webp" alt="2" class="tate">
                        </div>
                        <div class="swiper-slide">
                            <img src="img/human/ilust/akakura/002.webp" alt="3" class="tate">
                        </div>
                        <div class="swiper-slide">
                            <img src="img/human/ilust/akakura/005.webp" alt="4" class="tate">
                        </div>
                        <div class="swiper-slide">
                            <img src="img/human/ilust/akakura/006.webp" alt="5" class="tate">
                        </div>
                    </div>
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div>
                    <div class="swiper-pagination"></div> 
                    </section>
                `;
                
                swiper_1.innerHTML = swiperHTML; // Swiperに追加
                // Swiperを再初期化
                setTimeout(() => {
                    new Swiper(".slider-3", {
                        loop: true,
                        centeredSlides: true, // スライドを中央配置
                        slidesPerView: 2.2, // 1.5枚表示（次の画像を半分見せる）
                        spaceBetween: .3, // スライド間の余白
                        navigation: {
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                        },
                        pagination: {
                            el: ".swiper-pagination",
                            clickable: true,
                            dynamicBullets: true,
                        },
                        autoplay: {
                            delay: 3000,
                            disableOnInteraction: false,
                        },
                    });
                }, 100); // 100msの遅延を入れて確実に適用
            } else {
                container.innerHTML = "<p>キャラクターが見つかりませんでした。</p>";
            }
        })
        .catch(error => console.error('Error loading JSON:', error));
});