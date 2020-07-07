
let slider1 = new Swiper ('.slider1', {
    // オプションパラメータ(一部のみ抜粋)
    loop: true, // 最後のスライドまで到達した場合、最初に戻らずに続けてスライド可能にするか。
    // speed: 6000, // スライドが切り替わるトランジション時間(ミリ秒)。
    // slidesPerView: 2, // 何枚のスライドを表示するか
    // spaceBetween: 10, // スライド間の余白サイズ(ピクセル)
    direction: 'horizontal', // スライド方向。 'horizontal'(水平) か 'vertical'(垂直)。effectオプションが 'slide' 以外は無効。
    effect: 'slide', // "slide", "fade"(フェード), "cube"(キューブ回転), "coverflow"(カバーフロー) または "flip"(平面回転)
 
    // スライダーの自動再生
    // autoplay: true 　のみなら既定値での自動再生
    autoplay: {
      delay: 3000, // スライドが切り替わるまでの表示時間(ミリ秒)
      stopOnLast: false, // 最後のスライドまで表示されたら自動再生を中止するか
      disableOnInteraction: true // ユーザーのスワイプ操作を検出したら自動再生を中止するか
    },
 
    // // レスポンシブ化条件
    // breakpoints: {
    //   // 980ピクセル幅以下になったら
    //   980: {
    //     slidesPerView: 2,
    //     spaceBetween: 30
    //   },
    //   // 640ピクセル幅以下になったら
    //   640: {
    //     slidesPerView: 2,
    //     spaceBetween: 20
    //   }
    // },
 
    // ページネーションを表示する場合
    pagination: {
      el: '.swiper-pagination',　 // ページネーションを表示するセレクタ
    },
 
    // 前後スライドへのナビゲーションを表示する場合
    
 
    // スクロールバーを表示する場合
    scrollbar: {
      el: '.swiper-scrollbar', // スクロールバーを表示するセレクタ
    }
});

var sliderPages = navigator.userAgent.match(/iPhone|Android.+Mobile/) ? 1 : 2;

let slider2 = new Swiper ('.slider2', {
    // オプションパラメータ(一部のみ抜粋)
    loop: true, // 最後のスライドまで到達した場合、最初に戻らずに続けてスライド可能にするか。
    // speed: 6000, // スライドが切り替わるトランジション時間(ミリ秒)。
    slidesPerView: sliderPages,
    
    // spaceBetween: 10, // スライド間の余白サイズ(ピクセル)
    direction: 'horizontal', // スライド方向。 'horizontal'(水平) か 'vertical'(垂直)。effectオプションが 'slide' 以外は無効。
    effect: 'slide', // "slide", "fade"(フェード), "cube"(キューブ回転), "coverflow"(カバーフロー) または "flip"(平面回転)
    // スライダーの自動再生
    // autoplay: true 　のみなら既定値での自動再生
    // autoplay: {
    //     delay: 3000, // スライドが切り替わるまでの表示時間(ミリ秒)
    //     stopOnLast: false, // 最後のスライドまで表示されたら自動再生を中止するか
    //     disableOnInteraction: true // ユーザーのスワイプ操作を検出したら自動再生を中止するか
    //   },

    navigation: {
        nextEl: '.swiper-button-next', // 次のスライドボタンのセレクタ
        prevEl: '.swiper-button-prev', // 前のスライドボタンのセレクタ
      },
});