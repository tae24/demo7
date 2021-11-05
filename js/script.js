// ハンバーガーメニュー
$(".burger-btn").on("click", function () { //「burger-btn」をクリックすると
  $(".burger-btn").toggleClass("close"); //closeというclassを追加/削除。
  $(".globalNav").fadeToggle(500); //0.5秒かけてフェードイン/フェードアウト。
});


// スライダー
// <!-- Initialize Swiper -->

