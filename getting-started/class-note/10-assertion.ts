{
  // 타입 단언 assertion
  let a;
  a = 20;
  a = "a";
  a as string;
  // DOM API 조작
  `
    <div>hi</div>
  `;

  const div = document.querySelector("div");
  div && div.innerText;
}
