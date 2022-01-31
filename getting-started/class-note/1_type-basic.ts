{
  const str = "hello";

  const strTS: string = "hello";
  const number: number = 1;
  const arr: Array<number> = [1, 2, 3];
  const heroes: Array<string> = ["capt", "thor", "hulk"];
  const item: number[] = [1, 2, 3];

  // TS tuple
  const address: [string, number] = ["gangnam", 100]; //순서의 타입까지 정리
  // TS 객체
  const obj: object = {};
  const person: object = {
    name: "capt",
    age: 100,
  };

  const person2: { name: string; age: number } = {
    name: "taehee",
    age: 30,
  };

  //ts진위값
  const show: boolean = true;
  const loading: boolean = false;
}
