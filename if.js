// 조건문: 특정 조건에 따라 다르게 실행하는 구문
const score = 99;

if (score >= 60) {
// 조건식이 ture인 경우 실행될 로직
console.log("✅합격")
} else {
// 조건식이 false인 경우 실행될 로직
console.log("❌불합격")
}

// 삼항 연산자
//score >= 60 ? console.log("^합격") : console.log("^불합격")
console.log(score >= 60 ? "^^합격" : "^^불합격")

let grade; // 등급 변수 선언

if (score >= 90) {
  // 90점 이상인 경우
  grade = "A"
} else if (score >= 80) {
  // 80점 이상인 경우
  grade = "B"
} else if (score >= 70) {
  // 70점 이상인 경우
  grade = "C"
} else {
  // 70점 미만인 경우
  grade = "F"
};

console.log("🚀 ~ Grade:", grade)

const Number = 5;
const result = (Number > 0) ? 1 : 0; // num이 0보다 크므로 result에 1이 저장됩니다.
console.log(result)

console.log("END!!")

const userInput = "";
if (!userInput) {
  // 사용자가 입력한 값이 없는 경우
  console.log("값이 비었습니다. 입력해주세요!")
}
