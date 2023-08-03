$(function(){

//팝업
$(".pop").slideDown()
$(".top_inner button").click(function(){
    $(".pop").slideUp()
})

//메뉴
$(".sub").hide();
$(".gnb").mouseenter(function(){
    $(".sub").stop().slideDown()
    $(".header_b").stop().animate({height:"400px"},500)
})//mouseenter
$(".gnb").mouseleave(function(){
    $(".sub").stop().slideUp()
    $(".header_b").stop().animate({height:"103px"},500)
})//mouseleave

//슬라이드
$(".move").slick({
    autoplay:true,
    autoplaySpeed:2000,
    dots:true,
    arrows:true,
})
$(".left_move").slick({
    autoplay:true,
    autoplaySpeed:2000,
    dots:true,
    arrows:false,
    slidesToScroll:2
})

//탭메뉴
$(".section5_inner li").click(function(e){
    e.preventDefault()
    $(".section5_inner li").toggleClass("on")
})

})//