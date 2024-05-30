gsap.to("#intro",{
    backgroundColor:"black",
    duration:0.5,
    height:"210px",
    scrollTrigger:{
        trigger:"#intro",
        scroller:"body",
        start:"top -10%",
        end:"top -11%",
        scrub:1,
    },
});

AOS.init({
    duration: 1200,
  })
  

