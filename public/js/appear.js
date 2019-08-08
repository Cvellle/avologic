$(function(){  // $(document).ready shorthand
    $('.monster').fadeIn('slow');
  });
  
  $(window).scroll( function(){
    $('.hideme').each( function(i){
        
        var bottom_of_element = $(this).offset().top + $(window).height() / 5;
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        
        if( bottom_of_window > bottom_of_element ){
            // $(this).animate({'opacity':'1','margin-bottom':'100px'},1000);
            $(this).addClass("appear");
            // $('.hideme2',this).addClass("appear2");
            $(this).next('.hideme2').addClass("appear2");
        }
        
    }); 
});
