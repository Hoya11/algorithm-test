function solution(n, colors) {
  let answer = 0;
  let colorsSort = colors.sort();
  const result = colorsSort.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});

  console.log("result", result);
  const a = Object.values(result);
  console.log("a", a);

  for (let i = 0; i < a.length; i++) {
    answer += a[i] * a[i];
  }
  console.log("answer", answer);
  return answer;
}

console.log(solution(12, [1, 1, 4, 4, 2, 2, 2, 2, 3, 3, 4]));
