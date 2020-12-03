const input = document.querySelector(".input");
const checkBtn = document.querySelector(".checkBtn");
const logs = document.querySelector(".logs");

let numbers = [];
for (let n = 0; n <= 9; n++) {
  numbers.push(n);
}
let answer = [];

for (let n = 0; n <= 3; n++) {
  const index = Math.floor(Math.random() * numbers.length);
  answer.push(numbers[index]);
  numbers.splice(index, 1);
}
console.log(answer);

let count = 0;
checkBtn.addEventListener("click", () => {
  const value = input.value; // 문자열. ex) "1025"
  if (value && value.length === 4) {
    if (answer.join("") === value) {
      logs.appendChild(document.createTextNode("HOME RUN"));
    } else {
      let strike = 0;
      let ball = 0;
      for (const [aIndex, aNumber] of answer.entries()) {
        for (const [bIndex, bString] of input.value.split("").entries()) {
          if (aNumber === Number(bString)) {
            // 같은 숫자가 있는가?
            if (aIndex === bIndex) {
              // 자리가 같은가?
              strike += 1;
            } else {
              ball += 1;
            }
          }
        }
      }
      const message = document.createTextNode(
        `입력값 : ${input.value} => strike : ${strike} / ball : ${ball}`
      );
      logs.appendChild(message);
      logs.appendChild(document.createElement("br"));
      if (count > 9) {
        logs.appendChild(
          document.createTextNode(
            `GAME OVER : 정답은 [${answer.join("")}] 입니다.`
          )
        );
      } else {
        count++;
      }
    }
  }
});
