 var mySwiper = $('.swiper-container').swiper({
    pagination: '.pagination',
    loop:true,
    grabCursor: true,
    paginationClickable: true,
    slidesPerView: 4,
  });

  $('.arrow-left').on('click', function(e){
    e.preventDefault()
    var swiper = $(this).siblings('.swiper-container').data('swiper');
    swiper.swipePrev();
  });
	$('.arrow-right').on('click', function(e){
    e.preventDefault()
    var swiper = $(this).siblings('.swiper-container').data('swiper');
    swiper.swipeNext();
  });

 $( document ).ready(function() {
  $('.dropdown').hover(function(){
        $(".dropdown-link").addClass('dropdown-back');
        
      },
      function(){
        $(".dropdown-link").removeClass('dropdown-back');   
      });
  

 });