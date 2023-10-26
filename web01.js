
let crsr=document.querySelector("#cursor")
let blur=document.querySelector("#cursor-b")

document.addEventListener("mousemove",(dets)=>{
    crsr.style.left=dets.x+"px";
    crsr.style.top=dets.y+"px";
    blur.style.left=dets.x -200+"px";
    blur.style.top=dets.y -200+"px";
})
 let h4all=document.querySelectorAll("#nav h4")
 h4all.forEach((elem)=>{
elem.addEventListener("mouseenter",()=>{

    crsr.style.scale=3
    crsr.style.border=" 1px solid #fff"
    crsr.style.backgroundColor="transparent"
})
elem.addEventListener("mouseleave",()=>{

    crsr.style.scale=1
    crsr.style.border=" 1px solid #fff"
    crsr.style.backgroundColor="transparent"
})
 })
 let cards=document.querySelectorAll(".cards")
cards.forEach((elem)=>{
elem.addEventListener("mouseenter",()=>{

    crsr.style.scale=3
    crsr.style.border=" 1px solid #fff"
    crsr.style.backgroundColor="transparent"
})
elem.addEventListener("mouseleave",()=>{

    crsr.style.scale=1
    crsr.style.border=" 1px solid #fff"
    crsr.style.backgroundColor="transparent"
})
 })


// gsap cdn

gsap.to("#nav",{
    backgroundColor:"#000",
    height:"100px",
    duration:0.3,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:"true",
        start:"top -5%",
        end:"top  -11px",
        scrub:1,
        
    }
})
gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub:2

    }
})
gsap.from("#about-us img ,#about-us-1",{
    y:50,
opacity:0,
duration:1,
stagger:0.2,
scrollTrigger:{
    trigger:"#about-us",
    scroller:"body",
    // markers:true,
    start:"top 70%",
    end:"top 65%",
    scrub:1
}
})
gsap.from(".cards",{
    scale:0.8,
// opacity:0.1,
duration:1,
stagger:0.1,
scrollTrigger:{
    trigger:".cards",
    scroller:"body",
    // markers:true,
    start:"top 70%",
    end:"top 65%",
    scrub:1
}
})
gsap.from("#page-4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page-4 h1",
        scroller:"body",
        // markers:true,
        start:"top 75%",
        end:"top 70%",
        scrub:2
    }
})