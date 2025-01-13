gsap.from(".web-image",{
    y:100,
    opacity:0.2,
    duration:2,
    rotate:360,
    scale:0,

})
gsap.from(".hero-h1 h1",{
    x:-100,
    
    opacity:0,
    duration:1.5,

})
gsap.from(".yoyo h3 ",{

    opacity:0,
    duration:1,
    x:300,
})
gsap.from(".yoyo p ",{

    opacity:0,
    duration:1,
    stagger:0.2,
    y:100,
})
// Animations for section-2
gsap.from(".Services .yoyo-2 h3 ",{
    opacity:0,
    duration:1,
    x:300,
    scrollTrigger:{
        trigger:'.yoyo-2 h3',
       
        scroller:'body',
        start:'top 50%,',
    }
})
gsap.from(".Services .yoyo-2 p ",{
    opacity:0,
    duration:1,
    stagger:0.2,
    y:100,
    scrollTrigger:{
        trigger:'.yoyo-2 p',
  
        scroller:'body',
        start:'top 50%,',
    }
})
gsap.from(".Services .Graphic-image",{
    y:100,
    opacity:0.2,
    duration:2,
    rotate:360,
    scale:0,
    scrollTrigger:{
        trigger:'.Graphic-image',
        
        scroller:'body',
        start:'top 80%,',
    }
})
// Animations for section-3
gsap.from(".Services .yoyo-3 h3 ",{
    opacity:0,
    duration:1,
    x:300,
    scrollTrigger:{
        trigger:'.yoyo-3 h3',
        
        scroller:'body',
        start:'top 50%,',
    }
})
gsap.from(".Services .yoyo-3 p ",{
    opacity:0,
    duration:1,
    stagger:0.2,
    y:100,
    scrollTrigger:{
        trigger:'.yoyo-3 p',

        scroller:'body',
        start:'top 50%,',
    }
})
gsap.from(".Services .editing-image",{
    y:100,
    opacity:0.2,
    duration:2,
    rotate:360,
    scale:0,
    scrollTrigger:{
        trigger:'.editing-image',
        scroller:'body',
        
    }
})