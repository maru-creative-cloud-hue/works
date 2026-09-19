/* ========================================
LOADING
======================================== */
/*　------------------
ロード画面
------------------　*/
$(window).on('load',function(){
    $("#splash-logo").delay(1200).fadeOut('slow');
    //=====ここからローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる
    $("#splash").delay(1500).fadeOut('slow',function(){    
        $('body').addClass('appear');	
    });    
   //=====ここから背景が伸びた後に動かしたいJSをまとめたい場合は
    $('.splash-bg').on('animationend', function() {    
    });      
});

/* ========================================
COMMON
======================================== */
function fadeAnime(){
//ふわっと動くきっかけのクラス名と動きのクラス名の設定
$('.fadeUpTrigger').each(function(){
	var elemPos = $(this).offset().top-20;
	var scroll = $(window).scrollTop();
	var windowHeight = $(window).height();
	if (scroll >= elemPos - windowHeight){
	$(this).addClass('fadeUp');
	}else{
	$(this).removeClass('fadeUp');
	}
});
}
// 画面がスクロールしたら動く
  $(window).scroll(function (){
    fadeAnime();
  });

/*　------------------
順番に現れる動き
------------------　*/
function delayScrollAnime() {
	var time = 0.3;
	var value = time;
	$('.delayScroll').each(function () {
		var parent = this;	
		var elemPos = $(this).offset().top;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		var childs = $(this).children();
		if (scroll >= elemPos - windowHeight && !$(parent).hasClass("play")) {
			$(childs).each(function () {
				if (!$(this).hasClass("fadeUp")) {					
					$(parent).addClass("play");
					$(this).css("animation-delay", value + "s");
					$(this).addClass("fadeUp");
					value = value + time;
					var index = $(childs).index(this);
					if((childs.length-1) == index){
						$(parent).removeClass("play");
					}
				}
			})
		}else {
			$(childs).removeClass("fadeUp");
			value = time;
		}
	})
}

// 画面がスクロールしたら動く
	$(window).scroll(function (){
		delayScrollAnime();
	});

/* ========================================
HEADER
======================================== */
/*　------------------
メニューボタン
------------------　*/
$(".header-btn").click(function () {
	$(this).toggleClass('active');
    $("#nav").toggleClass('panelactive');
});
$("#nav a").click(function () {
    $(".header-btn").removeClass('active');
    $("#nav").removeClass('panelactive');
});

/* ========================================
TOP
======================================== */
/*　------------------
メイン画像
------------------　*/
$('.top-hero-slider-pc').slick({
	fade:true,
	autoplay: true,
	autoplaySpeed: 3000,
	speed:1000,
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	dots: true,
	pauseOnFocus: false,
	pauseOnHover: false,
	pauseOnDotsHover: false,
});
//スマホ用：スライダーをタッチしても止めずにスライドをさせたい場合
// $('.top-hero-slider-pc').on('touchmove', function(event, slick, currentSlide, nextSlide){
//     $('.top-hero-slider-pc').slick('slickPlay');
// });



$('.top-hero-slider-sp').slick({
	fade:true,
	autoplay: true,
	autoplaySpeed: 3000,
	speed:1000,
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	dots: true,
	pauseOnFocus: false,
	pauseOnHover: false,
	pauseOnDotsHover: false,
});
//スマホ用：スライダーをタッチしても止めずにスライドをさせたい場合
$('.top-hero-slider-sp').on('touchmove', function(event, slick, currentSlide, nextSlide){
    $('.top-hero-slider-sp').slick('slickPlay');
});





/*　------------------
インデックス
------------------　*/
$('#page-link a[href*="#"]').click(function () {
	var elmHash = $(this).attr('href');
	var pos = $(elmHash).offset().top;
	$('body,html').animate({scrollTop: pos}, 500);
	return false;
});

/*　------------------
ニュースティッカー
------------------　*/
var slider;
var sliderFlag = false;
var breakpoint = 0;
  
function sliderSet() {
        var windowWidth = window.innerWidth;
        if (windowWidth >= breakpoint && !sliderFlag) {//768px以上は1行でスライダー表示
            slider = $('.top-hero-news-slider').bxSlider({
            touchEnabled:false,//リンクを有効にするためスライドをマウスでドラッグした際にスライドの切り替えを可能にする機能を無効化
			mode: 'vertical',//縦スライド指定
			controls: false,//前後のコントロールを表示させない。
			auto: 'true',//自動的にスライド
			pager: false//ページ送り無効化
		});
            sliderFlag = true;
        } else if (windowWidth < breakpoint && sliderFlag) {
            slider.destroySlider();//bxSliderのOptionであるdestroySliderを使用してスライダーの動きを除去
            sliderFlag = false;
        }
    }

