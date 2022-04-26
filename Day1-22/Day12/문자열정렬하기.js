// 문자열 내 마음대로 정렬하기

// 문제 설명
// 문자열로 구성된 리스트 strings와, 정수 n이 주어졌을 때,
// 각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬하려 합니다.

// 예를 들어 strings가 ["sun", "bed", "car"]이고 n이 1이면 각 단어의
// 인덱스 1의 문자 "u", "e", "a"로 strings를 정렬합니다.

// 제한 조건
// strings는 길이 1 이상, 50이하인 배열입니다.
// strings의 원소는 소문자 알파벳으로 이루어져 있습니다.
// strings의 원소는 길이 1 이상, 100이하인 문자열입니다.
// 모든 strings의 원소의 길이는 n보다 큽니다.
// 인덱스 1의 문자가 같은 문자열이 여럿 일 경우, 사전순으로 앞선 문자열이 앞쪽에 위치합니다.

// 입출력 예
// strings	                    n	    return
// ["sun", "bed", "car"]	    1	    ["car", "bed", "sun"]
// ["abce", "abcd", "cdx"]	    2	    ["abcd", "abce", "cdx"]

// 입출력 예 설명

// 입출력 예 1
// "sun", "bed", "car"의 1번째 인덱스 값은 각각 "u", "e", "a" 입니다.
// 이를 기준으로 strings를 정렬하면 ["car", "bed", "sun"] 입니다.

// 입출력 예 2
// "abce"와 "abcd", "cdx"의 2번째 인덱스 값은 "c", "c", "x"입니다.
// 따라서 정렬 후에는 "cdx"가 가장 뒤에 위치합니다.
// "abce"와 "abcd"는 사전순으로 정렬하면 "abcd"가 우선하므로, 답은 ["abcd", "abce", "cdx"] 입니다.

let a = ["sun", "bed", "car"];

// function solution(strings, n) {
//   let answer = strings.sort((a, b) => {
//     if (a[n] > b[n]) {
//       return 1;
//     }
//     if (a[n] < b[n]) {
//       return -1;
//     }
//     if (a[n] === b[n]) {
//       if (a > b) {
//         return 1;
//       }
//       if (a < b) {
//         return -1;
//       }
//       return 0;
//     }
//   });
//   return answer;
// }

// console.log(solution(a, 1));

// //리팩토링
// function solution(strings, n) {
//   strings.sort((a, b) => {
//     let first = a[n];
//     let second = b[n];

//     if (first === second) {
//       return (a > b) - (b > a);
//     } else {
//       return (first > second) - (second > first);
//     }
//   });
//   return strings;
// }

// console.log(solution(a, 1));

//다른풀이
// function solution(strings, n) {
//     return strings.sort((s1, s2) => s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n]));
// }

function solution(strings, n) {
  // 문자열의 n번째 글자를 기준으로 오름차순으로 정렬
  strings.sort(function (a, b) {
    if (a[n] !== b[n]) {
      return a[n].localeCompare(b[n]);

      // 단, 문자열의 n번째 글자가 같은 경우에는 전체 문자열을 기준으로 사전 순으로 정렬
    } else {
      return a.localeCompare(b);
    }
  });

  return strings;
}
console.log(solution(a, 1));

// localeCompare
// 'a'.localeCompare('c');
// // -2 or -1, a가 c 앞에 오기 때문에 음수를 리턴

// 'check'.localeCompare('against');
// // 2 or 1, 알파벳 순으로 check가 against 뒤에 오기 때문에 양수를 리턴

// 'a'.localeCompare('a');
// // 0, 동일하면 0을 리턴

// function solution(strings, n) {
//   let answer = strings;
//   return answer.sort((a, b) => {
//     let k = a.charCodeAt(n) - b.charCodeAt(n);
//     console.log(k);
//     return k == 0 ? a.localeCompare(b) : k;
//   });
// }

// console.log(solution(a, 1));
