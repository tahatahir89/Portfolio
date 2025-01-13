gsap.from(".img",{
    duration:1,
    delay:0.5,
    rotate:360,
    scale:0,
});
gsap.from(".skill-h1",{
    x:200,
    duration:2,
    delay:0.5,
    opacity:0,
    scale:0,
});
gsap.from(".img-2-sec",{
    opacity:0,
    duration:1,
    stagger:0.2,
    y:100,
    scrollTrigger:{
        
        trigger:'.img-2-sec',
    
        scroller:'body',
        start:'top 50%,',

    }
})
gsap.from(".sec-2-h1",{
    opacity:0,
    duration:1,
    stagger:0.2,
    x:-200,
    scale:0,
    scrollTrigger:{
        
        trigger:'.sec-2-h1',
    
        scroller:'body',
        start:'top 50%,',

    }
})
gsap.from(".sec-2-btn a",{
    opacity:0,
    duration:1,
    stagger:0.2,
    x:-800,
    scale:0,
    scrollTrigger:{

        trigger:'.sec-2-btn a',  
        scroller:'body',
        start:'top 80%,',
    }
});

