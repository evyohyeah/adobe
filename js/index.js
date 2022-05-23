const isMobile = $(window).width() <= 480;
// console.log(isMobile);


// init--------------------------------------------
$('#Btn1').addClass('js-nav-btn');

// 判斷至少要有兩個等號，最多三個等號
if (isMobile == true) {
    console.log('手機版');
    $('#SlideLs .slide-item').scroll(function () {
        if ($(this).scrollTop() == 0) {
            $('#Nav').removeClass('js-nav');
        } else {
            $('#Nav').addClass('js-nav');
        }
    });

} else {
    console.log('電腦版');
}


// event-------------------------------------------
$('#Btn1').click(function () {
    $(this).addClass('js-nav-btn').siblings().removeClass('js-nav-btn');
});

$('#Btn2').click(function () {
    $(this).addClass('js-nav-btn').siblings().removeClass('js-nav-btn');
});

$('#Btn3').click(function () {
    $(this).addClass('js-nav-btn').siblings().removeClass('js-nav-btn');
});

$('#Btn4').click(function () {
    $(this).addClass('js-nav-btn').siblings().removeClass('js-nav-btn');
});

$('#Btn5').click(function () {
    $(this).addClass('js-nav-btn').siblings().removeClass('js-nav-btn');
});

$('#Btn6').click(function () {
    $(this).addClass('js-nav-btn').siblings().removeClass('js-nav-btn');
});