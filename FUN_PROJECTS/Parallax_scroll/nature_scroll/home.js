
//different scroll animations for specific scenes
let control_scroll = new ScrollMagic.Controller()
let time_line = new TimelineMax()
time_line
  .to(".rock", 10, { y: -300 })
  .to(".girl", 10, { y: -200 }, "-=10")
  .fromTo(".bg1", { y: -50 }, { y: 0, duration: 5 }, "-=10")
  .to(".content", 10, { top: "0%" }, "-=10")
  .fromTo(".content-images", { opacity: 0 }, { opacity: 1, duration: 10 })
  .fromTo(".text", { opacity: 0 }, { opacity: 1, duration: 3 });


let scene = new ScrollMagic.Scene({
	triggerElement:"section",
	duration:"1000%",
	//where do you want to trigger animation
	//0->start of image scroll
	//1->trigger animation at end of scroll
	triggerHook: 0
})
.setTween(time_line)
.addTo(control_scroll)
.setPin("section")












































