var t=gsap.timeline()

t.from(".left h3,.mid select ,.mid a,.right a,.right p", {
    y: -100,
    duration: 1,
    opacity: 0,
    stagger:0.5
})

t.from(".cont h1",{
    x:-1800,
    duration:2
})