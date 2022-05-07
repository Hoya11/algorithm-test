// 행렬의 곱셈
// 문제 설명
// 2차원 행렬 arr1과 arr2를 입력받아, arr1에 arr2를 곱한 결과를 반환하는 함수, solution을 완성해주세요.

// 제한 조건
// 행렬 arr1, arr2의 행과 열의 길이는 2 이상 100 이하입니다.
// 행렬 arr1, arr2의 원소는 -10 이상 20 이하인 자연수입니다.
// 곱할 수 있는 배열만 주어집니다.
// 입출력 예
// arr1	arr2	return
// [[1, 4], [3, 2], [4, 1]]	[[3, 3], [3, 3]]	[[15, 15], [15, 15], [15, 15]]
// [[2, 3, 2], [4, 2, 4], [3, 1, 4]]	[[5, 4, 3], [2, 4, 1], [3, 1, 1]]	[[22, 22, 11], [36, 28, 18], [29, 20, 14]]


function solution(A, B) {
    let answer = [];

    for (let i = 0; i < A.length; i++) {
        // 행렬 A의 행 접근 - A
        const row = A[i];
        answer.push([]);
        // 행렬 B의 열 접근해서 곱하기 - B
        // 행렬 B의 열 길이
        for (let j = 0; j < B[0].length; j++) {
            let sum = 0;
            // 행렬 B의 행 길이
            // B는 열을 고정해놓고 행을 이동하기 - C
            for (let k = 0; k < B.length; k++) {
                sum += row[k] * B[k][j];
            }
            answer[i].push(sum);
        }
    }
    return answer;
}