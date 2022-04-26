// Queue

// Queue는 stack과 달리
// 먼저 입력된 데이터가 먼저 나오는 자료구조

// First In First Out

// 1, 2, 3, 4 순으로 데이터를 입력했으면
// stack과 반대로 4 데이터가 마지막에 나오는 구조

// 보통 대기열이나 선착순을 생각하면 됨.
// 먼저 줄을서면 먼저 처리가 됨

// -------------------------------------

// Queue의 속성은

// 가장 앞을 가리키는 Head(front)와 가장 뒤를 가리키는 Rear(tail)이 있고

// -------------
// head : dequeue 하였을 시 출력이 되는 부분 (front)
// tail : enqueue 하였을 시 입력이 되는 부분 (rear)
// enqueue : data를 queue의 맨 뒤에 입력
// dequeue : head에 있는 data를 출력 및 삭제

// enqueue() : 큐에 자료를 넣는다.
// dequeue() : 큐의 자료를 뺀다
// front() : 큐의 가장 앞에 있는 자료를 보는 연산
// back(): 큐의 가장 뒤에 있는 자료를 보는 연산
// isEmpty() : 큐가 비어있는지 아닌지 알아보는 연산
// size() : 큐에 저장되어 있는 자료의 개수를 알아보는 연산

class Queue {
  constructor() {
    // constructor 메서드는 클래스의 인스턴스 객체를 생성하고 초기화하는 메서드
    this.arr = [];
  }
  enqueue(value) {
    this.arr.push(value);
  }
  dequeue() {
    return this.arr.shift();
    // shift() 메서드는 배열에서 첫 번째 요소를 제거하고
    // 제거된 요소를 반환함

    // let arr = ["a", "b", "c", "d"];

    // console.log("arr before: " + arr);
    // // "제거전 arr 배열: a,b,c,d"

    // let shifted = arr.shift();

    // console.log("arr after: " + arr);
    // // "제거후 myFish 배열: b,c,d"

    // console.log("Removed this element: " + shifted);
    // // "제거된 배열 요소: a"

    // unshift() 메서드는 새로운 요소를 배열의 맨 앞쪽에 추가하고
    // 새로운 길이를 반환함
  }
  size() {
    return this.arr.length;
  }
  peek() {
    return this.arr[0];
    // 스택에서는 top의 요소를 반환, 스택의 마지막 데이터를 return하는 함수
  }
  isEmpty() {
    return this.arr.length === 0;
    // 큐가 비어있는지 아닌지 알아보는 연산
  }
}

const queue = new Queue();
queue.enqueue(1); // [1]           // enqueue로 자료를 넣음
queue.enqueue(2); // [1, 2]
queue.enqueue(3); // [1, 2, 3]

queue.dequeue(); // [2, 3]         // dequeue로 자료를 뺌
queue.size(); // 2

console.log(queue);

// ------------------

// 원형큐

// 연결리스트 큐

// 원형 연결 리스트
