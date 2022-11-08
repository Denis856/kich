// script header start

$(".btn").click(function(){
   $(".menu_burger2").toggleClass('opac1');
   $(".menu_burger").toggleClass('opac0');
   $(".menu2").toggleClass('left0');
});

$(".main").click(function(){
   $(".menu_burger2").removeClass('opac1');
   $(".menu_burger").removeClass('opac0');
   $(".menu2").removeClass('left0');
});


// script header end

// script page1 start

function come() {
   thing2.classList.toggle('tyr');
}

// script page1 end

// script page2 start

$(".arr1").click(function(){
   $(".page2_items").toggleClass('trans_left');
   $(".page2_items").removeClass('trans_right');
});

$(".arr2").click(function(){
   $(".page2_items").toggleClass('trans_right');
   $(".page2_items").removeClass('trans_left');
});

$(".img21").click(function(){
   $(".img21").toggleClass('trans');
   $(".img22").toggleClass('dis_no');
   $(".img23").toggleClass('dis_no');
   $(".img24").toggleClass('dis_no');
   $(".page2_items").toggleClass('center21');
   $(".arr1").toggleClass('dis_no');
   $(".arr2").toggleClass('dis_no');
   $(".page2_items").removeClass('trans_right');
   $(".page2_items").removeClass('trans_left');
   $(".article1").toggleClass('opac11');
   $(".article2").toggleClass('opac10');
   $(".article3").toggleClass('opac10');
   $(".article4").toggleClass('opac10');
});

$(".img22").click(function(){
   $(".img22").toggleClass('trans');
   $(".img21").toggleClass('dis_no');
   $(".img23").toggleClass('dis_no');
   $(".img24").toggleClass('dis_no');
   $(".page2_items").toggleClass('center21');
   $(".arr1").toggleClass('dis_no');
   $(".arr2").toggleClass('dis_no');
   $(".page2_items").removeClass('trans_right');
   $(".page2_items").removeClass('trans_left');
   $(".article2").toggleClass('opac11');
   $(".article1").toggleClass('opac10');
   $(".article3").toggleClass('opac10');
   $(".article4").toggleClass('opac10');
});

$(".img23").click(function(){
   $(".img23").toggleClass('trans');
   $(".img21").toggleClass('dis_no');
   $(".img22").toggleClass('dis_no');
   $(".img24").toggleClass('dis_no');
   $(".page2_items").toggleClass('center21');
   $(".arr1").toggleClass('dis_no');
   $(".arr2").toggleClass('dis_no');
   $(".page2_items").removeClass('trans_right');
   $(".page2_items").removeClass('trans_left');
   $(".article3").toggleClass('opac11');
   $(".article1").toggleClass('opac10');
   $(".article2").toggleClass('opac10');
   $(".article4").toggleClass('opac10');
});

$(".img24").click(function(){
   $(".img24").toggleClass('trans');
   $(".img21").toggleClass('dis_no');
   $(".img22").toggleClass('dis_no');
   $(".img23").toggleClass('dis_no');
   $(".page2_items").toggleClass('center21');
   $(".arr1").toggleClass('dis_no');
   $(".arr2").toggleClass('dis_no');
   $(".page2_items").removeClass('trans_right');
   $(".page2_items").removeClass('trans_left');
   $(".article4").toggleClass('opac11');
   $(".article1").toggleClass('opac10');
   $(".article3").toggleClass('opac10');
   $(".article2").toggleClass('opac10');
});


// script page2 end

$(function(){
   $('a[href^="#"]').click(function(){
   var target = $(this).attr('href');
   $('html, body').animate({scrollTop: $(target).offset().top}, 800);//800 - длительность скроллинга в мс
   return false;
   });
   });