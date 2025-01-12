// 문자열을 입력받아도 result 값이 아래와 같이 출력되도록 함수를 완성해 보세요.
// if문과 typeof 키워드를 이용해야 합니다.

function add(a, b) {
  // 이 부분을 완성해 보세요.
  if (typeof a !== "number" && typeof b !== "number") {
    return Number(a) + Number(b);
  } else if (typeof a !== "number") {
    return Number(a) + b;
  } else if (typeof b !== "number") {
    return a + Number(b);
  }
}
const result1 = add(5, "5");
const result2 = add("5", 5);

console.log(result1); // 출력 결과: 10
console.log(result2); // 출력 결과: 10
