// 배열: 순서를 가진 데이터드의 집합
const daysOfWeek = ["月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日", "日曜日"]
console.log("🚀 ~ daysOfWeek:", daysOfWeek)

const today = daysOfWeek[0]
console.log("🚀 ~ today:", today)

const randomIndex = Math.floor(Math.random() * 7);
console.log("🚀 ~ randomIndex:", randomIndex);

// 미션: 내가 제일 좋아하는 요일 뽑아와서 콘솔에 찍기
const favoriteDay = daysOfWeek[randomIndex] 
console.log("🚀 ~ favoriteDay:", favoriteDay)

// 객체: key-value로 이루어진 속성들의 묶음
const student = {
  name: "이윤정",
  mbti: "ENTJ",
  isMale: false,
  useai: ["Chat GPT", "Gemini"]
};
console.log("🚀 ~ student:", student)

const studentName = student["name"]
console.log("🚀 ~ studentName:", studentName)

const studentAI = student.useai
console.log("🚀 ~ studentAI:", typeof studentAI)

const studentMbti = student.mbti
console.log("🚀 ~ studentMbti:", studentMbti)

const studentGender = student.isMale
if (studentGender == true) {
console.log(`${studentName}님은 남자입니다.`)
} else {
  console.log(`${studentName}님은 여자입니다.`)
};



