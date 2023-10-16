window.addEventListener('load', ()=>{
    // '계산하기' 버튼 클릭 시 calc 함수 호출
    let btn = document.querySelector('.calcBtn')
    btn.addEventListener('click', calc)
})

let calc = ()=>{
    // input 2개의 값과 사용자가 선택한 값에 따라 결과를 보여주는 사칙연산 계산기
    // input 2개의 값 저장
    let num1 = Number(document.querySelector('.num1').value),
        num2 = Number(document.querySelector('.num2').value),
        // 연산자 선택한 값 저장
        op = document.querySelector('select').value,
        // 결과를 나타낼 div
        box = document.querySelector('.result');
        
        
    // 결과 나타내기 
    if(op == 'add'){
        // 더하기 선택 시 결과
        box.innerHTML = `${num1} + ${num2} = ${num1+num2}`
    }else if(op == 'sum'){
        // 빼기 선택 시 결과
        box.innerHTML = `${num1} - ${num2} = ${num1-num2}` 
    }else if(op == 'mul'){
        // 곱하기 선택 시 결과
        box.innerHTML = `${num1} * ${num2} = ${num1*num2}`
    }else if(op == 'div'){
        // 나누기 선택 시 결과
        box.innerHTML = `${num1} / ${num2} = ${num1/num2}`
    }
}