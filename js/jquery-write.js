function togleitem(oid,event){
    if(event == 'add'){
        $('li.add[no=' + oid + ']').hide();
        $('li.remove[no=' + oid + ']').show();
    } else if(event == 'remove'){
        $('li.add[no=' + oid + ']').show();
        $('li.remove[no=' + oid + ']').hide();
    }
}


$(function(){
  $('ul .remove').hide();
  var key = 'お気に入りID';
  var getjson = localStorage.getItem(key);
  var oidlist = JSON.parse(getjson);
  if(oidlist != null){
    oidlist.forEach( function( oid ) {
      togleitem(oid,'add');
    });
  }

})  

function addfav(oid){

    var key = 'お気に入りID';                       
    var getjson = localStorage.getItem(key);
    var oidlist = JSON.parse(getjson);

    if(oidlist == null){
        oidary = new Array(oid);
        var setjson = JSON.stringify(oidary);
        localStorage.setItem(key, setjson);

        togleitem(oid,'add');

    } else {
        if(oidlist.indexOf(oid) == -1){
            oidlist.push(oid);
            var setjson = JSON.stringify(oidlist);
            localStorage.setItem(key, setjson);

            togleitem(oid,'add');
        }
    }
}

function removefav(oid){

    var key = 'お気に入りID'; 
    var getjson = localStorage.getItem(key);
    var oidlist = JSON.parse(getjson);

    if(oidlist != null){
        var checkitem = oidlist.indexOf(oid); 
        if(checkitem != -1){
            oidlist.splice( checkitem, 1 );
            var setjson = JSON.stringify(oidlist);
            localStorage.setItem(key, setjson);

            togleitem(oid,'remove');
        }
    }
}





$(".addtofavorite").click(function(){
    var favorite_pages_start = JSON.parse(localStorage.getItem('favorite_pages'));
    var title = $("h1.page-title").text(); // ページのタイトルを取得
    if (!title.length) { // ↑が無い場合は、<head>のタイトルを取得
        title = document.title;
    }
    var favorite_pages = [{
        url: CCM_CID, // CCM_CIDは、concrete5 が各ページに付与しているID
        title: title,
        datetime: $.now()
    }];

    if(favorite_pages_start.length >= 10) { // 最大10個まで
        alert("お気に入りの登録数の上限に達しました。");
        return;
    }
    if (favorite_pages_start) {
        for(i=0;i<10;i++) { 
            if (favorite_pages_start[i] && favorite_pages[0].url !== favorite_pages_start[i].url) {
                favorite_pages.push(favorite_pages_start[i]);
            }
        }
    }
    localStorage.setItem('favorite_pages',JSON.stringify(favorite_pages));
    addFavorite();
});

function addFavorite() {
    $(".favoritedmark").removeClass('fade');
    $(".removefavorite").removeClass('hidden');
    $(".addtofavorite").addClass('hidden');
}

$(".removefavorite").click(function(){
    var favorite_pages_start = JSON.parse(localStorage.getItem('favorite_pages'));
    var favorite_pages = [];
    if (favorite_pages_start) {
        for(i=0;i<10;i++) {
            if (favorite_pages_start[i] && CCM_CID !== favorite_pages_start[i].url) {
                favorite_pages.push(favorite_pages_start[i]);
            }
        }
    }
    localStorage.setItem('favorite_pages',JSON.stringify(favorite_pages));
    removeFavorite();
});

function removeFavorite() {
    $(".favoritedmark").addClass('fade');
    $(".removefavorite").addClass('hidden');
    $(".addtofavorite").removeClass('hidden');
}

var favorite_pages = JSON.parse(localStorage.getItem('favorite_pages'));
    var selected = false;
    if (favorite_pages) {
        for(i=0;i<10;i++) {
            if (!selected && favorite_pages[i] && !isNaN(favorite_pages[i]['url'])) {
                if (CCM_CID == favorite_pages[i]['url']){
                    selected = true;
                }
            }
        }
    }
    if(selected) {
        addFavorite();
    }

    function displayFavorites() {
        var favorite_pages = JSON.parse(localStorage.getItem('favorite_pages')); // ローカルストレージから取得する
        var title = 'title';
        var listclass = 'viewhistory';
        listdata = $("<ul></ul>",{
            class: listclass
        });
        $("#favoritelist").text('');
        if (favorite_pages) {
            $("#favoritelist").append(listdata);
            for(i=0;i<10;i++) { // 最大10個まで
                if (favorite_pages[i] && !isNaN(favorite_pages[i]['url'])) { // 要素があるかどうかの判定。(上のforと合わせてコードを改善できるかもしれない)
                    textdata = $("<a></a>",{
                        href: CCM_APPLICATION_URL + '/index.php?cID=' + parseInt(favorite_pages[i]['url']),
                        text: favorite_pages[i][title]
                    }); // リンクを作成
                    removedata = $("<button></button>",{
                        id: parseInt(favorite_pages[i]['url']),
                        text: "お気に入りから削除する",
                        class: "btn btn-primary removedata"
                    }); // お気に入りから削除するボタン
                    textlist = $("<li></li>").html(textdata);
                    textlist.append(removedata);
                    $("#favoritelist").children('ul').append(textlist);
                }
            }
        } else {
            $("#favoritelist").text("お気に入りはありません。");
        }
    }

    $( document ).ready(function() {
        displayFavorites();
    });