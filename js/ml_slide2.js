var ln2 = $("#cont .movie_list .movie_slide > li").length;
var atime2=700; //action time
var wrap_width, ms_width, msv_width;

//제목 hover 시 화살표 이미지 변경
$("#cont .movie_list h3").hover(
    function(){
        $(this).children("img").attr("src","images/more2.png");
    },
    function(){
        $(this).children("img").attr("src","images/more.png");
    }
);

//영화 너비 반응형
function movie_width() {
    wrap_width = $(".video_wrap").width()*0.95;
    ms_width = wrap_width*20.25/100*ln2;
    $("#cont .movie_list .movie_slide").css("width",ms_width);
    $("#cont .movie_list .movie_slide li").css({"margin-right":wrap_width*1.25/100,"width":wrap_width*19/100});
    
    //슬라이드 이동할 너비 movie slide move width
    msv_width = $(".movie_frame").width() + wrap_width*1.25/100;
}
movie_width();
$(window).resize(function(){movie_width();});


//영화리스트 슬라이드 pc ver
console.log(ms_width, wrap_width, msv_width);
$("#cont .movie_list .next").click(function(){
    $(this).siblings(".movie_frame").children(".movie_slide").animate({"left":-msv_width},atime2,function(){
//        $(this).append($(this).children($"li:nth-child(n+1):nth-child(-n+5)"));
        for (var i=1; i<=5; i++) {
//            console.log($(this));
            $(this).append($(this).children("li").first());
        }
        $(this).css("left",0);
    });
});
$("#cont .movie_list .prev").click(function(){
    for (var i=1; i<=5; i++) {
        $(this).siblings(".movie_frame").children(".movie_slide").prepend($(this).siblings(".movie_frame").children(".movie_slide").children("li").last());
    }
    $(this).siblings(".movie_frame").children(".movie_slide").css("left",-msv_width).animate({"left":0},atime2);
});
