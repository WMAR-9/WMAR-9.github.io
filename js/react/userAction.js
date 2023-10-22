let slidesIndex = 0;

const closeModal = key =>{
    const modal = document.getElementById(key)
    if(!modal)return
    modal.style['display']="none"
}
const showModal = key =>{
    
    const modal = document.getElementById(key)
    
    console.log("click ", key,modal)
    if(!modal)return
    modal.style['display']="block"
    slidesIndex = 0
    
}

const showSlides = key =>{
    
    const slides = document.getElementsByName(key.key)
    if(!slides.length)return;

    slidesIndex+=key.val

    if (slidesIndex >= slides.length) {slidesIndex=0}    
    if (slidesIndex < 0) {slidesIndex = slides.length-1}

    for(var i =0;i<slides.length;i++){
        slides[i].style['display'] = "none"
    }
    slides[slidesIndex].style['display'] = "flex"
}

const backToTop = () =>{
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

window.addEventListener('scroll',e=>{
    const scrollY = window.scrollY;
    const backTop = document.getElementsByClassName("backtop")[0]
    if(!backTop)return
    if(scrollY>50){
        backTop.style['display'] = "flex"
    }else{
        backTop.style['display'] = "none"
    }
});