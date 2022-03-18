function solution(arr1, arr2){
  let time1 = 0;
  let time2 = 0;
  let minute1 = 0;
  let minute2 = 0;

  for(let i = 0; i < arr1.length; i++){
    time1 += parseInt(arr1[i].slice(0, 1))
    minute1 += parseInt(arr1[i].slice(-2))
  }

  console.log(time1)
  console.log(minute1)
  return time1
}

let arr1=["8:42", "9:00", "8:50", "8:47", "9:01", "8:51", "8:59"];
let arr2=["21:42", "23:10", "25:30", "29:10", "23:11", "26:44", "29:26"];


console.log("---------------------",solution(arr1, arr2))

// arr1 시간끼리 다 더하고 분끼리 다 더하고
// arr2 시간끼리 다 더하는데 29시 넘어가는건 21시로 변경해서 다 더한다음
// arr1 이랑 arr2랑 빼고서 분은  /60 ?
// 뺌?

// 58 : 250
// 160 : 137
// 102 : -113 (60 53)
// 100시간 7분


// function solution(arr1, arr2){
//   let hour = 0;
//   let minute = 0;
  
//   for(let i=0; i<arr1.length; i++) {
//     if (parseInt(arr2[i]) < 29 && arr2[i].slice(-2) >= arr1[i].slice(-2)) {
//       hour += parseInt(arr2[i]) - parseInt(arr1[i]);
//       minute += arr2[i].slice(-2) - arr1[i].slice(-2);
//       console.log(hour, minute)
//     }
//     else if (parseInt(arr2[i]) < 29 && arr2[i].slice(-2) < arr1[i].slice(-2)) {
//       hour += (parseInt(arr2[i]) - parseInt(arr1[i]))-1;
//       minute += 60 + (arr2[i].slice(-2) - arr1[i].slice(-2));
//       console.log(hour, minute, arr1[i], arr2[i])
//     }
//     else {
//       hour += (21 - parseInt(arr1[i]))-1;
//       minute += 60 - arr1[i].slice(-2);
//       console.log(hour, minute)
//     }
//   }
//   if (minute >= 60) {
//     hour += parseInt(minute/60);
//     minute = minute%60;
//   }
//    return `${hour}시간 ${minute}분`;
// }