// j-query 

// 로그인 더블클릭 막기 위한 전역변수
let count = false;

$(document).ready(()=>{
    // '로그인' 버튼 클릭 시 btnClick함수 호출
    $('button').click(btnClick)
})


let btnClick = ()=>{
    // 더블클릭 막기
    if(count == true) return
    
    // input에 입력한 값 불러오기
    let id = $('#id').val();
    let pw = $('#pw').val();

    count = true;
    alert(`아이디 : ${id}, 패스워드 : ${pw}`);

    
    // 서버에 post요청
    $.ajax({
        url: '/login',
        method: 'POST',
        data:{ 
            id : id ,
            pw : pw ,
        },
        dataType: "json",
        error: (err)=>{
            alert("네트워크 오류로 서버와의 통신이 실패하였습니다.");
        },    
        cache: false
    });
}



// pure js

// window.addEventListener('load', ()=>{
//     btnClick();
// })

// let btnClick = ()=>{
//     let btn = document.querySelector('button')
//     btn.addEventListener('click', ()=>{
//         // OK버튼 클릭 시 input에 입력한 값을 불러와서 alert창에 띄우는 이벤트
//         checkInput()
//     })
// }

// let checkInput = ()=>{
//     let id = document.getElementById('id').value;
//     let pw = document.getElementById('pw').value;

//     alert(`아이디 : ${id}, 패스워드 : ${pw}`)
// }
