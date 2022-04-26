// 성륜이는 오늘 항해99를 시작했다. 성격이 급한 성륜이는 항해 1일 차부터 언제 수료를 하게될 지 궁금하다.
// 항해 1일 차 날짜를 입력하면 98일 이후 항해를 수료하게 되는 날짜를 계산해주는 알고리즘을 만들어보자.

// 제한 조건
// 1 ≤ month ≤ 12
// 1 ≤ day ≤ 31 (2월은 28일로 고정합니다, 즉 윤일은 고려하지 않습니다.)

// 입출력 예
// 11 27
// “3월 5일”

// 6  22

// “9월 28일”

// 지정 입력값
// 1   18
// ‘4월 26일’


function solution(month, day){
    let theday=""
    theday = new Date(2022, month-1, day);
    //console.log(theday)

    let answer = new Date(theday.setDate(theday.getDate() + 98));
    //console.log(answer)

    let mymonth = answer.getMonth()+1;
    //console.log(mymonth)

    let myday = answer.getDate();
    //console.log(myday)

    let final_day = mymonth + '월 ' + myday + '일'
    //console.log(final_day)
  
    return `"${final_day}"`
  }
  console.log(solution(1,17))




 // (날짜구하는 예제)
// let now = new Date("2022-01-01");

// let date = "2022-03-16";
// let date_arr = date.split("-");

// let year = now.getFullYear();
// let month = now.getMonth()+1;
// let day = now.getDate();

// let stDate = new Date(date_arr[0], date_arr[1], date_arr[2]);
// let endDate = new Date(year, month, day);

// let btMs = endDate.getTime() - stDate.getTime();
// let btDay = btMs / (1000*60*60*24);

// console.log("일수 차이는 ? " + btDay);

// ------------------------------------------------------------

// function solution(m, d){
//     let result = new Date(`2022-${m}-${d+1}`)
//     result.setDate(result.getDate()+98)
//     return result
// }

// console.log(solution(1, 18))
// console.log(solution(6, 22))
// console.log(solution(11, 27))

// ------------------------------------------------------------
