$(function(){
    $('.case_title_border_d').click( function (){

        console.log(this); //HTMLElement

        // do sth.
        var index = $(this).index();

        // 改上面
        // 1. 选元素；2.（修改他的样式——表现）
        $(this).addClass('case_title_border_f').siblings().removeClass('case_title_border_f');

        // 改下面
        var x = $('.form__tab').eq(index);
        x.addClass('form__tab_block').siblings().removeClass('form__tab_block');

    });
});