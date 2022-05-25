const isMobile = $(window).width() <= 480;
const $ul = $('#SlideLs');
const $Nav = $('#Nav');

// console.log(isMobile);


// init--------------------------------------------
$('#Btn1').addClass('js-nav-btn');

// 判斷至少要有兩個等號，最多三個等號
// if (isMobile == false)的寫法可以改為if (!isMobile)
// if (isMobile == true)的寫法可以簡短為if (isMobile)

if (isMobile == true) {
    console.log('手機版');
    $ul.find('.slide-item').scroll(function () {
        if ($(this).scrollTop() == 0) {
            $Nav.removeClass('js-nav');
        } else {
            $Nav.addClass('js-nav');
        }
    });

} else {
    console.log('電腦版');
}


// event-------------------------------------------
$('#Btn1').click(function () {
    $(this).addClass('js-nav-btn').siblings().removeClass('js-nav-btn');
    $ul.css({
        left: 0,
        top: 0
    });
});

$('#Btn2').click(function () {
    $(this).addClass('js-nav-btn').siblings().removeClass('js-nav-btn');
    $ul.css({
        left: '-100%',
        top: 0
    });
});

$('#Btn3').click(function () {
    $(this).addClass('js-nav-btn').siblings().removeClass('js-nav-btn');
    $ul.css({
        left: '-200%',
        top: 0
    });
});

$('#Btn4').click(function () {
    $(this).addClass('js-nav-btn').siblings().removeClass('js-nav-btn');
    $ul.css({
        left: 0,
        top: '-100%'
    });
});

$('#Btn5').click(function () {
    $(this).addClass('js-nav-btn').siblings().removeClass('js-nav-btn');
    $ul.css({
        left: '-100%',
        top: '-100%'
    });
});

$('#Btn6').click(function () {
    $(this).addClass('js-nav-btn').siblings().removeClass('js-nav-btn');
    $ul.css({
        left: '-200%',
        top: '-100%'
    });
});

$('.pd-item > a').fancybox();