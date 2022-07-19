// 핸드폰 뒷자리 4개만 출력 후 나머지는 *표시하기

// ex) 01022223333  = *******3333

function solution(phone_number) {
  const startPhone = "*".repeat(phone_number.length - 4);

  const lastPhone = phone_number.slice(-4);

  return startPhone + lastPhone;
}
