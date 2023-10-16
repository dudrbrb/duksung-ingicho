
window.addEventListener('load', ()=>{
    clickNav();
    makeSwiper();
    checkParmas();
})


// swiper 생성
let makeSwiper = ()=>{
    // 썸네일 swiper
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
    });
    
    // 큰 화면의 swiper
    var swiper2 = new Swiper(".mySwiper2", {
        spaceBetween: 10,
        thumbs: {
            swiper: swiper,
        },
    });
}

// url의 파라미터 확인
let checkParmas = ()=>{
    let searchParams = new URLSearchParams(location.search);
    let getParam = null;
    
    for (const param of searchParams) {
        getParam = param[1];
    }
    // url의 파라미터에 맞게 swiper의 이미지 변경
    navChange(getParam)
    
}

// url의 파라미터에 맞게 swiper의 이미지 변경
let navChange = (p)=>{
    let nav = document.querySelectorAll('nav ul li');
    let imgs = document.querySelectorAll('img');

    nav.forEach(e => {
        if(e.attributes.name.value == p){
            e.classList.add('active')
        }else{
            e.classList.remove('active')
        }
    })

    imgs.forEach((img, idx) =>{
        img.attributes.src.value = `img/puppy/${p}${idx < 4 ? idx+1 : idx-3}.jpg`
    })


}

// 강아지 이름 nav 클릭 시 swiper이미지 변경
let clickNav = ()=>{
    let nav = document.querySelectorAll('nav ul li');
    let param = null;

    nav.forEach(e => {
        e.addEventListener('click', (t)=>{
            param = t.target.attributes.name.value;
            navChange(param)
        })
    })
}