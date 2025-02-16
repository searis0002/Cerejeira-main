//リンクソース idを変更することで順番変えられます （id順に並べたほうがきれいなので注意） 
const source2 = [
    {id:'cos-001',  usertag:'白月さん',
        img:'img/human/cosplay/shirathuki/icon.webp',
        html:'cos 001.html',
        namer:'白月',
        textin:'hoyo',
        xlink:'shirathukisan',
    },  
    {id:'cos-002',  usertag:'幸まるさん',
        img:'img/human/cosplay/yukimaru/icon.webp',
        html:'cos 002.html',
        namer:'幸まる',
        textin:'hoyo',
        xlink:'y_k_mr812',
    },  
    {id:'cos-003',  usertag:'つくねさん',
        img:'img/human/cosplay/tukimi_tukune/icon.webp',
        html:'cos 003.html',
        namer:'月海つくね',
        textin:'<img src="img/icon/instagram.webp" class="smalllogo"> <a href="https://www.instagram.com/xaiabp/" class="instagram">instagram</a>',
        xlink:'Xaiabp',
    },  
    {id:'cos-004',  usertag:'ねねさん',
        img:'img/human/cosplay/nene/icon 2.webp',
        html:'cos 004.html',
        namer:'ねね',
        textin:'<img src="img/icon/instagram.webp" class="smalllogo"> <a href="https://www.instagram.com/nene__oo0/" class="instagram">instagram</a>',
        xlink:'__zzz___oo0',
    },  
    {id:'cos-005',  usertag:'猫あしゅさん',
        img:'img/human/cosplay/nekota_ashu/icon.webp',
        html:'cos 005.html',
        namer:'猫田 あしゅ',
        textin:'others',
        xlink:'Nekota_Ashu',
    },  
    {id:'cos-006',  usertag:'Sithleさん',
        img:'img/human/cosplay/Sithle/icon.webp',
        html:'cos 006.html',
        namer:'Sithle',
        textin:'others',
        xlink:'Sithle011',
    },  
    {id:'cos-007',  usertag:'しょこら',
        img:'img/human/cosplay/Chocola/icon.webp',
        html:'cos 007.html',
        namer:'しょこら',
        textin:'others',
        xlink:'Chocolat_cos0',
    },  
    {id:'cos-008',  usertag:'逢坂ゆゆさん',
        img:'img/human/cosplay/aisakayuyu/icon.webp',
        html:'cos 008.html',
        namer:'逢坂ゆゆ',
        textin:'others',
        xlink:'yuyu_cosp',
    },  
    {id:'cos-009',  usertag:'Yuki亭さん',
        img:'img/human/cosplay/yukiteyi/icon.webp',
        html:'cos 009.html',
        namer:'Yuki亭',
        textin:'others',
        xlink:'teyi0214',
    },  
];

//ループ上限(colの数)
let looplimit2 = 9;

//illust
function writehtml(){
    //引数にゼロパディングを書けた連番を指定する、そのあとwhileループをする
    const max = looplimit2 + 1;
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
        IDStr = "cos-" + IDStr;
        const found = source2.find(item => item.id === IDStr);
    
        
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

