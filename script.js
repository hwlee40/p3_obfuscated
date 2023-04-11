$(document).ready(function(){
  $('.books-container').css("transform","translate(0px,0px)")
  $('.books-container').css("opacity","1")

  $('.book-1').hover(function(){
    $('body').css("background", "#1400FF");
    $('.book-2').css('opacity', '.4')
    $('.book-3').css('opacity', '.4')
    $('.book-4').css('opacity', '.4')
    $('.book-5').css('opacity', '.4')
    $('.book-6').css('opacity', '.4')
    $('.book-7').css('opacity', '.4')
  });
  $('.book-1').mouseleave(function(){
    $('body').css("background", "black")
    $('.book-2').css('opacity', '1')
    $('.book-3').css('opacity', '1')
    $('.book-4').css('opacity', '1')
    $('.book-5').css('opacity', '1')
    $('.book-6').css('opacity', '1')
    $('.book-7').css('opacity', '1')
  });

  $('.book-2').hover(function(){
    $('body').css("background", "#FF9C06");
    $('.book-2-ring').css("border", "4.5px #FF9C06 solid");
    $('.book-1').css('opacity', '.4')
    $('.book-3').css('opacity', '.4')
    $('.book-4').css('opacity', '.4')
    $('.book-5').css('opacity', '.4')
    $('.book-6').css('opacity', '.4')
    $('.book-7').css('opacity', '.4')
  });
  $('.book-2').mouseleave(function(){
    $('body').css("background", "black")
    $('.book-2-ring').css("border", "4.5px black solid");
    $('.book-1').css('opacity', '1')
    $('.book-3').css('opacity', '1')
    $('.book-4').css('opacity', '1')
    $('.book-5').css('opacity', '1')
    $('.book-6').css('opacity', '1')
    $('.book-7').css('opacity', '1')
  });

  $('.book-3').hover(function(){
    $('body').css("background", "#FF06B9");
    $('.book-2').css('opacity', '.4')
    $('.book-1').css('opacity', '.4')
    $('.book-4').css('opacity', '.4')
    $('.book-5').css('opacity', '.4')
    $('.book-6').css('opacity', '.4')
    $('.book-7').css('opacity', '.4')
  });
  $('.book-3').mouseleave(function(){
    $('body').css("background", "black")
    $('.book-2').css('opacity', '1')
    $('.book-1').css('opacity', '1')
    $('.book-4').css('opacity', '1')
    $('.book-5').css('opacity', '1')
    $('.book-6').css('opacity', '1')
    $('.book-7').css('opacity', '1')
  });
        
  $('.book-4').hover(function(){
    $('body').css("background", "#00A3FF");
    $('.book-2').css('opacity', '.4')
    $('.book-3').css('opacity', '.4')
    $('.book-1').css('opacity', '.4')
    $('.book-5').css('opacity', '.4')
    $('.book-6').css('opacity', '.4')
    $('.book-7').css('opacity', '.4')
  });
  $('.book-4').mouseleave(function(){
    $('body').css("background", "black")
    $('.book-2').css('opacity', '1')
    $('.book-3').css('opacity', '1')
    $('.book-1').css('opacity', '1')
    $('.book-5').css('opacity', '1')
    $('.book-6').css('opacity', '1')
    $('.book-7').css('opacity', '1')
  });

  // PRINT FUNCTION
  $(".book-1").click(function(){
    $('.article1').css('display', 'block');
    $('.article2').css('display', 'none');
    $('.article3').css('display', 'none');
    $('.article4').css('display', 'none');
     window.print();
  });
  $(".book-2").click(function(){
    $('.article1').css('display', 'none');
    $('.article2').css('display', 'block');
    $('.article3').css('display', 'none');
    $('.article4').css('display', 'none');
     window.print();
  });
  $(".book-3").click(function(){
    $('.article1').css('display', 'none');
    $('.article2').css('display', 'none');
    $('.article3').css('display', 'block');
    $('.article4').css('display', 'none');
     window.print();
  });
  $(".book-4").click(function(){
    $('.article1').css('display', 'none');
    $('.article2').css('display', 'none');
    $('.article3').css('display', 'none');
    $('.article4').css('display', 'block');
     window.print();
  });
    

});