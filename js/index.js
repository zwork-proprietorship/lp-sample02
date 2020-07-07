// aタグ要素の参照を取得
const links = document.querySelectorAll('a[href^="#"]');

// 各aタグにクリックイベントを設定
for ( let i = 0; i < links.length; i++ ) {
  links[i].addEventListener('click', (e) => {
    // デフォルトのイベントをキャンセル
    e.preventDefault();

    // 対象（aタグ）のY軸の絶対座標を取得
    const elemY = links[i].getBoundingClientRect().top;
    // 現在のスクロール量を取得
    const scrollY = window.pageYOffset;
    // 対象までのスクロール量を算出
    const top = elemY - scrollY;

    window.scroll({
      top: top, // スクロール量の設定
      behavior: 'smooth' // スクロール動作の設定
    });
  });
}

(function(d) {
    var config = {
      kitId: 'hvu7xgo',
      scriptTimeout: 3000,
      async: true
    },
    h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
})(document);

$(window).load(function(){
    $('body').animate({opacity:'1'},1000);
});

$(document).ready(function() {
    // PC/SP画像変換
    var $setElem = $('.switch'),
    pcName = '_pc',
    spName = '_sp',
    replaceWidth = 641;
 
    $setElem.each(function(){
        var $this = $(this);
        function imgSize(){
            if(window.innerWidth > replaceWidth) {
                $this.attr('src',$this.attr('src').replace(spName,pcName)).css({visibility:'visible'});
            } else {
                $this.attr('src',$this.attr('src').replace(pcName,spName)).css({visibility:'visible'});
            }
        }
        $(window).resize(function(){imgSize();});
        imgSize();
    });
    $('.load').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
        if(isInView){
            $(this).stop().addClass('fadein');
        }
        else{
        }
    });

    // bxslider
    var $topSlider = $('.bxslider').bxSlider({
        auto: true,
        pager: true,
        pause: 5000,
        responsive: true,
        controls: false,
        infiniteLoop: true,
        touchEnabled: true
    });

    $('.sec1slider').bxSlider({
        pause: 5000,
        pager: false,
        controls: true,
        responsive: true,
        controls: true,
        infiniteLoop: true,
        touchEnabled: true,
        minSlides: 1,
        maxSlides: 2,
        moveSlides:1,
        slideWidth: 420,
        slideMargin: 0

    });

    var stopScroll = true;
    var scrollAmount = 0;
    var oldScrollAmount = 0;
    var diffY = 0;
    var $win = $(window);
    var windowWidth = $win.width();
    var isMobileSize = false;
    var $sliderOverlayBackground = $('.slider_background');
    var $sliderOverlayContainer = $('.slider_overlay_container');
    var $top = $('.top');
    var $mv = $('#mv');
    var $topWrapper = $('.top_wrapper');

    // 設定
    var PC_HEADER_HEIGHT = 152;
    var SP_HEADER_HEIGHT = 152;
    var FILTER_POSITION = 0.5;
    var TEXT_POSITION = 0.8;
    var RELEASE_POSITION = 2;

    var currentHeaderHeight = PC_HEADER_HEIGHT;

    var wheelHandler = function() {
        var wh = isMobileSize ? window.innerHeight : $win.height();

        scrollAmount = $win.scrollTop();
        scrollAmount = scrollAmount < 0 ? 0 : scrollAmount;
        diffY = scrollAmount - oldScrollAmount;

        if (stopScroll) {
            if (diffY < 0) {
                if (scrollAmount < wh * FILTER_POSITION) {
                    if ($sliderOverlayBackground.hasClass('active')) {
                        $sliderOverlayBackground.removeClass('active')
                    }
                }
                else if (scrollAmount < wh * TEXT_POSITION) {
                    if ($sliderOverlayContainer.hasClass('active')) {
                        $sliderOverlayContainer.removeClass('active')
                    }
                }
                else if (scrollAmount < wh * RELEASE_POSITION + 15) {
                    if ($top.hasClass('auto')) {
                        $top.removeClass('auto');
                    }
                }
            }
            else {
                if (scrollAmount >= wh * RELEASE_POSITION + 15) {
                    stopScroll = false;
                    if (!$top.hasClass('auto')) {
                        $top.addClass('auto');
                    }
                }
                if (scrollAmount > wh * TEXT_POSITION) {
                    if (!$sliderOverlayContainer.hasClass('active')) {
                        $sliderOverlayContainer.addClass('active')
                    }
                }
                if (scrollAmount > wh * FILTER_POSITION) {
                    if (!$sliderOverlayBackground.hasClass('active')) {
                        $sliderOverlayBackground.addClass('active')
                    }
                }
            }
            
        } else {
            
            if (scrollAmount < wh * RELEASE_POSITION + 15) {
                stopScroll = true;
            }
        }

        if (isMobileSize) {
            $mv.css('height', wh - currentHeaderHeight)
            $top.css('height', wh)
            $topWrapper.css('height', wh * (RELEASE_POSITION + 1) - 15)
        }

        oldScrollAmount = scrollAmount;
    };

    var onResize = function(event) {
        var wh = isMobileSize ? window.innerHeight : $win.height();
        windowWidth = $win.width();
        isMobileSize = windowWidth < 768 ? true : false;

        if (isMobileSize) {
            currentHeaderHeight = SP_HEADER_HEIGHT;

            $mv.css('height', wh - currentHeaderHeight);
            $top.css('height', wh);
            $topWrapper.css('height', wh * (RELEASE_POSITION + 1) - 15);
        } else {
            currentHeaderHeight = PC_HEADER_HEIGHT;

            $mv.attr('style', '');
            $top.attr('style', '');
            $topWrapper.attr('style', '');
        }
    };

    $win.on("orientationchange resize", onResize);

    if (isMobileSize) {
      $win.on('scroll touchmove', wheelHandler);
    }
    else {
      $win.on('scroll', wheelHandler);
      // $('body').bind('mousewheel', wheelHandler);
    }

    stopScroll = scrollAmount < (isMobileSize ? window.innerHeight : $win.height()) * RELEASE_POSITION + 15;

    onResize();
    wheelHandler();



    var $subNav = $('.subNav');
      $('.nav02').hover(
        function(){
          // stop関数を追加
          $subNav.stop().slideDown(300);
          $('#arrow').stop().fadeIn(100);
        },
        function(){
          // stop関数を追加
          $subNav.stop().slideUp(300);
          $('#arrow').stop().fadeOut(200);
        }
    );

    $('.mouseover').each(function(){
        var src_off = $(this).find('img').attr('src');
        var src_on = src_off.replace('_off','_on');
        $('<img />').attr('src',src_on);
        $(this).hover(function(){
            $(this).find('img').attr('src',src_on);
        },function(){
            $(this).find('img').attr('src',src_off);
        }); 
    });

    $('.sp_nav_btn').click(function () {
        $('#sp_nav').fadeIn();
    });
    $('.sp_nav_close').click(function () {
        $('#sp_nav').fadeOut();
    });



});
