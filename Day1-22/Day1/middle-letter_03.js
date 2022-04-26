function solution(s){
    let answer = '';

    if (s.length % 2 === 0){ //s의 길이를 2로 나눳을때 나머지가 0이면
        answer = s[s.length / 2 -1] + s[s.length / 2]  
        // s의 길이를 2로 나눈 후 -1, 2로나눈값 2개를 출력함
        // ex ) (abcd)의 길이 4를 2로나누면 2의 값을 출력하는데
        // 2의 값은 0, 1, 2, 3 순서로인해 c가 출력됨 
        // 그래서 -1로 b를 추가하고 그냥 2로나눈값인 c까지 더해서 bc를 넣어줌
    } else {
        answer = s[s.length / 2 - 0.5]
        // 홀수를 나누면 소수점이 발생되니까 0.5를 빼줬음.
        // Math.floor 함수를 사용해도 되는듯
    }
    return answer;
}

console.log(solution("asdf"));
console.log(solution("asdfg"));