// 문제 설명
// 대문자와 소문자가 섞여있는 문자열 s가 주어집니다.
// s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution를 완성하세요.
// 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다.
// 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.

// 예를 들어 s가 "pPoooyY"면 true를 return하고 "Pyy"라면 false를 return합니다.

// 제한사항
// 문자열 s의 길이 : 50 이하의 자연수
// 문자열 s는 알파벳으로만 이루어져 있습니다.


// 입출력 예
// s	        answer
// "pPoooyY"	true
// "Pyy"	    false


// 입출력 예 설명
// 입출력 예 #1
// 'p'의 개수 2개, 'y'의 개수 2개로 같으므로 true를 return 합니다.

// 입출력 예 #2
// 'p'의 개수 1개, 'y'의 개수 2개로 다르므로 false를 return 합니다.



// function solution(s){
//     let p = 0, y = 0
    
//     s = s.toLowerCase();                // 문자를 소문자로 전부 변경
    
//     for(let i = 0; i < s.length; i++){  // 하나씩 비교
//         if(s[i] === "p"){               // s[i]번째 글자가 p 이면
//             p++;                        // p 하나 추가
//         }    
//         else if(s[i] === "y"){          // s[i]번째 글자가 y 이면
//             y++;                        // y 하나 추가
//         }
//     }
    
//     return p === y ? true : false;      // p의 개수랑 y의 개수가 같으면 true / 아니면 false
// }

function solution(s){
    return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
}



console.log(solution("pyy"));
console.log(solution("psPYy"));