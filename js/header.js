$(window).scroll(function(){
    var st = $(this).scrollTop();
    if (st > 0) {
        $("header").css("background","#181818");
    } else {
        $("header").css("background","none");
    }
});
