// 논리연산자 - Logical operators

/**
 * 관리자 페이지 접근 조건
 * 1. 로그인된 상태일 것
 * 2. role이 admin일 것
 */

const user = {
  isLoggedin: true, // 로그인 여부
  role: "user" // ["user", "guuest", "admin"]

}

// 관리자 페이지 접근 체크
if (user.isLoggedin && user.role === "admin") {
  console.log("✅관리자 페이지에 접근할 수 있습니다.");
  // 관리자 페이지 접근 가능
} else {
  console.log("❌ 관리자 페이지에 접근할 수 없습니다.");
  // 관리자 페이지 접근 불가
};

// 회원만 접근 가능한 페이지 체크
/**
 * 조건1: 로그인된 상태일 것
 * 조건2: role이 admin일 것
 * 조건3: 둘 중 하나라도 만족하면 접근 가능
 */

if (user.isLoggedin || user.role === "admin") {
  console.log("✅ 회원 전용 페이지에 접근할 수 있습니다.");
  // 회원 전용 페이지 접근 가능
} else {
  console.log("❌ 회원 전용 페이지에 접근할 수 없습니다.");
  // 회원 전용 페이지 접근 불가
}

// 비회원 접근 가능한 페이지 체크
/**
 * 조건1: 로그인된 상태가 아닐 것
 * 조건2: role이 guest일 것
 * 조건3: 둘 다 만족해야 접근 가능
 */

if (!user.isLoggedin && user.role === "guest") {
  console.log("✅ 비회원 전용 페이지에 접근할 수 있습니다.");
  // 비회원 전용 페이지 접근 가능
} else {
  console.log("❌ 비회원 전용 페이지에 접근할 수 없습니다.");
  // 비회원 전용 페이지 접근 불가
}

if (!user.isLoggedin) {
  // 로그인 되지 않은 상태인 경우
}

// 응용
const userage = 33;
const isLoggedin = false;

// if (userage >= 18) {
// console.log("성인입니다.")
// } else {
//   console.log("미성년자입니다.")
// }

const message = userage >= 18 ? "성인입니다" : "미성년자 입니다."
console.log("🚀 ~ message:", message)

const message2 = isLoggedin ? "환영합니다." : "환영하지 않습니다."
console.log("🚀 ~ message2:", message2)

// Spread Syntax
const resceneMembers = ["워니", "리브", "미나리", "메이", "제나"]
console.log("🚀 ~ resceneMembers:", resceneMembers)

const copyMembers = ["박보영", ...resceneMembers]
console.log("🚀 ~ copyMembers:", copyMembers)

const copyUser = {
  ...user,
  age:33, // 추가
  isLoggedin: false //수정
}
console.log("🚀 ~ user:", user)
console.log("🚀 ~ copyUser:", copyUser)


