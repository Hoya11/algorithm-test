// Stack(스택)이란?

// 게임을 해보신 분들이라면 스택이 쌓인다 라는 말을 들어보신 적이 있으실 겁니다.
//  stack은 '쌓다'라는 뜻을 갖고 있음

// 1 , 2 , 3 , 4 순으로 데이터를 쌓는다면

// 가장 먼저 저장한 데이터인 1이 마지막에 나오게 되는 구조
// First In, Last Out
// 후입선출 방식

// 예를들면
// 프링글스 보시면 밑에서부터 채웠지만 맨위에서 하나씩 빼서 먹는 느낌

// 스택이 많이 쓰이는 곳

// 스택은 브라우저 히스토리(이전 페이지, 다음 페이지) 또는
// ctrl+z로 이전 작업을 취소하는 등의 동작에 쓰이는 자료구조

// -------------------------------------------
// c언어로 만들때는 struct를 이용해서 사용 가능한데
// javascript에서는 따로 구조체가 없어서 class로 새로운 객체를 만들어서 사용해야됨

// 자바스크립트에서 사용하는 property method를 보면

// property  ?
// 속성이란 뜻으로 js에서는 객체 내부의 속성을 의미함

// stack property
// top = 가장 최근 요소의 인덱스(스택의 현재 위치/ 스택의 마지막 요소의 인덱스)

// push(element) : 스택 끝에 요소를 추가
// 		스택의 마지막에 데이터를 입력하는 함수, size보다 높다면 에러 호출
// pop() : 가장 최근에 추가된 요소를 제거
// 	스택에서 가장 최근에 들어온 데이터를 방출하고 그 데이터를 return하는 함수
// 	stack의 top이 0인데 pop인 경우 에러 호출

// peek() : top의 요소를 반환
// 	스택의 마지막 데이터를 return하는 함수

// size() : 스택의 크기를 반환

// empty() 스택에 요소가 있는지에 대해 불리안 값을 반환 // 빈스택일 경우 1(true)

// this는 자신이 속한 객체 또는 자신이 생성할 인스턴스를 가리키는
// 자기 참조 변수(self-reference variable)이다

class Stack {
  constructor() {
    //constructor 메서드는 클래스의 인스턴스 객체를 생성하고 초기화하는 메서드입니다.
    this.storage = {};
    this.top = 0; // 스택의 가장 상단을 가리키는 포인터 변수를 초기화 합니다.
  }

  size() {
    return Object.keys(this.storage).length;
  }

  // 스택에 데이터를 추가 할 수 있어야 합니다.
  // 객체로 이루어진 storage에서 키와 값으로 element를 저장하고,
  // top을 1 늘려준다.
  push(element) {
    this.storage[this.top] = element;
    this.top += 1;
  }

  // 가장 나중에 추가된 데이터가 가장 먼저 추출되어야 합니다.
  pop() {
    // 빈 스택에 pop 연산을 적용해도 에러가 발생하지 않아야 합니다
    if (Object.keys(this.storage).length === 0) {
      return;
      // 위의 return문은 코드의 가독성을 위하여 씀
      // (없어도 같은 결과가 나옴)
    }

    const result = this.storage[this.top - 1];
    delete this.storage[this.top - 1];
    this.top -= 1;

    return result;
  }
}

const stackData = new Stack(); // stackData 변수를 선언하고 변수의 내용은 Stack 클래스이다.
stackData.push("a"); // storage에 'a'를 추가
stackData.push("b"); // storage에 'b'를 추가
stackData.push("c"); // storage에 'c'를 추가
console.log(stackData); // Stack {storage: {…}, top: 3}
// storage의 내용은 {0: 'a', 1: 'b', 2: 'c'}이다.
// top은 앞으로 추가하게 될 위치 내지 key의 값이다. (3 자리에 추가된다는 말)
console.log(stackData.size()); // 3
stackData.pop(); // 'c' (pop은 제일 최근에 추가된 요소를 제거)
console.log(stackData); // {storage: {…}, top: 2}
// storage는 {0: "a", 1: "b"}이다. 나중에 들어온 'c'가 제거된 것을 볼 수 있다.
