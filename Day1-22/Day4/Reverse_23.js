// 문제 설명
// 자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요.
// 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.

// 제한 조건
// n은 10,000,000,000이하인 자연수입니다.

// 입출력 예
// n	    return
// 12345	[5,4,3,2,1]


function solution(n){
    let answer = [];
    let str = String(n);                     // 문자열로 바꿈
    let str_sp = str.split('').reverse();    // split으로 나누고 reverse로 뒤집기
                                             // let str = String(n).split('').reverse() 로 써도됨
    for(let i=0; i < str_sp.length; i++){    
      answer.push(parseInt(str_sp[i]));      // answer에 정수로 푸쉬 (reverse를 한 상태로 들어감)
    }
  
    return answer;
  }
  
  console.log(solution(13245));





//   ex 1)

// function solution(n) {
//     return (n + '')         // 문자열 변환
//     .split('')              // 하나씩 자르기
//     .map(v => +v)           // 각 자리수를 문자열에서 숫자로 변환
//     .reverse();             // reverse를 이용해 순서를 뒤집기
// }


// function solution(n){
//   return (n + '').split('').map(v => +v).reverse();
// }