//logoの表示
$(window).on('load', function () {
  $("#splash").delay(600).fadeOut('slow'); //ローディング画面を1.5秒（1500ms）待機してからフェードアウト
  $("#splash_logo").delay(500).fadeOut('slow'); //ロゴを1.2秒（1200ms）待機してからフェードアウト
});

//ハンバーガー
$('.open-button').on('click', function () {
  $('.open-button').toggleClass('close');
  $('.nav-wrapper').toggleClass('slide-in');
  $('body').toggleClass('noscroll');
});
$('#nav a[href]').on('click', function () {
  $('.open-button').trigger('click');
});

//トップに戻る
$(function () {
  $("#page-top").hide();
  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      $("#page-top").fadeIn(800);
    } else {
      $("#page-top").fadeOut();
    }
  });
  $("#page-top").click(function () {
    $("body,html").animate({
      scrollTop: 0
    }, 500);
    return false;
  });
  // #で始まるリンクをクリックしたら実行される
  $('a[href^="#"]').click(function () {
    // スクロールの速度
    let speed = 400; // ミリ秒で記述
    let href = $(this).attr("href");
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top;
    $('body,html').animate({
      scrollTop: position
    }, speed, 'swing');
    return false;
  });

  $('.slider').slick({
    autoplay: true, //自動的に動き出すか。
    autoplaySpeed: 4000,
    infinite: true, //スライドをループさせるかどうか。
    slidesToShow: 2, //スライドを画面に2枚見せる
    slidesToScroll: 1, //1回のスクロールで3枚の写真を移動して見せる
    prevArrow: '<div class="slick-prev"></div>', //矢印部分PreviewのHTMLを変更
    nextArrow: '<div class="slick-next"></div>', //矢印部分NextのHTMLを変更
    dots: false, //下部ドットナビゲーションの表示
    responsive: [{
        breakpoint: 10000,
        settings: {
          slidesToShow: 2, //スライドを画面に2枚見せる
          slidesToScroll: 1, //1回のスクロールで2枚の写真を移動して見せる
        }
      },
      {
        breakpoint: 1040, //モニターの横幅が1040px以下の見せ方
        settings: {
          slidesToShow: 1, //スライドを画面に1枚見せる
          slidesToScroll: 1, //1回のスクロールで1枚の写真を移動して見せる
        }
      },
      {
        breakpoint: 860,
        settings: {
          slidesToShow: 1, 
          slidesToScroll: 1, 
        }
      }
    ]
  });

  $(window).scroll(function () {
    $('.voice_para').each(function () {
      var scroll = $(window).scrollTop();
      var pos = $(this).offset().top;
      var delay = 900;
      if (scroll > pos - delay) {
        $(this).addClass('active');
      }
    });
  });
  $(window).scroll(function () {
    $('.try_para').each(function () {
      var scroll = $(window).scrollTop();
      var pos = $(this).offset().top;
      var delay = 1000;
      if (scroll > pos - delay) {
        $(this).addClass('active');
      }
    });
    $(window).scroll(function () {
      $('.trysecond_para').each(function () {
        var scroll = $(window).scrollTop();
        var pos = $(this).offset().top;
        var delay = 1000;
        if (scroll > pos - delay) {
          $(this).addClass('active');
        }
      });
    });
    $(window).scroll(function () {
      $('.section-try__insuarance').each(function () {
        var scroll = $(window).scrollTop();
        var pos = $(this).offset().top;
        var delay = 1000;
        if (scroll > pos - delay) {
          $(this).addClass('active');
        }
      });
    });
  });
});
