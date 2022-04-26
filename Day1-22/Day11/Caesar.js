// 시저 암호

// 문제 설명
// 어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을
// 시저 암호라고 합니다.
// 예를 들어 "AB"는 1만큼 밀면 "BC"가 되고, 3만큼 밀면 "DE"가 됩니다.
// "z"는 1만큼 밀면 "a"가 됩니다. 문자열 s와 거리 n을 입력받아
// s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.

// 제한 조건

// 공백은 아무리 밀어도 공백입니다.
// s는 알파벳 소문자, 대문자, 공백으로만 이루어져 있습니다.
// s의 길이는 8000이하입니다.
// n은 1 이상, 25이하인 자연수입니다.

// 입출력 예
// s	    n	result
// "AB"	1	"BC"
// "z"	    1	"a"
// "a B z"	4	"e F d"

function solution(s, n) {
  let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lower = "abcdefghijklmnopqrstuvwxyz";
  let answer = "";

  for (let i = 0; i < s.length; i++) {
    const str = s[i];
    if (str == " ") {
      //문자가 아닌 공백일 경우 덧셈 할당
      answer += " ";
      continue;
    }

    // 대문자 문자열에 해당하는 문자가 있을 시 upper, 없다면 Lower 할당
    const upperLower = upper.includes(str) ? upper : lower;
    // 할당된 문자열에 매개변수 s에 해당하는 인덱스와 n 더하기
    let index = upperLower.indexOf(str) + n;
    // 만약 더한 인덱스가 할당한 문자열의 길이보다 길거나 같을 경우 인덱스 - 문자열 길이 빼기,
    if (index >= upperLower.length) {
      index -= upperLower.length;
    }
    // 계산한 인덱스에 해당하는 문자 덧셈 할당
    answer += upperLower[index];
  }
  return answer;
}

console.log(solution("z", 1));
console.log(solution("ABC", 1));
