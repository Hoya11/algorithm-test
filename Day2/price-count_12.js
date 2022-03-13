// 문제 설명
// 새로 생긴 놀이기구는 인기가 매우 많아 줄이 끊이질 않습니다.
// 이 놀이기구의 원래 이용료는 price원 인데, 놀이기구를 N 번 째 이용한다면
// 원래 이용료의 N배를 받기로 하였습니다.
// 즉, 처음 이용료가 100이었다면 2번째에는 200, 3번째에는 300으로 요금이 인상됩니다.
// 놀이기구를 count번 타게 되면 현재 자신이 가지고 있는 금액에서 얼마가 모자라는지를
// return 하도록 solution 함수를 완성하세요.
// 단, 금액이 부족하지 않으면 0을 return 하세요.

// 제한사항
// 놀이기구의 이용료 price : 1 ≤ price ≤ 2,500, price는 자연수
// 처음 가지고 있던 금액 money : 1 ≤ money ≤ 1,000,000,000, money는 자연수
// 놀이기구의 이용 횟수 count : 1 ≤ count ≤ 2,500, count는 자연수


// 입출력 예
// price	money	count	result
// 3	    20  	4	    10

// 입출력 예 설명
// 입출력 예 #1
// 이용금액이 3인 놀이기구를 4번 타고 싶은 고객이 현재 가진 금액이 20이라면,
//  총 필요한 놀이기구의 이용 금액은 30 (= 3+6+9+12) 이 되어
//   10만큼 부족하므로 10을 return 합니다.

function solution(price, money, count){
    let answer = 0;
    // 필요한 놀이기구의 이용 금액
    
    for(let i=1; i <=count; i++){
        answer += price * i;
    }
    return answer < money ? 0 :answer - money;
    //"금액이 부족하지 않으면 0을 return" 하라는 말은
    // 총 필요한 놀이기구의 이용 금액 < 현재 가진 금액이면 0으로 하라는 거니까.
    // answer < money 이면
    // true -> 0
    // false -> answer - money
}

console.log(solution(3, 20, 4))



//     var answer = -1;
//     if(price<1 || price>2500) {
//         console.log("제한사항 재검토!")
//     } else if(money<1 || money>1000000000) {
//         console.log("제한사항 재검토!")
//     } else if(count<1 || count>2500) {
//         console.log("제한사항 재검토!")
//     } else {
//         for(i=1; i<=count; i++) {
//             price_total = price * i //i = count(반복횟수)
//             console.log("이용금액 = "+price_total)
//             console.log("직전용돈 = "+money)
//             money = money - price_total
//             console.log("남은용돈 = "+money)
//         }
//         if(money >= 0) {
//             return answer = 0
//         }
//         else {
//             return answer = Math.abs(money)
//         }
//     }
//     return answer
// }
// console.log(solution(3, 20, 4))

// 삼항연산자 사용
// condition ? exprIfTrue : exprIfFalse 
// condition(조건문) : 조건문으로 들어갈 표현식
// exprIfTrue : 조건이 참일 때 실행할 식
// exprIfFalse : 조건이 거짓일 때 실행할 식
// function solution(price, money, count) {
//     var answer = 0;
//     for (i=1; i<=count; i++) {
//         console.log(price, i)
//         answer += price * i //+=(더하기 할당 연산자) : 오른쪽 값을 변수에 더한 결과를 다시 변수에 할당한다.
//     }
//     console.log(answer, money)
//     return answer > money ? answer - money : 0 
//     // 최종값이 가진돈보다 클 경우 차액을 돌려받고, 나머지의 경우 0이 된다.
// }
// console.log(solution(3,20,4))

// 가우스공식 : 등차수열
// 최종금액을 구한 후 가지고 있는 돈을 차감
// 최종금액이 돈보다 많을 경우 차액만큼 돌려주고, 나머지의 경우 0이 된다.
// function solution(price, money, count) {
//     let answer = (count * (2 * price + (count - 1) * price)) / 2 - money; //계산시 미리 차액 계산
//     return answer > 0 ? answer : 0;
// }
// console.log(solution(3,20,4))


// 1부터 n까지의 합의 공식 사용(count의 총 합 미리 계산)
// count의 총 합 계산 후 price만 곱한다
//
// function solution(price, money, count) {
//     let answer = price * count * (count + 1) / 2 - money; //계산시 미리 차액 계산
//     return answer > 0 ? answer : 0;
// }
// console.log(solution(3,20,4))