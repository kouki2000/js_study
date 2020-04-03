var arg={
    fontSize:'50px',
    paddingTop:'50px',
    paddingLeft:'50px'
}

var bdr={
    borderRight:'solid',
    borderColor:'#EEEEEE',
}

var photodate={
    color:'#BBBBBB',
    fontSize:'15px'
}

var bdrbtm={
    borderBottom:'solid',
    borderColor:'#FFD700'
}

$(function(){
    $('.top_first_contain').css({
           'padding-left':'60px'
    });
    $('.top_second_contain').css({
           'padding-top':'35px'
    });
    $('.border_black').css({
        backgroundColor:'black',
        height:'3px',
        width:'30px',
   });
   $('.latestinfo').css(arg),
   $('.newinfo').css({
       fontSize:'15px',
       color:'#CCCCCC',
       paddingLeft:'50px',
       paddingBottom:'50px'
    });
     $('.latestinfo').css(arg),
    $('.newinfo').css({
       fontSize:'15px',
       color:'#CCCCCC',
       paddingLeft:'50px',
       paddingBottom:'50px'
    });
    $('.nomi').css({
       borderRight:'solid',
       borderColor:'#EEEEEE',
       height:'250px'
   });
   $('.sunobo').css(bdr);
   $('.left_date').css({
      paddingLeft:'30px' 
   });
   $('.date').css(photodate);
   $('.left_hajimete').css({
      paddingLeft:'30px' 
   });
   $('.left_news').css({
      fontWeight:'100px' 
   });
   $('.daily').css(bdrbtm)
   $('.second_box').css({
       paddingBottom:'100px'
   });
   $('.itou-right').css({
      backgroundColor:'black',
      color:'white',
      fontSize:'60px'
   });
   $('.under_black').css({
      paddingTop:'100px',
      paddingBottom:'100px',
      borderBottom:'solid',
      borderColor:'#EEEEEE'
   });
   $('.otoiawase').css({
      marginTop:'70px' 
   });
   $('.contact_button').css({
      paddingBottom:'200px' 
   });
   $('.under_menu').css({
      backgroundColor:'black',
      paddingTop:'50px',
      paddingBottom:'50px'
   });
   $('.menu_title').css({
      color:'white' 
   });
});



$(function(){
    var el = $('.animated');
    el.hover(function(){
        el.addClass($(this).data('animate'));
  
    }, function(){
        el.removeClass($(this).data('animate'));
    });
});
