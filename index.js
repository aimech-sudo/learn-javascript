console.log("Hello js")

// 변수: 값을 저장하는 이름을 가진 공간
//const username = "후르츠링";
let username = "후르츠링"
console.log("username", username)

username = "강성훈";
studentname = "강성훈";

console.log("username", username)

// 데이터 타입
const num = 10; // 숫자
console.log("🚀 ~ num:", num, "num type", typeof num)

const text = "안녕하세요" // 문자열
console.log("🚀 ~ text type:", typeof text)

const isDarkMode = true; // boolean
console.log("🚀 ~ isDarkMode, type:", typeof isDarkMode)

const empty = null;
console.log("🚀 ~ empty:", empty)

// 변수 선언만
let userage;
console.log("🚀 ~ userage:", userage)


/**
 * 함수: 특정 기능을 수행하도록 만든 코드 조각 
 */
// 함수를 정의한다, 선언한다.
// function greeting() {
//   //실행할 로직을 중괄호 안에 작성
//   console.log(`${username}님, 반갑습니다!`)
//   //console.log(username + "님, 반갑습니다!")
// }

// 화살표 함수 변환
const greeting = (studentname, usermbti) => {
//실행할 로직을 중괄호 안에 작성
  console.log(`${studentname}님, 반갑습니다!`)
  console.log(`MBTI는 ${usermbti}이시군요!`)
};

// 함수를 실행한다, 호출한다
greeting()
greeting("강성훈", "ISTJ")


// 미션: "프론트엔드부터 만드는 AI챗봇 수강생 ???입니다." 문자열이 콘솔에 찍히는 화살표 함수 만들고 실행하기
const introduce = () => {
  console.log(`프로트엔드부터 만드는 AI챗봇 수강생 ${username}입니다. `)
};

introduce()

// 결과값 반환
const add = (num1, num2) => {
return num1 + num2
};

const doubleSum = (num) => {
  console.log(num)
  console.log("hello~~")
  return num * 2
};

const sum = add(10, 20)
console.log("🚀 ~ sum:",sum)

console.log("doubleSum", doubleSum(sum))
