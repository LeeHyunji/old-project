// JS quiz 타임세일 
// - 매일 10시부터 1시간도안 타임세일 상품 구매가 가능한지 체크하는 함수 만들기

let today = new Date();
console.log("현재 날짜는 " + today); // Mon Aug 02 2021 15:17:10 GMT+0900

function timeSale(date){ // input으로 날짜
    let hours = date.getHours();  // 날짜에서 시간 추출.
    if(hours==10){
        return true;
    }else{
        return false;
    }
}

let checkTimeSale = timeSale(today); // let checkTimeSale = true; OR let checkTimeSale = false;
console.log ("현재 타입세일 상품 구매가 " + (checkTimeSale ? "가능" : "불가능") +"합니다.");