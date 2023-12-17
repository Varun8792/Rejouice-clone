//  go to locomotive js scroll with scrolltrigger and there copy the js code and remove red green purple and below 3 lines and rename the 
// (.scrolltrigger) to # main and set #main to the gsap scroller function and good to go 

// and here we use swiper js  we can visit swiperjs.com and copy the css and js cdn and paste it to html 
//and in this i have used swiper js so i searched it and clicked on core and copied html code,css code, js code,and thats it



function locoscroll(){
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
    
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
    
    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });

    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
}
locoscroll();

function cursorEffect(){
    var page1Content=document.querySelector("#page1_content")
var cursor=document.querySelector("#cursor")

page1Content.addEventListener("mousemove",function(dets){
    // cursor.style.left=dets.x+"px"
    // cursor.style.top=dets.y+"px"
    gsap.to("#cursor",{
        x:dets.x,
        y:dets.y
    })
})
page1Content.addEventListener("mouseenter",function(){
    gsap.to(cursor,{
        scale:1,
        opacity:1
     })
})
page1Content.addEventListener("mouseleave",function(){
     gsap.to(cursor,{
        scale:0,
        opacity:0
     })
})
}
cursorEffect();

function page2Animatuion(){
  gsap.from("#page2 .middle ,.header2, #page2 h1,#page2 .line",{
    y:120,
    stagger:0.2,
    duration:1,
    opacity:0,
    scrollTrigger:{
        trigger:"#page2",
        scroller:"#main",
        start:"top 40%",
        end:"top 37%",
        // markers:true,
        scrub:2
    }
  })
}
page2Animatuion();

function page3animation(){
    gsap.from("#page3 #page3-header h2,#page3 #line2",{
      y:120,
      stagger:0.2,
      duration:1,
      opacity:0,
      scrollTrigger:{
          trigger:"#page3",
          scroller:"#main",
          start:"60% 40%",
          end:"65% 37%",
        //   markers:true,
          scrub:2
      }
    })
}
page3animation();


function slideranimation(){
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: true,
    },
  });
}
slideranimation();


var tl=gsap.timeline()

tl.from("#loader h3",{
  x:40,
  opacity:0,
  duration:1,
  stagger:0.1
})
tl.to("#loader",{
  opacity:0,
  x:-20,
  duration:1,
  stagger:0.1
})
tl.to("#loader",{
  opacity:0
})
tl.from("#page1_content h1 span",{
  y:100,
  opacity:0,
  stagger:0.1,
  duration:0.5,
  delay:-0.5

})
tl.to("#loader",{
  display:"none"
})

