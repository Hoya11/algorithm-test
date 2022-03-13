// 문제 설명
// 프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때
// 고객들의 전화번호의 일부를 가립니다.
// 전화번호가 문자열 phone_number로 주어졌을 때,
// 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을
// 리턴하는 함수, solution을 완성해주세요.

// 제한 조건
// s는 길이 4 이상, 20이하인 문자열입니다.

// 입출력 예

// phone_number	return
// "01033334444"	"*******4444"
// "027778888" 	"*****8888"

// function solution(phone_number){
//     let answer = '';
//     for(let i=0; i < phone_number.length; i++){
//         if(i < phone_number.length-4){
//             answer = answer + "*";
//         } else {
//             answer = answer + phone_number[i];
//         }
//     }
//     return answer;
// }


function solution(num){
    let result = "*".repeat(num.length - 4) + num.slice(-4);
    return result;
}

let a = "01011112223";

console.log(solution(a));




// repeat 문자열을 주어진 횟수만큼 반복해 붙인 새로운 문자열을 반환한다

// let num = "a"   console.log(a.repeat(3));   = aaa

// console.log(num.slice(-2));  마지막요소부터 마지막에서 두번째 요소까지 추출