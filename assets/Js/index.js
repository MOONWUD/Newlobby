/*========== header */
$(function(){
  var lastScrollTop = 0, delta = 15;
  $(window).scroll(function(event){
     var st = $(this).scrollTop();
     
     if(Math.abs(lastScrollTop - st) <= delta)
        return;
if ((st > lastScrollTop) && (lastScrollTop>0)) {
     // downscroll code
    $("header").css("top","-90px");

 } else {
    // upscroll code
    $("header").css("top","0px");
 }
     lastScrollTop = st;
  });
});

/*========== about */ 

/*===== about - text */ 
gsap.to(".about .text", {
  scrollTrigger: {
    trigger: '.about .text',
    start: "120% 100%",
    end: "120% 100%",
    scrub: 1,
    // markers: true,
  },
  y: 0,
  opacity: 1,
});

/*===== about - link */ 
gsap.to(".about .link", {
  scrollTrigger: {
    trigger: '.about .link',
    start: "130% 100%",
    end: "130% 100%",
    scrub: 1,
    // markers: true,
  },
  y: 0,
  opacity: 1,
});


/*========== notice */ 

/*===== notice - right */ 
gsap.to(".notice .noticeRight", {
  scrollTrigger: {
    trigger: '.notice',
    start: "120% 100%",
    end: "120% 100%",
    scrub: 1,
    // markers: true,
  },
  y: 0,
  opacity: 1,
});