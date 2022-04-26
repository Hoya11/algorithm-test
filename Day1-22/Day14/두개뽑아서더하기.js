// 두 개 뽑아서 더하기

// 문제 설명
// 정수 배열 numbers가 주어집니다.
// numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서
// 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// numbers의 길이는 2 이상 100 이하입니다.
// numbers의 모든 수는 0 이상 100 이하입니다.

// 입출력 예
// numbers     	result
// [2,1,3,4,1]	    [2,3,4,5,6,7]
// [5,0,2,7]	    [2,5,7,9,12]

// 입출력 예 설명

// 입출력 예 #1
// 2 = 1 + 1 입니다. (1이 numbers에 두 개 있습니다.)
// 3 = 2 + 1 입니다.
// 4 = 1 + 3 입니다.
// 5 = 1 + 4 = 2 + 3 입니다.
// 6 = 2 + 4 입니다.
// 7 = 3 + 4 입니다.
// 따라서 [2,3,4,5,6,7] 을 return 해야 합니다.

// 입출력 예 #2
// 2 = 0 + 2 입니다.
// 5 = 5 + 0 입니다.
// 7 = 0 + 7 = 5 + 2 입니다.
// 9 = 2 + 7 입니다.
// 12 = 5 + 7 입니다.
// 따라서 [2,5,7,9,12] 를 return 해야 합니다.

let a = [2, 1, 3, 4, 1];
let b = [5, 0, 2, 7];

function solution(num) {
  let answer = [];

  for (let i = 0; i < num.length; i++) {
    for (let j = i + 1; j < num.length; j++) {
      let result = num[i] + num[j];
      if (!answer.includes(result)) {
        answer.push(result);
      }
    }
  }
  return answer.sort((a, b) => a - b);
}

console.log(solution(a));

//다른풀이

// function solution(numbers) {
//     const temp = []

//     for (let i = 0; i < numbers.length; i++) {
//         for (let j = i + 1; j < numbers.length; j++) {
//             temp.push(numbers[i] + numbers[j])
//         }
//     }

//     const answer = [...new Set(temp)]

//     return answer.sort((a, b) => a - b)
// }

// Set의 특성을 활용하여 조건문을 쓰지 않고 중복값을 제거했다.

// Set 특성
//  - 비순차적으로 저장되는 순열구조
//  - 유일한 값만 저장
