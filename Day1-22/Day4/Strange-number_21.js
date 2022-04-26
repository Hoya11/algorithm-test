// 문자열 s는 한 개 이상의 단어로 구성되어 있습니다.
// 각 단어는 하나 이상의 공백문자로 구분되어 있습니다.
// 각 단어의 짝수번째 알파벳은 대문자로,
// 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수,
// solution을 완성하세요.

// 제한 사항
// 문자열 전체의 짝/홀수 인덱스가 아니라,
// 단어(공백을 기준)별로 짝/홀수 인덱스를 판단해야합니다.
// 첫 번째 글자는 0번째 인덱스로 보아 짝수번째 알파벳으로 처리해야 합니다.

// 입출력 예
// s	                return
// "try hello world"	"TrY HeLlO WoRlD"

// 입출력 예 설명
// "try hello world"는 세 단어 "try", "hello", "world"로 구성되어 있습니다.
// 각 단어의 짝수번째 문자를 대문자로,
// 홀수번째 문자를 소문자로 바꾸면 "TrY", "HeLlO", "WoRlD"입니다.
// 따라서 "TrY HeLlO WoRlD" 를 리턴합니다.


// 단어별로 나누기 => separator = " "
// const monthString = 'Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec';
// const month = monthString.split(" ");



// join() 메서드는 배열의 모든 요소를 연결해 하나의 문자열로 만든다.

// 예제
// const arr = ['바람', '비', '물'];

// console.log(arr.join());
// 바람,비,물

// console.log(arr.join(''));
// 바람비물

// console.log(arr.join('-'));
// 바람-비-물


function solution(s){
    let answer = [];
    let arr = s.split(' ');   //공백으로 자름

    for(let i = 0; i < arr.length; i++){
        let str = arr[i];
        for(let j = 0; j < str.length; j++){
            j % 2 == 0 ? answer.push(str[j].toUpperCase()) : answer.push(str[j].toLowerCase())
        }
        answer.push(' ');
    }
    answer.pop();
    return answer.join('');
}

// console.log(solution("try hello world"));



// function solution(s){
//     let answer=[];
//     let arr = s.split(' ');                 //공백으로 나눔 ("ab cd ef") => ("ab","cd","ef")

//     for(let i = 0; i < arr.length; i++){   // 나누어놓은 ab, cd, ef를 돌림
//         let word = arr[i].split('')        // word에 ac cd ef를 "a","b","c" 이런식으로 나눔
//         .map((word, inx) =>{              
//             if(inx % 2 === 0) {            // word에서 나눠놓은 ["a","b"]를 2로 나눠봄
//                 return word.toUpperCase()  // a는 0번째로 나머지가 없으니 대문자
//             } else {
//                 return word.toLowerCase()  // b는 1번째로 나머지가 남으니 소문자
//             }
//         }).join('');                       // join으로 ["A","b"]를 ["Ab"]로 합침

//         answer.push(word)                   // 합친 word를 answer에 푸쉬
//     }
//     return answer.join(' ');                // 위의 내용을 반복해서 받은 내용을
//                                             // join(' ')으로 공백을 넣어서 합침
// }


// console.log(solution("try hello world"));






// function solution(s){
//     let answer = [];
//     let arr = s.split(' ');
    
//     for(i = 0; i < arr.length; i++){
//         let word = arr[i].split('')
//         .map((word, inx) =>{
//             if(inx % 2 === 0){
//                 return word.toUpperCase();
//             } else{
//                 return word.toLowerCase();
//             }
//         }).join('');
        
//         answer.push(word)
//     }
//     return answer.join(' ');
// }
