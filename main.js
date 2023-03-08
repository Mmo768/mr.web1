// ========= start header =========
$("header i.fa-bars").click(function(){
  $("header .navbar ul").toggleClass("open")
});

$(window , document).scroll(function(){
  if($(window , document).scrollTop() > 30){
    $("header").addClass("scroll");
  }else{
    $("header").removeClass("scroll");
  }
});
// ========= end header =========