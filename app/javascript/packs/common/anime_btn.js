// anime.js利用

/* ========================================================
スクロールでトップに戻るボタンを表示
=========================================================*/
// スクロールして何ピクセルでアニメーションさせるか
var px_change = 1;
// スクロールのイベントハンドラを登録
window.addEventListener('scroll',(e) => {
	// 変化するポイントまでスクロールしたらクラスを追加
	var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	if ( scrollTop > px_change ) {
		document.getElementById( "btn-backtotop" ).classList.add( "fadein" );

	// 変化するポイント以前であればクラスを削除
	} else {
		document.getElementById( "btn-backtotop" ).classList.remove( "fadein" );
	}
});

/* ========================================================
トップに戻るボタンのスムーズスクロール
=========================================================*/

const move = document.getElementById( "btn-backtotop" ) || document.createElement('a');
move.addEventListener('click',(e) => {
	window.scroll({
	  top: 0,
	  behavior: 'smooth'
	});
	event.preventDefault();
	return false;
});

// document.getElementById( "btn-backtotop" ).addEventListener('click',(e) => {
// 	// anime.remove("html, body");
// 	// デフォルトのイベントをキャンセル
// 	e.preventDefault();
// 	anime({
// 		targets: "html, body",
// 		scrollTop: 0,
// 		dulation: 600,
// 		easing: 'easeOutCubic',
// 	});
// 	return false;
// });


// 各aタグにクリックイベントを設定

// document.addEventListener('click', (e) => {
// 	  // デフォルトのイベントをキャンセル
// 	  e.preventDefault();
  
// 	  // 対象（aタグ）のY軸の絶対座標を取得
// 	  const elemY = links[i].getBoundingClientRect().top;
// 	  // 現在のスクロール量を取得
// 	  const scrollY = window.pageYOffset;
// 	  // 対象までのスクロール量を算出
// 	  const top = elemY - scrollY;
  
// 	  window.scroll({
// 		top: top, // スクロール量の設定
// 		behavior: 'smooth' // スクロール動作の設定
// 	  });
// 	});

  