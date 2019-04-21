

var lock = false;
var timer = setTimeout(function () {
    $('.pic').css("transform",'translate3d(0,0,0)')
}, 200)
$('li.cont').on("click",function (e) {
    thing.call(this);
})
function thing () {
    $('.wrapper').addClass('wrapper-active');
    $(this).addClass('active');
    lock = false;
}

$('.logo').on('click',function (e) {
    if(!lock){
        e.stopPropagation();
        $(this).parent().parent().removeClass('active');
        $('.wrapper').removeClass('wrapper-active');
        lock = true;
    }else{
        thing.call(this.parentNode.parentNode);
    }
})