$(window).on('load resize', function() {
        sliderSet();
});

/* ========================================
PIC UP
======================================== */
/*　------------------
ピックアップ一覧
------------------　*/
$('.pic-up-slider').slick({
		autoplay: false,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: '<div class="slick-prev"></div>',
		nextArrow: '<div class="slick-next"></div>',
		dots: false,
		responsive: [
			{
			breakpoint: 769,//モニターの横幅が769px以下の見せ方
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		},
		{
			breakpoint: 426,//モニターの横幅が426px以下の見せ方
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		}
	]
	});

/* ========================================
FAQ
======================================== */
/*　------------------
アコーディオンパネル
------------------　*/
$('.faq-item-title').on('click', function() {
	$('.faq-item-hidden').slideUp(500);
	var findElm = $(this).next(".faq-item-hidden");
	if($(this).hasClass('close')){
		$(this).removeClass('close');    
	}else{
		$('.close').removeClass('close');
		$(this).addClass('close');
		$(findElm).slideDown(500);
	}
});

/* ========================================
FOOTER
======================================== */
/*　------------------
トップページアイコン
------------------　*/
//スクロールした際の動きを関数でまとめる
// function PageTopAnime() {
// 	var scroll = $(window).scrollTop();
// 	if (scroll >= 600){
// 		$('#footer-icon').removeClass('DownMove');
// 		$('#footer-icon').addClass('UpMove');
// 	}else{
// 		if($('#footer-icon').hasClass('UpMove')){
// 			$('#footer-icon').removeClass('UpMove');
// 			$('#footer-icon').addClass('DownMove');
// 		}
// 	}
// 	var wH = window.innerHeight;
// 	var footerPos =  $('.footer').offset().top;
// 	if(scroll+wH >= (footerPos+10)) {
// 		var pos = (scroll+wH) - footerPos+10
// 		$('#footer-icon').css('bottom',pos);
// 	}else{
// 		if($('#footer-icon').hasClass('UpMove')){
// 			$('#footer-icon').css('bottom','10px');
// 		}
// 	}
// }
// // 画面をスクロールをしたら動かしたい場合の記述
// $(window).scroll(function () {
// 	PageTopAnime();
// });
// // ページが読み込まれたらすぐに動かしたい場合の記述
// $(window).on('load', function () {
// 	PageTopAnime();
// });
// // #page-topをクリックした際の設定
// $('#footer-icon').click(function () {
//     $('body,html').animate({
//         scrollTop: 0
//     }, 500);
//     return false;
// });



/* ========================================
ASIDE
======================================== */

/*　------------------
サイドバナー
------------------　*/
//スクロールした際の動きを関数でまとめる
function PageTopAnime() {
		var scroll = $(window).scrollTop();
		if (scroll >= 600){//上から200pxスクロールしたら
			$('#side-banner').removeClass('RightMove');//#page-topについているRightMoveというクラス名を除く
			$('#side-banner').addClass('LeftMove');//#page-topについているLeftMoveというクラス名を付与
		}else{
			if(
				$('#side-banner').hasClass('LeftMove')){//すでに#page-topにLeftMoveというクラス名がついていたら
				$('#side-banner').removeClass('LeftMove');//LeftMoveというクラス名を除き
				$('#side-banner').addClass('RightMove');//RightMoveというクラス名を#page-topに付与
			}
		}
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
	PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
	PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
});

// #page-topをクリックした際の設定
$('#side-banner').click(function () {
    $('body,html').animate({
        scrollTop: 0//ページトップまでスクロール
    }, 500);//ページトップスクロールの速さ。数字が大きいほど遅くなる
    return false;//リンク自体の無効化
});


/* ========================================
GALLERY
======================================== */
$('.gallery-slider').slick({
	rtl: true,
	arrows: false,
	autoplay: true,
	autoplaySpeed: 0,
	speed: 7000,
	infinite: true,
	pauseOnHover: true,
	pauseOnFocus: false,
	cssEase: 'linear',
	slidesToShow: 3,
	slidesToScroll: 1,
	responsive: [
		{
		breakpoint: 769,
		settings: {
			slidesToShow: 1,
		}
	},
	{
		breakpoint: 426,
		settings: {
			slidesToShow: 1,
		}
	}
]
});
