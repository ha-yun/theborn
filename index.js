// 이미지슬라이드 페이드 인 페이드 아웃
$('.imgSlide a:gt(0)').hide();

setInterval(function(){
  $('.imgSlide a:first-child').fadeOut()
  .next('a').fadeIn()
  .end().appendTo('.imgSlide');
}, 3000);
