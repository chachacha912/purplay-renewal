var num = 0;
var ln = $("#mv_slide > li").length;
var atime=600; //action time
var vtime=5000; //view time
var pp=0; //page nav animation 

// 글자크기 반응형 적용
function fontAuto() {
    $("#main #mv_slide li .text h3").css({"font-size":Math.max(Math.min($(".wrap").width()/1920)*64)});
    $("#main #mv_slide li .text p").css({"font-size":Math.max(Math.min($(".wrap").width()/1920)*26)});
    $("#main #mv_slide li .text a").css({"font-size":Math.max(Math.min($(".wrap").width()/1920)*24)});
}
fontAuto();
$(window).resize(function(){fontAuto();});

// text animation
function mv_textani() {
    $("#main #mv_slide li").eq(num).find("h3").css({"top":"14px","opacity":"0"}).delay(200).animate({"top":0,"opacity":"1"},700);
    $("#main #mv_slide li").eq(num).find("p").css({"top":"14px","opacity":"0"}).delay(400).animate({"top":0,"opacity":"1"},700);
    $("#main #mv_slide li").eq(num).find("a").css({"top":"14px","opacity":"0"}).delay(600).animate({"top":0,"opacity":"1"},700);
}

function mv_auto(){
    num++;
    if( num > ln){
        num = 0;
        $("#main #mv_slide li").eq(num).addClass("show").siblings().removeClass("show");
    } else {
        $("#main #mv_slide li").eq(num).addClass("show").siblings().removeClass("show");
    }
    $("#mv_page li").eq(num).addClass("select").siblings().removeClass("select");
    mv_textani();
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
});
$("#main").on("mouseleave blur",function(){
    mv_timer=setInterval("mv_auto()",vtime);
});


$("#mv_page li").click(function(){
    num=$(this).index();
    $("#main #mv_slide li").eq(num).addClass("show").siblings().removeClass("show");
    $(this).addClass("select").siblings().removeClass("select");
    mv_textani();
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
    $("#mv_page li").eq(num).addClass("select").siblings().removeClass("select");
    mv_textani();
});