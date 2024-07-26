
//해당 문제를 forEach로 변경하여 풀어주세요
// 1.
let arr1 = [10, 20, 30]
// 해당 로직을 작성하세요  
let result1 = [];
arr1.forEach(x => {
  result1.push(x * 10);
});

console.log(result1);

// 결과 값: [100, 200, 300] 출력해주세요 

// 2.
let arr2 = [10, 22, 33]
// 5의 배수를 찾아 반환하세요
// 해당 로직 작성해주세요
let result2 = [];
arr2.forEach(x => {
  if (x % 5 === 0) {
    result2.push(x)
  }
})
// 결과값 [10]
console.log(result2);