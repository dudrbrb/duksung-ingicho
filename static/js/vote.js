// 강아지 이름 영어-한글 담을 전역변수
let koName 
$(document).ready(()=>{
    // 결과창 가리는 div에 마우스 올리면 일어나는 이벤트
    hoverEvent()

    // '투표하기' 버튼 클릭 시 vote함수 호출
    $('button').click(vote);

    // 강아지 이름 영어-한글 담기
    koName = {
        arong : '홍아롱',
        inza : '박인자',
        nuri : '강누리',
    }
})


// 투표하기 함수 
let vote = ()=>{
    // 사용자가 radio버튼 체크한 값 불러오기
    let userChecked = $('input[name="puppy"]:checked').val();

    if(userChecked == undefined) {
        // 사용자가 radio버튼 체크한 값이 없으면 alert으로 반환
        return alert('선택 값이 없습니다.');
    }else {
        // 투표 값 alert
        alert(koName[userChecked] + '에게 투표하였습니다.');
        
        
        // 투표 결과 section으로 이동
        let offset = $('h3').offset(); 
        // 0.4초동안 이동
        $('html').animate({scrollTop : offset.top}, 400);
        

        // 투표값 post로 서버에 요청
        $.ajax({
            url: '/send-vote',
            method: 'POST',
            data:{ checked : userChecked },
            dataType: "json",
            success: setTimeout(() => {
                // 요청 성공 시 0.1초 후 불러올 내용 
                // 왜 0.1초 후인가? --> 결과 섹션까지 내려가는게 0.4초가 걸려서 약간의 딜레이를 준 것임
                
                // 결과창 가리고 있던 div 서서히 사라지게 하기 
                $('.dim').fadeOut();

                // 투표 결과를 불러오는 함수
                callResult()
            }, 100),
            error: (err)=>{
                alert("네트워크 오류로 서버와의 통신이 실패하였습니다.");
            },    
            cache: false
        });
        
    }
}

// 투표 결과 요청하는 함수
let callResult = ()=>{
    $.get({
        url: '/call-vote',
        type: 'GET',
        datatype: "JSON",
        success: (data)=>{
            // server.js에서 응답받은 데이터를 data라는 매게변수로 받음
            // award 함수에 전달
            award(data)
        },
        error: (err) => {
            alert("네트워크 오류로 서버와의 통신이 실패하였습니다.");
        },
        cache: false,
        processData: false
    })
}
    
// html의 화면에 결과를 보여주는 함수
let award = (res)=>{
    // 투표 수를 기준으로 정렬
    let sortRes = res.sort((a, b)=>{
        return b.vote - a.vote
    })

    // 넣을 div의 id를 배열에 담기
    awardList = ['first', 'second', 'third'];
    
    // 반복문을 통해 순위별로 컨텐츠 수정
    awardList.forEach((e, i) => {
        puppyName = sortRes[i].name;
        $('#'+ e).children()[0].src = `img/puppy/${puppyName}3.jpg`;
        $('#'+ e).children()[1].innerHTML = koName[puppyName];
        $('#'+ e).children()[2].innerHTML = sortRes[i].vote + '표';
        
    });
    
}

// pure javascript 
let hoverEvent = ()=>{
    let box = document.querySelector('.dim');
    let text = box.children[0];

    // 마우스가 영역에 닿아있을 때 글자 80px로
    box.addEventListener('mouseover', ()=>{
        text.style.fontSize = '80px';
    })
    // 마우스가 영역 밖으로 나갔을 때 글자 30px로
    box.addEventListener('mouseout', ()=>{
        text.style.fontSize = '30px';
    })
}