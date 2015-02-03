jQuery(document).ready(function() {
      		jQuery(".gallery").fancybox();
    	});

var mySwiper = $('.mini-swiper').swiper({
    pagination: '.pagination',
    loop:true,
    grabCursor: true,
    paginationClickable: true,
    slidesPerView: 3
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