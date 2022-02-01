{
  enum Shoes {
    Nike = "나이키", // default = 0
    Adidas = "아디다스", // default = 1
  }

  const myShoes = Shoes.Nike;
  console.log(myShoes);

  //

  enum Answer {
    yse = "yes",
    no = "no",
  }

  const askQuestion = (answer: Answer) => {
    if (answer === Answer.yse) {
      console.log("정답입니다.");
    }
    if (answer === Answer.no) {
      console.log("오답입니다..");
    }
  };

  askQuestion(Answer.yse);
}
