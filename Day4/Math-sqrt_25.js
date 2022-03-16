// 문제 설명
// 임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다.
// n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고,
// n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.

// 제한 사항
// n은 1이상, 50000000000000 이하인 양의 정수입니다.
// 입출력 예


// n	    return
// 121	    144
// 3	    -1

// 입출력 예 설명

// 입출력 예#1
// 121은 양의 정수 11의 제곱이므로, (11+1)를 제곱한 144를 리턴합니다.

// 입출력 예#2
// 3은 양의 정수의 제곱이 아니므로, -1을 리턴합니다.

// --
// 1. n이 어떤 정수 x의 제곱인지 확인   Math.sqrt 함수
// 2. 어떤 정수 x의 제곱인지 확인했으면 그 x + 1 의 제곱을 출력 
// 3. x의 제곱이 아니라면 -1을 출력

function solution(n){
    let sqrt = Math.sqrt(n);  // Math.sqrt 함수는 

    if(Number.isInteger(sqrt)) {   // Number.isinteger 정수인지 판별해주는 함수 , sqrt가 정수인지 확인
        return Math.pow(sqrt + 1, 2);  // (sqrt + 1) ** 2  이것도 동일한 식
    } else {
        return -1
    }

    // return Number.isInteger(sqrt) ? Math.pow(sqrt +1, 2) : -1;   // 위에 if문을 한줄로 요약
}

console.log(solution(121));
console.log(solution(3));
