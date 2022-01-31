//반환값 타입, 옵셔널 타입
function sum(a: number, b: number, c?: number): number {
  return a + b + c;
}

sum(1, 2);

//2 반환값에 타입을 정의
function add(): number {
  return 10;
}
