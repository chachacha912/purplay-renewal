//footer sns hover시 이미지 변경
var white_src, color_src;
$("footer .sns img").hover(
    function(){
        white_src=$(this).attr("src");
        color_src=$(this).attr("src").replace('.png','2.png');
        $(this).attr("src",color_src);
    },
    function(){
        $(this).attr("src",white_src);
    }
);
