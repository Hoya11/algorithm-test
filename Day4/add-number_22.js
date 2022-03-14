// 문제 설명
// 자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
// 예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.

// 제한사항
// N의 범위 : 100,000,000 이하의 자연수


// 입출력 예
// N	    answer
// 123	    6
// 987	    24


// 입출력 예 설명

// 입출력 예 #1
// 문제의 예시와 같습니다.

// 입출력 예 #2
// 9 + 8 + 7 = 24이므로 24를 return 하면 됩니다.



// 1. n의 숫자를 split으로 나눠서 더해줘야함
// 2. split으로 나누려면 문자열로 변환해야됨
// 3. 나누고서 문자열을 정수로 변환해서 더함



function solution(n){
    let answer = 0;
    let str = n +""                 // split을 하기 위해서 문자열로 변환 String(n) = n + "" 동일
    let str_sp = str.split('');         // split으로 456을 '4','5','6' 으로 나눠줌

    for(let i = 0; i<str_sp.length; i++){    
        answer += parseInt(str_sp[i]);        // answer에 str_sp[i] 값을 정수로 반환해서 더해줌
    }
    return answer
}

console.log(solution(1234));
console.log(solution(456));