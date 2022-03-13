function solution(num){
    let answer = '';

    if(num % 2 === 0){
        return answer = "Even"
    } else {
        return answer = "Odd"
    }
    return answer;
}

// function solution(num){
// return(num % 2 === 0 ? "Even" : "Odd" )
// }

console.log(solution(4))
console.log(solution(5))