//リンクソース idを変更することで順番変えられます （id順に並べたほうがきれいなので注意） 
const source3 = [
    {id:'VA-001',  usertag:'うえしゃま',
        img:'img/human/voiceactor/ueda_reina/icon.webp',
        html:'VA 001.html',
        namer:'上田麗奈',
        textin:'<a href="https://www.81produce.co.jp/actor_search/index.php/item?cell003=%E3%81%82%E8%A1%8C&cell029=%E5%A5%B3%E6%80%A7&keyword=&cell028=&page=2&cell004=&name=%E4%B8%8A%E7%94%B0%E3%80%80%E9%BA%97%E5%A5%88&id=162&label=1">Official</a>',
        xlink:'ReinaUeda_Staff',
    },  
    {id:'VA-002',  usertag:'ちゃんまも',
        img:'img/human/voiceactor/miyano_mamoru/icon.webp',
        html:'VA 002.html',
        namer:'宮野真守',
        textin:'Official',
        xlink:'miyanomamoru_PR',
    },  
];

//ループ上限(colの数)
let looplimit3 = 2;

//illust
function writehtml(){
    //引数にゼロパディングを書けた連番を指定する、そのあとwhileループをする
    const max = looplimit3 + 1;
    let n = 1;
    
    function search(id, img, html, namer, textin, xlink){
        console.log(`
          ID: ${id}, 
          画像リンク: ${img},
          htmlリンク: ${html}, 
          遷移リンクテキスト: ${namer}, 
          リンク内説明テキスト: ${textin}
          twitterリンク: ${xlink}, 
        `);
    }
                    
    function write(IDStr, img, html, namer, textin, xlink){
        const result = `
            <img src="${img}" alt="${namer}" class="icon-img">
            <hr>
            <h2><a href="${html}">${namer}</a></h2>
            <p class="text">${textin}</p>
            <img src="img/icon/twitter.webp" class="smalllogo"><a href="https://x.com/${xlink}" class="twitter"> twitter</a></p>
        `;
    
        const text = document.getElementById(IDStr);
    
        if (!text) {
            console.log(`ID ${IDStr} に対応するHTML要素が見つかりません`);
            return;
        }
    
        text.innerHTML = result;
    }
    
    while (n < max) {
        let IDStr = ('000' + n).slice(-3);
        IDStr = "VA-" + IDStr;
        const found = source3.find(item => item.id === IDStr);
    
        
        found // すべての値が存在する場合のみHTMLを更新
          ? (search(found.id, found.img, found.html, found.namer, found.textin, found.xlink),
             found.img && found.html && found.namer && found.textin 
               ? write(IDStr, found.img, found.html, found.namer, found.textin, found.xlink)
               : console.log(`ID ${IDStr} のデータが不足しています`))
          : console.log(`ID ${IDStr} に該当するデータが見つかりませんでした`);
    
        n++;
    }
    
}
writehtml();

