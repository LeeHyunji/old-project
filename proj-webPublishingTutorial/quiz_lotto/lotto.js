// 로또번호 생성기
// - 한번 추출시 6개의 로또를 뽑으며 5번이 한번에 자동으로 로또를 추출

//1. 로또번호 생성 한번데 5개임씩 번호는 6개
let lotto = new Array;

for(let i=0; i<5; i++){
    lotto[i] = new Array();
    
    //한게임당 6개의 로또 번호 추출
    for(let j=0;j<6;j++){
        //현재 상태는 같은 숫자가 나올수 있음
        //lotto라는 배열에 담긴 숫자와 같이 같으면 안됨
        let num;
        do{
            //새로 추가될 숫자 : 1~45사이의 숫자가 랜덤하게 처리
            //random() : 0~1사이의 랜덤한 소수
            //floor() : 내림처리해서 정수로 변경
            num = Math.ceil(Math.random() * 45)
        }while(lotto[i].includes(num))
    
        //push() - 배열에 마지막에 값추가메서드
        lotto[i].push(num);
    }
    //오름차순으로 숫자 정렬
    lotto[i].sort((a,b) => a - b );

}
// 2차원 배열의 요소들을 하나씩 출력
document.write("<h1>로또번호 생성기</h1>")
for (let i = 0; i < lotto.length; i++) {
    document.write('자동 : ');
    for (let j = 0; j < lotto[i].length; j++) {
      document.write(lotto[i][j] + ' ');
    }
    document.write("<br />");
}