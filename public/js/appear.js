$(function(){  // $(document).ready shorthand
    $('.monster').fadeIn('slow');
  });
  
  $(window).scroll( function(){
    $('.hideme').each( function(i){
        
        var bottom_of_element = $(this).offset().top + $(window).height() / 5;
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        
        if( bottom_of_window > bottom_of_element ){
            $(this).addClass("appear");
            $(this).find('.hideme1').addClass("appear1");
            $(this).find('.hideme2').addClass("appear2");
            $(this).find('.hideme3').addClass("appear3");
            $(this).find('.hideme4').addClass("appear4");
        }
        
    }); 
});
