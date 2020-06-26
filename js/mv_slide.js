var num = 0;
var ln = $("#mv_slide > li").length;
var atime=600; //action time
var vtime=5000; //view time
var pp,pp2,move_width; //page nav animation 
//console.log($("body").width()/1920);
// 글자크기 반응형 적용
function fontAuto() {
    $("#main #mv_slide li .text h3").css({"font-size":Math.max(Math.min($("body").width()/1920)*64)});
    $("#main #mv_slide li .text p").css({"font-size":Math.max(Math.min($("body").width()/1920)*26)});
    $("#main #mv_slide li .text a").css({"font-size":Math.max(Math.min($("body").width()/1920)*24)});
}
fontAuto();
$(window).resize(function(){fontAuto();});

// text animation
function mv_textani() {
    $("#main #mv_slide li").eq(num).find("h3").css({"top":"14px","opacity":"0"}).delay(200).animate({"top":0,"opacity":"1"},700);
    $("#main #mv_slide li").eq(num).find("p").css({"top":"14px","opacity":"0"}).delay(400).animate({"top":0,"opacity":"1"},700);
    $("#main #mv_slide li").eq(num).find("a").css({"top":"14px","opacity":"0"}).delay(600).animate({"top":0,"opacity":"1"},700);
}

// pagenation animation
$("#main .pageani").css("width",ln*16+(ln-1)*12);
function mv_pageani() {
    pp = num*28; //이동해야할 left값
    pp2 = $("#main .ani").css("left").replace('px',''); //현재 left값
    move_width = Math.abs(pp-pp2);
//    console.log(num, pp, pp2);
    if (pp2 < pp) {
        $("#main .ani").animate({"width":move_width},70).animate({"left":pp,"width":"16px"},200);
    } else {
        $("#main .ani").animate({"left":pp,"width":move_width},200).animate({"width":"16px"},200);
    }
}

//mv3_video 재생설정
var mv3 = document.querySelector('.mv3');
var mv3Video = document.querySelector("#mv3_video")
console.log(mv3Video);
function mv3videoplay() {
    if (mv3.classList.contains('show')) {
//        console.log('영상재생');
        mv3Video.currentTime =0;
        mv3Video.play();
    } else {
        mv3Video.pause();
    }
}

function mv_auto(){
    num++;
    if( num == ln){
        num = 0;
        $("#main #mv_slide li").eq(num).addClass("show").siblings().removeClass("show");
    } else {
        $("#main #mv_slide li").eq(num).addClass("show").siblings().removeClass("show");
    }
    mv_textani();
    mv_pageani();
    mv3videoplay();
}

var k; 
for (k=1; k<=ln; k++) {
    if(k==1){
        $("#mv_page").append("<li class='select'></li>");
    } else {
        $("#mv_page").append("<li></li>");
    }
}

mv_textani();
var mv_timer = setInterval("mv_auto()",vtime);
$("#main").on("mouseover focus",function(){
    clearInterval(mv_timer);
    $("#main .mv_wrap > img").css("opacity","1");
});
$("#main").on("mouseleave blur",function(){
    mv_timer=setInterval("mv_auto()",vtime);
    $("#main .mv_wrap > img").css("opacity","0");
});


$("#mv_page li").click(function(){
    num=$(this).index();
    $("#main #mv_slide li").eq(num).addClass("show").siblings().removeClass("show");
    mv_textani();
//    $(this).addClass("select").siblings().removeClass("select");
    mv_pageani();
    mv3videoplay();
});

$("#main .next").click(function(){ mv_auto(); });
$("#main .prev").click(function(){
    num--; 
    if (num < 0) {
        num = ln-1;
        $("#main #mv_slide li").eq(num).addClass("show").siblings().removeClass("show");
    } else {
        $("#main #mv_slide li").eq(num).addClass("show").siblings().removeClass("show");
    }
    mv_textani();
    mv_pageani();
    mv3videoplay();
});