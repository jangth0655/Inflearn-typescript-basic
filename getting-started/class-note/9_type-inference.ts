// 타입추론 기본
let a = 10;

function getB(b = 10) {
  let c = "hi";
  return b + c;
}

// 타입추론 기본1
/* interface Dropdown<T> {
  value: T;
  title: string;
}
const shoppingItem: Dropdown<string> = {
  value: "value",
  title: "title",
};
 */

// 타입추론 기본 2
interface Dropdown<T> {
  value: T;
  title: string;
}

interface DetailedDropdown<T> extends Dropdown<T> {
  description: string;
  tag: T;
}

const detailedItem: DetailedDropdown<number> = {
  value: 1,
  title: "abc",
  description: "ab",
  tag: 12,
};

// Best Common Typ
const arr = [1, 2, 3, true];
