// 문제 설명
// array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로
// 정렬한 배열을 반환하는 함수, solution을 작성해주세요.
// divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요.

// 제한사항
// arr은 자연수를 담은 배열입니다.
// 정수 i, j에 대해 i ≠ j 이면 arr[i] ≠ arr[j] 입니다.
// divisor는 자연수입니다.
// array는 길이 1 이상인 배열입니다.

// 입출력 예
// arr	            divisor	        return
// [5, 9, 7, 10]	5	            [5, 10]
// [2, 36, 1, 3]	1	            [1, 2, 3, 36]
// [3,2,6]	        10          	[-1]


// 입출력 예 설명
// 입출력 예#1
// arr의 원소 중 5로 나누어 떨어지는 원소는 5와 10입니다.
// 따라서 [5, 10]을 리턴합니다.

// 입출력 예#2
// arr의 모든 원소는 1으로 나누어 떨어집니다.
// 원소를 오름차순으로 정렬해 [1, 2, 3, 36]을 리턴합니다.

// 입출력 예#3
// 3, 2, 6은 10으로 나누어 떨어지지 않습니다.
// 나누어 떨어지는 원소가 없으므로 [-1]을 리턴합니다.


// 1.arr, divisor 값이 나누어 떨어지는지 확인
// 2.나누어 떨어지면 값을 넣어주기-어디든
// 3.길이가 0이면 -1을 리턴
// 4.sort 함수로 정렬

function solution(arr, divisor){
    let answer=[];

    for(let i = 0; i < arr.length; i++){     //arr 길이만큼 한번씩 돌려봄
        if(arr[i] % divisor === 0){          // arr[i]번째의 숫자가 divisor의 숫자로 나눠서 나머지가 0이면
            answer.push(arr[i])              // answer에 arr[i]번쨰 값을 푸쉬해서 넣음
        }
    }
    if(answer.length === 0){                 //위 작업을 끝낸 answer의 길이가 0일경우 -1을 출력
        answer.push(-1);
    }
    
    // answer.sort(function(a,b){
    //     return a - b
    // })
    // 밑에 코드랑 동일 
    answer.sort((a, b) => a - b);  // 정렬

    return answer;
}


// function solution(arr, divisor){
//     let answer = arr.filter( x => x % divisor === 0);

//     if(answer.length === 0 ){
//         answer.push(-1);
//     }   
//     return answer.sort((a, b) => a - b);
// }


let a = [5, 9, 7, 10]
let b = 5

console.log(solution(a, b))

let c = [2, 36, 1, 3]
let d = 1

console.log(solution(c, d))

let e = [1, 2, 3, 4]
let f = 5

console.log(solution(e, f))


