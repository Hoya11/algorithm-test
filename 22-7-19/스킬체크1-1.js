// 간단한 문제였음

// 짝수면 "Even" 홀수면 "Odd" 출력

function solution(num) {
  let answer = "";

  if (num % 2 === 0) {
    return (answer = "Even");
  } else {
    return (answer = "Odd");
  }

  return answer;
}
