$(window).scroll(() => {
    if ($(this).scrollTop() > 300) {
        $(".header").addClass("addheader").fadeIn()
        $(".swiper.mySwiper").addClass("changeMargin")
     }
     else {
        $(".header").remove("addheader").fadeIn()
     }
})


$(".modal").css({
   display:"none"
})
$(".menu").click(() => {
   $(".modal").css({
      display:"block",

   })
})
$(".close").click(() => {
   $(".modal").css({
      display:"none"
   })
})