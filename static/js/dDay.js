window.addEventListener('load', ()=>{
    // 날짜 input 저장
    let userDate = document.querySelector('.userDate')

    // 사용자가 날짜 input을 변경할 때  clac 함수 동작
    userDate.addEventListener('change', ()=>{clac(userDate)});
})

let clac = (t)=>{
    // 사용자에게 입력받은 날짜 저장
    let dday = new Date(t.value);

    // 결과를 출력할 div
    let counter = document.querySelector('.counter');
    
    let today = new Date(), //현재 날짜 가져오기
        gap = dday - today, // 날짜간의 차이 구하기
        result = Math.floor(gap / (1000 * 60 * 60 * 24))+ 1;

    
    // 날짜간의 차이가 음수인지, 0또는 양수인지에 따라 기호를 다르게 
    if(result < 0){
        // 음수면 이미 지난 날짜를 선택한 것
        // 음수의 -기호 삭제
        result = String(result).split('-')[1]
        // +로 표기
        counter.innerHTML = `D+${result}`
    }else{
        // 양수 또는 0이면 - 로 표기
        counter.innerHTML = `D-${result}`
    }
    
}
