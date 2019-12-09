$(document).scroll(function() { 
    //scroll_start = $(this).scrollTop();
    if($(this).scrollTop() > 10) {
        $(".navbar").addClass('bg-dark');
     } else {
        $(".navbar").removeClass('bg-dark');
     }
 });
  