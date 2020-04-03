$(function(){
    $('.sample').css({
       backgroundColor:'red' 
    });
   $('.sample').hover(function(){
       $(this).addClass('animated flash');
   },function(){
       $(this).removeClass()
   });
   $('.mojiretu').css({
      paddingTop:'50px' 
   });
  
     
     
    $('.syousai').hover(function() {
        $(this).animate({
                backgroundColor: '#006699',
                color:'white'
            }, 300);
        }, function(){
    
        $(this).animate({
            backgroundColor: 'white',
            color:'#006699'
            
        },300);
        
    }); 
    
    $('.syousai_second').hover(function() {
        $(this).animate({
                backgroundColor: '#006699',
                color:'white'
            }, 300);
        }, function(){
    
        $(this).animate({
            backgroundColor: 'white',
            color:'#006699'
            
        },300);
        
    }); 
    
     $('.syousai_third').hover(function() {
        $(this).animate({
                backgroundColor: '#006699',
                color:'white'
            }, 300);
        }, function(){
    
        $(this).animate({
            backgroundColor: 'white',
            color:'#006699'
            
        },300);
        
    }); 
    
    $('.hub ,.hanaka, .ueno').hover(function(){
       $(this).addClass('animated swing infinite'); 
    },function(){
        $(this).removeClass()
    });
    var swiper = new Swiper('.swiper-container', {
        effect:'coverflow',
        slidesPerView:'3',
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
  });
    
});