let body = document.getElementsByTagName('body')[0];

window.addEventListener('load', ()=>{
    makeNav();
    makeFooter();
})

let makeNav = ()=>{
    // 화면 상단에 있는 '뒤로가기'와 '메뉴'버튼 생성
    navBox = document.createElement('nav');
    navBox.innerHTML = `<a href="/main" class="back">↩ 뒤로가기</a>
    <button class='navBtn open'>
    <div></div>
    <div></div>
    <div></div>
    </button>`;
    
    // 화면 상단 메뉴에 스타일 속성 지정
    navBox.style.position = 'fixed';
    navBox.style.width = '100%';
    navBox.style.zIndex = '100';
    navBox.style.top = 0;
    
    // html의 header태그 안에 element 삽입
    let header = document.querySelector('header');
    header.appendChild(navBox);
    
    
    // 삽입이 완료된 후에 호출해야하는 이벤트
    clickMenuBtn();
    removeBackBtn();
}


// 홈페이지 하단에 footer 생성 및 추가
let makeFooter = ()=>{
    // footer태그 생성
    let ftBox = document.createElement('footer') ;

    // footer태그에 id값 부여
    ftBox.setAttribute("id", "myFooter");

    // footer태그 컨텐츠 삽입
    ftBox.innerHTML = `<div>
                            <p>
                                해당 홈페이지는 덕성여자대학교 컴퓨터공학과 수업 중 과제 제출을 위해 만들어진 프로젝트 입니다.
                                비상업성을 가진 홈페이지입니다.
                            </p>
                        </div>
                        <div>
                            <b>ABOUT PROJECT</b>
                            <ul>
                                <li>덕성여자대학교</li>
                                <li>컴퓨터공학과</li>
                                <li>인터넷기초 1분반</li>
                                <li>유제혁 교수님</li>
                            </ul>
                        </div>
                        <div>
                            <b>SKILLS</b>
                            <ul>
                                <li>Html5</li>
                                <li>css3</li>
                                <li>Http Method</li>
                            </ul>
                        </div>
                        <div>
                            <b>CONTACT ME</b>
                            <ul>
                                <li>thehd9891@naver.com</li>
                                <li>hong6v6@duksung.ac.kr</li>
                                <li>https://github.com/dudrbrb</li>
                                <li>instagram : @hong6v6</li>
                            </ul>
                        </div>`;

    // body태그 맨 하단에 footer 추가
    body.appendChild(ftBox);
}

// url에 따라 뒤로가기 없애기
let removeBackBtn = ()=>{
    // 로그인 화면에서는 뒤로가기 없애기
    let url = window.location.href,
        page = url.split('/');
    
    // 로그인 창에는 페이지 이름이 없습니다
    if(page[page.length - 1].length == 0){
        let backBtn = document.querySelector('.back');
        backBtn.style.opacity = 0;
    } 
}

// 메뉴 버튼 클릭 시 메뉴 열리도록 하는 함수
let clickMenuBtn = ()=>{
    // 메뉴 버튼을 갑싸는 div와 짝대기모양의 div가 각각 target을 다르게 받아와서 이와 같이 처리해줌
    let menuBtn = document.querySelector('.navBtn');
    let menuBtnDiv = document.querySelectorAll('.navBtn div');

    menuBtnDiv.forEach(e => {
        // 흰 짝대기 3개 클릭 시
        e.addEventListener('click',  openMenu)
    })

    // 흰 짝대기가 아닌 투명한 여백 클릭 시
    menuBtn.addEventListener('click', openMenu)
}

// 메뉴 생성 및 보여주기
let openMenu = ()=>{
    // div생성
    let menu = document.createElement('div')

    // div에 id값 부여
    menu.setAttribute("id", "menu");
    
    // div에 컨텐츠 삽입
    menu.innerHTML = `<ul>
                        <li><a href='/'>로그인</a></li>    
                        <li><a href='/main'>메인</a></li>    
                        <li><a href='/puppy?name=arong'>강아지 소개</a></li>    
                        <li><a href='/vote'>멍멍듀스101</a></li>    
                        <li><a href='/calculator'>계산기</a></li>    
                        <li><a href='/d-day'>디데이 계산기</a></li>    
                    </ul>
                    <div class='closeMenu'>닫기</div>`;

    // body태그에 메뉴 삽입
    body.appendChild(menu);
    setTimeout(() => {
        closeMenu()
    }, 300);
}

let closeMenu = ()=>{
    // settimeout으로 딜레이를 주지 않으면 target을 찾지 못함.
    let menu = document.querySelector('#menu');
    let closeBtn = document.querySelector('.closeMenu');
    
    // 닫기 버튼 클릭 시 body에서 #menu div 삭제
    closeBtn.addEventListener('click', ()=>{
        body.removeChild(menu);
    })
}