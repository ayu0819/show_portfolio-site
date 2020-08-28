/**
 * グローバルナビのクローンを生成
 */
function setcloneNav() {
    var body = document.body;
    var globalNavigation = document.getElementById('js-global-nav');
  
    if(!globalNavigation) return;
  
    var cloneNavigation = globalNavigation.cloneNode(true);
    cloneNavigation.id = 'js-clone-nav';
    cloneNavigation.classList.add('clone-nav');
  
    body.insertBefore(cloneNavigation, body.firstChild);
  }
  setcloneNav();
  
  /**
   * グローバルナビのクローンをページ上部に移動・固定
   */
  function fixedGlobalNavigation() {
    var scrollY = window.pageYOffset;
    var trigger = document.getElementById('js-trigger');
    var cloneNavigation = document.getElementById('js-clone-nav');
  
    if(!cloneNavigation || !trigger) return;
  
    var triggerClientRect = trigger.getBoundingClientRect();
    var triggerY = scrollY + triggerClientRect.top;
    if(scrollY > triggerY) {
      cloneNavigation.classList.add('is-fixed-nav');
    } else {
      cloneNavigation.classList.remove('is-fixed-nav');
    }
  }
  window.addEventListener('scroll', fixedGlobalNavigation);



//   //要素を複製(コピー)する
//   function setcloneNavigation() {
//     //body関数にDOMのbodyを定義する
//     let body = document.body;
//     //globalbNavにIDを結びつける
//     let globalNavigation = document.getElementById('js-global-nav');
//     //もしID(globalNav)をreturnで返す
//     if(!globalNav) return;

//    //IDを(cloneNode(true))でコピーする
//     let cloneNavigation = globalNavigation.cloneNode(true);
//     //IDをコピーする
//     cloneNavigation.id = 'js-clone-nav';
//     //classを追加する
//     cloneNavigation.classList.add('clone-nav');

//     //firstChild(1番始めの要素)をinsertBefore(混入されたNodo)を呼び出している
//     body.insertBefore(cloneNavigation, body.firstChild);
// }

// setcloneNavigation();

// //headerに固定クラスを付与する
// function fixedGlobalNavigation(){
//     // scrollY関数にwindowプロパティをしようしてpageYOffsetを代入する
//     let scrollY = window.pageYOffset;
//     // trigger関数にDOMを読む為にIDを参照する
//     let trigger = Document.getElementById('js-trigger');
//     // cloneNavigation関数をID参照をする
//     let cloneNavigation = document.getElementById('js-clone-nav');

//     // もしcloneNavigationとtriggerが均一ならば結果が帰ってくる
//     if(!cloneNavigation || !trigger) return;
//     //要素の寸法とビューポートに対する位置を返します。
//     let triggerClientRect = trigger.getBoundingClientRect();
//     // 関数triggerYにscrollYと高さを測定する
//     let triggerY = scrollY + triggerClientRect.top;
//     //もしもscrollYとtriggerYが釣り合えばクラスがふよされる
//     if(scrollY > triggerY) {
//         cloneNavigation.classlist.add('is-fixed-nav');
//     } else {
//         cloneNavigation.classList.remove('is-fixed-nav');
//     }
// }

// //windowにイベントリスナーを登録する
// window.addEventListener('scroll', fixedGlobalNavigation);