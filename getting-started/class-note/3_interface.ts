{
  interface User {
    name: string;
    age: number;
  }

  const person: User = {
    age: 1,
    name: "seho",
  };

  interface data {
    users: User[];
    id: number;
  }

  const datas: data = {
    users: [person],
    id: 1,
  };

  //함수
  function getUser(user: User) {
    console.log(user);
  }

  const hello = { name: "hello", age: 2 };
  getUser(hello);

  //함수의 스펙에 인터페이스를 활용
  interface SumFunction {
    (a: number, b: number): number;
  }

  const Plus = <SumFunction>(a: number, b: number): number => {
    return a + b;
  };

  // 인덱싱
  interface StringArray {
    [key: number]: string;
  }

  const array: StringArray = ["a", "b", "c"];
  array[0] = "10";

  // 딕셔너리 패턴

  interface StringRegexDictionary {
    [key: string]: RegExp;
  }

  const obj: StringRegexDictionary = {
    "3": /abc/,
    st: /\.css$/,
  };

  //인터페이스 확장
  interface Person {
    name: string;
    age: number;
  }

  interface Developer extends Person {
    language: string;
  }

  const cpat: Developer = {
    language: "korea",
    name: "hello",
    age: 1,
  };
}
