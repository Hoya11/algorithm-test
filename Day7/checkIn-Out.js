a = ["7:51", "8:58", "8:56", "8:35", "9:00", "8:46", "8:56"]
b = ["22:24", "21:51", "25:30", "29:10", "29:12", "22:15", "21:31"]


function solution(arr1, arr2){
    let result = '';
    let in_min=0
    let out_min=0
  
    for(let i = 0; i < arr1.length; i++){
      let hour1 = arr1[i].split(":")[0]
      let min1 = arr1[i].split(":")[1]
      let total_min1 = Number(hour1)*60 + Number(min1)
      in_min += total_min1
  
      let hour2 = arr2[i].split(":")[0]
      let min2 = arr2[i].split(":")[1]
      let total_min2 = 0;
      if(hour2 > 28){
        hour2 = 21
        total_min2 = Number(hour2)*60
        out_min += total_min2
      } else{
        total_min2 = Number(hour2)*60 + Number(min2)
        out_min += total_min2
      }
    }
    result = String(parseInt((out_min - in_min)/60))
    console.log(result)
  }
  
  console.log(solution(a, b))
