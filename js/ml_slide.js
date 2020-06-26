//제목 hover 시 화살표 이미지 변경
$("#cont .movie_list h3").hover(
    function(){
        $(this).children("img").attr("src","images/more22.png");
    },
    function(){
        $(this).children("img").attr("src","images/more.png");
    }
);



var jj, kk, i;
var i_list = $("#cont .movie_list").length;
var ln2 = new Array();
var ms_width = new Array();
var atime2=700; //action time
var view_width, wrap_width, msv_width;
var nn; //movie frame에 보여지는 movie수

console.log(i_list);
for (i=1; i<=i_list; i++) {
    ln2[i-1] = $("#cont .movie_list"+i+" .movie_slide > li").length;
}
console.log(ln2);

//영화 너비 반응형
function movie_width() {
    view_width = $(".video_wrap").width() //전체화면너비
    wrap_width = view_width*0.95; //여백 5%
    if (view_width >= 1500) {
        nn=5;
        $("#cont .movie_list .movie_slide li a .info").css("font-size","16px");
    } else if (view_width >= 800) {
        nn=4;
        $("#cont .movie_list .movie_slide li a .info").css("font-size","12px");
    } else if (view_width >= 500) {
        nn=3;
        $("#cont .movie_list .movie_slide li a .info").css("font-size","12px");
    } else {
        nn=2;
        $("#cont .movie_list .movie_slide li a .info").css("font-size","11px");
    }
    
    for (i=1; i<=i_list; i++) {
        ms_width[i-1] = wrap_width/nn*ln2[i-1];
        $("#cont .movie_list"+i+" .movie_slide").css("width",ms_width[i-1]+100); //넉넉히 여백 추가 
        if (ln2[i-1]<=nn) {
            $("#cont .movie_list"+i+" > img").addClass("noshow");
        } else {
            $("#cont .movie_list"+i+" > img").removeClass("noshow");
        }
    }
    $("#cont .movie_list .movie_slide li").css({"width":(wrap_width+10)/nn}); //마지막 li padding-right값
    
    //슬라이드 이동할 너비 movie slide move width
    msv_width = $(".movie_frame").width();
}
movie_width();
$(window).resize(function(){movie_width();});


//영화리스트 슬라이드 pc ver
//console.log(ms_width, wrap_width, msv_width);

$("#cont .movie_list .next").click(function(){
    $(this).siblings(".movie_frame").children(".movie_slide").animate({"left":-msv_width},atime2,function(){
//        $(this).append($(this).children($"li:nth-child(n+1):nth-child(-n+5)"));
        for (var i=1; i<=nn; i++) {
//            console.log($(this));
            $(this).append($(this).children("li").first());
        }
        $(this).css("left",0);
    });
});
$("#cont .movie_list .prev").click(function(){
    for (var i=1; i<=nn; i++) {
        $(this).siblings(".movie_frame").children(".movie_slide").prepend($(this).siblings(".movie_frame").children(".movie_slide").children("li").last());
    }
    $(this).siblings(".movie_frame").children(".movie_slide").css("left",-msv_width).animate({"left":0},atime2);
});
