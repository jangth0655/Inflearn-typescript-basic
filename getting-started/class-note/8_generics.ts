{
  // 불필요하게 함수 등 중복선언, 유온타입의 단점 때문에
  // 타입을 비워놓고 호출하는 시점에 타입을 정의

  function logText<T>(text: T): T {
    console.log(text);
    return text;
  }

  const str = logText<string>("ABC");
  str.split(" ");
  const login = logText<boolean>(true);

  // 인터페이스에 제네릭 선언하는 방법
  interface dropdown {
    value: string;
    selected: boolean;
  }

  interface Dropdown<T> {
    value: T;
    selected: boolean;
  }
  const obj: Dropdown<string> = { value: "abc", selected: false };

  // 제네릭의 타입제한(옵션)
  /*  function logTextLength<T>(text: T[]): T[] {
    console.log(text.length); //배열의 특정 속성도 접근할 수 있다.
    return text; 
  } 

  logTextLength<string>(["hi", "abc"]);
  */

  // 제네릭 타입 제한 - 정의된 타입제한
  interface LengthType {
    length: number;
  }

  function logTextLength<T extends LengthType>(text: T): T {
    text.length;
    return text;
  }

  logTextLength("A");

  //제네릭 타입 제한 - keyof
  interface ShoppingItem {
    name: string;
    price: number;
    stock: number;
  }

  function getShoppingItemOption<T extends keyof ShoppingItem>(
    itemOption: T
  ): T {
    return itemOption;
  }
  getShoppingItemOption("price");
}
