window.onload = function () {
    $().getClass("member").hover(function(){
        $(this).css("background","url(img/arrow2.png) no-repeat 55px center");
       $().getTag("ul").show();
    },function(){
       $(this).css("background","url(img/arrow.png) no-repeat 55px center");
        $().getTag("ul").hide();
    })
};