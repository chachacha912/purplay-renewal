var vw;
function pc_mob() {
    vw= $(window).width();
    if (vw <= 800) {
        $("body").removeClass().addClass("mobver");
        console.log("mob크기입니다");
    } else {
        $("body").removeClass().addClass("pcver");
        console.log("pc크기입니다");
    }
}

pc_mob();
$(window).resize(function(){ pc_mob(); });