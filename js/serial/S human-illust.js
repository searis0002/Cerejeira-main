//リンクソース idを変更することで順番変えられます （id順に並べたほうがきれいなので注意） 
const source = [
    {id:'illust-001',  usertag:'赤倉さん',
        img:'img/human/ilust/akakura/icon.webp',
        html:'ilust 001.html',
        namer:'赤倉',
        textin:'character',
        xlink:'akakura1341',
    },  
    {id:'illust-002',  usertag:'pottsnessさん',
        img:'img/human/ilust/pottsness/icon.webp',
        html:'ilust 002.html',
        namer:'pottsness',
        textin:'character',
        xlink:'pottsness',
    },  
    {id:'illust-003',  usertag:'gomziさん',
        img:'img/human/ilust/gomzi/icon.webp',
        html:'ilust 003.html',
        namer:'gomzi',
        textin:'character',
        xlink:'gcmzi',
    },  
    {id:'illust-004',  usertag:'Noyuさん',
        img:'img/human/ilust/Noyu/icon.webp',
        html:'ilust 004.html',
        namer:'Noyu',
        textin:'character',
        xlink:'NOYU23386566',
    },  
    {id:'illust-005',  usertag:'ぽょんさん',
        img:'img/human/ilust/poyon/icon.webp',
        html:'ilust 005.html',
        namer:'ぽょん',
        textin:'character',
        xlink:'Poyon_NA',
    },  
    {id:'illust-006',  usertag:'ATDANさん',
        img:'img/human/ilust/ATDAN/icon.webp',
        html:'ilust 006.html',
        namer:'ATDAN',
        textin:'character',
        xlink:'Atdan86',
    },  
    {id:'illust-007',  usertag:'桜田千尋さん',
        img:'img/human/ilust/sakurada_chihiro/icon.webp',
        html:'ilust 007.html',
        namer:'桜田千尋',
        textin:'BG artist',
        xlink:'ChihiroSAKURADA',
    },  
    {id:'illust-008',  usertag:'あずーるさん',
        img:'img/human/ilust/azure/icon.webp',
        html:'ilust 008.html',
        namer:'あずーる',
        textin:'character',
        xlink:'azure_0608_sub',
    },  
    {id:'illust-009',  usertag:'rurudoさん',
        img:'img/human/ilust/rurudo/icon.webp',
        html:'ilust 009.html',
        namer:'rurudo',
        textin:'character',
        xlink:'rurudo_',
    },  
    {id:'illust-010',  usertag:'伊藤らぼさん',
        img:'img/human/ilust/ItoLab/icon.webp',
        html:'ilust 010.html',
        namer:'伊藤らぼ',
        textin:'character',
        xlink:'ItoArtLab',
    },   
    {id:'illust-011',  usertag:'ぽちさん',
        img:'img/human/ilust/poti/icon.webp',
        html:'ilust 011.html',
        namer:'ぽち',
        textin:'BG Artist',
        xlink:'poti1990',
    },   
    {id:'illust-012',  usertag:'深白さん',
        img:'img/human/ilust/mishiro/icon.webp',
        html:'ilust 012.html',
        namer:'深白',
        textin:'character',
        xlink:'iromishiro',
    },   
    {id:'illust-013',  usertag:'藤ちょこさん',
        img:'img/human/ilust/fuzichoco/icon.webp',
        html:'ilust 013.html',
        namer:'藤ちょこ',
        textin:'character',
        xlink:'fuzichoco',
    },   
    {id:'illust-014',  usertag:'tarteさん',
        img:'img/human/ilust/tarte/icon.webp',
        html:'ilust 014.html',
        namer:'tarte',
        textin:'character',
        xlink:'HoDaRaKe',
    },   
    {id:'illust-015',  usertag:'mochaさん',
        img:'img/human/ilust/mocha/icon.webp',
        html:'ilust 015.html',
        namer:'mocha',
        textin:'BG Artist',
        xlink:'mocha708',
    },   
    {id:'illust-016',  usertag:'周憂さん',
        img:'img/human/ilust/shuu/icon.webp',
        html:'ilust 016.html',
        namer:'周憂',
        textin:'BG Artist',
        xlink:'shuu_Illust',
    },   
    {id:'illust-017',  usertag:'わいっしゅさん',
        img:'img/human/ilust/yyish/icon.webp',
        html:'ilust 017.html',
        namer:'わいっしゅ',
        textin:'BG Artist',
        xlink:'yyish',
    },  
    {id:'illust-018',  usertag:'lion_seyさん',
        img:'img/human/ilust/lion_sey/icon.webp',
        html:'ilust 018.html',
        namer:'lion_sey',
        textin:'character',
        xlink:'lion_sey',
    },   
    {id:'illust-019',  usertag:'美和野らぐさん',
        img:'img/human/ilust/miwano_rag/icon.webp',
        html:'ilust 019.html',
        namer:'美和野らぐ',
        textin:'character',
        xlink:'rag_ragko',
    },   
    {id:'illust-020',  usertag:'majamariさん',
        img:'img/human/ilust/majamari/icon.webp',
        html:'ilust 020.html',
        namer:'majamari',
        textin:'character',
        xlink:'majamari17',
    },   
    {id:'illust-021',  usertag:'むりょさん',
        img:'img/human/ilust/muryo/icon.webp',
        html:'ilust 021.html',
        namer:'むりょ',
        textin:'character',
        xlink:'muryou_tada',
    },   
    {id:'illust-022',  usertag:'ミュシャさん',
        img:'img/human/ilust/myusya/icon.webp',
        html:'ilust 022.html',
        namer:'ミュシャ',
        textin:'character',
        xlink:'misa_chainchroA',
    },   
    {id:'illust-023',  usertag:'torinoさん',
        img:'img/human/ilust/torino/icon.webp',
        html:'ilust 023.html',
        namer:'torino',
        textin:'character',
        xlink:'TorinoAqua',
    },   
    {id:'illust-024',  usertag:'優子鈴さん',
        img:'img/human/ilust/yukoring/icon.webp',
        html:'ilust 024.html',
        namer:'優子鈴',
        textin:'character',
        xlink:'_yukoring',
    },   
];

//ループ上限(colの数)
let looplimit = 24;

//illust
function writehtml(){
    //引数にゼロパディングを書けた連番を指定する、そのあとwhileループをする
    const max = looplimit + 1;
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
        IDStr = "illust-" + IDStr;
        const found = source.find(item => item.id === IDStr);
    
        
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

