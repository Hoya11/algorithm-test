// 문제 설명
// 어떤 정수들이 있습니다. 이 정수들의 절댓값을 차례대로 담은 
// 정수 배열 absolutes와 이 정수들의 부호를 차례대로 담은 
// 불리언 배열 signs가 매개변수로 주어집니다.
// 실제 정수들의 합을 구하여 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// absolutes의 길이는 1 이상 1,000 이하입니다.
// absolutes의 모든 수는 각각 1 이상 1,000 이하입니다.
// signs의 길이는 absolutes의 길이와 같습니다.
// signs[i] 가 참이면 absolutes[i] 의 실제 정수가 양수임을,
// 그렇지 않으면 음수임을 의미합니다.


// 입출력 예
// absolutes	     signs	            result
// [4,7,12]	     [true,false,true]	    9
// [1,2,3]	        [false,false,true]	    0


// 입출력 예 설명
// 입출력 예 #1

// signs가 [true,false,true] 이므로, 실제 수들의 값은 각각 4, -7, 12입니다.
// 따라서 세 수의 합인 9를 return 해야 합니다.
// 입출력 예 #2

// signs가 [false,false,true] 이므로, 실제 수들의 값은 각각 -1, -2, 3입니다.
// 따라서 세 수의 합인 0을 return 해야 합니다.

// function solution(absolutes, signs){   // signs의 값이 true false에 따라 양수 음수
//     let answer = 0;
    
//     for(let i=0; i < absolutes.length; i++){
//         if(signs[i] === true){
//             answer += absolutes[i]  // true라면 absolutes 배열의 i번째값을 더함
//         } else{
//             answer -= absolutes[i]  // false라면 absolutes 배열의 i번째값을 뺌
//         }
//     }
//     return answer;
// }


function solution(absolutes, signs){
    return absolutes.reduce((acc, val, i) => acc + (val * (signs[i] ? 1 : -1)), 0);
}


let a = [4, 7, 12];
let b = [true, false, true];
console.log(solution(a, b));

console.log("---------------------")

let c = [1, 2, 3];
let d = [false, false, true];
console.log(solution(c, d));


// ex1)
// let arr = [1, 2, 3, 4, 5];

// const result = arr.reduce((a, b) =>{
//     return a + b;
// },0)

// console.log(result);



// ex2)
// 배열.reduce((누적값, 현잿값, 인덱스, 요소) => { return 결과 }, 초깃값);
// result = oneTwoThree.reduce((acc, cur, i) => {
//     console.log(acc, cur, i);
//     return acc + cur;
//   }, 0);
//   // 0 1 0
//   // 1 2 1
//   // 3 3 2
//   result; // 6




// 삼항 연산자

// 삼항 연산자 = 세 개의 피연산자를 사용하는 유일한 연산자
// 일반적으로 if문의 단축 형태로 사용됨

// '조건식' ? 'true 일 경우 코드' : 'false 일 경우 코드'

// '조건식'
// ? 'true 일 경우 코드'
// : 'false 일 경우 코드'


// ex1)
// let a = "문자";
// let b = "자문";

// if(a===b){
//     console.log("a와 b의 값이 같습니다.")
// }else{
//     console.log("a와 b의 값이 다릅니다.")
// }

// ---

// a = "문자";
// b = "자문";

// a===b
//  ? console.log("a와 b의 값이 같습니다.") 
//  : console.log("a와 b의 값이 다릅니다.") 

// ---------------
 
//  ex2)
// a = "문자";
// b = "문자";

// let text = '';

// if(a===b){
//     text = "a와 b는 값이 같습니다.";
// }else{
//     text = "a와 b는 값이 다릅니다.";
// }

// console.log(text);


// ---
// a = "문자";
// b = "문자";

// text = a===b ? "a와 b는 값이 같습니다." : "a와 b는 값이 다릅니다"
// console.log(text);