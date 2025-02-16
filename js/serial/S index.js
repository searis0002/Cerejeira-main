//リンクソース
const source = [
    {id:'001', nametag:'unknown',
        img:'img/syougasan.webp',
        html:'human.html',
        namer:'note',
        textin:'human',
    },  
    {id:'002', nametag:'human',
        img:'img/human/ilust/pottsness/icon.webp',
        html:'human.html',
        namer:'note',
        textin:'human',
    },
    {id:'003', nametag:'skill (Substance)',
        img:'img/icon/Substance.webp',
        html:'Substance.html',
        namer:'note',
        textin:'skill',
    },
    {id:'004', nametag:'sound',
        img:'img/syougasan.webp', 
        html:'sound.html',
        namer:'note',
        textin:'sound',
    },
    {id:'005', nametag:'game',
        img:'img/syougasan.webp', 
        html:'game.html',
        namer:'note',
        textin:'game',
    },
];

//ループ上限(colの数)
let looplimit = 5;

function writehtml(){
    //引数にゼロパディングを書けた連番を指定する、そのあとwhileループをする
    const max = looplimit + 1;
    let n = 1;
    
    function search(id, img, html, namer, textin){
        console.log(`
          ID: ${id}, 
          画像リンク: ${img},
          htmlリンク: ${html}, 
          遷移リンクテキスト: ${namer}, 
          リンク内説明テキスト: ${textin}
        `);
    }
    
    function write(IDStr, img, html, namer, textin){
        const result = `
            <img src="${img}" alt="icon">
            <hr>
            <h2><a href="${html}">${namer}</a></h2>
            <p class="text">${textin}</p>
        `;
    
        const text = document.getElementById(IDStr);
    
        if (!text) {
            console.log(`ID ${IDStr} に対応するHTML要素が見つかりません`);
            return;
        }
    
        text.innerHTML = result;
    }
    
    while (n < max) {
        const IDStr = ('000' + n).slice(-3);
        const found = source.find(item => item.id === IDStr);
    
        
        found // すべての値が存在する場合のみHTMLを更新
          ? (search(found.id, found.img, found.html, found.namer, found.textin),
             found.img && found.html && found.namer && found.textin 
               ? write(IDStr, found.img, found.html, found.namer, found.textin)
               : console.log(`ID ${IDStr} のデータが不足しています`))
          : console.log(`ID ${IDStr} に該当するデータが見つかりませんでした`);
    
        n++;
    }
    
}
writehtml();


var str2 = source.slice();
str2.sort(function(a, b) {
    if (a.name > b.name) {
      return 1;
    } else {
      return -1;
    }
  })
console.log(source);
console.log(str2);